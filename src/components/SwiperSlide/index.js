import React, { Component } from 'react'
import { View, ScrollView, Dimensions, Animated } from 'react-native'

const { width } = Dimensions.get('window')

class SwiperSlide extends Component {
  scrollX = new Animated.Value(0)

  render() {
    const position = Animated.divide(this.scrollX, width)
    const { children } = this.props

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
          )}
          scrollEventThrottle={16}
        >
          {children}
        </ScrollView>
        <View style={{ flexDirection: 'row' }}>
          {children.map((_, i) => {
            const opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            })
            return (
              <Animated.View
                key={i}
                style={{ opacity, height: 10, width: 10, backgroundColor: '#FFF', margin: 8, borderRadius: 5 }}
              />
            )
          })}
        </View>
      </View>
    )
  }
}

export default SwiperSlide
