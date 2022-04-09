import { CSSProperties } from '@mui/styles'
import { grey } from '@mui/material/colors'
export const StepIconRootStyle: Function = (): CSSProperties => {
  return {
    color: grey[300],
    '&$error': {
      borderColor: grey[300],
      color: `red`
    }
  }
}