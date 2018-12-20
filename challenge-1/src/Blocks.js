import React ,{Component} from 'react';
import styled from 'styled-components';

export default class Blocks extends Component{
    state={

    }

    render(){
        return(
            <Container>
                {this.props.block.map((val,i)=>{
                    return <Block key={i}>{val}</Block>
                })}
            </Container>
        )
    }
}

const Container = styled.div`
    width:100%;
    height:70px;
    /* background:#e8e2db; */
    display:flex;
    flex-direction:row;
    margin-top: 37px;
`;

const Block = styled.div`
    width:10%;
    height:50px;
    border-radius:4px;    
    text-align:center;
    margin:10px;
    padding-top:10px;
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    background:#53d397;
    color: #fff;
    font-size: 30px;
`