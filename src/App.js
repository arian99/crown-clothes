import { Switch,Route } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from './pages/shop/Shop.jsx'
import './App.css'
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
       <Route path="/shop" component={ShopPage}/>     
      </Switch>
       
     
    </div>
  );
}

export default App;
