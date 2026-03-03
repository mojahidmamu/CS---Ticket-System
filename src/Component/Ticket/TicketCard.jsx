    import "./TicketCard.css";
    import Calender from "../../assets/Calender.png";

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
     

    <div className="flex justify-between items-center"> 
        <h3 className="ticket-title font-bold">{ticket.title}</h3>
        {!isInProgress ? (
            <button
                className="btn btn-accent p-2 border-0 rounded-lg"
                onClick={() => onMoveToInProgress(ticket)}
            >
                Move to In Progress
            </button>
        ) : (
            <span className="in-progress-label">In-Progress</span>
        )}
    </div>
    <p className="ticket-description my-4">{ticket.description}</p>

    <div className="flex gap-2 mt-2 justify-between items-center">
        <div className="flex">
            <span className="ticket-id">#{ticket.id}</span>
            <span className={`priority-badge text-error ml-2 uppercase ${getPriorityClass(ticket.priority)}`}>
                {ticket.priority} PRIORITY
            </span>
        </div>
        {/*  */}
        <div className="flex gap-2 mt-2">
            <span className="ticket-description">{ticket.customer}</span>
            <span className="ticket-date ticket-description">
                <div className="flex gap-1">
                    <img src={Calender} alt="Calendar" />
                    {formatDate(ticket.createdAt)}
                </div>
            </span>
        </div>
    </div>

    
</div>
    );
    };

    export default TicketCard;