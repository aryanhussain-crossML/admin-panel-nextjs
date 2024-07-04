import { UserRole } from "@/components/user-role";
import { Suspense } from "react";
import UserLoader from "./loading";

export default function Page() {
  return (
    <Suspense fallback={<UserLoader />}>
      <UserRole />
    </Suspense>
  );
}
