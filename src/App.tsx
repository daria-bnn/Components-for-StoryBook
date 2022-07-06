import './App.css'
import FirstButton from './components/First-Button/FirstButton'
import MultiButton from './components/MultiButton/MultiButton'

const App = () => (
  <div className="App">
    <FirstButton text="Click me" />
    <MultiButton modif={{ size: 'xs', action: 'loading' }} />
    <MultiButton
      modif={{ size: 'xs', action: 'loading', state: 'successfull' }}
    />
    <MultiButton modif={{ size: 's', action: 'valid' }} />
    <MultiButton modif={{ size: 's', action: 'valid', state: 'successfull' }} />
    <MultiButton
      modif={{ size: 'm', action: 'disabled', state: 'successfull' }}
    />
    <MultiButton modif={{ size: 'm', action: 'disabled' }} />
    <MultiButton modif={{ size: 's', state: 'dangerous' }} />
  </div>
)

export default App
