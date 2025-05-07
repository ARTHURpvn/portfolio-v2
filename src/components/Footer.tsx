"use client";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-card flex h-16 items-center justify-center px-4 md:h-20 md:px-6">
      <p className="text-center text-base font-semibold md:text-lg">
      {t("footer.copyright")} <span className="text-primary font-bold"> arthurpvn.dev </span>{" "} {t("footer.rights")}
        
      </p>
    </div>
  );
};

export default Footer;
