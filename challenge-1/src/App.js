import React, {Component} from 'react';
import data from './data.json';
import Blocks from './Blocks';
import SelectAlgo from './SelectAlgo';
import Graph from './Graph';
import {computeBFS, computePreorder, computePostorder, computeInorder} from './Algo';

export default class App extends Component{
    state = {
        Data:data.slice(0),
        block:[]
    }

    componentDidMount(){
        this.setState({
            block:computeBFS(0,this.state.Data)
        })
    }

    changeAlgo = (i) => {               
        let data;
        switch(i){
            case "1" :
                data = computeBFS(0,this.state.Data);
                break;
            case "2" :
                data = computeInorder(0,this.state.Data);
                break;
            case "3" :
                data = computePostorder(0,this.state.Data);
                break;
            case "4" :
                data = computePreorder(0,this.state.Data);
                break;
            default:
                data = computeBFS(0,this.state.Data);
        }
        this.setState({
            block:data
        })
    }

    render(){
        return(
            <div>
                <SelectAlgo changeAlgo={(i)=>{this.changeAlgo(i)}}/>
                <Blocks block={this.state.block} />
                <Graph block={this.state.block} />
            </div>
        )
    }
}