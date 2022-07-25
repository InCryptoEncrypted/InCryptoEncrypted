import { motion } from "framer-motion";

type Props = {
  title: string;
};

export function Intro({ title }: Props) {
  return (
    <section className="px-4 md:px-12 xl:px-40 pt-20 sm:pt-32 pb-32 sm:pb-40 border-b">
      <motion.h1
        className="text-3xl sm:text-5xl text-center"
        initial={{
          y: 120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          type: "tween",
        }}
      >
        {title}
      </motion.h1>
    </section>
  );
}
