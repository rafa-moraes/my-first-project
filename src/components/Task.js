import React from 'react'
import './Task.css'

class Task extends React.Component{
    render() {
        const {task} = this.props
        
        return <div className="red">
        {task.title} - 
        {task.description} - 
        {task.id}
        <input type="checkbox"/>
        <button>X</button>
        </div>
    }
}

export default Task






