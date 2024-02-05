
function Total(props) {
  let total = 0;
  let sum = props.total.reduce((accumulator, currentNumber) => accumulator + currentNumber.exercises, total)
  return (
    <div>
      <h4>Number of exercises {sum}</h4>
    </div>
  );
}

export default Total;