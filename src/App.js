import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/router";

function App() {
  return (
    <div className="mx-auto dark:bg-black min-h-screen">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
