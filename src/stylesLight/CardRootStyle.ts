import { CSSProperties } from '@mui/styles'
export const CardRootStyle: Function = (): CSSProperties => {
  return {
  padding: '5%',
  borderRadius: '24px',
  boxShadow: `5px 5px 12px #BFBFC1, 
  -5px -5px 12px white, 
  inset -1px -1px .5px #BFBFC1, 
  inset 1px 1px .5px white`,
  '&:hover': {
    boxShadow: `none`
  }
}
}
