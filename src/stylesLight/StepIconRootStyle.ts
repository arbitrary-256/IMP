import { CSSProperties } from '@mui/styles'
import { grey } from '@mui/material/colors'
export const StepIconRootStyle: CSSProperties = {
  color: grey[300],
  '&$error': {
    borderColor: grey[300],
    color: `red`
  }
}
