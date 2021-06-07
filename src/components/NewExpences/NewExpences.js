import React, { useState } from "react";
import ExpenceForm from './ExpenceForm';
import './NewExpences.css';



const NewExpence = (props) => {

 const [isEditing , setIsediting] = useState(false);
    
    //function is written for communicate form child to parent component(i.e App.js)
    const onSubmitHandler = (ExpenceData) =>{
        const enteredExpenceData ={
            //getting all the data form ExpenceForm and present in the App.js
            ...ExpenceData
        };
        //onAddExpence is comeing form App.js as props
        props.onAddExpence(enteredExpenceData);
        setIsediting(false);

    } 

    const startEditingHandler = () =>{
      setIsediting(true);
    };

    const cancelEditingHandler =() =>{
      setIsediting(false);
    }
  return (
    <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expence</button>}
     {isEditing && <ExpenceForm  onsubmitExpenceData={onSubmitHandler} oncancel ={cancelEditingHandler}/>}
    </div>
  );
};
export default NewExpence;
