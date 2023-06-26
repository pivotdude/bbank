import React from 'react'
import { DopI } from './Card'
import { Col } from 'antd'

interface CardDopProps {
  dop: DopI
}

function CardDop(props: CardDopProps) {
  return (
    <Col span={7}>
      <h3>{props.dop.title}</h3>
      <p>{props.dop.description}</p>
    </Col>
  )
}

export default CardDop
