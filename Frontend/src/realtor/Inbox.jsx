import React, { useState } from 'react';

// Sample data
const messages = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Meeting Reminder',
    body: 'Just a reminder about our meeting tomorrow.',
    date: '2024-04-01',
    time: '09:00 AM',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    subject: 'Report Submission',
    body: 'Please submit your report by the end of the day.',
    date: '2024-04-02',
    time: '03:30 PM',
  },
  // Add more messages as needed
];

// Message List component as a table
const MessageList = ({ messages, onSelectMessage }) => {
    return (
      <div className="shadow-md outline outline-1 shadow-black rounded-md overflow-hidden mx-4 md:mx-10">
        <table className="w-full table-fixed mx-auto"> {/* Added mx-auto class */}
          <thead>
            <tr className="bg-sky-100">
              <th className="w-20 py-4 px-6 text-center text-gray-600 font-bold uppercase">ID</th>
              <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Sender</th>
              <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Subject</th>
              <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Date</th>
              <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Time</th>
              <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {messages.map((message) => (
              <tr
                key={message.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => onSelectMessage(message)}
              >
                <td className="py-4 px-6 border-b border-gray-200 text-center">{message.id}</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center truncate">{message.sender}</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">{message.subject}</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">{message.date}</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">{message.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  

// Message Detail component
const MessageDetail = ({ message }) => {
  return (
    <div className="p-4">
      <div className="font-bold">{message.sender}</div>
      <div>{message.subject}</div>
      <div>{message.body}</div>
    </div>
  );
};

// Inbox page component
const Inbox = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="flex items-center">
      <div className="w-4/5">
        {/* Message List */}
        <MessageList messages={messages} onSelectMessage={setSelectedMessage} />
        {/* Message Detail */}
        {selectedMessage && <MessageDetail message={selectedMessage} />}
      </div>
    </div>
  );
};

export default Inbox;
