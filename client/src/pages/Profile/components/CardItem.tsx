import React from 'react'
import { Col, Row } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'
import { CardI } from './CardList'

interface CardItemProps {
  card: CardI
}

function CardItem(props: CardItemProps) {
  return (
    <Row
      style={{
        margin: '0 auto',
        alignItems: 'center',
        color: '#fff',
        padding: '20px',
      }}
    >
      <Col span={19}>
        <p style={{ fontWeight: 600 }}>{props.card.name}</p>
        <p style={{ fontWeight: 600 }}>{props.card.cardNumber}</p>
        <p style={{ fontWeight: 600 }}>
          {props.card.balance.toLocaleString('ru')} ₽
        </p>
      </Col>
      <Col span={4}>
        <CreditCardOutlined style={{ fontSize: '30px' }} />
      </Col>
    </Row>
  )
}

export default CardItem
