import Card from "./Card";

function DeleteSelectedPostCard() {
    const handleClickDelete = async() => {
        window.alert('do anything...');
    }
    return (
        <Card 
            header="Delete Selected Posts" 
            action={handleClickDelete}
        >
            <div>Ready to open.</div>
            <div>The button doesn't do anything.</div>
        </Card>
    )
}

export default DeleteSelectedPostCard;