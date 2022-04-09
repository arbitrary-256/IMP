import { CSSProperties } from '@mui/styles'
export const AppBarRootStyle: Function = (): CSSProperties => {
  return {
  display: `flex`,
  verticalAlign: `center`,
  backgroundColor: `#E7E7E880`,
  backdropFilter: `blur(22px)`,
  boxShadow: `inset -.5px -.5px 1px #BFBFC1, 
  inset .5px .5px 1px white`
}}
