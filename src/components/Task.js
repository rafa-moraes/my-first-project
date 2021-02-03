import React from 'react'

class Task extends React.Component{
    render() {
        const {task} = this.props
        
        return <div>
        {task.title} - 
        {task.description} - 
        {task.id}
        <input type="checkbox"/>
        <button>X</button>
        </div>
    }
}

export default Task






