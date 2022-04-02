/** @format */
import * as React from 'react'
import { Button } from '@mui/material'
import { INavBarTarget } from '../../interfaces/unionTypes/INavBarTarget'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { ImpContext } from '../ImpContext'
/**
 * @returns a React.FC that displays a button in the navbar to navigate to a certain tab
 */
export const NavBarButton: React.FC<INavBarTarget> = (target: INavBarTarget): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Button
      className={`NavBarButton`}
      variant={state.contentAreaView === target ? `outlined` : `contained`}
      onClick={() => {
        if (state.contentAreaView !== target) {
          dispatch({
            type: `USE_NAV_BAR`,
            payload: target
          })
        }
      }}
    >
      {target}
    </Button>
  )
}
