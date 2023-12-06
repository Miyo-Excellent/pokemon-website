"use client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export interface SearchProps {}

export const Search = (props: SearchProps) => {
  const [params, setParams] = useState<URLSearchParams | undefined>(undefined);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onChangeQuery = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const query: string = target.value;
    const _params: URLSearchParams = new URLSearchParams(searchParams);

    if (query) _params.set("query", query);
    else _params.delete("query");

    setParams(_params);
  };

  const onSearch = ({}: MouseEvent<HTMLButtonElement>) => {
    if (!!params) router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex-1 flex flex-col flex-nowrap">
      <div className="flex flex-1 flex-row flex-nowrap justify-start items-center">
        <BsSearch className="text-white font-bold text-lg" />

        <h4 className="pl-2 mb-1 text-white text-lg">Encuentra tu Pokemon:</h4>
      </div>

      <div className="pr-12 pl-2 bg-gray-700 flex-1 relative flex flex-row flex-nowrap rounded-3xl border-white border-[1px] border-solid">
        <label className="flex-1 flex flex-nowrap flex-row">
          <input
            type="search"
            className="flex-1 p-2 text-white"
            placeholder="Buscar..."
            onChange={onChangeQuery}
            defaultValue={searchParams.get("query")?.toString()}
          />
        </label>

        <button
          onClick={onSearch}
          type="button"
          className="w-[35px] h-[35px] absolute top-[5%] right-[3px] bg-gradient-to-r from-purple-950 via-purple-900 to-purple-800 p-2 rounded-3xl"
        >
          <BsSearch className="text-white font-bold text-xl" />
        </button>
      </div>
    </div>
  );
};
