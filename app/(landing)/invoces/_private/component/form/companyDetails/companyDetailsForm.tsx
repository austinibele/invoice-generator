"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";
import { useInvoiceGeneratorTranslations } from "@/app/(landing)/invoces/_private/context/i18n/InvoiceGeneratorTranslationContext";

export const CompanyDetailsForm = () => {
  const text = useInvoiceGeneratorTranslations();
  
  return (
    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3">{text.forms.companyDetails.title}</p>
      <CustomTextInput
        label={text.forms.companyDetails.email}
        placeholder={text.forms.companyDetails.emailPlaceholder}
        variableName="email"
      />
      <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
        {text.forms.companyDetails.autoFillMessage}
      </p>
      <p className="pb-2 text-sm font-medium text-neutral-500">{text.forms.companyDetails.billingDetails}</p>
      <CustomTextInput
        label={text.forms.companyDetails.companyName}
        placeholder={text.forms.companyDetails.companyNamePlaceholder}
        variableName="companyName"
      />
      <ImageInput label={text.forms.companyDetails.logo} variableName="companyLogo" />
      <CustomTextInput
        label={text.forms.companyDetails.address}
        placeholder={text.forms.companyDetails.addressPlaceholder}
        variableName="companyAddress"
      />
      <CustomTextInput
        label={text.forms.companyDetails.city}
        placeholder={text.forms.companyDetails.cityPlaceholder}
        variableName="companyCity"
      />
      <CustomTextInput
        label={text.forms.companyDetails.state}
        placeholder={text.forms.companyDetails.statePlaceholder}
        variableName="companyState"
      />
      <CustomNumberInput
        label={text.forms.companyDetails.zip}
        placeholder={text.forms.companyDetails.zipPlaceholder}
        variableName="companyZip"
      />
      <CustomTextInput
        label={text.forms.companyDetails.country}
        placeholder={text.forms.companyDetails.countryPlaceholder}
        variableName="companyCountry"
      />
      <CustomTextInput
        label={text.forms.companyDetails.taxId}
        placeholder={text.forms.companyDetails.taxIdPlaceholder}
        variableName="companyTaxId"
      />
    </div>
  );
};
