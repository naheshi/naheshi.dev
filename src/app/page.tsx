import { Profile } from "@/components/profile";
import Projects from "@/components/proyects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between p-2 pt-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 w-full items-center justify-items-center">
        <div className="w-full max-w-3xl px-4 sm:px-8 mx-auto md:max-w-6xl">
          <Profile />
          <h3 className="text-2xl font-semibold leading-none mt-8">My work</h3>
          <div className="flex gap-4 mt-4 md:flex-row w-full">
            <div className="flex-1">
              <Projects />
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-16 flex flex-col items-center justify-center text-sm text-gray-500">
        <span>Made with 💖 by Naheshi</span>
        <span>© 2025 All rights reserved</span>
      </footer>
    </div>

  );
}
