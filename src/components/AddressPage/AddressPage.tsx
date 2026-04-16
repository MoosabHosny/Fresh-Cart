"use client";

import AppButton from "@/Shared/AppButton/AppButton";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { AddAddress } from "@/app/profile/profile.action";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function AddressPage({
  children,
  ...prop
}: React.ComponentProps<typeof Button>) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // React Hook Form
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      addressName: "",
      fullAddress: "",
      phone: "",
      city: "",
    },
  });

  // submit
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      const res = await AddAddress(data);

      if (res?.status === "success") {
        reset();
        setIsOpen(false);
        router.refresh();
      } else {
        alert(res?.message || "Failed to add address");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-10">
        <AppButton onClick={() => setIsOpen(true)} {...prop}>
          {children}
        </AppButton>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
              {/* زرار القفل */}
              <AppButton
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black"
              >
                <X />
              </AppButton>

              <h2 className="text-xl font-bold mb-4">Add New Address</h2>

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Address Name */}
                <div>
                  <label className="block text-sm font-medium">
                    Address Name
                  </label>

                  <Controller
                    name="addressName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="e.g. Home, Office"
                        className="w-full border p-2 rounded-md mt-1"
                      />
                    )}
                  />
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-sm font-medium">
                    Full Address
                  </label>

                  <Controller
                    name="fullAddress"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        placeholder="Street, building, apartment..."
                        className="w-full border p-2 rounded-md mt-1"
                        rows={3}
                      />
                    )}
                  />
                </div>

                {/* Phone + City */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium">
                      Phone Number
                    </label>

                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="01xxxxxxxxx"
                          className="w-full border p-2 rounded-md mt-1"
                        />
                      )}
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium">City</label>

                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="Cairo"
                          className="w-full border p-2 rounded-md mt-1"
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <AppButton
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-gray-100 py-2 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </AppButton>

                  <AppButton
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                  >
                    {loading ? "Adding..." : "Add Address"}
                  </AppButton>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
