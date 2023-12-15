import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Planificador de Presupuesto</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>

        <h3 className="mt-3">Gastos</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <h3 className="mt-3">Añadir Gasto</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>

        <footer className="bg-gray-900 text-gray-400 text-sm py-4">
          <div className="container d-flex justify-content-between align-items-center">
            <p>&copy; Freivel Hirujo, 2023.</p>
            <div>
              <a href="https://www.linkedin.com/in/freivelhirujo/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
};

export default App;