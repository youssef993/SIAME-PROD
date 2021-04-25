import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class VerifSn extends Component {
    constructor(props){
        super(props);
        this.state={
            of:props.match.params.of,
            produit:props.match.params.produit,
            sn:'',
            afficheChek:true,
            afficheWrong:true
        }
    }
    componentDidMount(){
        this.getSnOf();
    }
    newSn(e){
        this.setState({
            sn: e.target.value
        })
    }
    getSnOf(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8070/verifsn/"+this.state.of+"/"+this.state.sn, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result);
                            var data= JSON.parse(result);
                            console.log(data.success);
                            if(data.success){
                                this.setState({
                                    afficheChek:false,
                                    afficheWrong:true
                                })
                            }else{
                                this.setState({
                                    afficheChek:true,
                                    afficheWrong:false
                                })
                            }
                                })
            .catch(error => console.log('error', error));
    }
    render() {
        return (
            <div class="container">
                  <div class="row">
                  <div class="col-sm-6">
                    <textarea class="form-control" style={{height: '45px'}} aria-label="ordre"  value={this.state.sn} onChange={(e)=>{this.newSn(e)}} ></textarea>
                  </div>
                  <div className="col-sm-2">
                    <button className="btn btn-primary" onClick={()=>{this.getSnOf()}}><FaIcons.FaSearch  style={{fontSize: '25px'}}/>Verifier SN</button>
                    </div>
                    <div className="col-sm-3"> 
                    <button className="btn btn-primary"><FaIcons.FaHammer  style={{fontSize: '25px'}}/><Link to={"/production/"+this.state.produit+"/"+this.state.of} style={{color: 'aquamarine'}}>COMPLETE PRODUCTION</Link></button> 
                  </div>
                  </div>
                    <div class="row justify-content-md-center">

                    <div style={{width: "20px"}}></div>
                    <img hidden={this.state.afficheChek} src="/check.png" class="card-img-top" style={{height: "500px",width: "auto"}} alt="..."/>
                    <img hidden={this.state.afficheWrong} src="/wrong.jpg" class="card-img-top" style={{height: "500px",width: "auto"}} alt="..."/>
                    </div>
            </div>
        );
    }
}

export default VerifSn;