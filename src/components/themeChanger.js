import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default (props) => (

  <ThemeToggler>
    {({ theme, toggleTheme }) => 
      <label className="theme-label">
        <input
          type="checkbox"
          className="theme-changer"
          // onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="theme-toggle"></div>
      </label>
    }
  </ThemeToggler>
)