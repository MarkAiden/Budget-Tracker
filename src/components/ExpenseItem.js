import React, { useContext, useState } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newCost, setNewCost] = useState(props.cost);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const handleEditExpense = () => {
        if (newCost <= 0) {
            alert("El costo debe ser mayor que 0");
            return;
        }

        dispatch({
            type: 'EDIT_EXPENSE',
            payload: { id: props.id, newCost: newCost },
        });
        setIsEditing(false);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex w-100 justify-content-between align-items-center">
                {!isEditing ? (
                    <span>{props.name}</span>
                ) : (
                    <div>
                        <input
                            type="number"
                            value={newCost}
                            onChange={(e) => setNewCost(e.target.value)}
                        />
                        <button
                            className="btn btn-success btn-sm ms-2"
                            onClick={handleEditExpense}
                        >
                            Guardar
                        </button>
                    </div>
                )}
                <span className="badge bg-primary rounded-pill">
                    ${props.cost}
                    <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
                    {!isEditing && (
                        <button
                            className="btn btn-primary btn-sm ms-2"
                            onClick={() => setIsEditing(true)}
                        >
                            Editar
                        </button>
                    )}
                </span>
            </div>
        </li>
    );
};

export default ExpenseItem;