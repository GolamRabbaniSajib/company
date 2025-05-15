"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import CryptoJS from "crypto-js";
import axios from "axios";
import { generateUniqueId } from "@/utils";

// const socket = io(process.env.NEXT_PUBLIC_BASE_URL);

const ChatBoxCard = ({ toggleChatbox }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [messages, setMessages] = useState([]);

    function getCurrentTime() {
        const currentDate = new Date();

        // Get hours and minutes
        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        // Determine AM or PM
        const amPm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        hours = hours % 12 || 12; // If hours is 0, set it to 12

        // Format minutes to always have two digits
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        // Return formatted time
        return `${hours} : ${formattedMinutes} ${amPm}`;
    }

    function convertTo12HourFormat(timestamp) {
        const date = new Date(timestamp);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            // timeZone: 'Asia/Dhaka'
                };
        return date.toLocaleString('en-us', options);
    }
    // const socket = io("https://byteonsoft-server.vercel.app"); // Connect to the server

    const fetchMessage = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-message`,{
                chatIds: [user?.chatId]
            })
            console.log(response.data);
            setMessages(response.data[0].messages);
        } catch (error) {
            console.log(error.message);
        }
    }

    // const SECRET_KEY = process.env.MESSAGE_KEY || '7jdovN5K7OPHI3UcLkjhwB67HkTeA05HmOlC6y0AExE'

    useEffect(() => {
        fetchMessage();
    },[toggleChatbox])

    useEffect(() => {
        // Listen for incoming messages
        socket.on("receiveMessage", (messageData) => {
            console.log(messageData);
            
            // Check if any new message matches the chatId
            // const isMatched = messageData.messages.some(m => m.chatId === messageData.chatId);
            const isMatched = messageData.chatId === user?.chatId;
    
            if (isMatched) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { ...messageData } // Append the new message data if a match is found
                ]);
            }
        });
    
        // Cleanup on unmount
        return () => {
            socket.off("receiveMessage");
        };
    }, [socket, messages, user]);
    

    const handleUserSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const chatId = generateUniqueId()
        const userData = { name, email, phone, chatId };

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const messageText = e.target.message.value;
        const message = {
            message: messageText,
            email: user?.email,
            sender: "user",
            time: new Date(),
            name: user?.name,
            phone: user?.phone,
            chatId: user?.chatId,
            status: 'sent'
        };
        // Emit the message to other clients via socket
        socket.emit("sendMessage", message);
        e.target.reset();
    };

    return (
        <>
            <div className="fixed bottom-16 right-4 w-80 bg-white p-4 rounded-lg shadow-lg border border-gray-200 ">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Chat with Admin</h2>
                    <button
                        onClick={toggleChatbox}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>
                {
                    !user ? <>
                        <div className='h-64 overflow-y-auto p-2 border-t mt-2'>
                            <form onSubmit={handleUserSubmit} className=' flex flex-col items-center space-y-3'>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Type Your Name"
                                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    required
                                />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Type Your Email"
                                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    required
                                />
                                <input
                                    type="text"
                                    name='phone'
                                    placeholder="Type Your Phone Number"
                                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    required
                                />

                                <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-r-md  transition duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </> : <>
                        <div className="flex-1 overflow-y-scroll p-4 h-[250px]">
                            <h5>How can I assist You?</h5>
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
                                    <div className={`p-3 rounded-lg max-w-xs ${message.sender === "user" ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-black"}`}>
                                        {message.message}
                                        <div className={`text-xs text-gray-200 mt-1 text-right ${message.sender === 'user' ? "text-gray-200" : 'text-black'}`}>
                                            {convertTo12HourFormat(message.time)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSendMessage} className="flex mt-4">
                            <input
                                type="text"
                                name="message"
                                placeholder="Type a message"
                                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                            />
                            <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-r-md transition duration-300">
                                Send
                            </button>
                        </form>
                    </>
                }
            </div>
        </>
    );
};

export default ChatBoxCard;