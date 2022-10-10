import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utilitis/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
