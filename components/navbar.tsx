"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/select";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";
import { Button } from "@heroui/button";

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
              label="About Servers"
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

      <NavbarContent justify="end">
        <NavbarItem>
          <a
            href="https://github.com/ItsGlobally/ItsGlobally.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Button>
              <Github className="w-5 h-5" />
            </Button>
            
          </a>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
