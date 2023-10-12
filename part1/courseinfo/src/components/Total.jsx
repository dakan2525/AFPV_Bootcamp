const Total = ({parts}) => {
  let suma = parts.reduce((total, part) => total + part.exercises, 0)
  console.log(suma);
    return (
      <p>Number of exercises {suma}</p>
      )
  }

  export default Total;