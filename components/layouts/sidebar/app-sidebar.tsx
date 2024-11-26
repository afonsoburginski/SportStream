/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import Image from "next/image";
import { NavFavorites } from "@/components/layouts/sidebar/nav-favorites";
import { NavWorkspaces } from "@/components/layouts/sidebar/nav-workspaces";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const data = {
  favorites: [
    {
      name: "Premiere League",
      url: "#",
      avatarUrl: "premier-league.png",
    },
    {
      name: "Europa League",
      url: "#",
      avatarUrl: "europa-league.png",
    },
    {
      name: "Champions League",
      url: "#",
      avatarUrl: "champions-league.png",
    },
    {
      name: "Libertadores",
      url: "#",
      avatarUrl: "copa-libertadores.png",
    },
  ],
  workspaces: [
    {
      name: "Partidas Ao Vivo",
      emoji: "⚽️",
      pages: [
        {
          name: "Partidas de Hoje",
          url: "#",
          emoji: "📅",
        },
        {
          name: "Placar ao Vivo",
          url: "#",
          emoji: "🔴",
        },
        {
          name: "Próximos Jogos",
          url: "#",
          emoji: "⏰",
        },
      ],
    },
    {
      name: "Times",
      emoji: "🏟️",
      pages: [
        {
          name: "Notícias do Time",
          url: "#",
          emoji: "📰",
        },
        {
          name: "Eliminatórias",
          url: "#",
          emoji: "👥",
        },
        {
          name: "Destaques dos Jogos",
          url: "#",
          emoji: "🎥",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0 fixed top-12 bottom-0" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2 p-2">
          <span className="truncate font-semibold">Para você</span>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
