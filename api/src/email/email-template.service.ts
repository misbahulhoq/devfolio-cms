import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

export interface ConfirmationEmailData {
  userName: string;
  confirmationLink: string;
  expiryHours: number | string;
  currentYear?: number | string;
}

export interface ForgotPasswordEmailData {
  userName: string;
  confirmationLink: string;
  expiryMinutes: number | string;
  currentYear?: number | string;
}

type TemplateName = 'emailConfirmation' | 'forgotPassword';

@Injectable()
export class EmailTemplateService implements OnModuleInit {
  private readonly logger = new Logger(EmailTemplateService.name);

  private readonly templatePaths: Record<TemplateName, string> = {
    emailConfirmation: join(
      __dirname,
      '../..',
      'templates',
      'email-confirmation-template.html',
    ),
    forgotPassword: join(
      __dirname,
      '../..',
      'templates',
      'forgot-password-template.html',
    ),
  };

  private readonly cache = new Map<TemplateName, string>();

  // Pre-load everything in parallel at boot, so a cold start pays for
  // one round of disk I/O instead of N sequential ones.
  async onModuleInit() {
    await Promise.all(
      (Object.keys(this.templatePaths) as TemplateName[]).map((name) =>
        this.loadTemplate(name).catch((err) => {
          this.logger.error(
            `Failed to load template "${name}" at ${this.templatePaths[name]}`,
            err instanceof Error ? err.stack : undefined,
          );
        }),
      ),
    );
  }

  private async loadTemplate(name: TemplateName): Promise<string> {
    const cached = this.cache.get(name);
    if (cached) return cached;

    const content = await readFile(this.templatePaths[name], 'utf-8');
    this.cache.set(name, content);
    return content;
  }

  private render(template: string, values: Record<string, string>): string {
    return template.replace(/{{\s*(\w+)\s*}}/g, (match, key: string) =>
      Object.prototype.hasOwnProperty.call(values, key) ? values[key] : match,
    );
  }

  async renderConfirmationEmail(data: ConfirmationEmailData): Promise<string> {
    const template = await this.loadTemplate('emailConfirmation');
    return this.render(template, {
      userName: data.userName,
      confirmationLink: data.confirmationLink,
      expiryHours: String(data.expiryHours),
      currentYear: String(data.currentYear ?? new Date().getFullYear()),
    });
  }

  async renderForgotPasswordEmail(
    data: ForgotPasswordEmailData,
  ): Promise<string> {
    const template = await this.loadTemplate('forgotPassword');
    return this.render(template, {
      userName: data.userName,
      confirmationLink: data.confirmationLink,
      expiryMinutes: String(data.expiryMinutes),
      currentYear: String(data.currentYear ?? new Date().getFullYear()),
    });
  }
}
