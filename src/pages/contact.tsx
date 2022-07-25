import { ChatIcon, MailIcon } from "@heroicons/react/outline";
import { Intro, JoinUs } from "../containers/Sections";
import { HomeLayout } from "../layouts/Home";

export default function Contact() {
  return (
    <HomeLayout>
      <Intro title="Get in touch with the InCryptoEncrypted team" />

      <section className="bg-gray-800 px-4 sm:px-12 lg:px-40 py-20 sm:py-40">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12 max-w-2xl mx-auto">
          <div className="w-full sm:w-2/3 md:w-1/2 flex space-x-4 px-6 py-2 bg-white text-black rounded-xl">
            <ChatIcon className="w-14 h-14 text-pink-600" />
            <div className="">
              <h4 className="text-lg">For general chat</h4>
              <p className="text-sm">
                Join the{" "}
                <a href="#" className="text-pink-600">
                  Discord
                </a>
              </p>
            </div>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/2 flex space-x-4 px-6 py-2 bg-white text-black rounded-xl">
            <MailIcon className="w-14 h-14 text-pink-600" />
            <div className="">
              <h4 className="text-lg">For all other inquiries</h4>
              <p className="text-sm">
                Send us a{" "}
                <a
                  href="mailto:support@incryptoencrypted.org"
                  className="text-pink-600"
                >
                  mail
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <JoinUs />
    </HomeLayout>
  );
}
