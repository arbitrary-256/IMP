/** @format */
import { Input } from '@mui/material'
import * as React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPString } from '../../interfaces/IIMPString'
import { ImpContext } from '../ImpContext'
export const StringChanger: React.FC<IIMPString> = (theString: IIMPString): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <>
      <Input
        className={`StringChanger`}
        key={`orderSearch`}
        type={`text`}
        value={theString.text}
        onChange={(textChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
          dispatch({
            type: `SET_STRING`,
            payload: { ...theString, text: textChangeEvent.target.value }
          })
        }}
      />
    </>
  )
}
