import { CSSProperties } from '@mui/styles'
export const BottomNavigationRootStyleDark: Function = (): CSSProperties => {
  return {
    borderRadius: '24px',
    backgroundColor: `#2A2A2A66`,
    backdropFilter: `blur(15px)`,
    boxShadow: `inset -.5px -.5px 1px #000000, 
  inset .5px .5px 1px #39393A`
  }
}