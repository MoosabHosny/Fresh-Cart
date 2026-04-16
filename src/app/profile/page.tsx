import PageBanner from "@/components/PageBanner/PageBanner";
import { User } from "lucide-react";
import ProfilePage from "./ProfilePage";

export default function page() {
    return (
      <>
        <PageBanner
          title="My Account"
          description={`Manage your addresses and account settings`}
          breadcrumb="My Account"
          icon={<User  className="fill-current w-8 h-8" />}
        />
        <ProfilePage/>
      </>
    )
}
