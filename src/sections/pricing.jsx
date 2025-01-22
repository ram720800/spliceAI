import clsx from "clsx";
import { Element } from "react-scroll";
import { useState } from "react";
import { plans } from "../const";
import CountUp from "react-countup";
import { Button } from "../components/button";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto  pb-40 pt-28 max-lg:border-none max-xl:max-w-4xl max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-2 border-p4 p-2 backdrop-blur-[6px] max-md:w-[290px]">
              <button
                onClick={() => setIsMonthly(true)}
                className={clsx("pricing-head_btn", isMonthly && "text-p4")}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={clsx("pricing-head_btn", !isMonthly && "text-p4")}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "g6 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !isMonthly && "translate-x-full"
                )}
              />
            </div>
          </div>

          {/*  pricing */}

          <div className="scroll-hide z-2 relative -mt-12 flex items-start max-xl:pt-12 max-xl:gap-5 max-xl:overflow-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] "
              >
                {index === 1 && (
                  <div className="absolute h-330 left-0 right-0 z-1 rounded-tl-3xl rounded-tr-3xl " />
                )}
                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-16" : "-top-6 max-xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-sm",
                      index === 1 ? "size-[120px]" : "size-[88px]"
                    )}
                  />
                </div>

                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24 max-lg:pt-12" : "pt-12"
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? "border-p3 text-p3" : "border-p4 text-p4"
                    )}
                  >
                    {plan.title}
                  </div>

                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p3" : "text-p4"
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={isMonthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                      <div className="small-1 relative top-3 ml-1">/ mo</div>
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "body-1 relative z-2 mb-10 w-full pb-9 text-center",
                      index === 1 ? "text-p3" : "text-p4"
                    )}
                  >
                    {plan.caption}
                  </div>

                  <ul className="mx-auto space-y-4 xl:px-7">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="relative flex items-center justify-center gap-5"
                      >
                        <img
                          src={"/images/tick.svg"}
                          alt="tick"
                          className="object-contain size-6"
                        />
                        <p className="flex-1 text-start">{feature}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex w-full justify-center">
                    <Button icon={plan.icon}>Subscribe</Button>
                  </div>

                  {index === 1 && (
                    <p className="max-lg:hidden small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['$'] after:mx-2.5 after:content-['$']">
                      Limited time offer
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
