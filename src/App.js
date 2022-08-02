import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar"
import WorkersContextProvider from './WorkersContext'

function App() {
  return (
    <WorkersContextProvider>
      <Navbar />
      <MainRoutes />
    </WorkersContextProvider>
  );
}

export default App;
