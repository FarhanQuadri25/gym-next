import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "@/anim";

export default function index({ data, closeNavBar }) {
  return (
    <motion.div
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
      custom={data.id}
    >
      <Link href={data.href} onClick={closeNavBar}>
        {data.label}
      </Link>
    </motion.div>
  );
}
