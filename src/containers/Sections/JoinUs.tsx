import Link from "next/link";

export function JoinUs() {
  return (
    <section className="px-4 md:px-12 xl:px-40 py-20 sm:py-32">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-10">
          Want to get involved?
        </h3>
        <Link href="/community">
          <a>
            <button className="border border-pink-600 text-pink-600 hover:border-pink-600 hover:bg-pink-600 hover:text-white font-bold rounded-full px-8 py-3 mb-6">
              Join the community
            </button>
          </a>
        </Link>
        <p className="font-light">
          or learn about{" "}
          <Link href="/builds">
            <a className="underline decoration-pink-600 decoration-1 underline-offset-4">
              our builds
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
}
