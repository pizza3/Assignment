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

                    .block{
                        width:10%;
                        height:50px;
                        border-radius:4px;    
                        text-align:center;
                        margin:10px;
                        padding-top:15px;
                        box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
                        background:#53d397;
                        color: #fff;
                        font-size: 20px;
                        transition:0.5s;
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
