import { NewInvoiceForm } from "@/app/(landing)/invoces/_private/new/component/NewInvoiceForm";
import { Suspense } from "react";

const Page = () => (
  <div className="min-h-screen overflow-y-auto h-full flex items-center md:flex-row flex-col-reverse">
    <Suspense>
      <NewInvoiceForm />
    </Suspense>
  </div>
);

export default Page;
