import React,{Component} from 'react';
import Styles from './Messa.css';

export default class extends Component{
    render(){
        return(
            
            <div className={Styles.container}>
                <div>
                  <div className={Styles.title}>
                      <div className={Styles.headPortrait}>
                        <img style={{height:45}} src={this.props.info.head_img}  />
                      </div>
                      <div className={Styles.name}><p>{this.props.info.name}</p></div>
                  </div>
                  <div style={{padding:10,}}>
                    <p>{this.props.info.news}</p>
                    <div className={Styles.newImgContainer}>
                        <img src={this.props.info.pic}/>
                    </div>
                  </div>
                </div>

            </div>
        )
    }
}
