import MyAddresses from "./MyAddresses";
import ProfileLayout from "./ProfileLayout";
import Settings from "./Settings";

export default function ProfilePage() {
  return (
    <ProfileLayout
      addresses={<MyAddresses />}
      settings={<Settings />}
    />
  );
}