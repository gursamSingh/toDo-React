import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            Tasks:[{task:"Task1",id:1},{task:"Task2",id:2},{task:"Task3",id:3}],
            currTask:""
        }
    }

    // function to hanlde change in input task
    handleChange = (e) => {
        this.setState({
            currTask:e.target.value
        })
    }

    // function to add the task to list(Submit button)

    handleSubmit = () => {
        this.setState({
            Tasks:[...this.state.Tasks,{task:this.state.currTask,id:this.state.currTask.length+1}],
            currTask:""
        })
    }


    // function to delete the task(Delete button)

    handleDelete = (id) => {

        let narr = this.state.Tasks.filter((taskObj)=>{
            return taskObj.id !== id // this will return everything in an array except the task id which is passed.
        })
        this.setState({
            Tasks:[...narr]
        })
    }
    
  render() {
    return (
        <div>
            <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Submit</button>
            <ul>
            {
                this.state.Tasks.map((taskObj)=>(
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                    </li>
                    
                ))
            }
            </ul>
        </div>
    )
  }
}
