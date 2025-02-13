import {React} from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{}}>
      <div style={{position:"fixed", top:"0", left:"0", backgroundColor:"#e9e4e3", overflow:"hidden",height:"100vh", width:"100vw", zIndex:"-1"}}></div>
      <Dashboard/>
    </div>
  );
}

export default App;
