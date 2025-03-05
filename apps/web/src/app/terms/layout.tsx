export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col gap-4 px-6 lg:px-16 mb-6 lg:mb-16">
      {children}
    </div>
  );
}
