import Link from "next/link";
import { NavTitle } from "./NavTitle";
import { MenuDropdown } from "./MenuDropdown";
import { MenuToggle } from "./MenuToogle";
import { ProudIcon } from "./icons";
import { useStoreActions, useStoreState } from "../store/hooks";

export const Header = () => {
  const { menuDrop } = useStoreState((state) => state.header);
  const { menuDropdown, setTitle } = useStoreActions(
    (actions) => actions.header
  );

  return (
    <div className="fixed z-10 w-full bg-white border-t-8 border-green-400 shadow-md opacity-75">
      <div className="container w-full max-w-screen-xl px-2 py-1 mx-auto ">
        <div className="flex items-center justify-between">
          <MenuToggle />

          <div className="hidden md:flex">
            <Link href="./">
              <div
                onClick={() => {
                  setTitle("home");
                  menuDropdown(false);
                }}
                className="flex items-center"
              >
                <ProudIcon className="object-center w-12 h-12" />
                <span className="font-serif font-semibold text-gray-900 md:px-8">
                  ShiXiong Han
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden m-2 md:flex ">
            <NavTitle />
          </div>

          <div className="md:hidden">
            <Link href="./">
              <div
                onClick={() => {
                  setTitle(`home`);
                  menuDropdown(false);
                }}
              >
                <ProudIcon className="object-center w-12 h-12" />
              </div>
            </Link>
          </div>
        </div>

        {menuDrop ? <MenuDropdown /> : null}
      </div>
    </div>
  );
};
