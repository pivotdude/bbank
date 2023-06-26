import React, { useEffect } from 'react'
import SideBar from './components/SideBar'
import { TranslationOutlined } from '@ant-design/icons'
import TransactionImage from './img/Transcation.png'
import Transfers from './components/Transfers'
import History from './components/History'
import { Col, Grid, Layout, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { storeI } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import {
  useGetProfileQuery,
  useRegistrationMutation,
} from '../../store/api/user.api'
import { logoutAuth } from '../../store/features/user/user.slice'

interface ProfileProps {}

function Profile(props: ProfileProps) {
  const user = useSelector((state: storeI) => state.user.authUser.success)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log('zxc', user)
  //   console.log(localStorage.getItem('token'))
  //   if (!localStorage.getItem('token')) {
  //     console.log('aby')
  //     navigate('/')
  //   }
  // }, [user])
  //
  async function logOut() {
    await dispatch(logoutAuth())
    navigate('/')
  }

  // useEffect(() => {
  //
  //
  //   if (!count) {
  //
  //   }
  // }, [count])

  return (
    <>
      <a onClick={logOut}>Выход</a>
      <Row>
        <Col xxl={7} xl={10}>
          <SideBar profile={user} />
        </Col>
        {/*<Col span={8}>*/}
        {/*  <Transfers />*/}
        {/*</Col>*/}
      </Row>
      {/*<History />*/}
    </>
  )
}

export default Profile
