"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import DateInput from "@/app/component/ui/dateInput";
import { useInvoiceGeneratorTranslations } from "@/app/(landing)/invoces/_private/context/i18n/InvoiceGeneratorTranslationContext";

export const InvoiceTermsForm = () => {
  const text = useInvoiceGeneratorTranslations();
  
  return (
    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3">{text.forms.invoiceTerms.title}</p>
      <CustomTextInput
        label={text.forms.invoiceTerms.invoiceNumber}
        placeholder={text.forms.invoiceTerms.invoiceNumberPlaceholder}
        variableName="invoiceNo"
      />
      <DateInput label={text.forms.invoiceTerms.issueDate} variableName="issueDate" />
      <DateInput label={text.forms.invoiceTerms.dueDate} variableName="dueDate" />
    </div>
  );
};
