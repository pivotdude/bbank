import React, { useEffect, useState } from "react";
import { Col, Row } from 'antd'
import { PlusCircleFilled, PlusOutlined, UserOutlined } from '@ant-design/icons'
import CardItem from './CardItem'
import styled from 'styled-components'
import InputModal from './Modal'
import { useGetCardsQuery } from '../../../store/api/card.api'
import { useCreateCardMutation } from '../../../store/api/card.api'
import CardList from './CardList'
import { useSelector } from "react-redux";
import { storeI } from "../../../store/store";

const Display = styled.div`
  width: 320px;
  min-height: 780px;
  background-color: #3c4457;
`
const Header = styled.p`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
`
const Bar = styled.div`
  width: 100%;
  height: 58px;
  background-color: #292929;
`
const CardText = styled.p`
  font-weight: 600;
  font-size: 0.9em;
  line-height: 21px;
  margin-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
`
interface SideBarProps {
  profile: any
}

function SideBar(props: SideBarProps) {
  const [showModal, setShowModal] = useState(false)

  const [createCard, { isLoading, error }] = useCreateCardMutation()

  function onClose() {
    setShowModal(false)
  }
  function onOpen() {
    setShowModal(true)
  }

  async function submitForm(data: any) {
    await createCard(data)
    refetch()
  }
  const { data, refetch } = useGetCardsQuery()
  const user = useSelector((state: storeI) => state.user.authUser.success)

  useEffect(() => {
    refetch()
  }, [user])



  return (
    <Display>
      <Row
        style={{
          margin: '0 auto',
          alignItems: 'center',
          color: '#fff',
          padding: '20px',
        }}
      >
        <Col span={19}>
          {props.profile?.email ? (
            <p>{props.profile.email}</p>
          ) : (
            <Header>
              Loading...
            </Header>
          )}
        </Col>
        <Col span={4}>
          <UserOutlined style={{ fontSize: '40px', color: '#fff' }} />;
        </Col>
      </Row>
      <Bar>
        <CardText>Карты</CardText>
      </Bar>
      <div>
        <div style={{ textAlign: 'center', cursor: 'pointer' }}>
          <PlusCircleFilled onClick={onOpen} />
        </div>
        <InputModal
          isOpen={showModal}
          onClose={onClose}
          onSubmit={submitForm}
        />

        {data && <CardList cards={data} />}
      </div>
    </Display>
  )
}

export default SideBar
