import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import './styles.scss'
import styled from 'styled-components'
import LoginForm from '../../components/LoginForm/LoginForm'

const Display = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const App: React.FC = () => {
  return (
    <Display>
      <LoginForm />
    </Display>
  )
}

export default App
