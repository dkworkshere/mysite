export default function Footer(){
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl p-4 text-sm text-zinc-500">
        © {new Date().getFullYear()} mysite
      </div>
    </footer>
  );
}
