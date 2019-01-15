import styled from 'styled-components'
import { Dimensions } from 'react-native'

const swiperWidth = Dimensions.get('window').width * 0.9
const padding = Dimensions.get('window').width * 0.05

export const HomeContainer = styled.View`
  flex: 1;
  background-color: rgb(109, 33, 119);
`

export const SwiperContainer = styled.View`
  margin-left: ${padding};
  margin-right: ${padding};
  align-items: center;
  justify-content: center;
`

export const Swiper = styled.View`
  width: ${swiperWidth};
  height: 350;
  background-color: white;
  borderRadius: 5;
`
