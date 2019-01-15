import styled from 'styled-components'
import { Dimensions } from 'react-native'

const padding = Dimensions.get('window').width * 0.05

export const ScrollNavigator = styled.ScrollView`
`

export const NavigatorContent = styled.View`
`

export const ViewNavigator = styled.View`
  flex-direction: row;
  margin-left: ${padding};
`

export const NavigatorBox = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.1);
  height: 100;
  width: 80;
  margin-right: 10;
  border-radius: 3;
  padding: 8px;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: #FFF;
`

export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
