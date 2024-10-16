import { useState } from "react";
import ClassRecordOverview from "./class-record-overview";
import GradesOverview from "./grades-overview";
import { AnimatePresence, motion } from "framer-motion";

const OverViewSection = () => {
  const [slide, setSlide] = useState(1);
  console.log(slide);

  return (
    <section className="w-full ">
      <div className=" hidden lg:flex  overflow-hidden lg:flex-row lg:h-[30rem] gap-[1.2rem] md:gap-[3.2rem] w-full mt-[6rem] items-stretch justify-between">
        <GradesOverview />
        <ClassRecordOverview />
      </div>

      <div className="mt-[3rem] lg:hidden">
        <AnimatePresence mode="popLayout">
          {slide === 1 && (
            <motion.div
              initial={{ left: -200, opacity: 0 }}
              animate={{ left: 0, opacity: 1 }}
              exit={{ left: -500, opacity: 0, display: "none" }}
              transition={{ duration: 0.3 }}
              className="w-full relative"
            >
              <GradesOverview />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {slide === 2 && (
            <motion.div
              initial={{ right: -200, opacity: 0 }}
              animate={{ right: 0, opacity: 1 }}
              exit={{ right: -500, opacity: 0, display: "none" }}
              transition={{ duration: 0.3 }}
              className="w-full border relative"
            >
              <ClassRecordOverview />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex lg:hidden justify-center w-full mt-[3rem] items-center gap-[0.4rem]">
        <span
          onClick={() => setSlide(1)}
          className={`w-[1rem] h-[1rem] rounded-full bg-orange-500  ${
            slide === 1 ? "bg-opacity-100" : "bg-opacity-45"
          }  `}
        ></span>
        <span
          onClick={() => setSlide(2)}
          className={`w-[1rem] h-[1rem] rounded-full bg-orange-500  ${
            slide === 2 ? "bg-opacity-100" : "bg-opacity-45"
          }  `}
        ></span>
      </div>
    </section>
  );
};

export default OverViewSection;
