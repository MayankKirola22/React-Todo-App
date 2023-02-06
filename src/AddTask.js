import { Component } from "react";
import './AddTask.css';

class AddTask extends Component{
    
    handleSubmit = (e) =>{
        e.preventDefault();
        var task={Value:e.target.text.value,Id:this.props.pending.length};
        this.props.addTask(task);
        e.target.text.value="";
    }   

    render = () =>{
        return(
            <div className="AddTask">
                <form onSubmit={this.handleSubmit}>    
                    <p id="AddNewTask">Add new Task : </p>
                    <div id="inputText">
                    <input placeholder="Task" type="text" id="text" required/>
                    </div>
                    <button id="submitButton">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTask;