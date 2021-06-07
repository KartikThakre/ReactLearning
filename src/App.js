import React ,{useState} from 'react';
import "./App.css";
import ExpenceData from "./components/Expences/Expencedata";
import NewExpences from './components/NewExpences/NewExpences'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App =() => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenceHandler = (addexpence) =>{
    // here State are useing to add a new expence in an array and render in that list of array
    setExpenses((prevExpenses) => {
      return prevExpenses.concat(addexpence);
    });

    console.log(addexpence);
  }
  return (
    <div>
      <h1>React Project...</h1>
      <NewExpences onAddExpence= {addExpenceHandler} />
      <ExpenceData data={expenses} />
      
    </div>
  );
}

export default App;
