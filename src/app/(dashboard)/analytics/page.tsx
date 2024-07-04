"use client";
import { Analytics } from "@/components/analytics";
import { Suspense } from "react";
import AnalyticsLoader from "./loading";

export default function Page() {
  return (
    <Suspense fallback={<AnalyticsLoader />}>
      <Analytics />
    </Suspense>
  );
}
