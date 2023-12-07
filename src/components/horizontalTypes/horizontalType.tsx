import Image from "next/image";

export interface HorizontalTypesProps {
  name: string;
  icon: string;
  color: string;
  active?: boolean;
  onClick: (options: { name: string; active: boolean }) => void;
}

export const HorizontalType = ({
  name,
  icon,
  color,
  active = false,
  onClick,
}: HorizontalTypesProps) => {
  const classes: string = `${
    active ? "border-solid border-2 border-green-500" : ""
  } ${color} flex flex-row justify-center items-center cursor-pointer snap-center w-[35px] max-w-[35px] min-w-[35px] h-[35px] max-h-[35px] min-h-[35px] rounded-3xl`;

  return (
    <li className={classes} onClick={() => onClick({ name, active })}>
      <div className="w-full h-full flex-1 flex justify-center items-center text-xs text-center text-white">
        {!!icon ? (
          <Image src={icon} alt={name} className="fill-amber-200 w-6" />
        ) : (
          <img src="#" alt={name} className="fill-amber-200 w-6" />
        )}
      </div>
    </li>
  );
};
