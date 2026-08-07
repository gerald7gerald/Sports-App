require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.get('/', (req, res) => res.send('Sports App API running'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/sports-stats', require('./routes/sportsStats'));
app.use('/api/strength-stats', require('./routes/strengthStats'));

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('chat message', (msg) => io.emit('chat message', msg));
  socket.on('disconnect', () => console.log('User disconnected:', socket.id));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server on port ${PORT}`));