
import Calculator from './components/Calculator';


function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('close')


  return (

    <>

      <div className='w-full h-8 flex mb-5'>
        <div id='main' className='bg-black  w-10/12 opacity-35 '></div>
        <button className='bg-black  opacity-90 w-2/12 flex justify-center items-center' onClick={ipcHandle}>X</button>
      </div>
      <Calculator />
    </>
  )
}

export default App
