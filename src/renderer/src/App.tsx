import "./styles/global.css"
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
        <div className="text-3xl text-cyan-700 font-bold">Hello world</div>
    </>
  )
}

export default App
