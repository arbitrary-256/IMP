import { CSSProperties } from '@mui/styles'
export const InputAdornmentRootStyle: Function = (): CSSProperties => {
  return {
    '&:hover': {},
    '&$focused': {
      '&:hover': {}
    }
  }
}