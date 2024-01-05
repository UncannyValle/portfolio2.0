import Link from "next/link";
import { ThemeSwitcher } from "../darkMode/theme-switcher";
import { motion } from "framer-motion";

type NavbarProps = {
  isOpen: boolean;
};

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: .3, staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: .5, staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MobileNavbar = ({ isOpen }: NavbarProps) => {
  const MotionLink = motion(Link);
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className="absolute top-10 -z-30 flex h-screen w-screen flex-col items-center justify-evenly bg-slate-50 shadow-lg  dark:bg-black"
    >
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#about-me"
        className="pb-8"
      >
        About
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#skills"
        className="pb-8"
      >
        Skills
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#projects"
        className="pb-8"
      >
        Projects
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#careers"
        className="pb-8"
      >
        Careers
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="/#contact"
        className="pb-8"
      >
        Contact
      </MotionLink>
      <ThemeSwitcher />
    </motion.div>
  );
};
