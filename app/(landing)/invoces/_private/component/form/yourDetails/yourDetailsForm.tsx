"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";
import { useInvoiceGeneratorTranslations } from "@/app/(landing)/invoces/_private/context/i18n/InvoiceGeneratorTranslationContext";

export const YourDetailsForm = () => {
  const text = useInvoiceGeneratorTranslations();
  
  return (
    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3">{text.forms.yourDetails.title}</p>
      <CustomTextInput
        label={text.forms.yourDetails.email}
        placeholder={text.forms.yourDetails.emailPlaceholder}
        variableName="yourEmail"
      />
      <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
        {text.forms.yourDetails.autoFillMessage}
      </p>
      <p className="pb-2 text-sm font-medium text-neutral-500">{text.forms.yourDetails.billingDetails}</p>
      <CustomTextInput
        label={text.forms.yourDetails.yourName}
        placeholder={text.forms.yourDetails.yourNamePlaceholder}
        variableName="yourName"
      />
      <ImageInput label={text.forms.yourDetails.logo} variableName="yourLogo" />
      <CustomTextInput
        label={text.forms.yourDetails.address}
        placeholder={text.forms.yourDetails.addressPlaceholder}
        variableName="yourAddress"
      />
      <CustomTextInput
        label={text.forms.yourDetails.city}
        placeholder={text.forms.yourDetails.cityPlaceholder}
        variableName="yourCity"
      />
      <CustomTextInput
        label={text.forms.yourDetails.state}
        placeholder={text.forms.yourDetails.statePlaceholder}
        variableName="yourState"
      />
      <CustomNumberInput
        label={text.forms.yourDetails.zip}
        placeholder={text.forms.yourDetails.zipPlaceholder}
        variableName="yourZip"
      />
      <CustomTextInput
        label={text.forms.yourDetails.country}
        placeholder={text.forms.yourDetails.countryPlaceholder}
        variableName="yourCountry"
      />
      <CustomTextInput
        label={text.forms.yourDetails.taxId}
        placeholder={text.forms.yourDetails.taxIdPlaceholder}
        variableName="yourTaxId"
      />
    </div>
  );
};
