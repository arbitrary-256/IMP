import { CSSProperties } from '@mui/styles'
import { grey } from '@mui/material/colors'
export const SliderMarkStyle: Function = (): CSSProperties => {
  return {
    backgroundColor: grey[400],
    height: 8,
    width: 1,
    marginTop: -3
  }
}