import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class ProductionOperations extends Component {
    constructor(props){
        super(props);
        this.state={
            produit:props.match.params.produit,
            of:props.match.params.of,
            id1: '',
            operation:'',
            ordre: '',
            touv:'',
            tfer:'',
            operations:[],
            composants:[]
        }
    }
    componentDidMount(){
        this.startProd();
    }
   
    startProd(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8070/production/"+this.state.produit+"/"+this.state.of, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result);
                            var data= JSON.parse(result);
                            var obj= data.shift();
                            console.log(obj);
                            this.setState({
                                id1: obj._id,
                                operation:obj.operation,
                                ordre: obj.ordre,
                                touv:obj.touv,
                                tfer:obj.tfer,
                                operations: data
                            })
                            console.log(this.state.obj1);
                                })
            .catch(error => console.log('error', error));
    }
    updateOP(id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8070/productionOperation/"+id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                <button  class="btn btn-warning"><FaIcons.FaHammer  style={{fontSize: '25px',pointerEvents: 'none'}}/><Link to={"/VerifierSN/"+this.state.of+"/"+this.state.produit} style={{color: 'aquamarine'}}>Verifer Composants</Link></button>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">ORDRE</th>
                            <th scope="col">OPERATION</th>
                            <th scope="col">OPEN TIME</th>
                            <th scope="col">CLOSE TIME</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                        <td>{this.state.ordre}</td>
                                        <td>{this.state.operation}</td>
                                        <td>{this.state.touv}</td>
                                        <td>{this.state.tfer}</td>
                                        <td> <a  class="btn btn-warning" onClick={()=>this.updateOP(this.state.id1)}><FaIcons.FaHammer  style={{fontSize: '25px'}}/><Link to={"/production/"+this.state.id1} style={{color: 'aquamarine'}}>START Operation</Link></a></td>
                        </tr>             
                            {
                                this.state.operations.map((op)=>{
                                    return <tr /*hidden={op.tfer? true:false}*/>
                                        <td>{op.ordre}</td>
                                        <td>{op.operation}</td>
                                        <td>{op.touv}</td>
                                        <td>{op.tfer}</td>
                                        <td> <button disabled  class="btn btn-warning" onClick={()=>this.updateOP(op._id)}><FaIcons.FaHammer  style={{fontSize: '25px',pointerEvents: 'none'}}/><Link to={"/production/"+op._id} style={{color: 'aquamarine',pointerEvents: 'none'}}>START Operation</Link></button></td>
                                        
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ProductionOperations;