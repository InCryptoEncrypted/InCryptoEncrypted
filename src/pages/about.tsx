import { Intro, JoinUs } from "../containers/Sections";
import { HomeLayout } from "../layouts/Home";

export default function About() {
  return (
    <HomeLayout>
      <Intro title="About our next-level multichain network" />

      <section className="flex flex-col justify-center bg-gray-800 text-white px-4 md:px-12 xl:px-40 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 text-center sm:text-left">
          <div className="sm:w-1/2 flex flex-col items-center sm:block">
            <h3 className="text-2xl md:text-4xl font-bold lg:w-5/6 mb-10 max-w-xs">
              Our mission
            </h3>
            <p className="text-xl font-light lg:w-5/6 mb-10 max-w-xs">
              A web3 network built for everyone
            </p>
          </div>
          <div className="sm:w-1/2 space-y-8">
            <p className="text-lg font-light">
              InCryptoEncrypted is a web3 network built for everyone.
            </p>
            <p className="text-lg font-light">
              Our mission is to create a desired web3 haven of multichain
              connections and builds through communication and educational
              services, also with technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col justify-center bg-gradient-to-br from-pink-600 via-pink-600 to-fuchsia-700 text-white px-4 md:px-12 xl:px-40 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 text-center sm:text-left">
          <div className="sm:w-1/2 flex flex-col items-center sm:block">
            <h3 className="text-2xl md:text-4xl font-bold lg:w-5/6 mb-10 max-w-xs">
              Our vision
            </h3>
            <p className="text-xl font-light lg:w-5/6 mb-10 max-w-xs">
              A web3 network built for everyone
            </p>
          </div>
          <div className="sm:w-1/2 space-y-8">
            <p className="text-lg font-light">
              InCryptoEncrypted is a web3 network built for everyone.
            </p>
            <p className="text-lg font-light">
              Our mission is to create a desired web3 haven of multichain connections and builds through communication and educational services, also with technical expertise.
            </p>
          </div>
        </div>
      </section> */}

      <JoinUs />
    </HomeLayout>
  );
}
