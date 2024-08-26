import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col w-full h-full md:col-span-2 items-center justify-center">
      <h1 className="text-4xl font-light">Not Found</h1>
      <span className="font-extralight text-2xl">
        Could not find requested resource
      </span>
      <Link className="p-2 mt-4 rounded-md  border" href="/">
        Return Home
      </Link>
    </main>
  );
}
