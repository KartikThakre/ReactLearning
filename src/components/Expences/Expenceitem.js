import React,{useState} from 'react'
import "./Expenceitem.css";
import Expencedate from "./Expencedate";
import Card from "../ExpencesUI/Card";

const Expence = (props) => {
  

  const [title , setTitle] = useState(props.title);


  const handleChange =() =>{
     setTitle("Updated!!");
    console.log("Clicked!!!!");
  }
  return (
    <Card className="expense-item">
      <Expencedate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price ">{props.amount}</div>
      <button onClick={handleChange}>Change Title</button>
    </Card>
  );
}

export default Expence;
