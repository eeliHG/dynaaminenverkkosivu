import React, { useState} from "react";
import "./App.css";



function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState(0);
  const [output, setOutput] = useState(0);

  function handleSubmit(e){
    e.preventDefault()
    setOutput(Math.round(calculate()*10)/10)

  }

  function calculate(){
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    grams = grams - (burning * time)

    if(gender == "male"){
      return grams/(weight*0.7)
    }
    else{
      return grams/(weight*0.6)

    }
  }
  

  return (
    <div class="main">
        <form onSubmit={handleSubmit}>
        <label HtmlFor = "weight">Weight</label>
        <input type = "number" id="weight" value={weight} onChange={i => setWeight(i.target.value)}></input>
        <label HtmlFor = "bottles">Bottles</label>
        <input type = "number" id="bottles" value={bottles} onChange={i => setBottles(i.target.value)}></input>
        <label HtmlFor = "time">Time</label>
        <input type = "number" id="time" value={time}  onChange={i => setTime(i.target.value)}></input>

        <div>Gender</div>
        <div class = "radio">
          <label HtmlFor = "male">Male</label>
          <input type = "radio" id="male" value = "male" name = "gender" onChange = {i => setGender(i.target.value)}></input>
    
          <label HtmlFor = "male">Female</label>
          <input type = "radio" id="female" value = "female" name = "gender" onChange = {i => setGender(i.target.value)}></input>
        </div>


        <button type="submit">Calculate</button>
      </form>

      <output>{output}</output>
    </div>
  );
}

export default App;
