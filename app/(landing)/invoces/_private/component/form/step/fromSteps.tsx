"use client";
import StepButton from "@/app/component/ui/stepButton";
import { useGetValue } from "@/app/hooks/useGetValue";
import { getInitialValue } from "@/lib/getInitialValue";
import { useInvoiceGeneratorTranslations } from "@/app/(landing)/invoces/_private/context/i18n/InvoiceGeneratorTranslationContext";

export const FormSteps = () => {
  const text = useInvoiceGeneratorTranslations();
  const stepValue = useGetValue("step", getInitialValue("step", "1"));
  const stepValueDetails = getStepsDetails(stepValue, text);

  return (
    <div className="flex gap-9 justify-between">
      {stepValueDetails.previous ? (
        <StepButton
          step={stepValueDetails.previous.step}
          title={stepValueDetails.previous.title}
          isPrevious
        />
      ) : (
        <div className="flex-1" />
      )}
      {stepValueDetails.nextStep ? (
        <StepButton
          step={stepValueDetails.nextStep.step}
          title={stepValueDetails.nextStep.title}
        />
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};

const getStepsDetails = (step: string, text: ReturnType<typeof useInvoiceGeneratorTranslations>) => {
  const step1 = {
    previous: null,
    nextStep: {
      title: text.navigation.companyDetails,
      step: "2",
    },
  };

  const step2 = {
    previous: {
      title: text.navigation.yourDetails,
      step: "1",
    },
    nextStep: {
      title: text.navigation.invoiceDetails,
      step: "3",
    },
  };
  const step3 = {
    previous: {
      title: text.navigation.yourDetails,
      step: "2",
    },
    nextStep: {
      title: text.navigation.paymentDetails,
      step: "4",
    },
  };
  const step4 = {
    previous: {
      title: text.navigation.invoiceDetails,
      step: "3",
    },
    nextStep: {
      title: text.navigation.invoiceTerms,
      step: "5",
    },
  };

  const step5 = {
    previous: {
      title: text.navigation.paymentDetails,
      step: "4",
    },
    nextStep: {
      title: text.navigation.reviewDownload,
      step: "6",
    },
  };

  const step6 = {
    previous: {
      title: text.navigation.invoiceTerms,
      step: "5",
    },
    nextStep: null,
  };

  if (step === "1") {
    return step1;
  }
  if (step === "2") {
    return step2;
  }
  if (step === "3") {
    return step3;
  }
  if (step === "4") {
    return step4;
  }
  if (step === "5") {
    return step5;
  }
  if (step === "6") {
    return step6;
  }
  return step1;
};
