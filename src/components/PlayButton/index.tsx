import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const PlayButton = ({ size = 60, className = "" }) => {
  return (
    <motion.button
      className={cn(
        "relative flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-2 shadow-lg",
        "hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110",
        className
      )}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="flex items-center justify-center bg-white rounded-full"
        style={{ width: size, height: size }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="border-l-8 border-transparent border-r-8 border-r-white border-t-8 border-b-8 border-t-transparent border-b-transparent"
          initial={{ x: -5 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </motion.button>
  );
};

export default PlayButton;
