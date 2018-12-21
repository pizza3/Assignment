import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            <div className='container'>
                <div className='text'>
                    Select Search Algorithm
                </div>
                <div className='select'>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="1">BFS</option>
                        <option value="2">DFS In-Order</option>
                        <option value="3">DFS Post-Order</option>
                        <option value="4">DFS Pre-Prder</option>
                    </select>
                </div>
                <style jsx>{`
                    .container{
                        width:100%;
                        height:70px;                    
                    }

                    .text{
                        text-align:center;
                        font-size: 31px;
                        margin-top: 32px;
                    }

                    .select{
                        text-align:center;
                        margin-top: 10px;
                    }
                `}</style>
            </div>
        )
    }
}


SelectAlgo.propTypes = {
    changeAlgo: PropTypes.func,
};