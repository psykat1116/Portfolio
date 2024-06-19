import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
  variable: "--font-poppins",
});

const myFont = localFont({
  src: "../TT-Tunnels-Trial.otf",
});
const myFont2 = localFont({
  src: "../SuisseIntl.ttf",
  variable: "--font-suisse",
});

export const metadata: Metadata = {
  title: "Saikat Samanta | Full Stack Developer and UI/UX Designer",
  description:
    "Welcome to my website I am Saikat Samanta, a passionate and innovative full stack developer & UI/UX designer. With a keen eye for detail and a dedication to crafting seamless user experiences, I specializes in building responsive, user-friendly websites and applications. Explore a curated selection of projects showcasing proficiency in front-end and back-end development, leveraging the latest technologies to deliver cutting-edge solutions. Dive into the About section to learn more about my journey, skills, and professional experiences. Connect through the Contact page for collaboration opportunities or to discuss potential projects. Let's build something amazing together!",
  icons: [
    {
      media: "(prefers-color-scheme: dark)",
      url: "/LogoLight.svg",
      href: "/LogoLight.svg",
    },
    {
      media: "(prefers-color-scheme: light)",
      url: "/LogoDark.svg",
      href: "/LogoDark.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} ${poppins.variable} ${myFont2.variable}`}
      >
        <div className="relative min-h-screen w-full flex justify-start items-center bg-lightprimary overflow-x-hidden flex-col p-3">
          <Toaster position="bottom-right" richColors />
          {children}
        </div>
      </body>
    </html>
  );
}
