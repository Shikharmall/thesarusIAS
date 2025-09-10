import { useState } from "react";
import CreateTicketScreen from "./CreateTicketScreen";
import TicketListScreen from "./TicketListScreen";
import TicketDetailsScreen from "./TicketDetailsScreen";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/Header";

const TicketScreen = () => {
    const [tickets, setTickets] = useState<any[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<any | null>(null);

    const handleCreateTicket = (ticket: any) => {
        setTickets([...tickets, ticket]);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <div className="p-6">
                    {!selectedTicket ? (
                        <>
                            <CreateTicketScreen onSubmit={handleCreateTicket} />
                            <TicketListScreen tickets={tickets} onSelect={setSelectedTicket} />
                        </>
                    ) : (
                        <TicketDetailsScreen ticket={selectedTicket} />
                    )}
                </div>
            </main>
        </div>
    );
};

export default TicketScreen;
