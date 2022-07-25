import { MenuAlt4Icon } from "@heroicons/react/solid";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "../../../components/logo/Logo";

type Props = {
  children: React.ReactNode;
  href: string;
};

const variants: Variants = {
  hidden: {
    height: 0,
  },
  show: {
    height: "auto",
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const links = [
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Members",
    href: "/members",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Builds",
    href: "/builds",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="px-4 md:px-12 xl:px-40 py-4 flex items-center justify-between">
        {/* logo */}
        <Link href="/" passHref>
          <Logo />
        </Link>
        {/* logo end */}

        {/* mobile nav */}
        <div
          className="lg:hidden bg-gray-50 border border-gray-100 rounded-full p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <MenuAlt4Icon className="w-6 h-6" />
        </div>
        {/* mobile nav end */}

        {/* desktop nav */}
        <ul className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <NavLink key={link.title} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </ul>
        {/* desktop nav end */}
      </div>
      {open && (
        <motion.ul
          className="px-4 md:px-12 space-y-2 flex flex-col lg:hidden my-4"
          initial="hidden"
          animate="show"
          variants={variants}
        >
          {links.map((link) => (
            <MobileNavLink key={link.title} href={link.href}>
              {link.title}
            </MobileNavLink>
          ))}
        </motion.ul>
      )}
    </>
  );
}

const NavLink: React.FC<Props> = ({ children, href }) => {
  return (
    <li>
      <Link href={href}>
        <a className="py-6 text-lg font-light hover:font-base text-zinc-600 hover:text-black hover:underline underline-offset-4 decoration-pink-600">
          {children}
        </a>
      </Link>
    </li>
  );
};

const linkVariants: Variants = {
  hidden: {
    x: 60,
  },
  show: {
    x: 0,
  },
};

const MobileNavLink: React.FC<Props> = ({ children, href }) => {
  return (
    <motion.li variants={linkVariants}>
      <Link href={href}>
        <a className="py-2 text-lg font-semibold text-zinc-500 hover:text-zinc-900 block text-center">
          {children}
        </a>
      </Link>
    </motion.li>
  );
};
