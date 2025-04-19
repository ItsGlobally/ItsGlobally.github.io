"use client"

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/select";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";

export const serverItem = [
  { key: "bedtwlserver", label: "bedtwL Server", path: "/about/bedtwlserver" },
  { key: "twsrv", label: "Taiwan FFA", path: "/about/twsrv" },
];

export const Navbar = () => {
  const [selectedServer, setSelectedServer] = useState<string>();
  const router = useRouter();

  const handleServerChange = (keys: any) => {
    const selectedKey = Array.from(keys)[0] as string;
    setSelectedServer(selectedKey);
    
    const selectedServer = serverItem.find(server => server.key === selectedKey);
    if (selectedServer) {
      router.push(selectedServer.path);
    }
  };
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="flex">
      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="flex gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">ItsGlobally</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} className="flex">
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <NavbarItem className="flex">
          <Select
            className="w-72"
            label="Servers"
            placeholder="Select a server"
            selectedKeys={selectedServer ? [selectedServer] : []}
            variant="bordered"
            onSelectionChange={handleServerChange}
          >
            {serverItem.map((server) => (
              <SelectItem key={server.key}>{server.label}</SelectItem>
            ))}
          </Select>

          </NavbarItem>
        </ul>
      </NavbarContent>
    </HeroUINavbar>
  );
};