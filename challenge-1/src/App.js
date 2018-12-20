import React, {Component} from 'react';
import data from './data.json';
import Blocks from './Blocks';
import SelectAlgo from './SelectAlgo';
export default class App extends Component{

    state = {
        Data:data,
        block:[]
    }

    componentDidMount(){
        this.computePreorder(0);
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

        block.push(start);
        let nodes = this.state.Data;
        let listToExplore = [ start ];
        nodes[ start ].visited = true;
        // while ( listToExplore.length > 0 ) {
        //     let nodeIndex = listToExplore.shift();
        //     nodes[ nodeIndex ].links.forEach( function( childIndex ) {
        //             if ( !nodes[ childIndex ].visited ) {
        //                 nodes[ childIndex ].visited = true;
        //                 listToExplore.push( childIndex );
        //                 // block.push(childIndex)
        //             }
        //     }.bind(this));
        // }
        while ( listToExplore.length > 0 ) {
            let nodeIndex = listToExplore.shift();
            if(nodes[nodeIndex].links.length>1){
                rightStack.push(nodes[nodeIndex].links[1]);
            }
        }
    }

    render(){
        return(
            <div>
                <SelectAlgo/>
                <Blocks block={this.state.block}/>
            </div>
        )
    }
}