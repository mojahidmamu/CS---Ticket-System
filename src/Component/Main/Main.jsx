    
import React, { useEffect, useState } from 'react';
import TaskStatus from '../Ticket/TaskStatus';
import TicketCard from '../Ticket/TicketCard'; 

    const Main = () => {
    const [tickets, setTickets] = useState([]);
    const [inProgressTickets, setInProgressTickets] = useState([]);

    useEffect(() => {
        fetch("/Data.json")
        .then((res) => res.json())
        .then((data) => setTickets(data.tickets)); // extract array
    }, []);

    const handleMoveToInProgress = (ticket) => {
        if (!inProgressTickets.find((t) => t.id === ticket.id)) {
        setInProgressTickets([...inProgressTickets, { ...ticket, status: "in-progress" }]);
        alert(`Ticket ${ticket.id} moved to In Progress`);
        } else {
        alert(`Ticket ${ticket.id} is already in progress`);
        }
    };

    const handleCompleteTicket = (completedTicket) => {
        setInProgressTickets(inProgressTickets.filter((t) => t.id !== completedTicket.id));
        alert(`Ticket ${completedTicket.id} marked as complete`);
    };

    return (
        <div className="app-container">
        <header className="app-header">
            <h1 className='font-bold text-xl'>Customer Tickets</h1>
            <div className="in-progress-banner">
            In Progress: {inProgressTickets.length}
            </div>
        </header>

        <div className="main-content flex gap-2">
        {/* Left: Ticket Cards */}
        <div className="tickets-grid grid grid-cols-1 sm:grid-cols-2 gap-4 w-3/4 mx-auto">
            {Array.isArray(tickets) &&
                tickets
                .filter((t) => t.status !== "completed")
                .map((ticket) => (
                    <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onMoveToInProgress={handleMoveToInProgress}
                    isInProgress={inProgressTickets.some((t) => t.id === ticket.id)}
                    />
                ))}
            </div>

            {/* Right: Task Status Section */}
            <div className="task-status-wrappe w-1/4">
            <TaskStatus inProgressTickets={inProgressTickets} onComplete={handleCompleteTicket} />
            </div>
        </div>
        </div>
    );
    };

    export default Main;