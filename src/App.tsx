import { BrowserRouter } from 'react-router-dom';

import { Provider } from './components/ui/provider';
import { Layout } from "./components/Layout"
import { AppContexProvider } from './components/AppContext';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  if (!getAllLocalStorage()){
    createLocalStorage();
  }
  
  return (
    <BrowserRouter>
      <AppContexProvider>
        <Provider>
          <Layout>
            <MainRoutes />
          </Layout>
        </Provider>
      </AppContexProvider>
    </BrowserRouter>
  );
}

export default App
