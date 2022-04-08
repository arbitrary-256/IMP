import { CSSProperties } from '@mui/styles'
import { grey } from '@mui/material/colors'
export const SliderValueLabelStyleDark: CSSProperties = {
  left: 'calc(-50% + 12px)',
  top: -22,
  '& *': {
    background: 'transparent',
    color: grey[400]
  }
}
