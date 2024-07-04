import { Reports } from "@/components/reports";
import { Suspense } from "react";
import ReportLoader from "./loading";

export default function Page() {
  return (
    <Suspense fallback={<ReportLoader />}>
      <Reports />;
    </Suspense>
  );
}
