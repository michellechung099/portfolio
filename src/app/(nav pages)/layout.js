export default function NavPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button>Home</button>
      {children}
    </main>
  );
}
