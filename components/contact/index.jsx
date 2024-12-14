import styles from "./style.module.scss";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaSnapchat } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className={styles.contact__container} id="contact">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl text-indigo-700 font-bold font-general">
          Contact Us
        </h1>
      </div>

      {/* Contact Details */}
      <div className={styles.container}>
        {/* Email */}
        <div className={styles.contactItem}>
          <IoMdMail className={styles.icon} />
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=wc.gym2006@gmail.com.com&su=Hello&body=I%20want%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            wc.gym2006@gmail.com
          </Link>
        </div>

        {/* Snapchat */}
        <div className={styles.contactItem}>
          <FaSnapchat className={styles.icon} />
          <Link
            href="https://www.snapchat.com/add/wc.gym"
            className={styles.link}
          >
            wc.gym
          </Link>
        </div>

        {/* Instagram */}
        <div className={styles.contactItem}>
          <FaSquareInstagram className={styles.icon} />
          <Link
            href="https://www.instagram.com/wc.gym.06"
            className={styles.link}
          >
            wc.gym.06
          </Link>
        </div>

        {/* Phone Numbers */}
        <div className={styles.contactItem}>
          <p className={styles.phone}>0530410676</p>
          <p className={styles.phone}>0554378100</p>
        </div>
      </div>
    </section>
  );
}
