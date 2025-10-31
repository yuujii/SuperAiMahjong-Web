import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "雀魂牌譜ビューア",
  description: "麻雀牌譜を表示するWebアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
