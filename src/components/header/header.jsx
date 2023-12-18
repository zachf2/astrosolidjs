import styles from "./header.module.css";

export default function Header({ title }) {
  return (
    <>
      <header class={styles.header}>
        <h1 class={styles.title}>{title}</h1>
        <nav class={styles.nav}>
          <a href="/#about">About</a>
          <a href="/#contact">Contact Us</a>
          <a href="/#cta">Try it</a>
        </nav>
      </header>
    </>
  );
}
