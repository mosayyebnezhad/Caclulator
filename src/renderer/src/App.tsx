import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('close')

  return (

    <>
      {/* <div id='titlebar' className='w-full h-8 bg-black'></div> */}
      <h1 className='bg-red-400'>
        hello
      </h1>
    </>
  )
}

export default App
