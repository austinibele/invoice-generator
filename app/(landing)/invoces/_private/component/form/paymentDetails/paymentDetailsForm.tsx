"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import { useInvoiceGeneratorTranslations } from "@/app/(landing)/invoces/_private/context/i18n/InvoiceGeneratorTranslationContext";

export const PaymentDetailsForm = () => {
  const text = useInvoiceGeneratorTranslations();
  
  return (
    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3">{text.forms.paymentDetails.title}</p>
      <CustomTextInput
        label={text.forms.paymentDetails.bankName}
        placeholder={text.forms.paymentDetails.bankNamePlaceholder}
        variableName="bankName"
      />
      <CustomTextInput
        label={text.forms.paymentDetails.accountNumber}
        placeholder={text.forms.paymentDetails.accountNumberPlaceholder}
        variableName="accountNumber"
      />
      <CustomTextInput
        label={text.forms.paymentDetails.accountName}
        placeholder={text.forms.paymentDetails.accountNamePlaceholder}
        variableName="accountName"
      />
      <CustomTextInput
        label={text.forms.paymentDetails.ifscCode}
        placeholder={text.forms.paymentDetails.ifscCodePlaceholder}
        variableName="ifscCode"
      />
      <CustomTextInput
        label={text.forms.paymentDetails.routingNumber}
        placeholder={text.forms.paymentDetails.routingNumberPlaceholder}
        variableName="routingCode"
      />
      <CustomNumberInput
        label={text.forms.paymentDetails.swiftCode}
        placeholder={text.forms.paymentDetails.swiftCodePlaceholder}
        variableName="swiftCode"
      />
    </div>
  );
};
