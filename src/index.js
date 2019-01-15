import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { BottomNavigator, SwiperSlide } from './components'
import { HomeContainer, SwiperContainer, Swiper } from './styled'

class App extends Component {
  render() {
    return (
      <HomeContainer>
        <StatusBar
          barStyle="light-content"
        />
        <SwiperSlide>
          <SwiperContainer>
            <Swiper />
          </SwiperContainer>
          <SwiperContainer>
            <Swiper />
          </SwiperContainer>
        </SwiperSlide>
        <BottomNavigator />
      </HomeContainer>
    )
  }
}

export default App
