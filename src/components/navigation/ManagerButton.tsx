/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Button } from '@mui/material'
// interfaces
import { INavBarTarget } from '../../interfaces/unionTypes/INavBarTarget'
// react context
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a button accessible to users logged in as an manager
 * @param target the INavBarTarget of the tab to navigate to
 * @returns a React.FC that displays a button only usable by a logged in Manager
 */
export const ManagerButton: React.FC<INavBarTarget> = (target: INavBarTarget): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Button
      size={`large`}
      className={`NavBarButton`}
      color={`info`}
      variant={state.contentAreaView === target ? `text` : `contained`}
      onClick={() => {
        dispatch({
          type: `USE_NAV_BAR`,
          payload: target
        })
      }}
      disabled={!state.loggedInUser.includes(`Manager`) || state.contentAreaView === target}
    >
      {target}
    </Button>
  )
}
