// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Animated } from 'react-native'

type Props = {
  children: Node,
  value?: number,
  transformKey?: 'translateX' | 'translateY',
}

class SwiperEffect extends Component<Props> {
  constructor(props) {
    super(props)
    const { value } = this.props
    this.state = {
      transitionValue: new Animated.Value(value),
    }
  }

  componentDidMount() {
    const { transitionValue } = this.state

    Animated.spring(transitionValue, {
      toValue: 0,
      speed: 2,
      bounciness: 6,
      useNativeDriver: true,
    }).start()
  }

  render() {
    const { transitionValue } = this.state
    const { children, transformKey } = this.props

    return (
      <Animated.View style={{ transform: [{ [transformKey]: transitionValue }] }}>
        {children}
      </Animated.View>
    )
  }
}

SwiperEffect.defaultProps = {
  value: 300,
  transformKey: 'translateX',
}

export default SwiperEffect
