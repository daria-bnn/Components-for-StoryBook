import './App.css'

import FirstButton from './components/First-Button/FirstButton'
import Icon, { IconProps } from './components/Icon/Icon'
import MultiButton, { BtnProps } from './components/MultiButton/MultiButton'

import crab from './assets/crab.svg'
import octopus from './assets/octopus.svg'
import whale from './assets/whale.svg'
import dove from './assets/dove.svg'

import IconButton from './components/IconButton/IconButton'
import CaptionIcon from './components/CaptionIcon/CaptionIcon'

const captionIconOctopus: IconProps = {
  nameImg: octopus,
  size: 26,
}

const captionIconDove: IconProps = {
  nameImg: dove,
  size: 48,
}

const staticBtn: BtnProps = {
  size: 'xs',
}

const smallLoadBtn: BtnProps = {
  size: 's',
  action: 'loading',
}

const mediumValidSuccBtn: BtnProps = {
  size: 'm',
  action: 'valid',
  state: 'successfull',
}

const mediumDanggBtn: BtnProps = {
  size: 'm',
  state: 'dangerous',
}

const largeLoadDisablBtn: BtnProps = {
  size: 'l',
  action: 'disabled',
}

const App = () => (
  <div className="App">
    <FirstButton text="Click me" />
    <MultiButton modif={staticBtn} />
    <MultiButton modif={smallLoadBtn} />
    <MultiButton modif={mediumValidSuccBtn} />
    <MultiButton modif={mediumDanggBtn} />
    <MultiButton modif={largeLoadDisablBtn} />
    <div style={{ border: '1px solid #86c4d9', padding: '10px 20px' }}>
      <h2>Айконки</h2>
      <Icon nameImg={crab} size={40} />
      <Icon nameImg={octopus} size={60} />
      <Icon nameImg={whale} size={80} />
    </div>
    <IconButton text="Кнопка-кит" size={40} nameImg={whale} />
    <IconButton text="Крабо-кнопка" size={60} nameImg={crab} />
    <CaptionIcon text="Hello" fontSize={24}>
      <Icon {...captionIconOctopus} />
    </CaptionIcon>
    <CaptionIcon text="The dove of peace" fontSize={32}>
      <Icon {...captionIconDove} />
    </CaptionIcon>
  </div>
)

export default App
