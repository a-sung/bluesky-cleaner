import {useState} from "react"
import Radio from "../components/cleaner/Radio";
import DeletePostCard from "../components/cleaner/DeletePostCard";
import DeleteSelectedPostCard from "../components/cleaner/DeleteSelectedPostCard";
import DeleteRepostCard from "../components/cleaner/DeleteRepostCard";
import DeleteReplyCard from "../components/cleaner/DeleteReplyCard";

function Cleaner({agent, user}) {

    const [selectedOption, setSelectedOption] = useState("all");

    return (
      <main className="cleaner-container">
        <Radio selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        {selectedOption === 'all' && <DeletePostCard agent={agent} user={user} />}
        {selectedOption === 'selected' && <DeleteSelectedPostCard />}
        {selectedOption === 'repost' && <DeleteRepostCard /> }
        {selectedOption === 'reply' && <DeleteReplyCard /> }
      </main>
    );
  }
  
  export default Cleaner;
  