import React, {Component} from 'react';

class Test extends Component{
    render(){
        return(
            <ul>
               <li>{this.props.data}</li>
               <li>{this.props.data2}</li>
            </ul>
        );
    }
}

export default Test;