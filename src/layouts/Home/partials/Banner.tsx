export function Banner() {
  return (
    <div className="group px-4 md:px-12 xl:px-40 py-2 flex items-center justify-between text-sm font-semibold text-zinc-500 border-b">
      <p className="group-hover:text-zinc-800 cursor-pointer text-xs sm:text-sm">
        EN
      </p>
      <div className="flex items-center space-x-2 text-xs sm:text-sm">
        <a href="#" className="group-hover:text-zinc-800">
          Whitepaper
        </a>
        <a href="#" className="group-hover:text-zinc-800">
          Github
        </a>
        <a href="#" className="group-hover:text-zinc-800">
          <button className="border border-zinc-400 hover:border-zinc-800 hover:bg-zinc-800 hover:text-white px-3 py-1 rounded-lg">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
}
