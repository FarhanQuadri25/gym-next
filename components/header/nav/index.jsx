import { DATA } from "@/data/data";
import styles from "./style.module.scss";
import NewLink from "@/components/navlink";
import { motion } from "framer-motion";
import { menuSlide } from "@/anim";
import Curve from '@/components/curve';

export default function index({closeNavBar}) {
  return (
    <>
      <motion.div
        variants={menuSlide}
        animate="enter"
        exit="exit"
        initial='initial'
        className={styles.menu}
      >
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.header}>
              <p className="text-xl">Navigation</p>
            </div>
            {DATA.map((data) => (
              <NewLink key={data.id} data={{ ...data }} closeNavBar={closeNavBar} />
            ))}
          </div>
        </div>
        <Curve/>
      </motion.div>
    </>
  );
}
