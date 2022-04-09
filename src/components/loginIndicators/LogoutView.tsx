/** @format */
import imp from '../../images/imp.png'
import appInfo from '../../../package.json'
import React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
import { Box, Stack } from '@mui/material'
import { IIMPString } from '../../interfaces/IIMPString'
import { StringDisplayer } from '../shared/StringDisplayer'
import { ImageDisplayer } from '../shared/ImageDisplayer'
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
  const programmingLanguagesString: IIMPString = {
    id: `Written in`,
    text: `TypeScript, React, and SQL`,
    prefix: ``,
    suffix: ``
  }
  const authorString: IIMPString = {
    id: `Coding`,
    text: `${appInfo.author.split(` `)[0]} ${appInfo.author.split(` `)[1]}`,
    prefix: ``,
    suffix: ``
  }
  const documentationString: IIMPString = {
    id: `Documentation`,
    text: `AJ Sclove`,
    prefix: ``,
    suffix: ``
  }
  const testingString: IIMPString = {
    id: `Testing`,
    text: `Mark Murrell`,
    prefix: ``,
    suffix: ``
  }
  const copyrightString: IIMPString = {
    id: `Copyright Date`,
    text: `${appInfo.copyright}`,
    prefix: ``,
    suffix: ``
  }
  const impDescriptionString: IIMPString = {
    id: `Description`,
    text: `${appInfo.description}`,
    prefix: ``,
    suffix: ``
  }
  const impVersionString: IIMPString = {
    id: `Version`,
    text: `${appInfo.version}`,
    prefix: ``,
    suffix: ``
  }
  const loginRequiredString: IIMPString = {
    id: `Login Required`,
    text: `You must login to use IMP.`,
    prefix: ``,
    suffix: ``
  }
  return (
    <Box className={`Logout`} sx={{ display: state.loggedInUser === `Logged Out` ? `block` : `none` }}>
      <Box className={`LogoutMessage`} width={`30%`} margin={`auto`}>
        {StringDisplayer(loginRequiredString)}
      </Box>
      <Box className={`LogoutImage`} height={`50vh`}>
        {ImageDisplayer({ data: imp, altText: `Imp Lady` }, { height: 450, width: 450 })}
      </Box>
      <Stack direction={`row`} spacing={1}>
        {StringDisplayer(impDescriptionString)}
        {StringDisplayer(impVersionString)}
        {StringDisplayer(copyrightString)}
        {StringDisplayer(programmingLanguagesString)}
      </Stack>
      <p />
      <Stack direction={`row`} spacing={1}>
        {StringDisplayer(authorString)}
        {StringDisplayer(documentationString)}
        {StringDisplayer(testingString)}
      </Stack>
    </Box>
  )
}
