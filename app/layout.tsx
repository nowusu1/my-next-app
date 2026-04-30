import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* NAVBAR */}
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link href="/" style={{ color: "#f97316" }}>
            Home
          </Link>
          <Link href="/signup" style={{ color: "#f97316" }}>
            Signup
          </Link>
          <Link href="/pricing" style={{ color: "#f97316" }}>
            Pricing
          </Link>
        </nav>

        <hr />

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}
