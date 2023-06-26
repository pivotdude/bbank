import React, { useEffect } from 'react'
import Client from './components/Client'
import Services from './components/Services'
import BigText from '../../components/ui/BigText/BigText'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import styled from 'styled-components'
import { storeI, useAppDispatch } from '../../store/store'
import { useSelector } from 'react-redux'
import { getProfile } from '../../store/features/user/user.actions'

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function Main(): JSX.Element {
  const user = useSelector((state: storeI) => state.user.authUser.success)

  return (
    <>
      <Client />
      <Services />
      {!user && (
        <Display className="betweenBlocks">
          <RegistrationForm />
        </Display>
      )}
    </>
  )
}
