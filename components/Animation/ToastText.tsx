import { motion } from "framer-motion";
import BlurTextAnimation from "./blurTextAnimation";

const ToastText = ({
  isShown,
  message,
}: {
  isShown: boolean;
  message: string;
}) => {
  if (!isShown) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="pointer-events-auto"
      role="status"
      aria-live="polite"
    >
      <BlurTextAnimation delayChildren={0.15} delay={0.5} className="text-center font-bold text-green-400">{message}</BlurTextAnimation>
    </motion.div>
  );
};

export default ToastText;
