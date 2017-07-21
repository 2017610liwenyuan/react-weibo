import React,{Component} from 'react';

import Style from'./item.css';
const StyleSheets={
	box:{
		width:500,
		height:20,
		background:'blue'
		
	}
}
export default class extends Component{
	render(){
		return(
			<div className={Style.itemclass}>第一种设置样式
			<div style={ {width:200,height:30,backgroundColor:'green',color:'pink'}}>
			第二种设置样式
			</div>
			<div style={StyleSheets.box}>第三种设置样式</div>
			</div>
		)
	}
}
