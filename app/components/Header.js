import React,{Component} from 'react';
import {  Link } from 'react-router'
import Style from'../common/Header.css';


const ACTIVE = {
  color:'red'
  
}
export default class extends Component{

    render(){
    	return(
//  		<div>  {this.props.title}</div>
    		<div className={Style.headerclass}>
    		     <div className={Style.toubu}>{this.props.title}</div>
    		     <div className={Style.tubiao}>
    		     <p> <img src={require('../img/wbicon_03.jpg')}/></p>
    		     <p> <img src={require('../img/wbicon_05.jpg')}/></p>
    		     <p><Link to="/bianji" activeStyle={ACTIVE} >
    		     <img src={require('../img/wbicon_07.jpg')}/></Link></p>
    		     
    		     </div>
    		   
    		</div>
    	
    	
    		
    	)
    }
}
