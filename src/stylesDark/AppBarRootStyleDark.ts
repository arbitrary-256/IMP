import { CSSProperties } from '@mui/styles'
export const AppBarRootStyleDark: Function = (): CSSProperties => {
  return {
    display: `flex`,
    verticalAlign: `center`,
    backgroundColor: `#13131380`,
    backdropFilter: `blur(22px)`,
    boxShadow: `none`
  }
}