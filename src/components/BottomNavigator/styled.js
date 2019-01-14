import styled from 'styled-components'

export const ScrollNavigator = styled.ScrollView`
  height: 120;
`

export const NavigatorContent = styled.View`
`

export const ViewNavigator = styled.View`
  flex-direction: row;
  margin-left: 25px;
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
