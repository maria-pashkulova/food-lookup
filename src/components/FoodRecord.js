import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function FoodRecord({ foodItem, onFoodItemClick, addActionButtons, onDelete }) {
  return (
    <tr onClick={() => onFoodItemClick(foodItem)}>
      <td>{foodItem.description}</td>
      <td>{foodItem.kcal}</td>
      <td>{foodItem.protein}</td>
      <td>{foodItem.fat}</td>
      <td>{foodItem.carbs}</td>
      {addActionButtons && (
        <td>
          <Button
            className="mx-2"
            as={Link}
            to={`/edit/${foodItem.id}`}
            variant="primary"
            onClick={(e) => e.stopPropagation()}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(foodItem);
            }}
          >
            Delete
          </Button>
        </td>
      )}
    </tr>
  );
}

export default FoodRecord;
