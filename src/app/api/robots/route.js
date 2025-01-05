export async function GET() {
  const robotsTxt = `User-agent: *
Disallow: /api/
Disallow: /admin/
Allow: /

Sitemap: https://webcresson.com/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
