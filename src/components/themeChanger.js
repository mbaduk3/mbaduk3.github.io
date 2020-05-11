import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from 'styled-components'

export default (props) => {

  // var hoverColor = props.map.open ? "var(--background)" : "var(--primary-color)";

  const ThemeToggle = styled.div`
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    cursor: pointer;
    background: none;
    border: 4px solid var(--secondary-color);
    border-radius: var(--theme-toggle-border-radius);
    transition: border-radius 0.5s, border-color var(--color-transition-time);
    &:hover {
      transition: border-color var(--color-transition-time), border-radius 0.5s;
      border-color: ${props => props.open ? "var(--background)" : "var(--primary-color)"};
    }
  `

  return (
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
        <ThemeToggle open={props.menu.open}/>
      </label>
    }
  </ThemeToggler>
  );
}