import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";

export const Pricing = () => {
  const [monthly, setmonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-p4 bg-s1 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm ">
              Flexible pricing for team of all sizes
            </h3>
            <div className=" relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-p4 bg-s1 p-2 backdrop-blur-lg max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setmonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setmonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "g6 rounded-14 before:h-100 pricing-head_bth absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              ></div>
            </div>
                  </div>
                  {/* pricing sections */}
          <div></div>
        </div>
      </Element>
    </section>
  );
};
