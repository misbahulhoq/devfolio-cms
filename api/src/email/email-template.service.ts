import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

export interface ConfirmationEmailData {
  userName: string;
  confirmationLink: string;
  expiryHours: number | string;
  companyAddress: string;
  currentYear?: number | string;
}

@Injectable()
export class EmailTemplateService implements OnModuleInit {
  private readonly logger = new Logger(EmailTemplateService.name);

  private readonly templatePath = join(
    __dirname,
    '../..',
    'templates',
    'email-confirmation-template.html',
  );

  private cachedTemplate: string | null = null;

  // Pre-load the template once when the module boots, so the first
  // real request isn't slowed down by a disk read.
  async onModuleInit() {
    try {
      this.cachedTemplate = await readFile(this.templatePath, 'utf-8');
    } catch (err) {
      this.logger.error(
        `Failed to load email template at ${this.templatePath}`,
        err instanceof Error ? err.stack : undefined,
      );
    }
  }

  private async loadTemplate(): Promise<string> {
    if (this.cachedTemplate) return this.cachedTemplate;
    this.cachedTemplate = await readFile(this.templatePath, 'utf-8');
    return this.cachedTemplate;
  }

  async renderConfirmationEmail(data: ConfirmationEmailData): Promise<string> {
    const template = await this.loadTemplate();

    const values: Record<string, string> = {
      userName: data.userName,
      confirmationLink: data.confirmationLink,
      expiryHours: String(data.expiryHours),
      companyAddress: data.companyAddress,
      currentYear: String(data.currentYear ?? new Date().getFullYear()),
    };

    return template.replace(/{{\s*(\w+)\s*}}/g, (match, key: string) => {
      return Object.prototype.hasOwnProperty.call(values, key)
        ? values[key]
        : match;
    });
  }
}
