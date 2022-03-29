const Header = (prop) => {
  return (
    <>
      <h1>{prop.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.partMain.parts[0].name} exer={props.partMain.parts[0].exercises}/>
      <Part part={props.partMain.parts[1].name} exer={props.partMain.parts[1].exercises}/>
      <Part part={props.partMain.parts[2].name} exer={props.partMain.parts[2].exercises}/>
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
      <p>Number of exercises {props.add.parts[0].exercises + props.add.parts[1].exercises + props.add.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content partMain={course}/>     
      <Total add={course}/>
    </div>
  )
}

export default App