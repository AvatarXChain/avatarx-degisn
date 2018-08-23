import React, { Fragment } from 'react'
import { ThemeProvider as Root, injectGlobal, css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'
import fontsCSS from './Iconfont'

injectGlobal`
* {
  box-sizing: border-box;
  font-weight: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
}

html,
body {
  min-height: 100%;
  min-width: 100%;
}

html {
  font-size: 625%;
}

body {
  padding: 0;
  margin: 0;
  // font-size: ${theme.fontSizes[2]}px;
  font-size: .14em;
  font-family: ${theme.font};
  line-height: 1.5;
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

a {
  color: currentColor;
  text-decoration: none;
}

textarea {
  resize: none;
}
`

const ThemeProvider = ({ theme, webfonts, ...props }) => {
  if (webfonts) {
    injectGlobal([], fontsCSS)
  }
  return (
    <Root
      theme={theme}
      {...props}
      children={<Fragment>{props.children}</Fragment>}
    />
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  webfonts: PropTypes.bool
}

ThemeProvider.defaultProps = {
  theme,
  webfonts: false
}

export default ThemeProvider
