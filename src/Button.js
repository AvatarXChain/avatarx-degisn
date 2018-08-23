import React from 'react'
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
  border-width: 0;
  border-style: solid;
  user-select: none;

  ${props =>
    props.inverted && {
      backgroundColor: cx(props.color),
      color: cx(props.bg)
    }};

  &:hover, &:focus {
    outline: 0;
    box-shadow: 0 2px 6px ${props =>
      props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }

  &:active {
    outline: 0;
    box-shadow: 0 2px 8px 2px ${props =>
      props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }

  ${props => props.disabled && { opacity: 0.25, cursor: 'not-allowed' }};

  ${props =>
    props.scale &&
    css`
      transition: ${props => props.theme.transition} all;
      will-change: transform;
      transform: scale(1);
      &:hover,
      &:focus {
        transform: scale(${props => props.theme.scaleFactor});
      }
      ${props => props.theme.mediaQueries.reduceMotion} {
        transform: none !important;
      }
    `};

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
    <Base {...props}>{iconNode}{children}</Base>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  /** flip colors */
  inverted: PropTypes.bool,
  /** add hover/focus animation */
  scale: PropTypes.bool,
  /** add left text arrows */
  chevronLeft: PropTypes.bool,
  /** add right text arrows */
  chevronRight: PropTypes.bool,
  icon: PropTypes.string
}
Button.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  f: 1,
  m: 0,
  px: 3,
  py: 2
}

Button.button = Base.withComponent('button')
Button.input = Base.withComponent('input')

export default Button
