// Generates robots.txt dynamically for search engine crawlers
export async function GET() {
  const robots = `
    User-agent: *
    Allow: /
  
    Sitemap: https://sherinfarjana.vercel.app/sitemap.xml
    `;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
