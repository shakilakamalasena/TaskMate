import "./list.scss";
import Card from "../card/Card.jsx";

const List = ({ posts, showDeleteButton, handleDelete }) => {
    return (
        <div className="list">
            {posts.map((item) => (
                <Card
                    key={item.id}
                    item={item}
                    showDeleteButton={showDeleteButton}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default List;
