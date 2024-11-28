"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import EmotePicker from "@/components/EmotePicker";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";

interface LiveChatProps {
  onEmoteSelect: (emote: string) => void;
  message: string;
  setMessage: (message: string) => void;
}

interface ChatMessage {
  user: string;
  text: string;
}

export default function LiveChat({
  onEmoteSelect,
  message,
  setMessage,
}: LiveChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const username = "Afonso";
  const room = "game-room-1"; // Replace with dynamic room ID if needed.

  useEffect(() => {
    const socketInstance = io("http://localhost:3000/api/socket");
    setSocket(socketInstance);

    socketInstance.emit("join_room", room);

    socketInstance.on("receive_message", (data: ChatMessage) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [room]);

  const handleSendMessage = () => {
    if (message.trim() !== "" && socket) {
      const newMessage = { user: username, text: message };
      socket.emit("send_message", { ...newMessage, room });
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  return (
    <Sidebar
      className="fixed top-12 right-0 bottom-0 w-80 h-[95vh] z-50 flex flex-col border-l-0"
      side="right"
    >
      <SidebarHeader>
        <div className="flex items-center justify-center gap-2 p-2">
          <SidebarTrigger side="right" />
          <span className="flex-1 truncate font-medium text-center">
            Live Chat
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex flex-1 flex-col min-h-0 overflow-hidden gap-0">
        <ChatBody messages={messages} />
        <ChatInputBase
          onEmoteSelect={onEmoteSelect}
          message={message}
          setMessage={setMessage}
          onSendMessage={handleSendMessage}
        />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function ChatBody({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="flex-1 overflow-y-auto bg-muted/30 p-2 rounded-lg">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div key={index} className="p-2 bg-muted/10 rounded-lg mb-2">
            <strong className="text-primary">{msg.user}:</strong> {msg.text}
          </div>
        ))
      ) : (
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center gap-4">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex-1 flex flex-col gap-2">
              <Skeleton className="w-1/3 h-4 rounded" />
              <Skeleton className="w-full h-6 rounded" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function ChatInputBase({
  onEmoteSelect,
  message,
  setMessage,
  onSendMessage,
}: {
  onEmoteSelect: (emote: string) => void;
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: () => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="bg-muted/10 border-t border-muted flex items-center gap-2 p-2">
      <div className="relative w-full">
        <Textarea
          placeholder="Type your message..."
          className="pr-12"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={onSendMessage}
        >
          <EmotePicker onSelect={onEmoteSelect} />
        </Button>
      </div>
    </div>
  );
}
