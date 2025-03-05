export async function GET() {
  const sitemapUrl = process.env.NEXT_PUBLIC_SITEMAP_URL || "https://webcresson.com/sitemap.xml";
  const robotsTxt = `User-agent: *
Disallow: /api/
Disallow: /admin/
Allow: /

Sitemap: ${sitemapUrl}
`;
  
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
