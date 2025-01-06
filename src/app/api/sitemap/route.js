export async function GET() {
  const baseUrl = "https://webcresson.com";

  const staticPaths = [
    { path: "/", changefreq: "always", priority: "1.0" },
    { path: "/contact", changefreq: "daily", priority: "0.8" },
    { path: "/about", changefreq: "daily", priority: "0.8" },
    { path: "/services", changefreq: "daily", priority: "0.8" },
    { path: "/services/ia-generative", changefreq: "daily", priority: "0.8" },
    { path: "/services/maintenance-predictive", changefreq: "daily", priority: "0.8" },
    { path: "/services/rpa-ia", changefreq: "daily", priority: "0.8" },
    { path: "/services/ia-traitement-images", changefreq: "daily", priority: "0.8" },
    { path: "/services/ia-sur-mesure", changefreq: "daily", priority: "0.8" },
    { path: "/services/ia-archeologie", changefreq: "daily", priority: "0.8" },
    { path: "/services/pricing-analyse-avancee", changefreq: "daily", priority: "0.8" },
    { path: "/TermsOfSale", changefreq: "daily", priority: "0.8" },
    { path: "/LegalMentions", changefreq: "daily", priority: "0.8" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths
    .map(
      ({ path, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
