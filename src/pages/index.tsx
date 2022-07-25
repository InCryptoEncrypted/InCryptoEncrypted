import {
  ArrowsExpandIcon,
  CloudIcon,
  CubeTransparentIcon,
  FingerPrintIcon,
  GlobeIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { Discord } from "../components/icons/Discord";
import { Facebook } from "../components/icons/Facebook";
import { Github } from "../components/icons/Github";
import { Instagram } from "../components/icons/Instagram";
import { Twitter } from "../components/icons/Twitter";
import { Globe } from "../containers/Globe";
import { JoinUs } from "../containers/Sections";
import { HomeLayout } from "../layouts/Home";

export default function Home() {
  return (
    <HomeLayout>
      {/* hero */}
      <section className="relative pt-8 sm:pt-12 lg:pt-0 px-4 md:px-12 xl:px-40 lg:flex items-center min-h-[calc(100vh-110px)]">
        {/* cta */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-zinc-900 font-extrabold">
            Welcome to the <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-pink-500 via-purple-500 to-green-500 underline underline-offset-4">
              EncryptedClan
            </span>{" "}
            👋
          </h1>
          <h2 className="mt-6 text-xl sm:text-2xl font-light">
            InCryptoEncrypted unites and secures a growing ecosystem of
            specialized blockchains called parachains. Apps and services on
            Polkadot can securely communicate across
          </h2>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-2 flex-auto sm:flex-none sm:px-12 sm:py-3 border border-zinc-800 font-bold bg-zinc-800 text-white hover:bg-zinc-900 rounded-lg">
              Discover
            </button>
            <button className="px-6 py-2 flex-auto sm:flex-none sm:px-10 sm:py-3 border border-zinc-800 font-bold bg-transparent text-zinc-800 rounded-lg">
              Learn More
            </button>
          </div>

          {/* socials */}
          <div className="mt-20 flex items-center space-x-6">
            <a href="#">
              <Github className="w-8 h-8" />
            </a>
            <a href="#">
              <Facebook className="w-10 h-10" />
            </a>
            <a href="#">
              <Instagram className="w-8 h-8 hover:text-pink-600 transition-none" />
            </a>
            <a href="#">
              <Discord className="w-8 h-8 hover:text-indigo-700 transition-none" />
            </a>
            <a href="#">
              <Twitter className="w-8 h-8 hover:text-blue-400 transition-none" />
            </a>
          </div>
          {/* socials end */}
        </div>
        {/* cta end */}

        {/* illustration */}
        <div className="lg:w-1/2 py-20 px-12 lg:px-0">
          <Globe />
        </div>
        {/* illustration end */}
      </section>
      {/* hero end */}

      {/* interests */}
      <section className="px-4 md:px-12 xl:px-40 py-20">
        {/* interest cards */}
        <div className="grid gap-4 sm:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <InterestCard
            icon={<GlobeIcon className="h-14 w-14 text-pink-600" />}
            title={"True interoperability"}
            details={`
              Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens.
              Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.
            `}
          />
          <InterestCard
            icon={<ArrowsExpandIcon className="h-14 w-14 text-pink-600" />}
            title={"Economic & transactional scalability"}
            details={`
              Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. 
              Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains.
            `}
          />
          <InterestCard
            icon={<CubeTransparentIcon className="h-14 w-14 text-pink-600" />}
            title={"Easy blockchain innovation"}
            details={`
              Create a custom blockchain in minutes using the Substrate framework.
              Connect your chain to Polkadot and get interoperability and security from day one.
              This ease of development helps Polkadot's network grow. 
            `}
          />
          <InterestCard
            icon={<CloudIcon className="h-14 w-14 text-pink-600" />}
            title={"High energy efficiency"}
            details={`
              Polkadot consumes a small fraction of the energy used by conventional blockchains thanks to its next-generation nominated proof-of-stake (NPoS) model.
              Using the equivalent of ~6.6 US households worth of energy per year, Polkadot has the lowest carbon footprint among proof-of-stake protocols analyzed in recent research.
            `}
          />
          <InterestCard
            icon={<FingerPrintIcon className="h-14 w-14 text-pink-600" />}
            title={"Security for everyone"}
            details={`
              Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way.
              Chains remain independent in their governance, but united in their security.
            `}
          />
          <InterestCard
            icon={<TrendingUpIcon className="h-14 w-14 text-pink-600" />}
            title={"User-driven governance"}
            details={`
              Polkadot has a sophisticated governance system where all stakeholders have a voice.
              Network upgrades are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Polkadot's development remains future-proof and community-driven.
            `}
          />
        </div>
        {/* interest cards end */}
        {/* learn more interests */}
        <div className="flex flex-col items-center mt-12 sm:mt-20">
          <h3 className="text-3xl font-light mb-10 text-center">
            Learn more about EncryptedClan
          </h3>
          <button className="px-12 py-3 border border-pink-600 bg-pink-600 text-white hover:bg-transparent hover:text-pink-600 font-bold rounded-full">
            Discover
          </button>
        </div>
        {/* learn more interests end */}
      </section>
      {/* interests end */}

      {/* technologies */}
      <section className="bg-gray-800 text-white px-4 md:px-12 xl:px-40 py-20">
        {/* technologies heading */}
        <div className="flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Powering the Polkadot network
          </h3>
          <p className="text-lg sm:text-xl text-center">
            The DOT token serves three distinct purposes:
          </p>
        </div>
        {/* technologies heading end */}
        {/* technologies cards */}
        <div className="grid gap-4 sm:gap-12 grid-cols-1 xl:grid-cols-3 mt-12 md:mt-20">
          {/* rust */}
          <div className="flex flex-col items-center p-4">
            <div className="group mb-6 w-32 h-32 bg-white rounded-full overflow-hidden p-3 flex items-center justify-center">
              <Image
                src={`/images/rust.png`}
                width={128}
                height={128}
                alt="Rust"
                className="object-cover object-center transition-transform duration-500 scale-[.85] group-hover:scale-90"
              />
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold mb-6">Rust</h4>
            <p className="text-center max-w-2xl">
              New parachains are added by bonding tokens. Outdated or non-useful
              parachains are removed by removing bonded tokens. This is a form
              of proof of stake.
            </p>
          </div>
          {/* rust end */}
          {/* substrate */}
          <div className="flex flex-col items-center p-4">
            <div className="group mb-6 w-32 h-32 bg-white rounded-full overflow-hidden p-3">
              <Image
                src={`/images/substrate.png`}
                width={128}
                height={128}
                alt="Substrate"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold mb-6">Substrate</h4>
            <p className="text-center max-w-2xl">
              New parachains are added by bonding tokens. Outdated or non-useful
              parachains are removed by removing bonded tokens. This is a form
              of proof of stake.
            </p>
          </div>
          {/* substrate end */}
          {/* clarity */}
          <div className="flex flex-col items-center p-4">
            <div className="group mb-6 w-32 h-32 rounded-full overflow-hidden relative">
              <Image
                src={`/images/clarity.png`}
                width={128}
                height={128}
                alt="Clarity"
                className="object-cover object-center invert transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold mb-6">Clarity</h4>
            <p className="text-center max-w-2xl">
              New parachains are added by bonding tokens. Outdated or non-useful
              parachains are removed by removing bonded tokens. This is a form
              of proof of stake.
            </p>
          </div>
          {/* clarity end */}
        </div>
        {/* technologies cards end */}
        {/* learn more technologies */}
        <div className="flex flex-col items-center mt-12 sm:mt-20">
          <h3 className="text-3xl font-light mb-10 text-center">
            Learn more about the EncryptedClan
          </h3>
          <button className="px-12 py-3 border border-zinc-50 bg-zinc-50 text-zinc-800 hover:bg-transparent hover:text-white font-bold rounded-full">
            Discover
          </button>
        </div>
        {/* learn more technologies end */}
      </section>
      {/* technologies end */}

      {/* goals */}
      <section className="flex flex-col justify-center bg-gradient-to-br from-pink-600 via-pink-600 to-fuchsia-700 text-white px-4 md:px-12 xl:px-40 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 text-center sm:text-left">
          <div className="sm:w-1/2 flex flex-col items-center sm:block">
            <h3 className="text-2xl md:text-4xl font-bold lg:w-5/6 mb-10 max-w-xs">
              An open-source protocol built for everyone
            </h3>
            <button className="border border-white hover:bg-white hover:text-pink-600 font-bold rounded-full px-12 py-3">
              Meet us
            </button>
          </div>
          <div className="sm:w-1/2 space-y-8">
            <p className="text-lg font-light">
              Polkadot is an open-source project founded by the Web3 Foundation.
            </p>
            <p className="text-lg font-light">
              Web3 Foundation has commissioned five teams and over 100
              developers to build Polkadot, including:
            </p>
          </div>
        </div>
      </section>
      {/* goals end */}

      {/* socials */}
      <section className="group relative overflow-hidden bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white h-[70vh]">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(/images/group-4.jpeg)] transition-transform duration-1000 sm:group-hover:scale-110"></div>
        <div className="absolute inset-0 px-4 sm:px-12 lg:px-40 flex flex-col justify-center">
          <h3 className="text-4xl md:text-6xl font-bold lg:w-5/6 mb-12">
            Founded by some of the blockchain industry&apos; s foremost builders
          </h3>
          <div className="">
            <button className="border-2 border-white font-bold rounded-full px-20 py-4">
              Meet us
            </button>
          </div>
        </div>
      </section>
      {/* socials end */}

      <JoinUs />
    </HomeLayout>
  );
}

type InterestCardProps = {
  icon: React.ReactNode;
  title: string;
  details: string;
};

function InterestCard({ icon, title, details }: InterestCardProps) {
  return (
    <div className="flex flex-col items-center md:items-start h-80s">
      <div className="mb-4">{icon}</div>
      <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
        {title}
      </h4>
      <p className="text-zinc-900 font-light leading-relaxed text-center sm:text-left text-sm sm:text-base">
        {details}
      </p>
    </div>
  );
}
