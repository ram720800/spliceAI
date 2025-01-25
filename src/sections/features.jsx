import { Element } from "react-scroll";
import { details, features } from "../const";
import { Button } from "../components/button";
import clsx from "clsx";

export const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex flex-nowrap md:flex-wrap border-2 border-p4 rounded-7xl md:overflow-hidden max-md:flex-col feature-after max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, text, title, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50  max-md:border-2 max-md:border-p4 max-md:rounded-3xl max-md:flex-320 max-md:bg-s3 "
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-1 flex items-center justify-center flex-col">
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6 text-left">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-xl:h5 text-left">
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
                  <h3 className="relative z-2 mx-auto max-w-32 my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <h1 className="h3 text-p4 text-left my-24 w-[500px] max-sm:h5 max-sm:w-[300px] mb-0">
              The Ecosystem behind Splice AI
            </h1>
            <div className="">
              <img
                src="/images/ecosystem.png"
                alt="ecosystem"
                className="object-center object-contain w-[950px] h-[560px] max-sm:-mt-36 mt-12 mx-auto"
              />
              <div className="relative flex justify-around items-center">
                <div className="border border-p5 p-5 max-sm:p-1 -translate-y-56 max-sm:-translate-y-64">
                  01
                </div>
                <div className="border border-p5 p-5 max-sm:p-1 -translate-y-[28rem] max-sm:-translate-y-[23rem]">
                  02
                </div>
                <div className="border border-p5 p-5 max-sm:p-1 -translate-y-36 -translate-x-32 max-sm:-translate-x-8 max-sm:-translate-y-60">
                  03
                </div>
                <div className="border border-p5 p-5 max-sm:p-1 -translate-y-[24rem] -translate-x-16 max-sm:-translate-x-3 max-sm:-translate-y-[21rem] max-lg:-translate-x-8">
                  04
                </div>
              </div>
            </div>
          </div>

          <div className="feature-after relative max-sm:-mt-36">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 mt-10 text-start border-2 border-p4 p-8 rounded-lg">
              <div className="h4 max-sm:h5">AI Models & Tools</div>
              <div className="body-2 max-sm:body-3">
                Splice AI offers advanced AI models and tools explicitly
                designed for video editing
              </div>
              <div className="h4 max-sm:h5">Customize your video</div>
              <div className="body-2 max-sm:body-3">
                Replace the AI avatar, colors, fonts, layouts and more with
                splice.
              </div>
              <div className="h4 max-sm:h5">Collaborate</div>
              <div className="body-2 max-sm:body-3">
                Share your video and let others comment and collaborate
              </div>
              <div className="h4 max-sm:h5">Share and export</div>
              <div className="body-2 max-sm:body-3">
                Download your video, get a share link, or embed it anywhere.
              </div>
            </div>

            <div className="relative flex justify-around items-center max-md:hidden">
              <div className="p-5 max-sm:p-1 -translate-y-[26rem] -translate-x-[10.3rem]">
                01
              </div>
              <div className="p-5 max-sm:p-1 -translate-y-[19rem]  -translate-x-[28rem]">
                02
              </div>
              <div className="p-5 max-sm:p-1 -translate-y-[12.5rem] -translate-x-[45.5rem]">
                03
              </div>
              <div className="p-5 max-sm:p-1 -translate-y-[6rem] -translate-x-[63rem]">
                04
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
