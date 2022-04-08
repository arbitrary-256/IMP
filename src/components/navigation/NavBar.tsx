/** @format */
import * as React from 'react'
import { Box, Stack } from '@mui/material'
import { AuthButtons } from './AuthButtons'
import { ManagerButton } from './ManagerButton'
import { EmployeeButton } from './EmployeeButton'
import { RedoButton } from './RedoButton'
import { UndoButton } from './UndoButton'
import { DarkModeSwitch } from './DarkModeSwitch'
/**
 * the top div of the application that contains the navigation and authorization button components
 * @returns a React.FC that displays the navbar
 */
export const NavBar: React.FC = (): React.ReactElement => {
  return (
    <Box className={`NavBar`}>
      <Stack justifyContent={`center`} direction={`row`} spacing={2}>
        <p /> {UndoButton({})}
        {RedoButton({})}
        <p /> {ManagerButton(`Receiving`)}
        {ManagerButton(`Inventory`)}
        {ManagerButton(`Restock`)}
        <p /> {EmployeeButton(`Order`)}
        {EmployeeButton(`Cart`)}
        <p /> {AuthButtons(`Logged Out`)}
        <p /> {DarkModeSwitch({})}
      </Stack>
    </Box>
  )
}
