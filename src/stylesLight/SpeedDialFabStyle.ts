import { CSSProperties } from '@mui/styles'
export const SpeedDialFabStyle: Function = (): CSSProperties => {
  return {
    backgroundColor: `#E7E7E880`,
    backdropFilter: `blur(5px)`,
    boxShadow: '1px 1px 10px #0000001A',
    '&:hover': {
      backgroundColor: `#E7E7E880`,
      backdropFilter: `blur(12px)`,
      boxShadow: '1px 1px 10px #00000040'
    }
  }
}