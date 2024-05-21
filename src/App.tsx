function getImgUrl(name: string) {
  return new URL(`./assets/${name}.svg`, import.meta.url).href
}

function App() {
  return (
    <>
      <nav className="w-full" data-headlessui-state="">
        <div className="w-full h-20 flex justify-between items-center px-4 sm:px-8 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#afffe6]">Naheshi.</h1>
          <div className="hidden sm:flex space-x-4">
            <div className="uppercase text-lg font-semibold leading-6 p-4 transition hover:text-green-200 hover:delay-150 text-white">about</div>
            <div className="uppercase text-lg font-semibold leading-6 p-4 transition hover:text-green-200 hover:delay-150 text-white">portfolio</div>
            <div className="uppercase text-lg font-semibold leading-6 p-4 transition hover:text-green-200 hover:delay-150 text-white">contact</div>
          </div>
          <div className="sm:hidden">
            <button className="text-white hover:text-green-300" id="headlessui-disclosure-button-:r0:" type="button" aria-expanded="false" data-headlessui-state="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
            </button>
          </div>
        </div>
      </nav>
      <main>
        <section id="about">
          <div className="flex flex-row items-center justify-center mt-10">
            <img src="https://avatars.githubusercontent.com/u/25316009?v=4" alt="Naheshi ICON" className="rounded object-contain h-20 w-20 me-5" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white">Naheshi</span>
              <span className="text-3xl font-extrabold text-[#afffe6]">Full Stack</span>
            </div>
          </div>
          <div className="flex items-center justify-center text-white mt-5">
            <p className="text-lg object-contain w-1/2 h-25 font-semibold">I am a Full Stack developer with expertise in <span className="text-yellow-100">JavaScript</span>,
              <span className="text-sky-300">React</span>, <span className="text-green-300">Node.js</span>, <span className="text-sky-300">Py</span><span className="text-yellow-100">thon</span>
              . I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
            </p>
          </div>
          <div className="flex text-white justify-center mt-20">
            <h2 className="text-3xl font-extrabold text-white">TECH</h2>
          </div>
          <div className="flex gap-x-2 mt-5 justify-center items-center mb-5">
            <img src={getImgUrl('js')} alt="" className="w-10" />
            <img src={getImgUrl('nodejs')} alt="" className="w-10" />
            <img src={getImgUrl('reactjs')} alt="" className="w-10" />
            <img src={getImgUrl('nextjs')} alt="" className="w-10" />
            <img src={getImgUrl('python')} alt="" className="w-10" />
            <img src={getImgUrl('java')} alt="" className="w-10" />
          </div>
        </section>
        <section id="portfolio" className="mt-10 md:mt-20">
          <div className="flex text-white justify-center">
            <h2 className="text-3xl font-extrabold text-white mt-5 md:mt-10">PORTFOLIO</h2>
          </div>
          <div className="flex items-center justify-center mt-5 mb-5">
            <div className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
              <div className="flex items-center justify-center w-full h-52 max-w-96 sm:w-96 bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path></svg></div><div className="w-full">
                <div className="h-2.5 rounded-full bg-gray-700 w-32 sm:w-48 mb-4">
                </div><div className="h-2 rounded-full bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div><div className="h-2 rounded-full bg-gray-700 max-w-[480px] mb-2.5">
                </div><div className="h-2 rounded-full bg-gray-700 max-w-[480px] mb-2.5"></div><div className="h-2 rounded-full bg-gray-700 max-w-[360px]">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2 className="text-3xl text-center text-white font-extrabold">CONTACT</h2>
          <div className="flex justify-center mt-5 mb-5">
            <a href="https://github.com/naheshi"><img src={getImgUrl('github')} alt="github" className="w-10" /></a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
