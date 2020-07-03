import React, {Component} from 'react';

class Lists extends Component{
    render(){
        var list = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            list.push(<li key={data[i].id} id={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
            i++;
        }
        return(
            <ul>
                {list}
            </ul>
        );
    }
  }
  
export default Lists;