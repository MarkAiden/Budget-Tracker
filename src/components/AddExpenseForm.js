import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        // Limpiar los valores después de agregar el gasto
        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor='name'>Nombre</label>
                    <input
                        required='required'
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>

                <div className="col-sm">
                    <label htmlFor='cost'>Costo</label>
                    <input
                        required='required'
                        type="number"
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>

                <div className="col-sm mt-4">
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;