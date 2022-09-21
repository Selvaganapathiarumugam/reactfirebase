
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Jsframework from "./Components/jsframeworks";
import Phpframework from "./Components/phpframework";
function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/JS" element={ <Jsframework />} />
          <Route exact path="/PHP" element={ <Phpframework />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
