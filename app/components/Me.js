import React,{Component} from 'react';
import Header from "./Header";
import Style from'../common/Me.css';
export default class extends Component{
  render(){
    return (
    	
      <div><Header title="我"/>
       <div className={Style.me}>
       <p>  <img src={require('../img/wbicon1_03.png')}/></p>
       <p></p>
       <p></p>
       </div>

      </div>
    )
  }
}
