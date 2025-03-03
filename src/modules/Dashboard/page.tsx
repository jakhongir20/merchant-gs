import {
  DashboardCards,
  DashboardPeriodFilters,
} from "@/modules/Dashboard/components";
import { BarChart, LineChart } from "@/modules/Dashboard/components/chart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 xl:gap-6">
      <DashboardPeriodFilters />
      <DashboardCards />
      <LineChart />
      <BarChart />
    </div>
  );
}
