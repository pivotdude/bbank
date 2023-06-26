import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import styled from 'styled-components'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

const Display = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Registration = () => {
  return (
    <Display>
      <RegistrationForm />
    </Display>
  )
}

export default Registration
