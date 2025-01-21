import { Link, Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import { useEffect } from "react";



export const Header = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener;
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={()=>setOnScroll(false)}
      to={title}
      offset={-100}
      spy
      smooth
      
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-300 hover:text-p3
     max-lg:my-5 max-lg:h5 cursor-pointer"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full py-10 z-50 transition-all duration-500 max-lg:py-4",
        onScroll && "py-2 bg-black-100 backdrop-blur-[8px] "
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="flex-1 cursor-pointer z-2 ">
          <img
            src="/images/spliceai1.svg"
            width={115}
            height={55}
            alt="splice"
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:bg-s1 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4 ">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/spliceai1.svg"
                      width={160}
                      height={55}
                      alt="splice"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="Download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90 ">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />

              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/images/${isOpen ? "close (2)" : "magic"}.svg`}
            alt="Menu"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};
