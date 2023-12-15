import React, { useState, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredExpenses = expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar gasto por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="list-group">
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                        dispatch={dispatch} // Pasar dispatch como prop
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
