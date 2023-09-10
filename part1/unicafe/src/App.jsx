import { useState } from 'react'
import "./App.css"
import Button from './Button'


const Statistic = (props) => {
  const { good, neutral, bad } = props
  const totalVotes = good + neutral + bad
  const average = (good - bad) / totalVotes
  const positive = good / totalVotes * 100


  return (

    < div className='statistic' >
      <h2>Statistics:</h2>
      {totalVotes === 0 ? <h3>No feedback given</h3> :
        <div>
          <h2>General statistics:</h2>
          <h3>Good: {good}</h3>
          <h3>Neutral: {neutral}</h3>
          <h3>Bad: {bad}</h3>
          <h2>Additional statistics</h2>
          <h3>Total votes: {totalVotes}</h3>
          <h3>Average vote: {average.toFixed(2)}</h3>
          <h3>Persentage of positive votes: {positive.toFixed(2)}%</h3>
        </div>}
    </div >
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOne = () => setGood(good + 1)
  const neutralOne = () => setNeutral(neutral + 1)
  const badOne = () => setBad(bad + 1)


  return (
    <div className='app'>
      <div className='header'>
        <h2>Let us make our service better !</h2>
        <h3>Leave us a feedback</h3>
      </div>
      <div className='buttons'>
        <Button handleClick={goodOne} text={"good"} />
        <Button handleClick={neutralOne} text={"neutral"} />
        <Button handleClick={badOne} text={"bad"} />
      </div>
      <div className='results'>
        <Statistic good={good} neutral={neutral} bad={bad} />
      </div>

    </div>
  )
}

export default App