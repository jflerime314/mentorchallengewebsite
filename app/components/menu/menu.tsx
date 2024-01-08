import Link from "next/link";
import styles from "@components/menu/menu.module.css";

export default function Menu() {
  return (
    <nav className="h-[40px] w-full bg-white">
      <ul className="h-full flex items-center">
        <li className={styles.link}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles.link}>
          <Link href={"/projects"}>Challenges</Link>
        </li>
      </ul>
    </nav>
  );
}
