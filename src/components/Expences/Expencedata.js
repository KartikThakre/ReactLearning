import Expence from "./Expenceitem";
import "./Expencedata.css";
import Card from "../ExpencesUI/Card";
import ExpenceFilter from "./ExpenceFilter";
import { useState } from "react";
import ExpenceList from "./ExpenceList";
import ExpenceChart from './ExpenceChart';


const Expencedata = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const ExpenceFilterHandler = (filterData) => {
    console.log(filterData);
    setFilterYear(filterData);
  };

  // function useing for geting data when year get selected
  const filterdExpencebyYear = props.data.filter(expence => {
    return expence.date.getFullYear().toString() === filterYear;
  })

  // //varible declared for alerting that no expences related to specific year
  // let expenceContent = <p>No Expences Found..!!</p>  
  // //condition for matching the expenceContent
  // if(filterdExpencebyYear.length > 0 ){
  //   expenceContent = filterdExpencebyYear.map((expence) => (
  //     //useing this function for filteringthe data useing after selecing a year
  //     <Expence
  //       key={expence.id}
  //       title={expence.title}
  //       amount={expence.amount}
  //       date={expence.date}
  //     />
      
  //   ))}
  

  return (
    <div>
      <Card className="expenses">
      <ExpenceFilter
          //this props are useing to get value form ExpenceFilter.js and set the year in ExpenceFilter.js
          selectYear={filterYear}
          onSubmitExpenceFilter={ExpenceFilterHandler}
        />

        <ExpenceChart expences ={filterdExpencebyYear} />  
        <ExpenceList  items ={filterdExpencebyYear}/>
        {/* { // for rendering use the variblein JSX
          expenceContent} */}

        {/* {filterdExpencebyYear.map((expence) => (
          //useing this function for filteringthe data useing after selecing a year
          <Expence
            key={expence.id}
            title={expence.title}
            amount={expence.amount}
            date={expence.date}
          />
          
        ))} */}
        {/* {props.data.map((expence) => (
          //Dynamic way to get a value and rendering in a list by useing map() method
          <Expence
            key={expence.id}
            title={expence.title}
            amount={expence.amount}
            date={expence.date}
          />
        ))} */}

        {/* <Expence
        //Static way to get a value and rederng a list from array and its hardcoaded
          date={props.data[0].date}
          title={props.data[0].title}
          amount={props.data[0].amount}
        /> */}
        
      </Card>
    </div>
  );
};

export default Expencedata;
