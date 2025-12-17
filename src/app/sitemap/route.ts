// Generates sitemap.xml dynamically for better SEO indexing
export async function GET() {
  const baseUrl = "https://sherinfarjana.vercel.app"; // Production domain

  return new Response(
    `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>
      `,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
