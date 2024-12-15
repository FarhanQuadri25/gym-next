import Image from "next/image";
import styles from "./style.module.scss";

export default function index() {
  return (
    <section id="gallery" className="mt-[8rem]">
      <div className="text-center">
        <h1 className="font-bold font-general text-4xl text-indigo-700">
          Gallery
        </h1>
      </div>
      <div className={`${styles.gallery}`}>
        <figure
          className={`${styles.gallery__item} ${styles.gallery__item__1}`}
        >
          <Image
            src="/newimg/img-1 (1).jpeg"
            alt="first-img"
            width={300}
            height={300}
            className={`${styles.gallery__first__img}`}
          />
        </figure>
        <figure
          className={`${styles.gallery__item} ${styles.gallery__item__2}`}
        >
          <Image
            src="/newimg/img-1 (2).jpeg"
            alt="second-img"
            width={300}
            height={300}
            className={`${styles.gallery__second__img}`}
          />
        </figure>
        <figure
          className={`${styles.gallery__item} ${styles.gallery__item__3}`}
        >
          <Image
            src="/newimg/img-1 (3).jpeg"
            alt="third-img"
            width={300}
            height={300}
            className={`${styles.gallery__third__img}`}
          />
        </figure>
        <figure
          className={`${styles.gallery__item} ${styles.gallery__item__4}`}
        >
          <Image
            src="/newimg/img-1 (4).jpeg"
            alt="fourth-img"
            width={350}
            height={400}
            className={`${styles.gallery__fourth__img}`}
          />
        </figure>
        <figure
          className={`${styles.gallery__item} ${styles.gallery__item__5}`}
        >
          <Image
            src="/newimg/img-1 (5).jpeg"
            alt="fifth-img"
            width={300}
            height={300}
            className={`${styles.gallery__fifth__img}`}
          />
        </figure>
        <figure
          className={`${styles.gallery__item} ${styles.gallery__item__6}`}
        >
          <Image
            src="/newimg/img-1 (7).jpeg"
            alt="sixth-img"
            width={300}
            height={300}
            className={`${styles.gallery__sixth__img}`}
          />
        </figure>
        <figure
          className={`${styles.gallery__item} ${styles.gallery__item__7}`}
        >
          <Image
            src="/newimg/img-1 (7).jpeg"
            alt="seventh-img"
            width={800}
            height={800}
            className={`${styles.gallery__seventh__img}`}
          />
        </figure>
      </div>
    </section>
  );
}
