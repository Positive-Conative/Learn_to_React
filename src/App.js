import React, {Component} from 'react';
import Subject from "./Components/Subject";
import Lists from "./Components/Lists";
import Test from "./Components/test"
import Content from "./Components/Content"
import './App.css';

class App extends Component{
  constructor(props){
    super(props); //state, props 변경되면 render가 다시 그려진다.
    this.state={
      node:"welcome",
      selected_content_id:1,
      welcome:{title:"WELCOME~~~", desc:"MY WEB"},
      Subject:{title:"web", sub:"jello"},
      Lists:[
        {id:1, title:"HTML", desc:"HTML!!!!"},
        {id:2, title:"CSS", desc:"CSS!!!!"},
        {id:3, title:"JS", desc:"JS!!!!"}
      ],
      test:[
        {id:1, title:"hello", sub:"world"},
        {id:2, title:"hello1", sub:"world2"}
      ],
      Content:{title : "hello", text : "world!"}
    };
  }
  render(){ //반드시 class return의 마지막에는 태그 하나가 있어야함.
    var _title, _desc = null;
    var i = 0;
    if(this.state.node === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.node==='read'){
      while(i<this.state.Content.length){
        _title = this.state.Lists[0].title;
        _desc = this.state.Lists[0].desc;
        i=i+1;
      }
    }
    return(
      <div className="App"> 
        <Subject 
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
          onChangePage={function(){
            this.setState({node:'read'});
          }.bind(this)}
        />
        <Lists data = {this.state.Lists} onChangePage={
          function(id){
            console.log("this id :", id);
            this.setState({
              node:'welcome',
              selected_content_id:Number(id)
            });
          }.bind(this)
        }></Lists>
        <Test data = {_title} data2 = {_desc}></Test>
        <Content title={this.state.Content.title} text={this.state.Content.text} onchange={function(e){
          // e.setState({
          //   alert("hello");
          // })
          alert("hello")
        }.bind(this)}/>
      </div>
    );
  }
}
  
export default App;