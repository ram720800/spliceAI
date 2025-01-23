import { Element } from "react-scroll";
import { links } from "../const";

export const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="s1 relative pb-32 pt-24 max-lg:pb-24 max-lg:py-16"
      >
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="reative mr-6 max-sm:mr-2 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img src="/images/faq.png" alt="logo" width={100} height={55} />
              </div>
              <p className="body-2 text-start mb-10 max-w-md">
                Try now for free on iOS, Android, PC, Web - whaterver your
                flavour, we've got you covered
              </p>
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link"
                  >
                    <a href={url} className="size-12">
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden ">
              <div className="relative mt-4">
                <img src="/images/download.png" alt="download"/>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
