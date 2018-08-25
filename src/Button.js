import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'
import Icon from './Icon'
import theme, { cx, hexa } from './theme'

const Base = Box.withComponent('a').extend`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${props => props.theme.regular};
  line-height: 1;
  appearance: none;
  cursor: pointer;
  transition: ${props => props.theme.transition} box-shadow;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => cx(props.bg)};
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${props =>
    props.ghost && {
      background: 'none',
      borderColor: cx(props.bg),
      borderWidth: '1px',
      borderStyle: 'solid',
      color: cx(props.bg)
    }
  }

  ${props =>
    props.text && {
      background: 'none',
      border: 'none',
      color: cx(props.bg)
    }
  }

  ${props =>
    props.bg === 'normal' && {
      color: '#3D3D3D'
    }
  }

  &:hover,
  &:focus,
  &:active {
    outline: 0;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &:hover {
    ${props => !props.text && !props.ghost && css`
      background-color: ${hexa(props.bg, .85)};
      box-shadow: 0 2px 6px ${hexa(props.bg, .25)};
    `};

    ${props => props.ghost && css`
      background-color: ${hexa(props.bg, .05)};
      color: ${hexa(props.bg, .85)};
    `};

    ${props => props.text && css`
    `};
  }

  &:focus, &:active {
    box-shadow: 0 0 0 0.03rem ${props => props.bg === 'normal' ?
      hexa(props.theme.snow, .25) :
      hexa(props.bg, .25)
    };

    ${props => !props.text && !props.ghost && css`
      background-color: ${props => hexa(props.bg, .85)};
    `};

    ${props => props.ghost && css`
      border-color: ${hexa(props.bg, 0.85)};
      background: none;
    `};
  }

  ${props => props.disabled && { opacity: 0.5, cursor: 'not-allowed' }};

  ${props =>
    props.chevronLeft &&
    css`
      &:before {
        content: '« ';
      }
    `};
  ${props =>
    props.chevronRight &&
    css`
      &:after {
        content: ' »';
      }
    `};
`

const Button = ({ type, ...props }) => {
  const { children } = props
  const iconType = props.loading ? 'loading' : props.icon
  const iconNode = iconType ? <Icon type={iconType} /> : null

  return (
    <Base {...props}>
      {iconNode}
      {children}
    </Base>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  /* add left text arrows */
  chevronLeft: PropTypes.bool,
  /* add right text arrows */
  chevronRight: PropTypes.bool,
  ghost: PropTypes.bool,
  /* only with text */
  text: PropTypes.bool,
  /* with icon */
  icon: PropTypes.string
}
Button.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  f: 1,
  m: 0,
  px: 4,
  py: '12px'
}

Button.button = Base.withComponent('button')
Button.input = Base.withComponent('input')

export default Button
