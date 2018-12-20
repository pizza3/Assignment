import React, {Component} from 'react';
import data from './data.json';
import Blocks from './Blocks';
import SelectAlgo from './SelectAlgo';
import Graph from './Graph';

export default class App extends Component{

    state = {
        Data:data,
        block:[],
        algo:1
    }

    componentDidMount(){
        this.computeBFS(0);
    }

    computeBFS = (start) => {
        let block = [];
        let nodes = this.state.Data;
        let listToExplore = [ start ];

        nodes[ start ].visited = true;

        while ( listToExplore.length > 0 ) {
            let nodeIndex = listToExplore.shift();
            nodes[ nodeIndex ].links.forEach( function( childIndex ) {
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
            else if(rightStack.length>1){                
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
                block.push(nodeIndex,em);
                // block.push(nodeIndex);
                // // if()
                let el = nodes[em].links[1];
                console.log(nodes[rightStack[rightStack.length-1]].links[1]);
                if(el){
                    // listToExplore.push(el);
                }
            }
        }
        console.log(block, rightStack);
        
    }

    changeAlgo = (i) =>{
        // this.setState({
        //     algo:i
        // })
    }

    render(){
        return(
            <div>
                <SelectAlgo/>
                <Blocks block={this.state.block} changeAlgo={this.changeAlgo()}/>
                <Graph/>
            </div>
        )
    }
}