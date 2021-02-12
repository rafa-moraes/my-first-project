import React from 'react'


export default class TaskForm extends React.Component {
    
    state = {
        title: "",
        Description: ""
    }


    submit = (e) => {
        e.preventDefault()

    }
    changes = (e) => {
    console.log(e.target.value)
    }
    
    render () {

        return (
        <form onSubmit = {this.submit}>
            <input type="text" placeholder="White a text" onChange ={this.changes} value ={}/>
            <br/>
            <br/>
            <textarea placeholder="Write a description" onChange ={this.changes} value ={}/>
            <button type="submit">Send</button>            


        </form>
        
        
        )

    }
}




