import clsx from "clsx";
import Image from "next/image";
import styles from "./blog-card.module.css";

export default function BlogPreviewCard() {
  return (
    <div
      className={clsx(
        "w-full h-full flex items-center justify-center",
        styles.cardContainer
      )}
    >
      <div className={styles.card}>
        <div className={clsx(styles.illustration, "relative")}>
          <Image
            layout={"fill"}
            objectFit={"cover"}
            src="/blog-preview-card/images/illustration-article.svg"
            alt="Article illustration"
          />
        </div>
        <div className={styles.publicationInfos}>
          <div className={styles.tagContainer}>
            <span className={styles.tag}>
              <strong>Learning</strong>
            </span>
          </div>
          <div>
            <p className={styles.publishedDate}>Published 21 Dec 2023</p>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>HTML & CSS foundations</h2>
        </div>
        <div className={styles.articlePreview}>
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className={styles.authorInfos}>
          <div className={clsx(styles.authorAvatar, "relative")}>
            <Image
              fill={true}
              src="/blog-preview-card/images/image-avatar.webp"
              alt="Avatar picture"
            />
          </div>
          <div className={styles.authorName}>
            <span>Greg Hooper</span>
          </div>
        </div>
      </div>
    </div>
  );
}
