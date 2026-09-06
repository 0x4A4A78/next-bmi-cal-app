import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bodywise | BMI Calculator",
  description: "คำนวณ BMI และดูคำแนะนำสุขภาพเบื้องต้น",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
