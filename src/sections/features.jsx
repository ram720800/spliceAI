import { Element } from "react-scroll";
import { details, features } from "../const";
import { Button } from "../components/button";

export const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex flex-nowrap border-2 border-p4 rounded-7xl md:flex-wrap md:overflow-hidden max-md:flex-col feature-after  max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, text, title, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50  max-md:border-2 max-md:border-p4 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-px h-16" />
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6 text-left">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5 text-left">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3 text-left ">
                  {text}
                </p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-p4 rounded-7xl max-md:hidden">
              <div className="absolute bg-p2 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-0 bottom-0 left-1/2 bg-s2 w-[1px] h-full -z-10" />
                  <div className="flex items-center justify-center mx-auto mb-3  transition-all duration-500 size-28">
                    <img
                      src={icon}
                      alt="title"
                      className="size-17/20 object-contain z-20 "
                    />
                  </div>
                  <h3 className="relative z-2 mx-auto max-w-32 my-0 base-small text-center uppercase">{ title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative max-md:hidden">
            <h1 className="h3 text-p4 text-left my-24 w-[500px]">The Ecosystem behind Splice AI</h1>
            <img src="/images/ecosystem.png" alt="ecosystem" className="w-[849px] h-[498px] ml-20" />
            <div className="relative flex justify-around items-center">
              <div className="border border-p5 p-5 -translate-y-56">01</div>
              <div className="border border-p5 p-5 -translate-y-[26rem] ">02</div>
              <div className="border border-p5 p-5 -translate-y-36 -translate-x-32">03</div>
              <div className="border border-p5 p-5 -translate-y-[22rem] -translate-x-36">04</div>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-10 text-start border-2 border-p4 p-8 rounded-lg" >
              <div className="h4">AI Models & Tools</div>
              <div className="body-2 ">Splice AI offers advanced AI models and tools explicitly designed for video editing</div>
              <div className="h4">Customize your video</div>
              <div className="body-2">Replace the AI avatar, colors, fonts, layouts and more with splice.</div>
              <div className="h4">Collaborate</div>
              <div className="body-2">Share your video and let others comment and collaborate</div>
              <div className="h4">Share and export</div>
              <div className="body-2"> Download your video, get a share link, or embed it anywhere.</div>
            </div>
            <div className="relative flex justify-around items-center">
              <div className="p-5 -translate-y-[26rem] -translate-x-[10.3rem]">01</div>
              <div className="p-5 -translate-y-[19rem]  -translate-x-[27rem]">02</div>
              <div className="p-5 -translate-y-[12.5rem] -translate-x-[43.7rem]">03</div>
              <div className="p-5 -translate-y-[6rem] -translate-x-[60.4rem]">04</div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
