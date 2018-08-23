import palx from 'palx'
import { includes, get, omit } from 'lodash'
import { removeProps } from 'styled-system'

const blue = '#2196F3'
export const palette = palx(blue)

export const grays = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary: blue,
  drop: '#F5574C',
  rise: '#2ABD73',
  text: '#949494',
  success: '#8BC34A',
  danger: '#F44336',
  warning: '#FF9800',
  help: '#B921F3'
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}

export const cx = key => get(colors, key, key)

const createMediaQuery = n => `@media screen and (min-width:${n}em)`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

const aliases = ['sm', 'md', 'lg', 'xl']
export const breakpoints = [32, 48, 64, 80]

export const mediaQueries = {
  ...breakpoints.map(createMediaQuery),
  reduceMotion: '@media (prefers-reduced-motion: reduce)',
  reduceTransparency: '@media (prefers-reduced-transparency: reduce)'
}

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const emoji = '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
export const font = `Helvetica Neue,Arial,Microsoft YaHei,sans-serif,${emoji}`
// export const font = `Averta,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif,${emoji}`
export const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace'

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export const regular = 400
export const bold = 700

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = { regular, bold }

export const scaleFactor = 17 / 16
export const transition = '0.125s ease-out'

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const pill = '9999px'
export const radii = ['0px', '4px', '8px', '16px', pill]
export const radius = '4px'

export const shadowColor = 'rgba(0,0,0,0.16)'
export const baseShadow = '0 0 2px 0 rgba(0,0,0,.08),'
export const boxShadows = [
  baseShadow + `0 2px 4px 0 ${shadowColor}`,
  baseShadow + `0 4px 8px 0 ${shadowColor}`,
  baseShadow + `0 12px 12px 0 ${shadowColor}`,
  baseShadow + `0 24px 24px 0 ${shadowColor}`
]

export const hexa = (color, alpha) => {
  const hex = cx(color)
  if (!includes(hex, '#')) return shadowColor
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const filterProps = props =>
  omit(removeProps(props), [
    'theme',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'color',
    'bg',
    'fill',
    'fontSize',
    'f',
    'image',
    'maxWidth',
    'bold',
    'regular',
    'caps',
    'wrap',
    'size',
    'height',
    'boxShadowSize'
  ])

const theme = {
  breakpoints,
  mediaQueries,
  space,
  mono,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  radii,
  radius,
  pill,
  scaleFactor,
  transition,
  boxShadows,
  shadowColor,
  cx,
  hexa
}

export default theme
