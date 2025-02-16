import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Conta from './components/pages/Conta';
import { Provider } from './components/ui/provider';
import { Layout } from "./components/Layout"
import ContaInfo from './components/pages/ContaInfo';
import { AppContexProvider } from './components/AppContext';

function App() {
  return (
    <BrowserRouter>
      <AppContexProvider>
        <Provider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/conta/:id" element={<Conta />} /> 
              <Route path="/containfo" element={<ContaInfo />} /> 
            </Routes>
          </Layout>
        </Provider>
      </AppContexProvider>
    </BrowserRouter>
  );
}

export default App
