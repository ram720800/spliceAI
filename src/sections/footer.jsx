import { Element } from "react-scroll";
import { socials } from "../const";
import { useState } from "react";
import { Button } from "../components/button";

export const Footer = () => {
  const [isValue, setIsValue] = useState();

  return (
    <section>
      <div className="container py-6 max-lg:py-1">
        <div className="relative grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:gap-0 ">
          <div>
            <img src="/images/spliceai.svg" alt="logo" />
          </div>
          <div>
            <p className="text-xl -translate-x-16 max-lg:text-sm max-xl:w-[300px] max-lg:pl-14 max-lg:pt-4">Subscribe to be in touch*</p>
            <input
              type="text"
              value={isValue}
              onChange={(e) => setIsValue(e.target.value)}
              placeholder="Your e-mail"
              className="placeholder:text-slate-400 block bg-s1 w-full border:none outline-none  py-4 pl-8 sm:text-sm -translate-x-16 max-lg:text-sm max-lg:pl-[4.4rem] max-lg:pt-4 max-xl:pl-2"
            />
          </div>
          <div>
            <button className="border rounded-md p-2 translate-y-6 max-lg:w-full">Subscribe</button>
          </div>
        </div>
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1 w-full max-lg:-translate-y-10" />

        <div className="grid grid-cols-3 body-1 text-start max-w-[880px] max-lg:grid max-lg:grid-cols-2  pt-20">
          <ul>
            <li className="opacity-70">Quick links</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Download</li>
          </ul>
          <ul className="max-lg:text-end">
            <li className="opacity-70">Legal</li>
            <li>Terms & condition</li>
            <li>Privacy Policy</li>
            <li>App Policy</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            <div className="flex flex-1 items-center gap-7 ml-24 max-lg:ml-0 max-lg:mt-10">
              {socials.map(({ id, title, icon, url }) => (
                <li key={id}>
                  <a href={url}>
                    <img src={icon} alt={title} className="object-contain" />
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className="small flex justify-between mt-16">
          <div>
            <p>&copy; 2025</p>
          </div>
          <div>
            <p>Crafted by ram</p>
          </div>
        </div>
      </div>
    </section>
  );
};
