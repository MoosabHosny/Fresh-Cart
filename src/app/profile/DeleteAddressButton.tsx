"use client";

import { Trash2 } from "lucide-react";
import AppButton from "@/Shared/AppButton/AppButton";
import { RemoveAddress } from "./profile.action";
import { useRouter } from "next/navigation"; 

export default function DeleteAddressButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this address?");
    if (confirmDelete) {
        await RemoveAddress(id);
        router.refresh();
    }
  };

  return (
    <AppButton
      onClick={handleDelete}
      className="p-2.5 bg-gray-300 hover:bg-red-200 rounded-[12px] hover:text-red-500 transition-all group"
    >
      <Trash2 
        size={18} 
        fill="var(--color-gray-600)" 
        className="group-hover:fill-red-500 transition-colors"
      />
    </AppButton>
  );
}