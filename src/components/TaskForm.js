import React from 'react'


export default class TaskForm extends React.Component {
    
    state = {
        title: "",
        description: ""
    }


    submit = (e) => {
        console.log(this.state)
        e.preventDefault()

    }
    changes = (e) => {
     this.setState({
         [e.target.name]: e.target.value
     })
    }
    
    render () {

        return (
        <form onSubmit = {this.submit}>
            <input 
            type="text" 
            placeholder="White a text" 
            onChange ={this.changes} 
            name="title" 
            value ={this.state.title}
            />
            <br/>
            <br/>
            <textarea 
            placeholder="Write a description" 
            onChange ={this.changes} 
            name="description" 
            value ={this.state.description}
            />
            <button type="submit">Send</button>            


        </form>
        
        
        )

    }
}




