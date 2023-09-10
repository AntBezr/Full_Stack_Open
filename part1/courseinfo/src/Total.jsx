
function Total(props) {
  let number = 0
  props.total.map(part => {
    return (number += part.exercises)
  })
  return (
    <div>
      <p>Number of exercises {number}</p>
    </div>
  );
}

export default Total;