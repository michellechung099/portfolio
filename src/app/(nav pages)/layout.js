import HomeButton from "@/components/HomeButton";

export default function NavPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <div className="z-20">
        <HomeButton />
      </div>
      {children}
    </main>
  );
}
