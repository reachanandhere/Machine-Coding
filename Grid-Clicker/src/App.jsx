
import './App.css'
import Grid from './Grid'

function App() {
  const GRID_SIZE = [[1,1,1],[1,0,0],[1,1,1]]

  return (
    <Grid grid={GRID_SIZE} />
  )
}

export default App
