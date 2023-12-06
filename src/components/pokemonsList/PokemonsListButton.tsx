"use client";
import Link from "next/link";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";

export interface PokemonsListPaginationButtonProps {
  axis: "left" | "right";
}

export const PokemonsListPaginationButton = ({
  axis,
}: PokemonsListPaginationButtonProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page: number = Number(searchParams.get("page") || "0");
  const nextPage: number = page + 1 < 1 ? 1 : page + 1;
  const previewPage: number = page - 1 < 1 ? 1 : page - 1;

  const nextPaginationParams: URLSearchParams = new URLSearchParams(
    searchParams,
  );
  const previewPaginationParams: URLSearchParams = new URLSearchParams(
    searchParams,
  );

  nextPaginationParams.set("page", `${nextPage}`);
  previewPaginationParams.set("page", `${previewPage}`);

  const nextPagination: string = `${pathname}?${nextPaginationParams.toString()}`;
  const previewPagination: string = `${pathname}?${previewPaginationParams.toString()}`;
  const href: string = axis === "left" ? previewPagination : nextPagination;

  return (
    <Link
      scroll={false}
      href={href}
      className="mx-auto max-w-min px-6 rounded-xl border-solid border border-gray-600 bg-gray-800 bg-opacity-90 p-2 flex-1 flex flex-row flex-nowrap items-center justify-center gap-1"
    >
      {axis === "left" && (
        <MdOutlineKeyboardDoubleArrowLeft className="text-white font-medium text-xl" />
      )}
      {axis === "right" && (
        <MdOutlineKeyboardDoubleArrowRight className="text-white font-medium text-xl" />
      )}
    </Link>
  );
};
