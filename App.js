import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Addcomp from './pages/Addcomp';
import Addof from './pages/Addof';
import Auth from './pages/Auth';
import ListProduit from './pages/ListProduit';
import ListOperation from './pages/ListOperation';
import Navbar from './component/Navbar';
import Production from './pages/Production';
import ProductionOperations from './pages/ProductionOperations';
import OperationProd from './pages/OperationProd';
import VerifSn from './pages/VerifSn';
import SuivieProd from './pages/SuivieProd';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show: true
    }
  }
 
  render() {
    return (
      <Router>
        <Navbar/>
          
          <Switch>
          <Route path="/" component={Addof} exact></Route>
          <Route path="/ADDOf" component={Addof} exact></Route>
          <Route path="/addcomp" component={Addcomp} exact></Route>
          <Route path="/authentification" component={Auth} exact></Route>
          <Route path="/ListProduit" component={ListProduit} exact></Route>
          <Route path="/production" component={Production} exact></Route>
          <Route path="/production/:id" component={OperationProd} exact></Route>
          <Route path="/production/:produit/:of" component={ProductionOperations} exact></Route>
          <Route path="/SuivieProduction/:produit/:of" component={SuivieProd} exact></Route>
          <Route path="/ListOperation/:produit" component={ListOperation} exact></Route>
          <Route path="/VerifierSN/:of/:produit" component={VerifSn} exact></Route>
        </Switch>     
      </Router>
    );
  }
}

export default App;