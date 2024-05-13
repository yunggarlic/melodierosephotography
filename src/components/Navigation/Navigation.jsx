import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between container-default h-nav-height">
      <div>
        <Link href="/">Melodie Rose</Link>
      </div>
      <div>
        <Link href="/photos">Photo</Link>
        <Link href="/35mm">35mm</Link>
        <Link href="/studio">Studio Rental</Link>
        <Link href="/book">Book</Link>
      </div>
    </nav>
  );
}
