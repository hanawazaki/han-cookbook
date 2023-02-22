import React from 'react'
import { useTheme } from '../hooks/useTheme'
import './ThemeSelector.css'
import modeIcon from '../assets/img/sun.svg'

const themeColors = ['#58249c', '#249c6b', '#b70233']

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  console.log(mode)

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }} onClick={toggleMode} src={modeIcon} alt='mode-icon' />
      </div>
      <div className='theme-buttons'>
        {
          themeColors.map(color => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ThemeSelector