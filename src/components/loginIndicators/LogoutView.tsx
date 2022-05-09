/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Box, Stack } from '@mui/material'
/* interfaces */
import { IIMPString } from '../../interfaces/IIMPString'
/* react context */
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/* custom components */
import { ImageDisplayer } from '../shared/ImageDisplayer'
import { StringDisplayer } from '../shared/StringDisplayer'
/* non-TypeScript data */
import appInfo from '../../../package.json'
import imp from '../../images/imp.png'
/**
 * 1.7.7.	Logout View
 * 
 * a logout confirmation view
 * @returns a React.FC that indicates the user is logged out
 */
export const LogoutView: React.FC = (): React.ReactElement => {
  const {
    state
  }: {
    state: IIMPState
  } = React.useContext(ImpContext)
  const programmingLanguagesString: IIMPString = {
    id: `Written in`,
    text: `TypeScript, React, and SQL`
  }
  const authorString: IIMPString = {
    id: `Coding`,
    text: `${appInfo.author.split(` `)[0]} ${appInfo.author.split(` `)[1]}`
  }
  const documentationString: IIMPString = {
    id: `Documentation`,
    text: `AJ Sclove`
  }
  const testingString: IIMPString = {
    id: `Testing`,
    text: `Mark Murrell`
  }
  const copyrightString: IIMPString = {
    id: `Copyright Date`,
    text: `${appInfo.copyright}`
  }
  const impDescriptionString: IIMPString = {
    id: `Description`,
    text: `${appInfo.description}`
  }
  const impVersionString: IIMPString = {
    id: `Version`,
    text: `${appInfo.version}`
  }
  const loginRequiredString: IIMPString = {
    id: `Login Required`,
    text: `You must login to use IMP.`
  }
  return (
    <Box
      className={`Logout`}
      sx={{ display: state.loggedInUser === `Logged Out` ? `block` : `none` }}>
      <Stack direction={`column`}>
        <Box
          className={`LogoutMessage`}
          width={`30%`}
          margin={`auto`}>
          {StringDisplayer(loginRequiredString)}
        </Box>
        <Box
          className={`LogoutImage`}
          height={`50vh`}>
          {ImageDisplayer({ data: imp, altText: `imp` }, { height: 450, width: 450 })}
        </Box>
        <Stack
          direction={`row`}
          spacing={1}>
          {StringDisplayer(impDescriptionString)}
          {StringDisplayer(impVersionString)}
          {StringDisplayer(copyrightString)}
          {StringDisplayer(programmingLanguagesString)}
        </Stack>
        <p />
        <Stack
          direction={`row`}
          spacing={1}>
          {StringDisplayer(authorString)}
          {StringDisplayer(documentationString)}
          {StringDisplayer(testingString)}
        </Stack>
      </Stack>
    </Box>
  )
}
