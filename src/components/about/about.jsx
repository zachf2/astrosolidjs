import style from "./about.module.css";

export default function About({ children }) {
  return (
    <section class={style.about}>
      <h2 class={style.title} id="about">
        Ever wanted the speed of astro and the fun of solid?
      </h2>
      <p>{children}</p>
      <code lang="bash">
        npm create astro@latest <br /> ... <br /> npx astro
        add solid
      </code>
    </section>
  );
}
