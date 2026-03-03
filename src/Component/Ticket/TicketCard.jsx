import "./TicketCard.css";

const TicketCard = ({ticket, onMoveToInProgress, isInProgress}) => {
    const getPriorityClass = (priority) => {
    switch(priority) {
      case 'HIGH': return 'priority-high';
      case 'MEDIUM': return 'priority-medium';
      case 'LOW': return 'priority-low';
      default: return '';
    }
  };

    return (
        <div className={`ticket-card ${isInProgress ? 'in-progress' : ''}`}>
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                <span className={`priority-badge ${getPriorityClass(ticket.priority)}`}>
                {ticket.priority} PRIORITY
                </span>
            </div>
            
            <h3 className="ticket-title">{ticket.title}</h3>
            <p className="ticket-description">{ticket.description}</p>
            
            <div className="ticket-footer">
                <span className="customer-name">{ticket.customer}</span>
                <span className="ticket-date">{ticket.createdAt}</span>
            </div>
            
            {!isInProgress && (
                <button 
                className="move-btn"
                onClick={() => onMoveToInProgress(ticket)}
                >
                Move to In Progress
                </button>
            )}
            
            {isInProgress && (
                <span className="in-progress-label">In Progress</span>
            )}
        </div>
    );
};

export default TicketCard;