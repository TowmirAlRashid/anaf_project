import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnaF Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ margin: 0 }}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
