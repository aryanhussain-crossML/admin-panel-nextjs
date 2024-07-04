import ManageUsers from "@/components/manage-users";
import { Suspense } from "react";
import ManageLoader from "./loading";

export default function Page() {
  return (
    <Suspense fallback={<ManageLoader />}>
      <ManageUsers />
    </Suspense>
  );
}
