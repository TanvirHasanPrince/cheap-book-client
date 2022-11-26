
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="w-[1440px] m-auto" data-theme="emerald">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
