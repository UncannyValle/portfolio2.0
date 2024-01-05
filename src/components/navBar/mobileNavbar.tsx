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
    transition: { duration: 0.3, staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.5, staggerChildren: 0.05, staggerDirection: -1 },
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
      initial={"closed"}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-slate-50 shadow-lg  dark:bg-black"
    >
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#about-me"
        className="mb-8 p-8"
      >
        About
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#skills"
        className="mb-8 p-8"
      >
        Skills
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#projects"
        className="mb-8 p-8"
      >
        Projects
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        href="/#careers"
        className="mb-8 p-8"
      >
        Careers
      </MotionLink>
      <MotionLink
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="/#contact"
        className="p-8"
      >
        Contact
      </MotionLink>
      <ThemeSwitcher />
    </motion.div>
  );
};
