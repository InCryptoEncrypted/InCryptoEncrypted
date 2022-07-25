import { Intro, JoinUs } from "../containers/Sections";
import { HomeLayout } from "../layouts/Home";

export default function Builds() {
  return (
    <HomeLayout>
      <Intro title="See what we are building at the EncryptedClan" />

      <section className="group relative overflow-hidden bg-black/40s bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white h-[70vh]">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(/images/chess-on-chain-1.png)] transition-transform duration-1000 sm:group-hover:scale-110"></div>
        <div className="absolute inset-0 px-4 sm:px-12 lg:px-40 flex flex-col justify-center">
          <p className="text-4xl md:text-6xl font-bold lg:w-5/6 mb-12">
            Love this game?
          </p>
        </div>
      </section>

      <JoinUs />
    </HomeLayout>
  );
}
