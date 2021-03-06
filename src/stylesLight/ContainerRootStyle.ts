import { CSSProperties } from '@mui/styles'
export const ContainerRootStyle: Function = (): CSSProperties => {
  return {
  alignContent: 'center',
  borderRadius: '24px',
  padding: '2%',
  boxShadow: `5px 5px 12px #BFBFC1, 
  -5px -5px 12px white, 
  inset -1px -1px .5px #BFBFC1, 
  inset 1px 1px .5px white`,
  color: `#000000`
}
}
