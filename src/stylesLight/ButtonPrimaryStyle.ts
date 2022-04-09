import { CSSProperties } from '@mui/styles'
export const ButtonPrimaryStyle: Function = (): CSSProperties => {
  return {
    backgroundColor: `#C5C5C540`,
    '&:hover': {
      backgroundColor: `#C5C5C566`
    }
  }
}