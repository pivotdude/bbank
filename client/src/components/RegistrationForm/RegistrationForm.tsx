import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import styled from 'styled-components'
import Client from '../../pages/main/components/Client'
import Services from '../../pages/main/components/Services'
import Registration from '../../pages/Registration/Registration'
import {
  useLoginMutation,
  useRegistrationMutation,
} from '../../store/api/user.api'
import { useSelector } from 'react-redux'
import { storeI } from '../../store/store'
import { useNavigate } from 'react-router-dom'

export default function RegistrationForm(): JSX.Element {
  const [step, setStep] = useState(0)

  const [registration, { isLoading, error }] = useRegistrationMutation()
  // const count = useSelector((state: storeI) => state.user.isAuth)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const openErrorNotification = (message: string) => {
    notification.error({
      message: `Ошибка`,
      description: message,
      placement: 'bottomRight',
    })
  }

  const openSuccessNotification = () => {
    notification.success({
      message: 'Успешно',
      description: 'Вы успешно зарегестрировались',
      placement: 'bottomRight',
    })
  }

  const onFinish = async (values: any) => {
    const resp = await registration(values)
    console.log(resp)
    try {
      if ('error' in resp) {
        openErrorNotification(resp.error.data.message)
      } else {
        openSuccessNotification()
        navigate('/login')
      }
    } catch (e) {
      openErrorNotification('Неизвестная ошибка')
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      style={{ maxWidth: 600, minWidth: 400 }}
      onFinish={onFinish}
      layout="vertical"
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/*{step === 0 && (*/}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой адрес электронной почты',
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/*)}*/}

      {/*{step === 1 && (*/}
      <>
        <Form.Item
          label="Введите пароль"
          name="password"
          rules={[
            { required: true, message: 'Пожалуйста, введите ваш пароль' },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Повторите пароль"
          name="repeatPassword"
          rules={[
            { required: true, message: 'Пожалуйста, повторите ваш пароль' },
            ({ getFieldValue }) => ({
              validator(rule, value, callback) {
                const password = getFieldValue('password')
                if (value && value !== password) {
                  callback('Пароли не совпадают')
                } else {
                  callback()
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </>

      {/*)}*/}

      <Form.Item wrapperCol={{ span: 16 }}>
        <Button type="primary" htmlType="submit">
          Зарегестрироваться
        </Button>
      </Form.Item>
    </Form>
  )
}
