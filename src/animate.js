export const pageAnimation = {
  hidden: { y: 300, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      //type: "spring",
      //duration: 2,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      //type: "spring",
      //duration: 2,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
};
