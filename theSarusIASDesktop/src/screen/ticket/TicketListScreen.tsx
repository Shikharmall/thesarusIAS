interface Ticket {
  title: string;
  category: string;
  priority: string;
  status: string;
  createdAt: string;
}

const TicketListScreen = ({ tickets, onSelect }: { tickets: Ticket[]; onSelect: (ticket: Ticket) => void }) => {
  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">My Tickets</h2>
      <div className="space-y-3">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            onClick={() => onSelect(ticket)}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{ticket.title}</h3>
              <p className="text-sm text-gray-500">
                {ticket.category} • {new Date(ticket.createdAt).toLocaleDateString()}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${ticket.status === "Open"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
                }`}
            >
              {ticket.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketListScreen;
