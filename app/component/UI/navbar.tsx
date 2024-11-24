import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import logo from "@/public/PeerHub Logo-07.svg";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", active: true },
  { name: "Community", href: "/community", active: true },
  { name: "Knowledge Vault", href: "/knowledge-vault", active: true },
  { name: "Events", href: "/events", active: true },
  { name: "Download App", href: "/", active: false },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className="bg-[#FBF8F6] w-full font-Raleway sticky top-0 z-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex flex-1 items-center  sm:justify-start py-1">
            <div className="flex flex-shrink-0 items-center">
              <Image
                alt="Your Company"
                src="/PeerHub Logo-05.svg"
                className="h-16 w-16"
                width={100}
                height={50}
              />
            </div>
            <div className="hidden lg:ml-6 md:block sm:flex-grow">
              <div className="flex gap-6 lg:gap-16 justify-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    // aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      pathname === item.href
                        ? "border border-navyBlue text-navyBlue"
                        : "text-navyBlue hover:bg-gray-700 hover:text-white",
                      !item.active && "pointer-events-none",
                      "rounded-3xl px-4 py-2 text-base lg:text-lg font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Menu
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <X
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              // aria-current={item.current ? "page" : undefined}
              className={classNames(
                pathname === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                !item.active && "pointer-events-none",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
export default Navbar;
