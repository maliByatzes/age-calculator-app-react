import './App.css'

function App() {

  return (
    <>
      <div className='main__div'>
        <div className='main__div-input'>
          <div className='main__div-input-day'>
            <label htmlFor="day__input">day</label>
            <input type="text" name="day" id="day__input" placeholder='DD' />
          </div>
          <div className='main__div-input-month'>
            <label htmlFor="month__input">month</label>
            <input type="text" name="month" id="month__input" placeholder='MM' />
          </div>
          <div className='main__div-input-year'>
            <label htmlFor="year__input">year</label>
            <input type="text" name="year" id="year__input" placeholder='YYYY' />
          </div>
        </div>

        <div className='main__div-break'>
          <hr />
          <img src="../assets/images/icon-arrow.svg" alt="arrow down" />
        </div>

        <div className='main__div-info'>
          <p><span>- -</span>years</p>
          <p><span>- -</span>months</p>
          <p><span>- -</span>days</p>
        </div>
      </div>

    </>
  )
}

export default App
