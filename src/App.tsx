import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { TasksProvider } from './context/TasksContext'

const App: React.FC = () => {
  return (
    <TasksProvider>
      <Header />
      <Main />
      <Footer />
    </TasksProvider>
  )
}

export { App }
