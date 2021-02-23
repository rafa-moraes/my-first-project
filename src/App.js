import React from 'react';
import './App.css';
import tasks from './sample/task.json'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Tasks from './components/Tasks.js'
import TaskForm from './components/TaskForm.js'
import Posts from './components/Posts.js'


                /* Learning the basics of React


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
 }*/


                  // New application

class App extends React.Component{
  state = {
    tasks
  } 

addTask = (title, description) => {
  const newTask = {
    title: title,
    description: description,
    id: this.state.tasks.length
  }
  this.setState({
    tasks: [...this.state.tasks,newTask]
  })
  console.log(newTask)
}

deleteTask = (id) => {
  const newTasks = this.state.tasks.filter(task => task.id !== id)
  this.setState({tasks: newTasks})
  console.log(newTasks)
}

checkDone = (id) => {
  const isDone = this.state.tasks.map( task => {
    if(task.id === id){
      task.done = !task.done
    }
    return task
  })
  this.setState({tasks: isDone })
}

  render () {
    return <BrowserRouter>
    <Link to='/'>Home </Link>
    <br/>
    <Link to='/posts'>Posts </Link>
    <Route exact path='/' render={() => {
      return <div>
      <TaskForm adding={this.addTask}/>
        <br/>
        <Tasks 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
          checkDone = {this.checkDone}
        />
      </div>
    }}/>    
    <Route 
        path='/posts' component={Posts}
    
    />
             
    </BrowserRouter>
    
  }


}














export default App;
