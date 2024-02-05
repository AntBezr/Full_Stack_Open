import Part from "./Part"

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      {parts.map(obj => {
        return (
          <Part key={obj.name} text={obj.name} number={obj.exercises} />
        )
      })}

    </div>
  )
}
export default Content
