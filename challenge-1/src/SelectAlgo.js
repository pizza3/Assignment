import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:70px;
    background:#e8e2db;

`;

export default class SelectAlgo extends Component{
    state={
        value: 'BFS'
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }


    render(){
        return(
            <Container>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="BFS">BFS</option>
                    <option value="DFS-In">DFS-In</option>
                    <option value="DFS-Post">DFS-Post</option>
                    <option value="DFS-Pre">DFS-Pre</option>
                </select>
            </Container>
        )
    }
}