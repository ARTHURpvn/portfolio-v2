'use client';

import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <Select defaultValue={i18n.language} onValueChange={changeLanguage}>
        <SelectTrigger className="rounded-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="es">ES</SelectItem>
            <SelectItem value="fr">FR</SelectItem>
            <SelectItem value="pt">PT-BR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChangeLanguage;
