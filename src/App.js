import './App.css'
import Button from './components/Button'

const App = () => {
  const alertUser = () => {
    alert('The button is pressed!')
  }

  return (
    <div>
      <Button text="Awesome Button!" handleClick={alertUser} />
    </div>
  )
}

export default App
