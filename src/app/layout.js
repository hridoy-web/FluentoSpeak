import { Hind_Siliguri, Noto_Serif_Bengali, Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const plusJakrata = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  display: "swap"
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-serif-bd",
  weight: ['400', '600', '700'],
  display: "swap",
})

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

// BASE SITE URL
const siteUrl = "https://fluentospeak.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fluento Speak | বাংলাদেশের সেরা স্পোকেন ইংলিশ লার্নিং প্ল্যাটফর্ম",
    template: "%s | Fluento Speak",
  },
  description:
    "Fluento Speak (ফ্লুয়েন্টো স্পিক) হলো বাংলাদেশের শিক্ষার্থীদের জন্য একটি আধুনিক ইংরেজি শেখার প্ল্যাটফর্ম। ৩০ দিনের চ্যালেঞ্জ নিয়ে, স্পোকেন ইংলিশ, ফ্রিল্যান্সিং ইংলিশ, গ্রামার ও ভোকাবুলারি শিখুন সহজে।",
  keywords: [
    "Fluento Speak",
    "Fluento",
    "Fluento Speak BD",
    "ফ্লুয়েন্টো স্পিক",
    "English learning platform Bangladesh",
    "Learn spoken English in Bangla",
    "Freelancing English course Bangladesh",
    "Spoken English 30 days challenge",
    "English vocabulary for Bangladeshi students",
    "Bangladeshi English learning app",
    "সহজে ইংরেজি শেখার উপায়",
    "ফ্রিল্যান্সিং ইংরেজি শেখার কোর্স",
  ],
  authors: [{ name: "Fluento Speak Team" }],
  creator: "Hridoy Chowdhury",
  publisher: "Fluento Speak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph (Facebook, LinkedIn Share Preview)
  openGraph: {
    title: "Fluento Speak | বাংলাদেশের ১ নম্বর স্পোকেন ইংলিশ ও লার্নিং প্ল্যাটফর্ম",
    description:
      "ফ্রিল্যান্সিং, ডেলি লাইফ স্পোকেন ইংলিশ, ও ভোকাবুলারি শিখুন স্ট্রাকচার্ড মডিউলে। যুক্ত হন আমাদের স্টুডেন্ট কমিউনিটিতে।",
    url: siteUrl,
    siteName: "Fluento Speak",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`, // project banner 
        width: 1200,
        height: 630,
        alt: "Fluento Speak - Learn English Online",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Fluento Speak | Learn English Easily",
    description: "Bangladesh's leading platform for Spoken English, Freelancing English & Grammar.",
    images: [`${siteUrl}/og-image.png`],
  },

  // Search Engine Crawling Control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Search Console Verification 
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export default function RootLayout({ children }) {
  // Schema.org Structured Data 
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Fluento Speak",
    alternateName: ["Fluento", "ফ্লুয়েন্টো স্পিক"],
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "An online English learning platform designed for Bangladeshi students and freelancers.",
    sameAs: [
      "https://facebook.com/fluentospeak",
      "https://youtube.com/fluentospeak",
    ],
  };

  return (
    <html
      lang="bn"
      className={`${urbanist.variable} ${plusJakrata.variable} ${notoSerifBengali.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-background text-text-main">
        <Navbar />

        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}