import { CSSProperties } from '@mui/styles'
export const SliderValueLabelStyle: Function = (): CSSProperties => {
  return {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000000'
    }
  }
}