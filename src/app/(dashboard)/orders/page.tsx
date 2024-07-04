"use client";
import { Orders } from "@/components/orders";
import { Suspense } from "react";
import ReportLoader from "../reports/loading";

export default function Page() {
  return (
    <Suspense fallback={<ReportLoader />}>
      <Orders />
    </Suspense>
  );
}
