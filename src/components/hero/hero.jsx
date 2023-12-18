import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section class={styles["hero-section"]}>
      <h1 class={styles["hero-title"]}>
        Solid <br /> meets <br /> Astro
      </h1>
      <div class={styles.images}>
        <img src="/public/solidjs.png" alt="SolidJs Logo" />
        <img
          src="/public/astro.webp"
          alt="Astro Logo"
          class={styles.img2}
        />
      </div>
    </section>
  );
}
