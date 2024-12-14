"use client";

import Header from "@/components/header";
import Image from "next/image";
import logo from "@/public/logo-img.png";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Index() {
  const images = [
    "/img/img-1 (1).jpeg",
    "/img/img-2 (2).jpeg",
    "/img/img-3 (2).jpeg",
    "/img/img-3.jpeg",
    "/img/img-4 (2).jpeg",
    "/img/img-4.jpeg",
    "/img/img-5.jpeg",
  ];

  const [randomImg, setRandomImg] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImg(images[randomIndex]);

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImg(images[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="home">
      <div className="flex justify-between shadow-2xl items-center p-[20px]">
        <Image src={logo} alt="logo" width={80} height={80} />
        <Header />
      </div>

      <div className={`${styles.new_grid}`}>
        {randomImg && (
          <div
            className={`transition-opacity duration-1000 ease-in-out pt-[2em] opacity-100 ${styles.third_grid}`}
          >
            <Image
              src={randomImg}
              alt="random"
              width={800}
              height={800}
              className={`transition-all ease-in-out opacity-100 ${styles.img}`}
            />
          </div>
        )}

        <div className={`text-[#171717] flex justify-center  ${styles.grid}`}>
          <div className={styles.first_grid}>
            <div className="flex flex-col gap-[2em]">
              <h1
                className={`font-tajawal text-right ${styles.first_grid__heading}`}
              >
                مرحباً بك عزيزي الزائر في
                <span className="font-extrabold ml-2">
                  مركز أبطال الغربية الرياضي
                </span>
              </h1>
              <p className={`font-bold text-right ${styles.first_grid__sub}`}>
                ندعوك للمشاركة في تجربة ستجعلك تغير أهدافك في ممارسة الرياضة،
                حيث نوفر كافة الإمكانيات والمعدات المطلوبة في المركز ونقدم لك
                برامج متنوعة وفقاً لنمط حياة الفرد والمجتمع
              </p>
            </div>
          </div>

          <div className={styles.second_grid}>
            <div className="flex flex-col gap-[2em]">
              <h1 className={`${styles.second_grid__heading}`}>
                Welcome dear visitor to the
                <strong className="font-extrabold ml-6">
                  Western Champions Sports Center.
                </strong>
              </h1>
              <p className={`text-justify ${styles.second_grid__sub}`}>
                We invite you to participate in an experience that will make you
                change your goals in practicing sports, as we provide all the
                capabilities and equipment required in the center and offer you
                various programs according to the lifestyle of the individual
                and society.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Link href={`#about`} className={styles.button__btn}>
          More About Us
        </Link>
      </div>
    </main>
  );
}
