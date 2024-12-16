import {useState} from "react"
import Radio from "../components/cleaner/Radio";
import DeletePostCard from "../components/cleaner/DeletePostCard";

function Cleaner({agent, user}) {

    const [selectedOption, setSelectedOption] = useState("post");

    return (
      <main className="cleaner-container">
        <Radio selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        {selectedOption === 'post' && <DeletePostCard agent={agent} user={user} />}
        {selectedOption === 'repost' && <div />}
        {selectedOption === 'reply' && <div />}
      </main>
    );
  }
  
  export default Cleaner;
  