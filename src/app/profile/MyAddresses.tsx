import AddressPage from "@/components/AddressPage/AddressPage";
import { Building2, MapPin, Pencil, Phone, Plus, Trash2 } from "lucide-react";
import { GetLoggedUserAddresses, RemoveAddress } from "./profile.action";
import AppButton from "@/Shared/AppButton/AppButton";
import DeleteAddressButton from "./DeleteAddressButton";

export default async function MyAddresses() {
  const addresses = await GetLoggedUserAddresses();

  // console.log("GetLoggedUserAddresses== ", addresses);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold text-[20px]">My Addresses</h2>
          <p className="text-[15px]">Manage your saved delivery addresses</p>
        </div>

        <AddressPage className="bg-green-600 text-white flex gap-1 p-2 rounded-[10px] font-medium hover:bg-green-700">
          <Plus size={23} />
          Add Address
        </AddressPage>
      </div>

      {addresses?.data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {addresses.data.map((address: any) => (
            // <div
            //   key={address._id}
            //   className="max-w-md mx-auto p-4 border border-green-100 rounded-2xl flex items-start justify-between shadow-sm bg-white"
            // >
            //   <div className="flex gap-4">
            //     <div className="bg-green-100 p-3 rounded-xl flex items-center justify-center">
            //       <MapPin className="text-green-600" />
            //     </div>

            //     <div className="space-y-2">
            //       <h3 className="text-gray-700 font-semibold text-lg">
            //         {address.name}
            //       </h3>

            //       <div className="text-gray-500 text-sm">
            //         {address.phone}
            //       </div>

            //       <div className="text-gray-500 text-sm">
            //         {address.city} - {address.details}
            //       </div>
            //     </div>
            //   </div>

            //   <div className="flex gap-2">
            //     <AppButton className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition">
            //       Edit
            //     </AppButton>
            //     <AppButton className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition">
            //       Delete
            //     </AppButton>
            //   </div>
            // </div>
            <div
              key={address._id}
              
              className="w-full p-5 border border-[#e2f9ee] rounded-[25px] flex items-start justify-between bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-4"
            >
              <div className="flex gap-5">
                <div className="bg-[#e8fcf2] w-15 h-15 rounded-[18px] flex items-center justify-center shrink-0">
                  <MapPin
                    size={24}
                    className="text-[#0aad0a]"
                    fill="#0aad0a"
                    fillOpacity={0.1}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[18px] leading-none">
                    {address.name}
                  </h3>

                  <div className="text-[15px]">
                    <span>{address.details}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#707a8a] text-[15px]">
                    <Phone size={16} className="text-[#4f5d75]" />
                    <span>{address.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#707a8a] text-[15px]">
                    <Building2 size={16} className="text-[#4f5d75]" />
                    <span>{address.city}</span>
                  </div>
                </div>
              </div>

              {/* أزرار التحكم (تعديل وحذف) */}
              <div className="flex gap-2">
                <AppButton className="p-2.5 bg-gray-300 hover:bg-green-200 rounded-[12px] hover:text-green-500  transition-all group">
                  <Pencil size={18} fill="var(--color-gray-600)" className="group-hover:fill-green-500 transition-colors" />
                </AppButton>
                <DeleteAddressButton id={address._id} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* لو مفيش عناوين */
        <div className="flex justify-center items-center h-[50vh] bg-gray-50 mt-6">
          <div className="w-[45%] flex flex-col gap-2.5 justify-center items-center">
            <div className="bg-gray-200 w-15 h-15 flex justify-center items-center rounded-full">
              <MapPin size={30} color="var(--color-gray-500)" />
            </div>

            <div className="text-center">
              <h2 className="font-semibold text-[20px]">No Addresses Yet</h2>
              <p>
                Add your first delivery address to make checkout faster and
                easier.
              </p>
            </div>

            <AddressPage className="bg-green-600 text-white flex gap-1 p-3 rounded-[10px] font-medium hover:bg-green-700">
              <Plus size={23} />
              Add Your First Address
            </AddressPage>
          </div>
        </div>
      )}
    </div>
  );
}
