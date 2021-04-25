import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Production extends Component {
    constructor(props){
        super(props);
        this.state={
            produit:'',
            of:''
        }
    }
    newProd(e){
        this.setState({
            produit: e.target.value
        })
    }
    newOf(e){
        this.setState({
            of: e.target.value
        })
    }
    startProd(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8070/production/"+this.state.produit+"/"+this.state.of, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result);
                            
                            })
            .catch(error => console.log('error', error));
    }
    render() {
        return (
            <div className="container">
                <br/>
                <div className="row justify-content-md-center"> 
                
                    <div class="input-group col-8">
                        <div class="input-group-prepend ">
                            <span class="input-group-text" style={{height: '45px'}}>PRODUIT:</span>
                        </div>
                        <textarea class="form-control" style={{height: '45px'}} aria-label="operation" value={this.state.produit} onChange={(e)=>{this.newProd(e)}}></textarea>
                    </div>
                    <div className="col-8" style={{height:'10px'}}></div>
                    <div class="input-group col-8">       
                        <div class="input-group-prepend">
                            <span class="input-group-text" style={{height: '45px'}}>ORDER:</span>
                        </div>
                        <textarea class="form-control" style={{height: '45px'}} aria-label="ordre"  value={this.state.of} onChange={(e)=>{this.newOf(e)}} ></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={()=>{this.startProd()}}><FaIcons.FaHammer  style={{fontSize: '25px'}}/><Link to={"/production/"+this.state.produit+"/"+this.state.of} style={{color: 'aquamarine'}}>START PRODUCTION</Link></button> 
                    <button className="btn btn-primary" onClick={()=>{this.startProd()}}><FaIcons.FaSearch  style={{fontSize: '25px'}}/><Link to={"/SuivieProduction/"+this.state.produit+"/"+this.state.of} style={{color: 'aquamarine'}}>SUIVIE PRODUCTION</Link></button> 
                </div>
             </div>
        );
    }
}

export default Production;