import React, {Component} from 'react';
import styled from 'styled-components';

export default class SelectAlgo extends Component{
    state={
        value: '1'
    }

    handleChange = (event) => {
        this.setState({value: event.target.value},()=>{
            this.props.changeAlgo(this.state.value)
        });
    }


    render(){
        return(
            <Container>
                <Text>
                    Select Search Algorithm
                </Text>
                <Select>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="1">BFS</option>
                        <option value="2">DFS-In</option>
                        <option value="3">DFS-Post</option>
                        <option value="4">DFS-Pre</option>
                    </select>
                </Select>
            </Container>
        )
    }
}

const Container = styled.div`
    width:100%;
    height:70px;

`;

const Text = styled.div`
    text-align:center;
    font-size: 31px;
    margin-top: 32px;
`;

const Select = styled.div`
    text-align:center;
    margin-top: 10px;
`;
