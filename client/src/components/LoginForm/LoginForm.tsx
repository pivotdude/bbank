import { Button, Form, Input, notification } from 'antd'
import React, { useEffect } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationPlacement } from 'antd/es/notification/interface'
import { storeI, useAppDispatch } from '../../store/store'
import { Link, useNavigate } from 'react-router-dom'
import { loginInAccount } from '../../store/features/user/user.actions'

const Context = React.createContext({ name: 'Default' })
export default function LoginForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const openErrorNotification = (message: string) => {
    notification.error({
      message: `Error`,
      description: message,
      placement: 'bottomRight',
    })
  }

  const openSuccessNotification = (message: string) => {
    notification.success({
      message: `Успех`,
      description: message,
      placement: 'bottomRight',
    })
  }

  const onFinish = async (body: any) => {
    const resp: any = await dispatch(loginInAccount(body))
    if (resp.access_token) {
      openErrorNotification('Неправильный логин или пароль')
    } else {
      openSuccessNotification('Вы успешно авторизовались')
      navigate('/profile')
    }
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Пожалуйста, введите Email!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <Form.Item>
          Or <Link to="/registration">register now!</Link>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>
    </Form>
  )
}
