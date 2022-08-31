import { useRef } from "react";
import Button from "../ui/button";
import classes from "./activity-search.module.css";
import { getYears, getMonths } from "../../calendar-data";

function ActivitySearch(props) {
  const years = getYears();
  const months = getMonths();

  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submittedHandler(event) {
    // prevent default form submition event.
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map((month) => (
              <option value={month.id} key={month.id}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button onClick={submittedHandler}>Find</Button>
    </form>
  );
}

export default ActivitySearch;
