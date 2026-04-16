"use client";

import { useState } from "react";
import AppButton from "@/Shared/AppButton/AppButton";
import { ChevronRight, MapPin, SettingsIcon } from "lucide-react";

export default function ProfileLayout({
  addresses,
  settings,
}: {
  addresses: React.ReactNode;
  settings: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("addresses");
  return (
    <div className="container mx-auto p-6 flex gap-8">
      {/* Sidebar */}
      <div className="w-[20%] bg-white rounded-2xl shadow-sm border p-4 h-fit">
        <h2 className="text-xl font-bold mb-6 px-2">My Account</h2>

        <div className="space-y-2">
          <AppButton
            onClick={() => setActiveTab("addresses")}
            className={`w-full flex p-4 rounded-xl ${
              activeTab === "addresses"
                ? "bg-green-50 text-green-600"
                : "text-gray-500"
            }`}
          >
            <MapPin />
            <span className="ml-2">My Addresses</span>
            <ChevronRight className="ml-auto" />
          </AppButton>

          <AppButton
            onClick={() => setActiveTab("settings")}
            className={`w-full flex p-4 rounded-xl ${
              activeTab === "settings"
                ? "bg-green-50 text-green-600"
                : "text-gray-500"
            }`}
          >
            <SettingsIcon />
            <span className="ml-2">Settings</span>
            <ChevronRight className="ml-auto" />
          </AppButton>
        </div>
      </div>

      {/* Content */}
      <div className="w-[75%] bg-white rounded-2xl shadow-sm border p-8">
        {activeTab === "addresses" ? addresses : settings}
      </div>
    </div>
  );
}