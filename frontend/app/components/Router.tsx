"use client";
import NextLink from "next/link";
import { usePathname, useRouter as useNextRouter } from "next/navigation";
import React from "react";

/*
  Replaces the custom in-memory Router with wrappers around Next.js navigation.
  - export useRouter() -> { currentPath, navigate(path) }
  - export Link component that delegates to next/link
  This keeps existing imports like `import { Link, useRouter } from "./Router";`
  working while using Next.js routing (required to run Next.js frontend).
*/

export function useRouter() {
  const pathname = usePathname() ?? "/";
  const router = useNextRouter();

  return {
    currentPath: pathname,
    navigate: (path: string) => {
      // keep behavior consistent with previous API
      if (path === pathname) return;
      router.push(path);
      // scroll to top similar to previous implementation
      if (typeof window !== "undefined") window.scrollTo(0, 0);
    },
  };
}

export function Link({
  to,
  children,
  className,
  onClick,
  replace,
  prefetch,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  replace?: boolean;
  prefetch?: boolean;
}) {
  // Next.js Link supports className and onClick directly
  return (
    <NextLink href={to} replace={replace} prefetch={prefetch} onClick={onClick} className={className}>
      {children}
    </NextLink>
  );
}