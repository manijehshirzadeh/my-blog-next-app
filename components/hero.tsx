import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/manijeh.png"
          alt="An image showing Manijeh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Manijeh</h1>
      <p>I am building fullstack applications with NextJS</p>
    </section>
  );
}

export default Hero;
