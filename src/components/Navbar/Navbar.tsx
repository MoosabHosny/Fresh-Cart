"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  User,
  Search,
  Menu,
  Headset,
  X,
  LogOut,
  Settings,
  NotebookTabs,
  Package,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { useSession, signOut } from "next-auth/react";
import logo from "@images/FreshCart.svg";
import { useRouter } from "next/navigation";
import { useCart } from "@/Shared/context/CartContext";

export default function Navbar({ id }: { id?: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data } = useSession();
  const user = data?.user;
  const { cartCount } = useCart();

  const router = useRouter();

  function handleLogout() {
    signOut({ redirect: false });
    router.push("/login");
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Image
            src={logo}
            alt="FreshCart Logo"
            width={160}
            height={40}
            className="w-32 md:w-40"
            priority
          />

          {/* Search */}
          <div className="hidden lg:flex grow max-w-2xl relative ">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full border border-gray-200 rounded-4xl py-2.5 px-4 pr-12 focus:outline-none focus:border-main-color focus:ring-1 focus:ring-main-color transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-main-color text-white p-2 rounded-full hover:bg-opacity-90 transition">
              <Search size={18} />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-5">
            {/* Desktop Menu */}
            <NavigationMenu className="hidden xl:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={`${navigationMenuTriggerStyle()} bg-transparent! hover:text-main-color font-medium`}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/Products"
                      className={`${navigationMenuTriggerStyle()} bg-transparent! hover:text-main-color font-medium`}
                    >
                      Shop
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent! hover:text-main-color font-medium">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-55">
                      <CategoryLink href="/Category" title="All Categories" />
                      <CategoryLink href="/electronics" title="Electronics" />
                      <CategoryLink
                        href="/womens-fashion"
                        title="Women's Fashion"
                      />
                      <CategoryLink
                        href="/mens-fashion"
                        title="Men's Fashion"
                      />
                      <CategoryLink
                        href="/Products"
                        title="Beauty & Health"
                      />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="brands"
                      className={`${navigationMenuTriggerStyle()} bg-transparent! hover:text-main-color font-medium`}
                    >
                      Brands
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden lg:flex">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/support"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-[#f0f9f0] rounded-full flex items-center justify-center text-[#0aad0a]">
                        <Headset size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-gray-400 font-medium">
                          Support
                        </span>
                        <span className="text-[13px] font-bold text-slate-700">
                          24/7 Help
                        </span>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Icons */}
            <div className="flex items-center gap-3 md:gap-4 border-l pl-3 md:pl-5">
              <Link href="/wishlist" className="relative group">
                <Heart className="text-gray-700 group-hover:text-main-color transition" />
              </Link>

              <Link href="/cart" className="relative group flex items-center">
                <ShoppingCart className="text-gray-600 group-hover:text-green-600 transition-colors w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              </Link>

              {!user ? (
                <Link
                  href="/login"
                  className="hidden sm:flex items-center gap-2 bg-main-color text-white px-5 py-2.5 rounded-lg hover:bg-[#099609] transition font-semibold"
                >
                  <User size={18} />
                  <span>Sign In</span>
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="hidden sm:block">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user?.image ?? ""} />
                        <AvatarFallback className="bg-green-100 text-green-700">
                          <User size={18} className="text-slate-400" />
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-64 p-2">
                    <div className="flex items-center gap-3 p-3 border-b mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.image ?? ""} />
                        <AvatarFallback className="bg-green-100 text-green-700">
                          <User size={18} className="text-slate-400" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-800">
                          {user?.name || "User"}
                        </span>
                          <span className="text-sm font-semibold text-slate-800">
                            {user?.email || "User"}</span>
                      </div>
                    </div>

                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer py-2 px-3"
                    >
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <User size={18} className="text-slate-400" />
                        <span>My Profile</span>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer py-2 px-3"
                    >
                      <Link
                        href="/orders"
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <Package size={18} className="text-slate-400" />
                        <span>My Orders</span>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer py-2 px-3"
                    >
                      <Link
                        href="/wishlist"
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <Heart size={18} className="text-slate-400" />
                        <span>My Wishlist</span>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer py-2 px-3"
                    >
                      <Link
                        href="/addresses"
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <NotebookTabs size={18} className="text-slate-400" />
                        <span>Addresses</span>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer py-2 px-3"
                    >
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <Settings size={18} className="text-slate-400" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="my-2" />

                    <DropdownMenuItem
                      className="text-red-500 cursor-pointer py-2 px-3 flex items-center gap-3"
                      onClick={handleLogout}
                    >
                      <LogOut size={18} />
                      <span className="font-medium">Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="xl:hidden mt-4 border-t pt-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/Brands">Brands</Link>
            <Link href="/support">Support</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function CategoryLink({ href, title }: { href: string; title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-2 text-sm hover:bg-slate-50 hover:text-main-color"
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
