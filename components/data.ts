/* eslint-disable @typescript-eslint/no-unused-vars */

interface GameRoom {
  id: string;
  title: string;
  description: string;
  streamUrl: string;
  startTime: Date;
  endTime?: Date;
  status: 'live' | 'finished';
}

type RoomParticipation = {
  id: string;
  userId: string;
  roomId: string;
  entryTime: Date;
  exitTime: Date | null;
  totalTimeSpent?: number;
};

type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  creationDate: Date;
  role: 'user' | 'admin';
};

type ChatMessage = {
  id: string;
  roomId: string;
  userId: string;
  content: string;
  timestamp: Date;
};


socket.io
zuztand
