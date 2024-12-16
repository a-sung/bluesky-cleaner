import Card from "./Card";

function DeleteReplyCard() {
    const handleClickDelete = async() => {
        window.alert('do anything...');
    }
    return (
        <Card 
            header="Delete Only Replies" 
            action={handleClickDelete}
        >
            <div>Ready to open.</div>
            <div>The button doesn't do anything.</div>
        </Card>
    )
}

export default DeleteReplyCard;