import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "スーパーAI麻雀ビューア",
  description: "AI検出された麻雀牌譜を表示するWebアプリケーション",
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
