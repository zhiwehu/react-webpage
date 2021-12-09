import { motion } from "framer-motion";

const Wave = () => {
  return (
    <svg
      width="1250"
      height="257"
      viewBox="0 0 1250 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M7.5 109C438.5 555.5 664 -260 1244.5 109"
        stroke="#0803FC"
        opacity="0.5"
        stroke-width="20"
      />
    </svg>
  );
};

export default Wave;
