    import "./TaskStatus.css";

    const TaskStatus = ({ inProgressTickets, onComplete }) => {
    return (
        <div className="task-status">
        <h2>Task Status</h2>
        <div className="task-count">In Progress: {inProgressTickets.length}</div>

        {inProgressTickets.length === 0 ? (
            <p className="no-tasks">No tasks in progress</p>
        ) : (
            <div className="tasks-list">
            {inProgressTickets.map((ticket) => (
                <div key={ticket.id} className="task-item">
                <div className="task-info">
                    <span className="task-id">#{ticket.id}</span>
                    <span className="task-title">{ticket.title}</span>
                </div>
                <button
                    className="complete-btn"
                    onClick={() => onComplete(ticket)}
                >
                    Complete
                </button>
                </div>
            ))}
            </div>
        )}
        </div>
    );
    };

    export default TaskStatus;