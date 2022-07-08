import './App.css'

import FirstButton from './components/First-Button/FirstButton'
import Icon, { IconProps } from './components/Icon/Icon'
import MultiButton, { BtnProps } from './components/MultiButton/MultiButton'

import IconButton from './components/IconButton/IconButton'
import CaptionIcon from './components/CaptionIcon/CaptionIcon'
import BlockHint from './components/BlockHint/BlockHint'

const captionIconOctopus: IconProps = {
  nameImg: "octopus",
  size: 26,
}

const captionIconDove: IconProps = {
  nameImg: "dove",
  size: 48,
}

const staticBtn: BtnProps = {
  size: 'xs',
  action: 'static',
  state: 'normal',
}

const smallLoadBtn: BtnProps = {
  size: 's',
  action: 'loading',
  state: 'normal',
}

const mediumValidSuccBtn: BtnProps = {
  size: 'm',
  action: 'valid',
  state: 'successfull',
}

const mediumDanggBtn: BtnProps = {
  size: 'm',
  action: 'static',
  state: 'dangerous',
}

const largeLoadDisablBtn: BtnProps = {
  size: 'l',
  action: 'disabled',
  state: 'normal',
}

const App = () => (
  <div className="App">
    <FirstButton text="Click me" />
    <MultiButton {...staticBtn} />
    <MultiButton {...smallLoadBtn} />
    <MultiButton {...mediumValidSuccBtn} />
    <MultiButton {...mediumDanggBtn} />
    <MultiButton {...largeLoadDisablBtn} />
    <div style={{ border: '1px solid #86c4d9', padding: '10px 20px' }}>
      <h2>Айконки</h2>
      <Icon nameImg="crab" size={40} />
      <Icon nameImg="octopus" size={60} />
      <Icon nameImg="whale" size={80} />
    </div>
    <IconButton text="Кнопка-кит" size={40} nameImg="whale" />
    <IconButton text="Крабо-кнопка" size={60} nameImg="crab" />
    <CaptionIcon text="Hello" fontSize={24}>
      <Icon {...captionIconOctopus} />
    </CaptionIcon>
    <BlockHint textHint="Эта кнопка умеет клац-клац">
      <IconButton text="Крабо-кнопка" size={60} nameImg="crab" />
    </BlockHint>
    <BlockHint textHint="Мирный блок">
      <CaptionIcon text="The dove of peace" fontSize={32}>
        <Icon {...captionIconDove} />
      </CaptionIcon>
    </BlockHint>
  </div>
)

export default App
