import Link from "next/link";
import { Discord } from "../../../components/icons/Discord";
import { Facebook } from "../../../components/icons/Facebook";
import { Github } from "../../../components/icons/Github";
import { Instagram } from "../../../components/icons/Instagram";
import { Twitter } from "../../../components/icons/Twitter";
import { Logo } from "../../../components/logo/Logo";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-20 pb-12 px-4 md:px-12 xl:px-40">
      <div className="sm:flex mb-20 sm:mb-40">
        <div className="flex-auto grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-0">
          <div>
            <h5 className="text-lg sm:text-xl font-light mb-4">Community</h5>
            <div className="space-y-2 text-xs md:text-base">
              <p className="text-gray-400">Meet ups</p>
              <p className="text-gray-400">Team</p>
              <p className="text-gray-400">Projects</p>
              <p className="text-gray-400">Build</p>
            </div>
          </div>
          <div>
            <h5 className="text-lg sm:text-xl font-light mb-4">Community</h5>
            <div className="space-y-2 text-xs md:text-base">
              <p className="text-gray-400">Meet ups</p>
              <p className="text-gray-400">Team</p>
              <p className="text-gray-400">Projects</p>
              <p className="text-gray-400">Build</p>
            </div>
          </div>
          <div>
            <h5 className="text-lg sm:text-xl font-light mb-4">Community</h5>
            <div className="space-y-2 text-xs md:text-base">
              <p className="text-gray-400">Meet ups</p>
              <p className="text-gray-400">Team</p>
              <p className="text-gray-400">Projects</p>
              <p className="text-gray-400">Build</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:block items-center sm:max-w-xs">
          <div className="flex items-center space-x-8">
            <a href="#">
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#">
              <Facebook className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a href="#">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#">
              <Discord className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#">
              <Twitter className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
          <p className="text-xs md:text-base mt-6 text-center sm:text-left">
            Subscribe to our newsletter to receive updates on our activities and
            events.
          </p>
          <button className="mt-6 border border-white hover:border-pink-600 hover:bg-pink-600 hover:text-white font-bold rounded-full px-8 py-2">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-12">
        <Link href="/" passHref>
          <Logo invert />
        </Link>
        <p className="text-xs sm:text-sm text-gray-400">
          {new Date().getFullYear()} all rights reserved
        </p>
      </div>
    </footer>
  );
}
