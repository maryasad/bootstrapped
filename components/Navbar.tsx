// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/azure-journey">Azure Journey</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);

export default Navbar;
