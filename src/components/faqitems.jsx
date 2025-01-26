import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export const FaqItems = ({ item, index }) => {
  const [isActive, setIsActive] = useState(null);
  const active = isActive === item.id;

  return (
    <div className="relative z-6 mb-8">
      <div
        className="group relative flex items-center justify-between cursor-pointer gap-10 px-7 border p-2 rounded-md bg-s3"
        onClick={() => {
          setIsActive(isActive === item.id ? null : item.id);
        }}
      >
        <div className="flex ">
          <div className="small mb-1.5 text-p3 max-lg:hidden text-start mr-4">
            {index <= 5 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center text-start",
              active && "max-lg:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center transition-all duration-500 ",
            active && "befor:bg-p1 after:rotate-0 after:bg-p1"
          )}
        ></div>
      </div>

      <motion.div
        intitial={{ height: 0, opacity: 0 }}
        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        {isActive === item.id && (
          <div className="body-3 px-7 py-3.5 text-start">{item.answer}</div>
        )}
      </motion.div>
    </div>
  );
};
