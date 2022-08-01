import { JoinUs } from "../containers/Sections";
import { HomeLayout } from "../layouts/Home";

export default function Community() {
  return (
    <HomeLayout>
      <section className="group relative overflow-hidden bg-black/40s bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white h-[calc(100vh-110px)]">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(/images/hub-4.jpeg)] transition-transform duration-1000 sm:group-hover:scale-110"></div>
        <div className="absolute inset-0 px-4 sm:px-12 lg:px-40 flex flex-col justify-center">
          <p className="text-4xl md:text-6xl font-bold lg:w-5/6 mb-12">
            The next-level multichain network
          </p>
          <div className="">
            <button className="border-2 border-white rounded-full px-20 py-4">
              Meet us
            </button>
          </div>
        </div>
      </section>

      <section className="group relative overflow-hidden bg-black/40s bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white h-[70vh]">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(/images/hub-2.jpeg)] transition-transform duration-1000 sm:group-hover:scale-110"></div>
        <div className="absolute inset-0 px-4 sm:px-12 lg:px-40 flex flex-col justify-center items-end">
          <p className="text-4xl md:text-6xl font-bold lg:w-5/6 mb-12 text-right">
            Blockchain development
          </p>
          <div className="">
            <button className="border-2 border-white rounded-full px-20 py-4">
              Meet us
            </button>
          </div>
        </div>
      </section>

      <section className="group relative overflow-hidden bg-black/40s bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white h-[70vh]">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(/images/hub-1.jpeg)] transition-transform duration-1000 sm:group-hover:scale-110"></div>
        <div className="absolute inset-0 px-4 sm:px-12 lg:px-40 flex flex-col justify-center">
          <p className="text-4xl md:text-6xl font-bold lg:w-5/6 mb-12">
            Smart contracts and DApps
          </p>
          <div className="">
            <button className="border-2 border-white rounded-full px-20 py-4">
              Meet us
            </button>
          </div>
        </div>
      </section>

      <section className="group relative overflow-hidden bg-black/40s bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white h-[70vh]">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(/images/hub-6.jpeg)] transition-transform duration-1000 sm:group-hover:scale-110"></div>
        <div className="absolute inset-0 px-4 sm:px-12 lg:px-40 flex flex-col justify-center items-end">
          <p className="text-4xl md:text-6xl font-bold lg:w-5/6 mb-12 text-right">
            Hands-on training and tutorials
          </p>
          <div className="">
            <button className="border-2 border-white rounded-full px-20 py-4">
              Meet us
            </button>
          </div>
        </div>
      </section>

      <section className="group relative overflow-hidden bg-black/40s bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white h-[70vh]">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(/images/hub-3.jpeg)] transition-transform duration-1000 sm:group-hover:scale-110"></div>
        <div className="absolute inset-0 px-4 sm:px-12 lg:px-40 flex flex-col justify-center">
          <p className="text-4xl md:text-6xl font-bold lg:w-5/6 mb-12">
            Powerful community
          </p>
          <div className="">
            <button className="border-2 border-white rounded-full px-20 py-4">
              Meet us
            </button>
          </div>
        </div>
      </section>

      <JoinUs />
    </HomeLayout>
  );
}
