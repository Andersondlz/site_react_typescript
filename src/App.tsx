import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Conta from './components/pages/conta';
import { Provider } from './components/ui/provider';
import { Layout } from "./components/Layout"


function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/conta" element={<Conta/>} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App
