import './App.css'

function App() {

  return (
    <>
      <div className='main__div'>
        <div className='main__div-input'>
          <div className='main__div-input-day'>
            <label htmlFor="day__input">day</label>
            <input type="text" name="day" id="day__input" />
          </div>
          <div className='main__div-input-month'>
            <label htmlFor="month__input">month</label>
            <input type="text" name="month" id="month__input" />
          </div>
          <div className='main__div-input-year'>
            <label htmlFor="year__input">year</label>
            <input type="text" name="year" id="year__input" />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
