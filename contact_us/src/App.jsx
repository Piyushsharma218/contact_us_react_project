import Navigation from './components/navigation'
import Contactheader from './components/Contactheader'
import Form from './components/form'

import './App.css'

function App() {


  return (
    <div>
      <Navigation />
      <div className='main_container'>
        <Contactheader />
        <Form />
      </div>
    </div>
  )
}

export default App
