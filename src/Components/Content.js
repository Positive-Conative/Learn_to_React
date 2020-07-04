import React, {Component} from 'react';

class Content extends Component{
    render(){
        return(
            <div>
                <a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onchange();
                }.bind(this)}>dfdf</a><br></br>
                제목 : {this.props.title}<br/>
                본문 : {this.props.text}
            </div>
        );
    }
}
export default Content;