export async function GET() {
  const baseUrl = "https://webcresson.com";

  const staticPaths = [
    "/",
    "/contact",
    "/about",
    "/services",
    "/services/ia-generative",
    "/services/maintenance-predictive",
    "/services/rpa-ia",
    "/services/ia-traitement-images",
    "/services/ia-sur-mesure",
    "/services/ia-archeologie",
    "/services/pricing-analyse-avancee",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`.trim(); // Ajout de trim() pour éviter les espaces superflus.

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
