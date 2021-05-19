import { useRouter } from "next/router";
const NavItems = ["Projects", "About", "Contact", "Resume"];

interface NavProps {
  clickedTitle: string;
  setTitle: Function;
}
export const NavTitle = (props: NavProps) => {
  const { setTitle } = props;
  const router = useRouter();

  function titleClick(title: string) {
    const { pathname } = router;

    if (title === "Resume") {
      router.push("/resume");
      return;
    } else {
      pathname === "/resume" && router.push("/");
    }

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
            <button
              key={index}
              onClick={() => titleClick(item)}
              className="block p-2 font-mono text-xl xl:px-8 lg:px-4 focus:outline-none"
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};
