import React, { useState } from "react";
import './ExpenceForm.css';

const ExpenceForm = (props) => {
  //1st wat to store a value useing usestate
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setAmountTitle] = useState("");
  const [enterDate, setDateTitle] = useState("");

  //2nd way to useState Object
  // const [enterInput,setEnterInput] = useState({
  //     enterTitle:'',
  //     enterAmount:'',
  //     enterDate:''
  // });

  const titleChangeHandler = (event) => {
    //1st way to use state by using multiple useState()
    setEnterTitle(event.target.value);

    //here we are useing spread operator to not get lost a data bcoz it returnng the whole value of array
    //2nd way to use the oneState insted of multiple state
    // setEnterInput({
    //     ...enterInput,
    //     enterTitle:event.target.value
    // });

    //3rd way to hav a previous state also and updated State also
    // by useing anonomus fuction
    // setEnterInput((prevState)=>{
    //     return{
    //         ...prevState,
    //         enterTitle:event.target.value
    //     }

    // })
  };

  const amountChangeHandler = (event) => {
    setAmountTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formdata = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    //using props to pass the data on NewExpences.js for child to parent component
    props.onsubmitExpenceData(formdata);
    
    setEnterTitle(" ");
    setDateTitle(" ");
    setAmountTitle(" ");

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.oncancel}>Cancel Expence</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenceForm;
