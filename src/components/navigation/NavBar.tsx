
/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Box, Stack } from '@mui/material'
/* custom components */
import { AuthButtons } from './AuthButtons'
import { DarkModeButton } from './DarkModeButton'
import { EmployeeButton } from './EmployeeButton'
import { ManagerButton } from './ManagerButton'
/**
 * Module 1.6.2.	Navigation Bar
 * A container component that contains the navigation and role selection interface components.

 */


/**
 * the top div of the application that contains the navigation and authorization button components
 * @returns a React.FC that displays the navbar
 */
export const NavBar: React.FC = (): React.ReactElement => {
  return (
    <Box className={`NavBar`}>
      <Stack
        justifyContent={`center`}
        direction={`row`}
        spacing={2}>
        <p />
        {ManagerButton(`Receiving`)}
        {ManagerButton(`Inventory`)}
        {ManagerButton(`Restock`)}
        <p />
        {EmployeeButton(`Order`)}
        {EmployeeButton(`Cart`)}
        <p />
        {AuthButtons(`Logged Out`)}
        <p />
        {DarkModeButton({})}
      </Stack>
    </Box>
  )
}
