import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { BottomNavigator } from './components'
import { HomeContainer, SwiperContainer, Swiper } from './styled'

class App extends Component {
  render() {
    return (
      <HomeContainer>
        <StatusBar
          barStyle="light-content"
        />
        <SwiperContainer>
          <Swiper />
        </SwiperContainer>
        <BottomNavigator />
      </HomeContainer>
    )
  }
}

export default App
