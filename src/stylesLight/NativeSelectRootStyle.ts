import { CSSProperties } from '@mui/styles'
export const NativeSelectRootStyle: Function = (): CSSProperties => {
  return {
    marginLeft: `12px`,
    '&$disabled': {
      marginLeft: `12px`
    }
  }
}