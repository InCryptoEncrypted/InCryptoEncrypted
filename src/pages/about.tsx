import { Intro, JoinUs } from "../containers/Sections";
import { HomeLayout } from "../layouts/Home";

export default function About() {
  return (
    <HomeLayout>
      <Intro title="About InCryptoEncrypted, the next-level DAO" />

      <section className="flex flex-col justify-center bg-gray-800 text-white px-4 md:px-12 xl:px-40 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 text-center sm:text-left">
          <div className="sm:w-1/2 flex flex-col items-center sm:block">
            <h3 className="text-2xl md:text-4xl font-bold lg:w-5/6 mb-10 max-w-xs">
              Our mission
            </h3>
            <p className="text-xl font-light lg:w-5/6 mb-10 max-w-xs">
              An open-source protocol built for everyone
            </p>
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

      <section className="flex flex-col justify-center bg-gradient-to-br from-pink-600 via-pink-600 to-fuchsia-700 text-white px-4 md:px-12 xl:px-40 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 text-center sm:text-left">
          <div className="sm:w-1/2 flex flex-col items-center sm:block">
            <h3 className="text-2xl md:text-4xl font-bold lg:w-5/6 mb-10 max-w-xs">
              Our vision
            </h3>
            <p className="text-xl font-light lg:w-5/6 mb-10 max-w-xs">
              An open-source protocol built for everyone
            </p>
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

      <JoinUs />
    </HomeLayout>
  );
}
