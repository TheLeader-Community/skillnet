import "./globals.css";

import { Metadata } from "next";
import Head from "next/head";
import SpriteAnimate from "./components/ui/SpriteAnimate";


export const metadata: Metadata = {
  title: 'SkillNet Academy',
  description: "Découvrez TheLeader, dirigé par Massamba Kiminou Chadrack Delmard, une communauté dédiée à l'innovation, au développement web et mobile, et au marketing digital.",
  other: {
    "google-site-verification": "s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs"
  },
  authors: [{ name: 'mentor' }],
  keywords: [
    'SkillNet',
    'Formation',
    'Academy',
    'SkillNet Academy',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs" />
      </Head>
      <body
        className={`  w-full h-full bg-white text-black antialiased`}
      >
        {children}
        <SpriteAnimate />
      </body>
    </html>
  );
}
