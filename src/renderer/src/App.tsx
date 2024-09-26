import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('close')

  return (
    <h1>
      hello
    </h1>
  )
}

export default App
