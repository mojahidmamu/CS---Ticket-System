import React, { useEffect, useState } from 'react';
import TaskStatus from '../Ticket/TaskStatus';
import TicketCard from '../Ticket/TicketCard';

const Main = () => {
    const [tickets, setTickets] = useState(0);
    const [inProgressTickets, setInProgressTickets] = useState([]);

    useEffect(() => {
        fetch("./Data.json")
            .then(res => res.json())
            .then(data => setTickets(data));
    }, []);
    // console.log(tickets);

    const handleMoveToInProgress = (ticket) => {
         if (!inProgressTickets.find(t => t.id === ticket.id)) {
        setInProgressTickets([...inProgressTickets, { ...ticket, status: 'in-progress' }]);
        alert(`Ticket ${ticket.id} moved to In Progress`);
        } else {
        alert(`Ticket ${ticket.id} is already in progress`);
        }
    }

    const handleCompleteTicket = (completedTicket) => {
        const updatedInProgress = inProgressTickets.filter(t => t.id !== completedTicket.id);
        setInProgressTickets(updatedInProgress);
        
        // Update main tickets list (optional - mark as completed)
        const updatedTickets = tickets.map(t => 
        t.id === completedTicket.id ? { ...t, status: 'completed' } : t
        );
        setTickets(updatedTickets);
        
        alert(`Ticket ${completedTicket.id} marked as complete`);
    }

    return (
        <div className="app">
            {/* Title */}
            <header className="app-header">
                <h1>Customer Tickets</h1>
                <div className="in-progress-banner">
                    In Progress: {inProgressTickets.length}
                </div>
            </header>

            <div>
                <div>
                    {
                        tickets.filter(t => t.status !== "completed").map(ticket => (
                            <TicketCard key={ticket.id} ticket={ticket} onMoveToInProgress={handleMoveToInProgress} 
                            isInProgress={inProgressTickets.some(t => t.id === ticket.id)}/>
                        ))
                    }
                </div>

                <TaskStatus  inProgressTickets={inProgressTickets}
                onComplete={handleCompleteTicket}></TaskStatus>
            </div>
        </div>
    );
};

export default Main;