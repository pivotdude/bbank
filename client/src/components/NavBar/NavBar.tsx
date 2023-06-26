import styled from 'styled-components'
import logo from './logo.png'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { storeI } from '../../store/store'

const NavigationLayout = styled.div`
  align-items: center;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin: 0 auto;

  @media (max-width: 870px) {
    display: none;
  }
`
const Links = styled.div`
  display: flex;
  column-gap: 24px;
`
const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`
export default function NavBar() {
  const user = useSelector((state: storeI) => state.user.authUser.success)

  const navigate = useNavigate()
  const handleSignInClick = () => {
    navigate('/login')
  }
  const handleProfileClick = () => {
    navigate('/profile')
  }
  // const count = useSelector((state: storeI) => state.user.isAuth)
  // console.log(count)

  return (
    <NavigationLayout>
      <img src={logo} />
      <Links>
        <MyLink to="/">Главная</MyLink>
        {/*<MyLink to="/registration">Регистрация</MyLink>*/}
        {/*<MyLink to="/login">Авторизация</MyLink>*/}
        {/*<MyLink to="/profile">Профиль</MyLink>*/}
        <MyLink to="/cards">Карты</MyLink>
        <MyLink to="/credits">Кредиты</MyLink>
        <MyLink to="/deposits">Вклады</MyLink>
        {/*<MyLink to="/">Blog</MyLink>*/}
      </Links>
      {user ? (
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<UserOutlined />}
          onClick={handleProfileClick}
        >
          Профиль
        </Button>
      ) : (
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<LoginOutlined />}
          onClick={handleSignInClick}
        >
          Авторизация
        </Button>
      )}
    </NavigationLayout>
  )
}
