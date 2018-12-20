import React ,{Component} from 'react';

export default class Blocks extends Component{
    state={

    }

    animate(props){
        for(let i=0;i<props.block.length;i++){
            document.getElementById('Ellipse_'+props.block[i]).classList.remove('style2');
            document.getElementById('Ellipse_'+props.block[i]).style.transitionDelay=0+'s'
        }

        setTimeout(()=>{
            for(let j=0;j<props.block.length;j++){
                let el = document.getElementById('Ellipse_'+props.block[j]);
                el.style.transitionDelay=j+'s'
                el.className.baseVal +=' style2';

            }
        },1000) 
    }

    render(){
        return(
            <div className='container'>
                {this.props.block.map((val,i)=>{
                    return <div className='block' key={i}>{val}</div>
                })}
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
                        padding-top:10px;
                        box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
                        background:#53d397;
                        color: #fff;
                        font-size: 30px;
                        transition:0.5s;
                    }
                `}
                </style>
            </div>
        )
    }
}
