import { useState } from 'react'
import './App.css'


function App() {

  const [year, setYear] = useState("- -");
  const [month, setMonth] = useState("- -");
  const [days, setDays] = useState("- -");

  function handleClick() {
    handleYearChange("click");
    //handleMonthChange("click");
    //handleDaysChange("click");
  }

  function handleYearChange(event) {
    setYear(event.target.value);
    if (year > 9999 || year < 1000) {
      window.alert("Error invalid value. Please enter a valid year")
    }
    else {
      setYear(year - 2023);
    }
    
  }

  function handleMonthChange(event) {
    setMonth(event.target.value);
  }

  function handleDaysChange(event) {
    setDays(event.target.value);
  }


  return (
    <>
      <div className='main__div'>
        <div className='main__div-input'>
          <div className='main__div-input-day'>
            <label htmlFor="day__input">day</label>
            <input type="text" name="day" id="day__input" placeholder='DD' onChange={handleDaysChange} />
          </div>
          <div className='main__div-input-month'>
            <label htmlFor="month__input">month</label>
            <input type="text" name="month" id="month__input" placeholder='MM' onChange={handleMonthChange} />
          </div>
          <div className='main__div-input-year'>
            <label htmlFor="year__input">year</label>
            <input type="text" name="year" id="year__input" placeholder='YYYY' onChange={handleYearChange} />
          </div>
        </div>

        <div className='main__div-break'>
          <hr />
          <img src="../assets/images/icon-arrow.svg" alt="arrow down" 
               onClick={handleClick} />
        </div>

        <div className='main__div-info'>
          <p><span>- -</span>years</p>
          <p><span>{month}</span>months</p>
          <p><span>{days}</span>days</p>
        </div>
      </div>

    </>
  )
}

export default App
