import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([1, 4, 6, 3, 2, 23, 8, 1])
  const clickHandler = () => {
    setSelected(Math.round(Math.random() * 7))
  }
  let maxVotes = points.indexOf(Math.max(...points))

  const voteHandler = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)

  }


  return (
    <div className='anecdotes'>
      <h2>{anecdotes[selected]}</h2>
      <h3>For this anecdote voted {points[selected]}</h3>
      <button onClick={voteHandler}>Vote</button>
      <button onClick={clickHandler}> Generate random anecdote</button>
      <div className='anecOfDay'>
        <h2>Anecdotes with most votes:{Math.max(...points)} </h2>
        <h3>{anecdotes[maxVotes]}</h3>
      </div>
    </div>
  )
}

export default App