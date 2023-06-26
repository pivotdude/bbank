import React from 'react'
import { DopI } from './Card'
import { Row } from 'antd'
import CardDop from './CardDop'

interface CardDopListProps {
  dops: DopI[]
}

function CardDopList(props: CardDopListProps) {
  return (
    <Row gutter={30} style={{ marginTop: 60 }}>
      {props.dops.map((dop) => (
        <CardDop dop={dop} />
      ))}
    </Row>
  )
}

export default CardDopList
