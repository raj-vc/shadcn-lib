import { Github, Twitter } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="container">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="flex items-center">
            <div>Test</div>
            <div className="flex gap-5 justify-end items-center ml-auto w-64">
              <ModeToggle />
              <Github
                size="25"
                className="cursor-pointer hover:text-slate-800 dark:hover:text-slate-50"
              />
              <Twitter
                size="25"
                className="cursor-pointer hover:text-slate-800 dark:hover:text-slate-50"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
