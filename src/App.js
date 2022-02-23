import "./App.css";
import Users from "./Users";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    </div>
  );
}

export default App;
