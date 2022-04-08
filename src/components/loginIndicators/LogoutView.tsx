/** @format */
import imp from '../../images/imp.png'
import appInfo from '../../../package.json'
import React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
import { Box } from '@mui/material'
/**
 * a logout confirmation
 * @returns a React.FC that indicates the user is logged out
 */
export const LogoutView: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Box className={`Logout`} sx={{ display: state.loggedInUser === `Logged Out` ? `block` : `none` }}>
      <p>You must login to use IMP.</p>
      <img src={imp} alt={`Imp Lady`} height={visualViewport.height * 0.5} />
      <p>{`IMP ${appInfo.description} version ${appInfo.version}`}</p>
      <p>{`Copyright ${appInfo.copyright} by Author: ${appInfo.author.split(` `)[0]} ${appInfo.author.split(` `)[1]} / Documentation: AJ Sclove / Testing: Mark Murrell`}</p>
      <p>{`Written in TypeScript, React, and SQL`}</p>
    </Box>
  )
}
