import React, {Component} from 'react';

class Lists extends Component{
    render(){
        var list = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            list.push(
                <li key={data[i].id} id={data[i].id}>
                    <a href={"/content/"+data[i].id} 
                        onClick={function(id, num, num2, event){ //bind에서 주는것과  onclick에서 받는건 순서가 다름.
                            event.preventDefault();
                            console.log("num is...", num)
                            console.log("num2 is...", num2)
                            this.props.onChangePage(id);
                    }.bind(this, data[i].id, 10, 30)}>{data[i].title}</a>
                </li>)
            i++;
        }
        //this.props.onChangePage();
        return(
            <ul>
                
                {list}
            </ul>
        );
    }
  }
  
export default Lists;