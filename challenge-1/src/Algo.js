const computeBFS = (start,data) => {
    let block = [];
    let nodes = new Array();
    nodes = data.slice(0);
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
    return block;

}

const computePreorder = (start, data) => {
    let block = [], rightStack=[];
    let nodes = data;
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
    // this.setState({
    //     block:block
    // })        
    return block;
}


const computePostorder = (start,data) => {
    let block = [], leftStack=[];
    let nodes = data;
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

    return block.reverse();
    // this.setState({
    //     block:block.reverse()
    // })            
}

const computeInorder = (start,data) => {
    let block = [], rightStack=[];
    let nodes = data;
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
    // this.setState({
    //     block:block
    // })       
    return block; 
}

export { computeBFS, computePreorder, computePostorder, computeInorder };