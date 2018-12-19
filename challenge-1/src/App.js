import React, {Component} from 'react';
import data from './data.json';

export default class App extends Component{

    state={
        Data:data
    }

    componentDidMount(){
        this.computeBFS(0);
    }

    computeBFS(start){
        // let d = data;
        let nodes = this.state.Data;
        let listToExplore = [ start ];

        nodes[ start ].visited = true;

        while ( listToExplore.length > 0 ) {
            let nodeIndex = listToExplore.shift();
            nodes[ nodeIndex ].links.forEach( function( childIndex ) {
                    if ( !nodes[ childIndex ].visited ) {
                        nodes[ childIndex ].visited = true;
                        listToExplore.push( childIndex );
                        console.log(childIndex);
                    }
            } );
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}