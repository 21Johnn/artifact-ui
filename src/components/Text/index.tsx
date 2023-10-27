import { TextComponent } from "./styles"

export interface Props {
  fontSize?: string,
  fontWeight?: number,
  fontFamily?: string,
  width?: string,
  height?: string,
  color?: string,
  margin?: string,
  padding?: string,
  position?: string,
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
  textAlign?: string,
  display?: string,
  textDecoration?: string,
  children: string
}

const Text = ({children, ...rest}: Props) => {
  return (
    <TextComponent {...rest}>{children}</TextComponent>
  )
}

export default Text