"use client";

import { useState } from "react";
import { DeleteCartItem, DeleteAllCart } from "@/app/cart/Cart.action"; // استيراد أكشن المسح الشامل
import AppButton from "@/Shared/AppButton/AppButton";
import { useCart } from "@/Shared/context/CartContext";
import { Trash2 } from "lucide-react";

interface DeleteProps {
  id?: string;
  productName?: string;
  isAll?: boolean;
}

export default function DeleteItemButton({
  id,
  productName,
  isAll = false,
}: DeleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { refreshCart } = useCart();

  async function handleDelete() {
    setIsLoading(true);

    if (isAll) {
      await DeleteAllCart();
    } else if (id) {
      await DeleteCartItem(id);
    }

    await refreshCart();
    setIsOpen(false);
    setIsLoading(false);
  }

  const title = isAll ? "Clear Shopping Cart?" : "Remove Item?";
  const message = isAll
    ? "Are you sure you want to remove all items from your cart?"
    : `Remove ${productName} from your cart?`;

  return (
    <>
      <div>
        <AppButton
          onClick={() => setIsOpen(true)}
          size={isAll ? "default" : "icon"}
          variant="destructive"
          className={`bg-red-400/30 p-3 rounded-[15px] border border-red-500/30 flex  text-red-500 ${isAll ? "w-full md:w-auto" : ""}`}
        >
          <Trash2
            size={20}
            color="var(--color-red-500)"
            className={isAll ? "mr-2" : ""}
          />
          {isAll && "Clear all items"}
        </AppButton>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in duration-200">
            <div className="bg-red-100 text-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={32} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 mb-6 text-sm">{message}</p>

            <div className="flex gap-3">
              <AppButton
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
              >
                Cancel
              </AppButton>

              <AppButton
                onClick={handleDelete}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
              >
                {isLoading ? "Processing..." : isAll ? "Clear All" : "Remove"}
              </AppButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
