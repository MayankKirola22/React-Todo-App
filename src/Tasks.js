import './Tasks.css'

function Tasks({completed,pending,remove,complete}){
    return(
        <div className='Tasks'>
        <div className='Headings'>Tasks</div>
        <hr/>
        {pending.length!==0?(
            <div className="PendingTasks">
            {   
                pending.map(task =>{
                    return(
                        <div>
                        <div className="Task" key={task.Id} >
                            <p id="taskValue">{task.Value}</p><button id="deleted" onClick={() => {complete(task.Id)}}>Delete</button>
                        </div>
                        <hr/>
                        </div>
                    )
                }
                )}
            </div>)
            :<div className='noTask'>No Pending tasks</div>}
            </div>
        )}

export default Tasks;