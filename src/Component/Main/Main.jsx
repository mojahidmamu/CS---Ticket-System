import React, { useEffect, useState } from 'react';
import TaskStatus from '../Ticket/TaskStatus';
import TicketCard from '../Ticket/TicketCard'; 
import { toast } from 'react-toastify';

const Main = ({ inProgressTickets, setInProgressTickets, resolvedTickets, setResolvedTickets }) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch("/Data.json")
        .then((res) => res.json())
        .then((data) => {
            // Data is directly the array of tickets
            setTickets(data);
        })
        .catch((error) => console.error("Error fetching tickets:", error));
    }, []);

    const handleMoveToInProgress = (ticket) => {
        if (!inProgressTickets.find((t) => t.id === ticket.id)) {
            setInProgressTickets([...inProgressTickets, { ...ticket, status: "in-progress" }]);
            toast.info(`Ticket ${ticket.id} moved to In Progress`);
        } else {
            toast.warning(`Ticket ${ticket.id} is already in progress`);
        }
    };

    const handleComplete = (ticket) => {
        // Remove from In Progress
        const updatedInProgress = inProgressTickets.filter(
            (t) => t.id !== ticket.id
        );
        setInProgressTickets(updatedInProgress);

        if (!resolvedTickets.find(t => t.id === ticket.id)) {
            setResolvedTickets([...resolvedTickets, ticket]);
        }

        setTickets(tickets.filter(t => t.id !== ticket.id));
        toast.success("Task Completed!");
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className='font-bold text-xl my-4'>Customer Tickets</h1>
                <div className="in-progress-banner">
                    {/* In Progress: {inProgressTickets.length} */}
                </div>
            </header>

            <div className="main-content flex flex-col md:flex-row gap-2">
                {/* Left: Ticket Cards */}
                <div className="tickets-grid grid grid-cols-1 sm:grid-cols-2 gap-4 w-3/4 mx-auto">
                    {Array.isArray(tickets) && tickets.length > 0 ? (
                        tickets
                            .filter((t) => t.status !== "resolved" && t.status !== "closed")
                            .map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    ticket={ticket}
                                    onMoveToInProgress={handleMoveToInProgress}
                                    isInProgress={inProgressTickets.some((t) => t.id === ticket.id)}
                                />
                            ))
                    ) : (
                        <p className="col-span-2 text-center text-gray-500">No tickets available</p>
                    )}
                </div>

                {/* Right: Task Status Section */}
                <div className="task-status-wrapper w-full md:w-1/4">
                    <TaskStatus 
                        inProgressTickets={inProgressTickets} 
                        onComplete={handleComplete} 
                        resolvedTickets={resolvedTickets}
                        setResolvedTickets={setResolvedTickets}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;