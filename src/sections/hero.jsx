import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "../components/button";

export const Hero = () => {
  return (
    <section className="relative pt-56 pb-40 max-lg:pt-52 max-lg:32 max-md:pt-36 max-md:pb-32 ">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w:512 max-lg:max-w-388 text-left">
            <div className="caption uppercase small-1 text-p3">
              Introducing Splice AI
            </div>
            <h1 className="h2 mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 w-[500px] max-lg:w-[300px] max-xl:w-fit">
              The future of video editing is here
            </h1>
            <p className="max-w-440 max-lg:md-5 max-md:mb-10 mb-14 body-2">
              Splice AI is the first video editing tool that uses AI to make
              editing videos as simple as editing text.
            </p>
            <LinkScroll
              to="features"
              smooth={true}
              duration={500}
              spy
              offset={-100}
            >
              <Button icon="/images/logo_02.png">Try it now</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-60 w-[1280px] pointer-events-none left-[calc(50%-300px)] hero-img_res max-lg:-translate-y-28">
            <img src="/images/Our_hero7.png" className="size-1230 max-lg:h-auto object-scale-down" alt="main" />
          </div>
        </div>
      </Element>
    </section>
  );
};
