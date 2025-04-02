"use client";

import Link from "next/link";

interface ICategoryCard {
  href: string;
  icon: string;
  name: string;
}

export function CategoryComponent({ icon, name, href }: ICategoryCard) {
  return (
    <Link href={href}>
      <div
        className="flex flex-col 
    justify-center items-center shadow-md hover:shadow-xl hover:shawdow-lg border-2 border-(--border) hover:cursor-pointer p-8 rounded-xl gap-4"
      >
        <img
          src={icon}
          className="text-[var(--button)] hover:text-[var(--buttonHover)]"
        />
        <p className="text-[var(--button)] hover:text-[var(--buttonHover)] text-2xl">
          {name}
        </p>
      </div>{" "}
    </Link>
  );
}
