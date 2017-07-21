import React,{Component} from 'react';
import {  Link } from 'react-router'

import Style from'./bianji.css';

export default class extends Component{
	add(){
		history.back()
	
	}
	render(){
		return(
			<div className={Style.bianji}>
			   <div className={Style.header}>
			     <p onClick={this.add}>取消</p>
			     <p>发微博</p>
			     <p>发送</p>
			    </div>
			   <div className={Style.textar}>
			       <textarea name="" rows="10" cols="2" placeholder="写点什么吧..."></textarea>
			   </div>
			
			</div>
		)
	}
}