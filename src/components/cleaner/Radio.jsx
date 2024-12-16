function Radio({selectedOption, setSelectedOption}) {

    const handleChangeOption = (e) => {
      setSelectedOption(e.target.value);
    };

    const radios = [
        {value: "all", label: "Delete all posts"},
        {value: "selected", label: "Delete selected posts"},
        {value: "repost", label: "Delete reposts"},
        {value: "reply", label: "Delete Replies"},
    ]

    return (
        <div>
            {radios.map(radio => (
                <label>
                <input
                    type="radio"
                    value={radio.value}
                    checked={selectedOption === radio.value}
                    onChange={handleChangeOption}
                />
                {radio.label}
            </label>
            ))}
        </div>
    )
}

export default Radio;