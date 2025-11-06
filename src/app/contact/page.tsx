export default function Contact(){
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form className="mt-6 grid max-w-lg gap-4">
        <input className="rounded border p-2" placeholder="Name" />
        <input className="rounded border p-2" placeholder="Email" />
        <textarea className="rounded border p-2" rows={5} placeholder="Message" />
        <button className="rounded bg-black px-4 py-2 text-white">Send</button>
      </form>
    </main>
  );
}
