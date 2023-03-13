import {RotatingText} from 'rotating-text'
import 'rotating-text/dist/index.css'
import './App.css'

function App() {

  return (
    <div className="App">
      <RotatingText 
        text="soynico.click"
        stagger={0.1}
        timing={0.5}
        className="rotating-text"
        style={{ fontSize: '50px', margin:'100px auto', color: '#25ced1', fontWeight: 'bold'}}
      />
    </div>
  )
}

export default App
