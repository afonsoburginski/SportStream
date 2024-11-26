"use client";

import * as React from "react";
import Image from "next/image";
import {
  Search,
  Sparkles,
  Home,
  Inbox,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  team: {
    name: "tv",
    logoUrl: "/logo.png",
    plan: "Enterprise",
  },
  menu: [
    [
      {
        label: "Customize Page",
        icon: Search,
      },
      {
        label: "Turn into wiki",
        icon: Sparkles,
      },
    ],
    [
      {
        label: "Copy Link",
        icon: Home,
      },
      {
        label: "Duplicate",
        icon: Inbox,
      },
    ],
  ],
};

export function AppNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex h-12 items-center gap-2 bg-sidebar shadow-black border-b-[1px]">
      <div className="flex flex-1 items-center gap-2 px-3">
        <Image
          src={data.team.logoUrl}
          alt={data.team.name}
          width={82}
          height={82}
          className="rounded-md object-cover"
        />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-md">
            <Input type="search" placeholder="Search" className="w-full" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Inbox />
          </Button>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 data-[state=open]:bg-accent"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-56 overflow-hidden rounded-lg p-0"
              align="end"
            >
              <Sidebar collapsible="none" className="bg-transparent">
                <SidebarContent>
                  {data.menu.map((group, index) => (
                    <SidebarGroup
                      key={index}
                      className="border-b last:border-none"
                    >
                      <SidebarGroupContent className="gap-0">
                        <SidebarMenu>
                          {group.map((item, idx) => (
                            <SidebarMenuItem key={idx}>
                              <SidebarMenuButton>
                                <item.icon /> <span>{item.label}</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  ))}
                </SidebarContent>
              </Sidebar>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
