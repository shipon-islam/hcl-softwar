import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../constants";

export function MobileNavbar() {
  const { pathname } = useLocation();
  const hiddenPath = ["/login", "/signup", "/join"];

  return (
    <nav
      className={`${
        hiddenPath.includes(pathname) && "hidden"
      } fixed bottom-0 left-0 z-50  w-full  md:hidden bg-hcl-primary h-14`}
    >
      <div className="mx-auto h-full flex max-w-md items-center justify-around px-4 ">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={` flex flex-col items-center justify-center gap-1 ${
                isActive
                  ? "active-mobile-nav"
                  : "text-muted-foreground hover:text-primary"
              } h-full relative `}
            >
              <item.Icon className="text-white" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
