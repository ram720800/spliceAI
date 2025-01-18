import { Element } from "react-scroll";
import { faq } from "../const";
import { FaqItems } from "../components/faqitems";

export const Faq = () => {
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative py-28">
          <div>
            <p className="text-p3 body-2 uppercase text-start">
              Have a Question ?
            </p>
            <h3 className="h3 max-md:h5 max-w-640 text-start max-lg:max-w-md mb-7 text-p4 mt-4">
              Frequently asked questions
            </h3>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1 rounded-md">
          <div className="container flex gap-10 max-lg:block ">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq.png" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.map((item, index) => (
                <FaqItems key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
