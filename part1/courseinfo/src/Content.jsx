import Part from "./Part"

const Content = (props) => {
  return (
    <div>
      <Part text={props.part1} number={props.exercises1} />
      <Part text={props.part2} number={props.exercises2} />
      <Part text={props.part3} number={props.exercises3} />
    </div>
  )
}
export default Content