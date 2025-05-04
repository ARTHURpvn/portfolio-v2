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
  return (
    <div>
      <Select defaultValue="en">
        <SelectTrigger className="rounded-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="es">SP</SelectItem>
            <SelectItem value="fr">FR</SelectItem>
            <SelectItem value="pt-br">PT-BR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChangeLanguage;
