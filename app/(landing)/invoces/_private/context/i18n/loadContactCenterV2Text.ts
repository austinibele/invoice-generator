import type { InvoiceGeneratorText } from './InvoiceGeneratorText';
import type { InvoiceGeneratorLocale } from './locales';

const loaders: Record<
  InvoiceGeneratorLocale,
  () => Promise<InvoiceGeneratorText>
> = {
  en: () => import('./text/en').then((module) => module.default),
};

const DEFAULT_LOCALE: InvoiceGeneratorLocale = 'en';

export async function loadInvoiceGeneratorText(
  locale: InvoiceGeneratorLocale
): Promise<InvoiceGeneratorText> {
  const loader = loaders[locale] ?? loaders[DEFAULT_LOCALE];
  return loader();
}
