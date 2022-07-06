import { ToastContainer } from "react-toastify";
import MainRoutes from "./routes";

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const style = {
    fundo: {
      'backgroundColor': 'azure',
      'minHeight': '100vh'
    }
  }
  return (
    <div style={style.fundo}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme='dark'
      />
      <MainRoutes />
    </div>
  );
}

export default App;
