    import "./TicketCard.css";

    const TicketCard = ({ ticket, onMoveToInProgress, isInProgress }) => {
    // Priority class assign
    const getPriorityClass = (priority) => {
        switch (priority) {
        case "HIGH":
            return "priority-high";
        case "MEDIUM":
            return "priority-medium";
        case "LOW":
            return "priority-low";
        default:
            return "";
        }
    };

    // Optional: format date nicely
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        });
    };

    return (
        <div className={`ticket-card ${isInProgress ? "in-progress" : ""}`}>
        <div className="ticket-header">
            <span className="ticket-id">#{ticket.id}</span>
            <span className={`priority-badge ${getPriorityClass(ticket.priority)}`}>
            {ticket.priority} PRIORITY
            </span>
        </div>

        <h3 className="ticket-title">{ticket.title}</h3>
        <p className="ticket-description">{ticket.description}</p>

        <div className="ticket-footer">
            <span className="customer-name">{ticket.customer}</span>
            <span className="ticket-date">{formatDate(ticket.createdAt)}</span>
        </div>

        {!isInProgress ? (
            <button
            className="move-btn"
            onClick={() => onMoveToInProgress(ticket)}
            >
            Move to In Progress
            </button>
        ) : (
            <span className="in-progress-label">In Progress</span>
        )}
        </div>
    );
    };

    export default TicketCard;