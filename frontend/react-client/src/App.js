import { useEffect, useRef } from "react";
import "./App.css";

import { io } from "socket.io-client";

function App() {
  const socket = useRef();

  useEffect(() => {
    // socket.current = io("ws://localhost:5000");
    socket.current = io("ws://localhost", {path: "/ws/socket.io" });

    socket.current.on("connnection", () => {
      console.log("connected to server");
    });

    socket.current.on("message", (data) => {
      console.log("message received");
      console.log(data);
      document.getElementById('r').innerHTML = data;
    });
  }, []);

  const handleClick = () => {
    socket.current.emit("message", new Date().getTime());
    console.log("testtest");
  };

  return (
    <div className="App">
      <p>Socket.io app</p>

      <button type="button" onClick={handleClick}>
        Emit a time message
      </button>
      <p id="r"></p>
    </div>
  );
}

export default App;
