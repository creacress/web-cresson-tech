"use client";

import { usePathname } from "next/navigation";

export default function CanonicalLink() {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webcresson.com";

  return <link rel="canonical" href={`${baseUrl}${pathname}`} />;
}
