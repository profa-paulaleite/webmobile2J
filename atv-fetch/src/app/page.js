import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> List of HP Houses </h1>

      <ul>
        <li> <Link href="/server-side"> Server-Side Rendering </Link> </li>
        <li> <Link href="/client-side"> Client-Side Rendering </Link> </li>
      </ul>
      
    </main>
  );
}
