import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.54, date: new Date(2021, 2, 28) },
    { title: "books", amount: 29.33, date: new Date(2021, 2, 28) },
    { title: "workers", amount: 29400, date: new Date(2021, 2, 28) },
    { title: "Medical Insurance", amount: 643.78, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <h2>Let's Win!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;


// This is how react used to work plus you import React
//  at the beginning of each file
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "lets get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );