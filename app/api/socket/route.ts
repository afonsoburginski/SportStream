import { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

type NextApiResponseWithSocket = NextApiResponse & {
  socket: {
    server: {
      io?: Server;
    };
  };
};

const usersInRoom: { [key: string]: number } = {};

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
  if (!res.socket.server.io) {
    console.log('Starting Socket.IO server...');
    const httpServer: HttpServer = res.socket.server as any;
    const io = new Server(httpServer, {
      path: '/api/socket',
      cors: {
        origin: '*', // Configure para o domínio do seu frontend.
      },
    });

    io.on('connection', (socket) => {
      console.log('A user connected', socket.id);

      socket.on('join_room', (room) => {
        socket.join(room);
        usersInRoom[room] = (usersInRoom[room] || 0) + 1;
        io.to(room).emit('user_count', usersInRoom[room]);
        console.log(`User joined room: ${room}`);
      });

      socket.on('send_message', (data) => {
        const { room, message, user } = data;
        io.to(room).emit('receive_message', { user, message });
      });

      socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
        for (const room of socket.rooms) {
          if (usersInRoom[room]) {
            usersInRoom[room]--;
            io.to(room).emit('user_count', usersInRoom[room]);
          }
        }
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
