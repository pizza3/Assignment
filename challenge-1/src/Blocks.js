import React ,{Component} from 'react';

export default class Blocks extends Component{

    animate(props){
        setTimeout(()=>{
            for(let j=0;j<props.block.length;j++){
                let el = document.getElementById('block_'+j);    
                el.style.transitionDelay=j+'s'
                el.classList.remove('hide');
            }
        },1000)
    }

    componentDidUpdate(prevProps){
        if(this.props.block !== prevProps.block){
            for(let i=0;i<this.props.block.length;i++){
                let el = document.getElementById('block_'+i);
                el.style.transitionDelay=0+'s'
                el.className +=' hide';
            }
            this.animate(this.props)
        }
        
    }

    render(){
        return(
            <div className='container'>
                {
                    this.props.block.map((val,i)=>{
                        return <div id={'block_'+i} className='block hide' key={i}>{val}</div>})
                }
                <style jsx>{`
                    .container{
                        width:100%;
                        height:70px;
                        display:flex;
                        flex-direction:row;
                        margin-top: 37px;
                    }

                    .hide{
                        opacity:0;
                    }

                    .show{
                        opacity:1;
                    }
                `}
                </style>
            </div>
        )
    }
}
