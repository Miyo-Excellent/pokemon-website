import { Search } from "@components/search";
import { HorizontalTypes } from "@components/horizontalTypes/horizontalTypes";

export interface HeaderProps {
  type?: string;
}

export const Header = ({ type }: HeaderProps) => {
  return (
    <header className="w-full flex flex-col lg:flex-row flex-nowrap gap-4">
      <HorizontalTypes selected={type} />

      <Search />
    </header>
  );
};
