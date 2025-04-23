"use client";

import { useEffect } from "react";
import ChangeLanguage from "./changeLang";
import { Button } from "./ui/button";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header") as HTMLElement;
      if (window.scrollY > 20) {
        header.classList.add("bg-card/90", "backdrop-blur-sm", "shadow-sm");
        header.classList.remove("bg-transparent");
      } else {
        header.classList.add("bg-transparent");
        header.classList.remove("bg-card/80", "backdrop-blur-sm", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="header" className="header fixed top-0 z-50 w-full transition-all duration-500">
      <div className="flex items-center justify-between px-[6%] py-6">
        <h1 className="text-2xl">ARTHURpvn</h1>

        <div className="flex items-center gap-6">
          <ChangeLanguage />
          <Button> Entrar em Contato </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
