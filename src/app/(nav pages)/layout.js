import HomeButton from "@/components/HomeButton";

export default function NavPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-30 py-20">
      <HomeButton />
      {children}
    </main>
  );
}
