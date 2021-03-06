import { CSSProperties } from '@mui/styles'
export const MenuRootStyle: Function = (): CSSProperties => {
  return {
    borderRadius: '24px',
    backgroundColor: `#E7E7E840`,
    backdropFilter: `blur(15px)`,
    boxShadow: `inset -.5px -.5px 1px #BFBFC1, 
  inset .5px .5px 1px white`,
    color: `#000000`
  }
}