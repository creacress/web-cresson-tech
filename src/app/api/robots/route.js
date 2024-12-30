export async function GET() {
    const robotsTxt = `
      User-agent: *
      Disallow: /api/
      Allow: /
  
      Sitemap: https://cressontech.com/sitemap.xml
    `;
  
    return new Response(robotsTxt, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  