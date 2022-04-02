/** @format */
import imp from '../../images/imp.png'
import appInfo from '../../../package.json'
/**
 * @returns a React.FC that indicates the user is logged out
 */
export const LogoutView: React.FC = (): React.ReactElement => {
  return (
    <div className={`Logout`}>
      <p>You must login to use IMP.</p>
      <img src={imp} alt={`Imp Lady`} height={visualViewport.height * 0.5} />
      <p>{`${appInfo.description}`}</p>
      <p>{`IMP version ${appInfo.version}`}</p>
      <p>{`Written in Typescript, React, and SQL`}</p>
      <p>{`Copyright ${appInfo.copyright}`}</p>
      <p>{`Author: ${appInfo.author.split(` `)[0]} ${appInfo.author.split(` `)[1]}`}</p>
      <p>{`Documentation: AJ Sclove`}</p>
      <p>{`Testing: Mark Murrell`}</p>
    </div>
  )
}
