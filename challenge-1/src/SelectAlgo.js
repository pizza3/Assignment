import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:70px;
    background:#e8e2db;

`;

export default class SelectAlgo extends Component{
    state={
        value: '1'
    }

    handleChange = (event) => {
        this.setState({value: event.target.value},()=>{
            this.props.changeAlgo(event.target.value)
        });
    }


    render(){
        return(
            <Container>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">BFS</option>
                    <option value="2">DFS-In</option>
                    <option value="3">DFS-Post</option>
                    <option value="4">DFS-Pre</option>
                </select>
            </Container>
        )
    }
}