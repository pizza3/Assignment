import React, {Component} from 'react';
import data from './data.json';
import Blocks from './Blocks';
import SelectAlgo from './SelectAlgo';
import Graph from './Graph';

export default class App extends Component{
    state = {
        Data:[...data],
        block:[],
        algo:"1"
    }

    componentDidMount(){
        this.computeBFS(0);
    }

    computeBFS = (start) => {
        let block = [];
        var nodes = this.state.Data;
        let listToExplore = [ start ];
        nodes[ start ].visited = true;
        console.log(data[ start ].visited);
        block.push(start)
        while ( listToExplore.length > 0 ) {
            let nodeIndex = listToExplore.shift();
            nodes[ nodeIndex ].links.map( function( childIndex ) {
                if ( !nodes[ childIndex ].visited ) {
                    nodes[ childIndex ].visited = true;
                    listToExplore.push( childIndex );
                    block.push(childIndex)
                }
            });
        }
        this.setState({
            block:block
        })
 
    }

    computePreorder = (start) => {
        let block = [], rightStack=[];
        let nodes = this.state.Data;
        let listToExplore = [ start ];
        while ( listToExplore.length > 0 ) {
            let nodeIndex = listToExplore.shift();
            nodes[ nodeIndex ].visited = true;
            block.push(nodeIndex);
            if(nodes[ nodeIndex ].links.length>1){
                rightStack.push(nodes[nodeIndex].links[1]);
                listToExplore.push( nodes[nodeIndex].links[0]);
            }
            else if(rightStack.length>0){                
                listToExplore.push(rightStack.pop());    
            }
        }
        this.setState({
            block:block
        })        
    }

    computePostorder = (start) => {
        let block = [], leftStack=[];
        let nodes = this.state.Data;
        let listToExplore = [ start ];

        while ( listToExplore.length > 0 ) {
            let nodeIndex = listToExplore.shift();
            nodes[ nodeIndex ].visited = true;
            block.push(nodeIndex);
            if(nodes[ nodeIndex ].links.length>1){
                leftStack.push(nodes[nodeIndex].links[0]);
                listToExplore.push( nodes[nodeIndex].links[1]);
            }
            else if(leftStack.length>0){                                
                listToExplore.push(leftStack.pop());    
            }
        }
        this.setState({
            block:block.reverse()
        })            
    }

    computeInorder = (start) =>{
        let block = [], rightStack=[];
        let nodes = this.state.Data;
        let listToExplore = [ start ];

        while ( listToExplore.length > 0 ) {
            let nodeIndex = listToExplore.shift();
            nodes[ nodeIndex ].visited = true;
            if(nodes[ nodeIndex ].links.length>1){
                rightStack.push(nodeIndex);
                listToExplore.push( nodes[nodeIndex].links[0]);
            }
            else{
                let em = rightStack.pop();
                (em === undefined)?block.push(nodeIndex):block.push(nodeIndex,em);
                (typeof(nodes[em]) === 'undefined')?null:listToExplore.push(nodes[em].links[1]);
            }
        }
        this.setState({
            block:block
        })        
    }

    changeAlgo = (i) =>{        
        this.setState({
            algo:i
        },()=>{
            switch(i){
                case "1" :
                    this.computeBFS(0);
                    break;
                case "2" :
                    this.computeInorder(0);
                    break;
                case "3" :
                    this.computePostorder(0);
                    break;
                case "4" :
                    this.computePreorder(0);
                    break;
                default:
                    this.computeBFS(0);
            }
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