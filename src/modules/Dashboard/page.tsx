import { HeaderPeriodFilters } from "@/modules/Dashboard/components";
import { DashboardCards } from "@/modules/Dashboard/components/DashboardCards";

export default function DashboardPage() {
  return (
    <div>
      <HeaderPeriodFilters />
      <DashboardCards />
    </div>
  );
}
