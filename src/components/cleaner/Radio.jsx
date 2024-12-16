function Radio({selectedOption, setSelectedOption}) {
    const handleChangeOption = (event) => {
      setSelectedOption(event.target.value); // 선택된 값을 업데이트
    };
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="post"
                    checked={selectedOption === "post"}
                    onChange={handleChangeOption}
                />
                Delete All Posts
            </label>
            {/* <label>
                <input
                    type="radio"
                    value="repost"
                    checked={selectedOption === "repost"}
                    onChange={handleChangeOption}
                />
                Delete Only Reposts
            </label>
            <label>
                <input
                    type="radio"
                    value="reply"
                    checked={selectedOption === "reply"}
                    onChange={handleChangeOption}
                />
                Delete Only Replies
            </label> */}
        </div>
    )
}

export default Radio;