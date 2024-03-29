import React ,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Graph extends Component{

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

    componentDidUpdate(prevProps){
        if(this.props.block !== prevProps.block){
            this.animate(this.props)
        }
    }

    render(){
        return(
            <div className='container'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 542 641" style={{width:'100%'}}>
                    <g id="Group_3" data-name="Group 3" transform="translate(-247 -83)" >
                        <g id="Group_2" data-name="Group 2" transform="translate(0 -1)">
                        <g id="Ellipse_6" data-name="Ellipse 10"  className='style1' transform="translate(247 640)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                        </g>
                        <g id="Group_1" data-name="Group 1">
                            <g id="Ellipse_0" data-name="Ellipse 1"  className='style1' transform="translate(475 84)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_1" data-name="Ellipse 2"  className='style1' transform="translate(390 223)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_8" data-name="Ellipse 3"  className='style1' transform="translate(560 223)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_2" data-name="Path 1" className='style1' transform="translate(305 362)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_3" data-name="Ellipse 5"  className='style1' transform="translate(475 362)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_4" data-name="Ellipse 6"  className='style1' transform="translate(332 501)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_5" data-name="Ellipse 7"  className='style1' transform="translate(619 501)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_9" data-name="Ellipse 8"  className='style1' transform="translate(534 640)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_10" data-name="Ellipse 9"  className='style1' transform="translate(704 640)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <g id="Ellipse_7" data-name="Ellipse 11"  className='style1' transform="translate(417 640)">
                            <circle cx="42.5" cy="42.5" r="42.5"/>
                            </g>
                            <line id="Line_3" data-name="Line 3"  stroke= '#707070' strokeWidth = '2px' x2="60" y2="60" transform="translate(534.5 164.5)"/>
                            <line id="Line_4" data-name="Line 4"  stroke= '#707070' strokeWidth = '2px' x1="60" y2="60" transform="translate(442.5 164.5)"/>
                            <line id="Line_5" data-name="Line 5"  stroke= '#707070' strokeWidth = '2px' x1="60" y2="60" transform="translate(353.5 302.5)"/>
                            <line id="Line_6" data-name="Line 6"  stroke= '#707070' strokeWidth = '2px' x1="60" y2="60" transform="translate(293.5 580.5)"/>
                            <line id="Line_7" data-name="Line 7"  stroke= '#707070' strokeWidth = '2px' x2="60" y2="60" transform="translate(395.5 580.5)"/>
                            <line id="Line_8" data-name="Line 8"  stroke= '#707070' strokeWidth = '2px' x2="60" y2="60" transform="translate(681.5 580.5)"/>
                            <line id="Line_9" data-name="Line 9"  stroke= '#707070' strokeWidth = '2px' x1="60" y2="60" transform="translate(580.5 580.5)"/>
                            <line id="Line_10" data-name="Line 10"  stroke= '#707070' strokeWidth = '2px' x1="82" y2="82" transform="translate(407.5 435.5)"/>
                            <line id="Line_11" data-name="Line 11"  stroke= '#707070' strokeWidth = '2px' x2="82" y2="82" transform="translate(546.5 435.5)"/>
                            <line id="Line_12" data-name="Line 12"  stroke= '#707070' strokeWidth = '2px' x2="60" y2="60" transform="translate(451.5 302.5)"/>
                            <text id="_1" data-name="1" fill='#fff' fontSize = '34px' transform="translate(421 278)"><tspan x="0" y="0">1</tspan></text>
                            <text id="_2" data-name="2" fill='#fff' fontSize = '34px' transform="translate(338 417)"><tspan x="0" y="0">2</tspan></text>
                            <text id="_3" data-name="3" fill='#fff' fontSize = '34px' transform="translate(510 417)"><tspan x="0" y="0">3</tspan></text>
                            <text id="_4" data-name="4" fill='#fff' fontSize = '34px' transform="translate(365 554)"><tspan x="0" y="0">4</tspan></text>
                            <text id="_6" data-name="6" fill='#fff' fontSize = '34px' transform="translate(279 693)"><tspan x="0" y="0">6</tspan></text>
                            <text id="_7" data-name="7" fill='#fff' fontSize = '34px' transform="translate(449 693)"><tspan x="0" y="0">7</tspan></text>
                            <text id="_9" data-name="9" fill='#fff' fontSize = '34px' transform="translate(567 695)"><tspan x="0" y="0">9</tspan></text>
                            <text id="_5" data-name="5" fill='#fff' fontSize = '34px' transform="translate(652 554)"><tspan x="0" y="0">5</tspan></text>
                            <text id="_10" data-name="10" fill='#fff' fontSize = '34px' transform="translate(728 695)"><tspan x="0" y="0">10</tspan></text>
                            <text id="_8" data-name="8" fill='#fff' fontSize = '34px' transform="translate(593 278)"><tspan x="0" y="0">8</tspan></text>
                        </g>
                        </g>
                        <text id="_0" data-name="0" fill='#fff' fontSize = '34px' transform="translate(509 136)"><tspan x="0" y="0">0</tspan></text>
                    </g>
                </svg>
                <style jsx>
                {`
                    .container{
                        width:300px;
                        height: 50vh;
                        display:flex;
                        flex-direction:row;
                        margin-left:calc(50% - 150px);
                        margin-top: 30px;
                    }
                    
                    .style1{
                        stroke: #707070;
                        fill: #ff6a6a;
                        stroke-width:2px;
                        transition:.5s;
                    }

                    .style2{
                        fill: #53d397;
                    }
                `}
                </style>
            </div>
        )
    }
}

Graph.propTypes = {
    block: PropTypes.array,
};