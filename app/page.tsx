"use client";

import CarouselComponent from "@/components/layouts/CarouselComponent";
import Link from "next/link";

const lists = [
  { title: "Champions League", slug: "championsleague", items: 4 },
  { title: "Premier League", slug: "premierleague", items: 4 },
  { title: "La Liga", slug: "laliga", items: 4 },
  { title: "Serie A", slug: "seriea", items: 4 },
];

export default function Page() {
  return (
    <>
    <div className="w-full h-80 bg-muted/10 rounded-lg flex items-center justify-center">
      <CarouselComponent />
    </div>
    <div className="flex flex-1 flex-col gap-6 px-4 py-6">
      <div className="flex flex-col gap-6">
        {lists.map((list, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">{list.title}</h2>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: list.items }).map((_, itemIndex) => (
                <Link key={itemIndex} href={`/${list.slug}`}>
                  <div className="h-40 bg-muted/50 rounded-lg"></div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
