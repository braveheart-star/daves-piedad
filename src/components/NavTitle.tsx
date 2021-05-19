import Link from "next/link";

const NavItems = ["Projects", "About", "Contact", "Resume"];

interface NavProps {
  title: string;
  setTitle: Function;
}
export const NavTitle = (props: NavProps) => {
  const { title, setTitle } = props;

  function titleClick(title: string) {
    setTimeout(() => {
      setTitle(title);
      const element = document.getElementById(title);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 1);
  }

  return (
    <>
      <div className="items-center w-full my-3 md:my-0 md:flex ">
        {NavItems.map((item, index) => {
          return (
            <Link key={index} href={title === "Resume" ? "/resume" : "/"}>
              <button
                onClick={() => titleClick(item)}
                className="block p-2 font-mono text-xl xl:px-8 lg:px-4 focus:outline-none"
              >
                {item}
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
};
