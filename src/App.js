import { Switch,Route } from "react-router";
import Homepage from "./pages/homepage/Homepage";

const Hats=()=>{
  return(
    <h2>Hats page</h2>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path="/" component={Homepage}/>     
       <Route path="/hats" component={Hats}/>     
      </Switch>
       
     
    </div>
  );
}

export default App;
