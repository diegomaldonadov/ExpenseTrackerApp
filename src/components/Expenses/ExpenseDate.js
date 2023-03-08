import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {

  const selectedDate = new Date(props.date);
  const offset = new Date().getTimezoneOffset();
  const targetOffset = -240; // desplazamiento de -4 horas (para la zona horaria EDT)
  const adjustedDate = new Date(selectedDate.getTime() + (offset - targetOffset) * 60 * 1000);

  const month = adjustedDate.toLocaleDateString("en-US", { month: "long" });
  const day = adjustedDate.toLocaleDateString("en-US", { day: '2-digit' });
  const year = adjustedDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
