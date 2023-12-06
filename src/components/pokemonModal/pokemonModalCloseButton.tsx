"use client";
import { SlClose } from "react-icons/sl";
import { MouseEventHandler } from "react";

export interface PokemonModalCloseButtonProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const PokemonModalCloseButton = ({
  onClose,
}: PokemonModalCloseButtonProps) => {
  return (
    <button
      type="button"
      className="mx-auto max-w-min px-4 rounded-xl border-solid border border-gray-600 bg-gray-800 bg-opacity-90 p-2 flex-1 flex flex-row flex-nowrap items-center justify-center gap-2"
      onClick={onClose}
    >
      <SlClose className="text-white font-medium text-xl" />
      <span className="whitespace-nowrap text-white font-medium text-md">
        Cerrar Modal
      </span>
    </button>
  );
};
