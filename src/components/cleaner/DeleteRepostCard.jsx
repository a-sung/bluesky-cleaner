import Card from "./Card";

function DeleteRepostCard() {
    const handleClickDelete = async() => {
        window.alert('do anything...');
    }
    return (
        <Card 
            header="Delete Only Reposts" 
            action={handleClickDelete}
        >
            <div>Ready to open.</div>
            <div>The button doesn't do anything.</div>
        </Card>
    )
}

export default DeleteRepostCard;