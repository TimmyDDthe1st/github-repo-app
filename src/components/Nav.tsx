import Link from "next/link";
import NavStyles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={NavStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}