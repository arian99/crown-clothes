import { Switch,Route } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from './pages/shop/Shop.jsx'
import './App.css'
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
       <Route exact path="/" component={Homepage}/>     
       <Route path="/shop" component={ShopPage}/>     
      </Switch>
       
     
    </div>
  );
}

export default App;
