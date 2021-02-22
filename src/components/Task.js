import React from 'react'
import './Task.css'

class Task extends React.Component{

    StyleCompleted() {
        return {
            fontSize: '30px',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
        
    }



    render() {
        const {task} = this.props
        
        return <p style ={this.StyleCompleted()}>
        {task.title} - 
        {task.description} - 
        {task.id}
        <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)} />
        <button onClick={this.props.deleteTask.bind(this,task.id)}>X</button>
        </p>
    }
}

export default Task






