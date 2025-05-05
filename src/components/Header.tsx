"use client";

import { useEffect } from "react";
import ChangeLanguage from "./changeLang";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header") as HTMLElement;
      if (window.scrollY > 20) {
        header.classList.add("bg-card/90", "backdrop-blur-sm", "shadow-sm");
        header.classList.remove("bg-transparent");
      } else {
        header.classList.add("bg-transparent");
        header.classList.remove("bg-card/90", "backdrop-blur-sm", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className="bg-card/90 fixed top-0 z-50 w-screen shadow-sm backdrop-blur-sm transition-all duration-500"
    >
      <div className="flex items-center justify-between lg:px-[6%] max-md:justify-around py-4 md:py-6">
        <h1 className="text-xl md:text-2xl">ARTHURpvn</h1>

        <div className="flex items-center gap-2 max-md:ml-5 lg:gap-6">
          <ChangeLanguage />
          <Button className="text-xs md:text-base"> {t("header.contact")} </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
