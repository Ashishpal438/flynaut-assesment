// Socket emit and On function example including socket connection .



// Server-side code
const io = require("socket.io")(httpServer);

// Handle incoming socket connections
io.on("connection", (socket) => {
  console.log("A client has connected.");

  // Emit a custom event to the client
  socket.emit("greeting", "Hello, client!");

  // Handle custom event from the client
  socket.on("clientEvent", (data) => {
    console.log("Received data from the client:", data);
  });

  // Handle disconnect event
  socket.on("disconnect", () => {
    console.log("A client has disconnected.");
  });
});




// Client-side code
const socket = io.connect("http://localhost:3000");

// Handle the greeting event from the server
socket.on("greeting", (message) => {
  console.log("Received greeting from the server:", message);
});

// Emit a custom event to the server
socket.emit("clientEvent", "Hello, server!");

// Handle disconnect event
socket.on("disconnect", () => {
  console.log("Disconnected from the server.");
});
