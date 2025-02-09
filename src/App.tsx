import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Conta from './components/pages/Conta';
import { Provider } from './components/ui/provider';
import { Layout } from "./components/Layout"
import ContaInfo from './components/pages/ContaInfo';


function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/conta/:id" element={<Conta/>} />
            <Route path="/containfo" element={<ContaInfo/>} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App
