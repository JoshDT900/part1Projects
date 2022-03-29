const Header = (prop) => {
  return (
    <>
      <h1>{prop.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.partMain.part1} exer={props.exerMain.exercises1}/>
      <Part part={props.partMain.part2} exer={props.exerMain.exercises2}/>
      <Part part={props.partMain.part3} exer={props.exerMain.exercises3}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exer}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.add}</p>
    </>
  )
}





const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content partMain={{part1, part2, part3}} exerMain={{exercises1, exercises2, exercises3}}/>     
      <Total add={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App