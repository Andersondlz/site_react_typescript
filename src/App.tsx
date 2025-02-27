import { BrowserRouter} from 'react-router-dom';

import { Provider } from './components/ui/provider';
import { Layout } from "./components/Layout"
import { AppContexProvider } from './components/AppContext';
import MainRoutes from './routes';
import { getAllLocalStorage } from './services/storage';

function App() {

  const localStorage = getAllLocalStorage();
  console.log(localStorage)
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
