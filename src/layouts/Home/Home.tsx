import Head from "next/head";
import { Banner } from "./partials/Banner";
import { Footer } from "./partials/Footer";
import { NavBar } from "./partials/Nav";

type Props = {
  children: React.ReactNode;
};

export function HomeLayout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>InCryptoEncrypted - Welcome to the EncryptedClan 👋</title>
        <meta name="description" content="Welcome to the EncryptedClan 👋" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Banner />
        <NavBar />
      </header>

      <main className="min-h-screen">{children}</main>

      <Footer />
    </div>
  );
}
