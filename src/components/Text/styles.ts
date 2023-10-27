import styled from 'styled-components'
import { Props } from '.'

export const TextComponent = styled.p<Props>`
  font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : 400};
  font-family: ${(props) => props.fontFamily ? props.fontFamily : 'Arial, Helvetica, sans-serif'};
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height ? props.height : '200px'};
  color: ${(props) => props.color ? props.color : '#00000'};
  margin: ${(props) => props.margin ? props.margin : '0px'};
  padding: ${(props) => props.padding ? props.padding : '0px'};
  position: ${(props) => props.position ? props.position : 'static'};
  top: ${(props) => props.top ? props.top : 0};
  left: ${(props) => props.left ? props.top : 0};
  right: ${(props) => props.right ? props.top : 0};
  bottom: ${(props) => props.bottom ? props.top : 0};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
  display: ${(props) => props.display ? props.display : 'block'};  
  text-decoration: ${(props) => props.textDecoration ? props.textDecoration : 'none'};
`