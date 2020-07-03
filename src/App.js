import React, {Component} from 'react';
import Subject from "./Components/Subject";
import Lists from "./Components/Lists";
import Test from "./Components/test"
import './App.css';

class App extends Component{
  constructor(props){
    super(props); //state, props 변경되면 render가 다시 그려진다.
    this.state={
      node:"welcome",
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
      ]
    };
  }
  render(){ //반드시 class return의 마지막에는 태그 하나가 있어야함.
    var _title, _desc = null;
    if(this.state.node === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.node==='read'){
      _title = this.state.Lists[0].title;
      _desc = this.state.Lists[0].desc;
    }
    return(
      <div className="App"> 
        <Subject title={_title} sub={_desc}/>
        {/* <div>
          <h1><a href="/" onClick={function(event){
            console.log(event);
            event.preventDefault();

            this.setState({ //bind, setState로 바꿔야한다.
              node:'read'
            })
          }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
        </div> */}
        <Lists data = {this.state.Lists}></Lists>
        <Test data = {_title} data2 = {_desc}></Test>
      </div>
    );
  }
}
  
export default App;