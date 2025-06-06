import { CompanyCards, CompanyHeader } from "@/modules/Company/components";

export default function CompanyPage() {
  return (
    <div className="flex flex-col gap-4 xl:gap-[30px]">
      <CompanyHeader />
      <CompanyCards />
    </div>
  );
}
