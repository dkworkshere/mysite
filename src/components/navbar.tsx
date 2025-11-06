import Link from "next/link";
export default function Navbar(){
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">mysite</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
