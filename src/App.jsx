import MRouters from './router/index_right'
import Tabbar from './components/Tabbar'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MRouters />
        <Tabbar />
      </BrowserRouter>
    </div>
  )
}

export default App
