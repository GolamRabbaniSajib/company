"use client";
import ChatBoxCard from '@/components/Card/ChatBoxCard';
import { handleWhatsApp } from '@/utils';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChatbox = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>
            <button
                onClick={() => handleWhatsApp('Hi! I want to connect with you')}
                className="bg-[var(--color-primary)] p-4 rounded-lg cursor-pointer fixed bottom-4 right-4 z-30 "
            >
                <FaWhatsapp className="w-7 h-7 text-white" />
            </button>

            {isChatOpen && (
            <ChatBoxCard toggleChatbox={toggleChatbox}></ChatBoxCard>
            )}
        </div>
    );
};

export default ChatButton;
