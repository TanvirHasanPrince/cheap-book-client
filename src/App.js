
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import  { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-[1440px] m-auto" data-theme="emerald">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
