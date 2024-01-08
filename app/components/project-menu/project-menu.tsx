import Link from "next/link";
import styles from "@components/project-menu/project-menu.module.css";

export default function ProjectMenu() {
  return (
    <nav>
      <ul className="flex">
        <li className={styles.link}>
          <Link href={"/projects/blog-preview-card"}>Blog preview card</Link>
        </li>
        <li className={styles.link}>
          <Link href={"/projects/faq-accordion"}>Faq accordion</Link>
        </li>
      </ul>
    </nav>
  );
}
