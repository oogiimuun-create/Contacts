import Link from "next/link";

export default function Header() {
  return (
    <div className="w-[100vw] h-[200px] bg-white text-black items-center flex justify-center gap-[200px]">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
