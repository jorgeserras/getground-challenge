import React from "react"
import { AppContainer } from './components/Containers'
import AppRouter from './router/AppRouter'

const App: React.FC = () => {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  )
}

export default App