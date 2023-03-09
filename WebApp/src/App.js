import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthenticatedPage from './Authentication/AuthenticatedPage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthenticatedPage>
        <AppRoutes />
      </AuthenticatedPage>
    </BrowserRouter>
  );
}

export default App;