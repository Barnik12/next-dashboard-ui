export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* LEFT SIDEBAR */}
    <div className="w-64 bg-gray-800 text-white"></div>
    {/* RIGHT CONTENT */}
    <div className="flex-1 bg-gray-100">{children}</div>
  </div>;
}