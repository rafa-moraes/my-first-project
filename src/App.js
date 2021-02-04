import React from 'react';
import './App.css';
import tasks from './sample/task.json'
import Tasks from './components/Tasks.js'

                // Learning the basics of React

// function Helloworld (props) {
//   return (
//     <div id="hello"> 
//     {props.myText}
//      </div>
//   )
// }

// class Helloworld extends React.Component{
//   state = {
//     show: true
//   }
//   toggleShow = () => {
//     this.setState({show: !this.state.show})
//   }
//   render () {
//     if(this.state.show){
//       return (
//         <div id="hello"> 
//         {this.props.myText}
//         <button onClick={this.toggleShow}> Toggle show</button>
//          </div>
//       )
//     }else {
//       return <h2>
//         No components available 
//         <button onClick={this.toggleShow}> Toggle show</button>
//         </h2>
      
//     }

//   }
// }

// function App() {
//   return (
//     <div>
//       <h1> Hi, this is my first component: <Helloworld myText ="Hello my World"/></h1>
//       <h2><Helloworld myText ="Hi everybody"/></h2>
//       <h3><Helloworld myText="Howdy boy"/></h3>
//     </div>
//   );
// }


//                  New application

class App extends React.Component{
  state = {
    tasks
  } 
  render () {
    return <div>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }


}














export default App;
