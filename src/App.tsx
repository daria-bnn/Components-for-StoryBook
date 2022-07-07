import './App.css'

import FirstButton from './components/First-Button/FirstButton'
import Icon from './components/Icon/Icon'
import MultiButton from './components/MultiButton/MultiButton'

import crab from './assets/crab.svg'
import octopus from './assets/octopus.svg'
import whale from './assets/whale.svg'
import IconButton from './components/IconButton/IconButton'

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
    <div style={{ border: '1px solid #86c4d9', padding: '10px 20px' }}>
      <h2>Айконки</h2>
      <Icon nameImg={crab} size={40} />
      <Icon nameImg={octopus} size={60} />
      <Icon nameImg={whale} size={80} />
    </div>
    <IconButton text="Кнопка-кит" size={40} nameImg={whale} />
    <IconButton text="Крабо-кнопка" size={60} nameImg={crab} />
  </div>
)

export default App
