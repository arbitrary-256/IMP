/** @format */
import * as React from 'react'
import { Stack } from '@mui/material'
import { AdminNavButtons } from './AdminNavButtons'
import { AuthButtons } from './AuthButtons'
import { EmployeeNavButtons } from './EmployeeNavButtons'
import { StateHistoryButtons } from './StateHistoryButtons'
/**
 * @returns a React.FC that displays the navbar
 */
export const NavBar: React.FC = (): React.ReactElement => {
  return (
    <div className={`NavBar`}>
      <Stack justifyContent={`center`} direction={`row`} spacing={2}>
        {StateHistoryButtons({})}
        <p />
        {AdminNavButtons({})}
        <p />
        {EmployeeNavButtons({})}
        <p />
        {AuthButtons(`Logged Out`)}
      </Stack>
    </div>
  )
}
