import { Gamepad2, Search, Upload, User } from "lucide-react";

function Navbar({ onUploadClick }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-violet-600 text-white grid place-content-center shadow-md">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <span className="font-bold tracking-tight text-gray-900 text-lg">GameForge Hub</span>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 justify-center max-w-xl">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Search mods, models, UI kits, effects..."
              className="w-full rounded-md border border-gray-200 bg-white/80 pl-9 pr-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onUploadClick}
            className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-violet-700 active:bg-violet-800"
          >
            <Upload className="h-4 w-4" />
            Upload
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
