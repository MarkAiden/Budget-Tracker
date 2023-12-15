import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newBudget, setNewBudget] = useState(budget);

    const handleEditBudget = () => {
        // Validación del nuevo presupuesto
        if (newBudget < 0 || isNaN(newBudget)) {
            alert("Ingrese un valor válido para el presupuesto.");
            return;
        }

        // Actualización del presupuesto
        dispatch({ type: 'EDIT_BUDGET', payload: parseFloat(newBudget) });
        setIsEditing(false);
    };

    return (
        <div className="alert alert-secondary d-flex justify-content-between align-items-center">
            <div>
                {!isEditing ? (
                    <span>Presupuesto: ${budget}</span>
                ) : (
                    <input
                        type="number"
                        className="form-control"
                        value={newBudget}
                        onChange={(e) => setNewBudget(e.target.value)}
                    />
                )}
            </div>
            <div>
                {!isEditing ? (
                    <button
                        className="btn btn-primary ml-2"
                        onClick={() => setIsEditing(true)}
                    >
                        Editar
                    </button>
                ) : (
                    <button
                        className="btn btn-success ml-2"
                        onClick={handleEditBudget}
                    >
                        Guardar
                    </button>
                )}
            </div>
        </div>
    );
};

export default Budget;