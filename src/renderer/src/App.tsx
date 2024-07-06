import "./styles/global.css"

import Navigation from "./components/Navigation"
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
        <div className="h-screen w-screen bg-background flex flex-row relative">

          <Navigation />
          <section className="flex flex-col p-10 ml-20 w-full gap-5">
            <h1 className="text-3xl text-neutral-800">Dashboard</h1>

            <div className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded" />

            <div className="flex flex-row gap-5 w-full">

              <div className="w-1/2 h-60 border border-neutral-500/50 bg-neutral-800/20 rounded"></div>
              <div className="w-1/2 h-60 border border-neutral-500/50 bg-neutral-800/20 rounded"></div>

            </div>
            
          </section>
        </div>
         
    </>
  )
}

export default App
