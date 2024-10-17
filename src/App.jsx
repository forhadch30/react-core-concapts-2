import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Posts from './Posts'
import Team from './Team'
import User from './User'
function App() {
  const handleClick = () => {
    alert('click me one')
  }
  function handleClick3(num) {
    alert(num + 5)
  }
  return (
    <>
      <h1>React Core 2</h1>

      <Posts></Posts>


      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>load data</li>
      </ol>
      <hr />
      <Friends></Friends>

      <User></User>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me 1</button>
      <button onClick={handleClick}>Click me 2</button>
      <button onClick={() => { alert('click me 3') }}>Click me 3</button>
      <button onClick={() => { handleClick3(3) }}>Click me 4</button>
    </>
  )
}

export default App
