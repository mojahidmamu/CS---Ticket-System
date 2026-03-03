    import "./TaskStatus.css";

    const TaskStatus = ({ inProgressTickets, onComplete, resolvedTickets, }) => {
    return (
        <div className="task-status">
        <h2 className='font-bold text-xl'>Task Status</h2>
        <div className="task-count ">In Progress: {inProgressTickets.length}</div>

        {inProgressTickets.length === 0 ? (
            <p className="no-tasks">No tasks in progress</p>
        ) : (
            <div className="tasks-list">
            {inProgressTickets.map((ticket) => (
                <div key={ticket.id} className="task-item  flex flex-col gap-2">
                    <div className="task-info">
                        <span className="font-bold">{ticket.title}</span>
                    </div>
                    <div className="w-full">
                        <button
                        className="complete-btn btn btn-success w-full p-2 border-0 rounded-lg"
                        onClick={() => onComplete(ticket)}
                    >
                        Complete
                    </button>
                    </div>
                </div>
            ))}
            </div>
        )}
        {/* Resolved */}
        <div className="task-count ">Resolved: {resolvedTickets.length}</div>

        {resolvedTickets.length === 0 ? (
            <p className="no-tasks">No tasks resolved</p>
        ) : (
            <div className="tasks-list">
            {resolvedTickets.map((ticket) => (
                <div key={ticket.id} className="task-item  flex flex-col gap-2">
                    <div className="task-info">
                        <span className="font-bold">{ticket.title}</span>
                    </div>
                </div>
            ))}
            </div>
        )}
        </div>
    );
    };

    export default TaskStatus;