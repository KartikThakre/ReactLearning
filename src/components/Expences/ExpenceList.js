import Expence from "./Expenceitem";
import "./ExpenceList.css";


const ExpenceList = (props) => {
  //props.item is came fron ExpenceData
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expences</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expence) => (
        //useing this function for filteringthe data useing after selecing a year
        <Expence
          key={expence.id}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
    </ul>
  );
};

export default ExpenceList;
