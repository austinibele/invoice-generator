'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { InvoiceGeneratorText } from './InvoiceGeneratorText';
import type { InvoiceGeneratorLocale } from './locales';

interface InvoiceGeneratorI18nContext {
  locale: InvoiceGeneratorLocale;
  text: InvoiceGeneratorText;
}

const InvoiceGeneratorI18nContext =
  createContext<InvoiceGeneratorI18nContext | null>(null);

export function InvoiceGeneratorTranslationProvider(props: {
  locale: InvoiceGeneratorLocale;
  text: InvoiceGeneratorText;
  children: ReactNode;
}) {
  const { locale, text, children } = props;

  return (
    <InvoiceGeneratorI18nContext.Provider value={{ locale, text }}>
      {children}
    </InvoiceGeneratorI18nContext.Provider>
  );
}

export function useInvoiceGeneratorTranslations(): InvoiceGeneratorText {
  const ctx = useContext(InvoiceGeneratorI18nContext);

  if (!ctx) {
    throw new Error('Missing InvoiceGeneratorTranslationProvider');
  }

  return ctx.text;
}
