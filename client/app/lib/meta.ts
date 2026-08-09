// app/lib/meta.ts
export const SITE_NAME = "Devfolio CMS";

export function makeTitle(title?: string) {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME;
}
