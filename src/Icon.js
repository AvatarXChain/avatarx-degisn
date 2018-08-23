import React from 'react'
import classNames from 'classnames'
import { css } from 'styled-components'

const Icon = ({ type, spin, ...props }) => {
  const classString = classNames(
    {
      iconfont: true,
      'icon-spin': !!spin || type === 'loading',
      [`icon-${type}`]: true
    }
  )
  console.log(classString);
  return <i className={classString} />
}

Icon.displayName = 'Icon'

export default Icon
