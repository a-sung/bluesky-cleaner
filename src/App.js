
import { useState } from "react";
import { AtpAgent } from '@atproto/api'
import "./styles/App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import Cleaner from "./pages/Cleaner";

const a = new AtpAgent({
  service: 'https://bsky.social'
})

function App() {
  const [agent, setAgent] = useState(a);
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Header />
      <div className="app-container">
       {!user && <Login agent={agent} setUser={setUser} />}
       {user && <User user={user} />}
       <Cleaner agent={agent} user={user} />
      </div>
    </div>
  );
}

export default App;
