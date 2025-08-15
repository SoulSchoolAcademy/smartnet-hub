export const metadata = { title: "SmartNET • Hub (v17)", description: "SmartNET Hub v17" };
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
