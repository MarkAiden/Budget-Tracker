import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };

        case 'EDIT_EXPENSE':
            const { id, newCost } = action.payload;
            const updatedExpenses = state.expenses.map((expense) => {
                if (expense.id === id) {
                    return { ...expense, cost: parseInt(newCost) };
                }
                return expense;
            });

            return {
                ...state,
                expenses: updatedExpenses,
            };

        case 'EDIT_BUDGET': // Manejar la edición del presupuesto
            return {
                ...state,
                budget: action.payload
            };

        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'Compras', cost: 40},
        { id: 13, name: 'Festividades', cost: 100},
        { id: 14, name: 'Servicios Automovilísticos', cost: 210},
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    return(
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};