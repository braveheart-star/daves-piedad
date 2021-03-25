import React from "react";
import { useStoreActions, useStoreState } from "../store/hooks";
import { CloseIcon } from "./icons";
import { MenuIcon } from "./icons";

export const MenuToggle = () => {
  const menuDrop = useStoreState((state) => state.header.menuDrop);
  const menuDropdown = useStoreActions(
    (actions) => actions.header.menuDropdown
  );

  return (
    <div
      className={`${
        menuDrop ? `border-green-600` : `border-gray-600`
      } items-center border rounded shadow-sm md:hidden`}
    >
      <button
        onClick={() => menuDropdown(!menuDrop)}
        className="flex justify-start px-3 py-2 focus:outline-none"
      >
        {menuDrop ? (
          <CloseIcon className="object-cover w-3 h-3 text-green-700 fill-current" />
        ) : (
          <MenuIcon className="object-cover w-3 h-3 text-gray-700 fill-current" />
        )}
      </button>
    </div>
  );
};
