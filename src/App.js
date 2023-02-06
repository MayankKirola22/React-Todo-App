import './App.css';
import { Component } from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';

class App extends Component{
  state={
    pendingTasks:[],
    completedTasks:[]
  }

  addTask = (task) =>{
    var newPending=[...this.state.pendingTasks];
    newPending.push(task)
    this.setState({
      pendingTasks:newPending
  });
  }

  completeTask = (id) =>{
    var newCompleted=[...this.state.completedTasks];
    var CompletedTask=this.state.pendingTasks.filter(task =>{
      return id===task.Id;
    });
    
    var newPending=this.state.pendingTasks.filter(task =>{
      return id!==task.Id;
    })
    for(var i=0;i<newPending.length;i++){
      newPending[i].Id=i;
    }
    this.setState({pendingTasks:newPending});
  
    CompletedTask[0].Id=this.state.completedTasks.length;
    newCompleted.push(CompletedTask[0]);
    this.setState({
      completedTasks:newCompleted
    });
  }

  removeTask = (id) => {
    var newCompleted=this.state.completedTasks.filter(task =>{
      return id!==task.Id;
    })
    for(var i=0;i<newCompleted.length;i++){
        newCompleted[i].Id=i;
    }
    this.setState({completedTasks:newCompleted});
    
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
            <h1 id="main-heading"><font id="toDo">To-do</font> List</h1>
        </header>
        <AddTask pending={this.state.pendingTasks} addTask={this.addTask}/>
        <Tasks completed={this.state.completedTasks} pending={this.state.pendingTasks} remove={this.removeTask} complete={this.completeTask}/>
      </div>
    );
  }
}
export default App;
