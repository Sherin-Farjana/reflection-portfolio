// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import ClientLayout from "@/components/ClientLayout"; // Import client wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sherin Farjana | Front-End Developer",
  description:
    "Explore the portfolio of Sherin Farjana, a front-end developer passionate about creating interactive and visually appealing web applications. Skilled in modern web technologies and committed to building seamless user experiences. Open to collaborations and new opportunities.",
  keywords: [
    "Sherin Farjana",
    "Sherin Farjana Portfolio",
    "Sherin",
    "Sherin Portfolio",
    "Front-End Developer",
    "Web Developer Portfolio",
    "Next.js Portfolio",
    "JavaScript Developer",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sherin Farjana | Front-End Developer",
    description:
      "Explore the portfolio of Sherin Farjana, a passionate front-end developer skilled in creating engaging and responsive web applications.",
    url: "https://sherinfarjana.vercel.app",
    siteName: "Sherin Farjana Portfolio",
    images: [
      {
        url: "/sherin.png",
        width: 800,
        height: 600,
        alt: "Sherin Farjana Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherin Farjana | Front-End Developer",
    description:
      "Explore the portfolio of Sherin Farjana, a passionate front-end developer skilled in creating engaging and responsive web applications.",
    images: ["/sherin.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeScript = `
  (function() {
    const localTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localTheme === 'dark' || (!localTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="RiVqt457WkYvXlAs4yq0Md3zcIEsyw8zWaiF5djt0zI"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} dark:bg-[rgba(0,0,0)]`}>
        <ThemeProvider>
          <ClientLayout>
            <div className="fixed inset-x-0 top-0 isolate z-[99] h-20">
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[1px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[2px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[3px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[6px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[12px]"></div>
            </div>
            {children}
            <div className="fixed inset-x-0 bottom-0 isolate z-[99] h-16">
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[1px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[2px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[3px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[6px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[12px]"></div>
            </div>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
