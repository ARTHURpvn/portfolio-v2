import ChangeLanguage from "./changeLang";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 px-[6%]">
      <h1 className="text-2xl">ARTHURpvn</h1>

      <div className="flex items-center gap-6">
        <ChangeLanguage />
        <Button> Entrar em Contato </Button>
      </div>
    </div>
  );
};

export default Header;
