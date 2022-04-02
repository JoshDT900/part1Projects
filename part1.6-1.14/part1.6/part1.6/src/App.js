import { useState } from 'react'

const Good = (props) => {
  return (
    <tr>
      <td>Good:</td>
      <td>{props.stats}</td>
    </tr>
  )
}

const Nuetral = (props) => {
  return (
    <tr>
      <td>Nuetral: </td>
      <td>{props.stats}</td>
    </tr>
  )
}

const Bad = (props) => {
  return (
    <tr>
      <td>Bad: </td>
      <td>{props.stats}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Total = (props) => {
  return (
    <tr>
      <td>Total: </td>
      <td>{props.add}</td>
    </tr>
  )
}

const Avg = (props) => {  

  return (
    <tr>
      <td>Average: </td>
      <td>{props.avg}</td>
    </tr>
  )
}

const PercentPositive = (props) => {  
  return (
    <tr>
      <td>Positive: </td>
      <td>{props.positive}%</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.states.good === 0 && props.states.neutral === 0 && props.states.bad === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <table>    
      <tbody>
        <Good stats={props.states.good}/>
        <Nuetral stats={props.states.neutral} />
        <Bad stats={props.states.bad} />
        <Total add={props.states.good + props.states.neutral + props.states.bad} />
        <Avg avg={props.states.avg.reduce((a, b) => a + b, 0) / props.states.avg.length}/>
        <PercentPositive positive={(props.states.good / (props.states.good + props.states.neutral + props.states.bad)) * 100}/>   
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState([]) 

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => { setGood(good + 1); setAvg(avg.concat(1))}} text="Good"/>
      <Button handleClick={() => { setNeutral(neutral + 1); setAvg(avg.concat(0))}} text="Neutral"/>
      <Button handleClick={() => { setBad(bad + 1); setAvg(avg.concat(-1))}} text="Bad"/>
      <h1>Statistics</h1>     
      <Statistics states={{good, neutral, bad, avg}} />
    </div>
  )
}

export default App