import Link from "next/link";
import { useStoreActions, useStoreState } from "../store/hooks";

const NavItems = ["Projects", "About", "Contact", "Resume"];
const NavItem = ({ title }: any) => {
  const clickedTitle = useStoreState((state) => state.header.title);
  const { setTitle, menuDropdown } = useStoreActions(
    (actions) => actions.header
  );

  function titleClick() {
    // after render the elements, preform click function
    setTimeout(() => {
      setTitle(title);
      menuDropdown(false);

      // scroll to element with id
      const element = document.getElementById(title);
      console.log(
        "🚀 ~ file: NavTitle.tsx ~ line 20 ~ setTimeout ~ element",
        element
      );

      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 1);
  }

  return (
    <Link href={title === "Resume" ? "./resume" : `/`}>
      <button
        onClick={titleClick}
        className={`${
          clickedTitle === title ? `text-green-600` : `text-green-800`
        } block font-mono p-2 xl:px-8 lg:px-4 focus:outline-none text-xl`}
      >
        {title}
      </button>
    </Link>
  );
};

export const NavTitle = () => {
  return (
    <nav>
      <div className="items-center w-full my-3 md:my-0 md:flex ">
        {NavItems.map((item, index) => {
          return <NavItem title={item} key={index} />;
        })}
      </div>
    </nav>
  );
};
