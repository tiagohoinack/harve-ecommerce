import { AnimatePresence, motion } from "framer-motion";
import { NavbarGeral } from "../componentes/NavbarGeral";
import { useState, useEffect } from "react";

function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <NavbarGeral />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="loader-container"
          >
            <motion.div
              className="loader"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        ) : (
          <div>{children}</div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Layout };
