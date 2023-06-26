import React from 'react'
import { Button, Col, Row, Card } from 'antd'
import CardDopList from './CardDopList'

export interface DopI {
  title: string
  description: string
}
interface CardProps {
  img: any
  card: {
    name: string
    description: string
    dops: DopI[]
  }
}

function ProductCard(props: CardProps) {
  return (
    <Card style={{rowGap: '100px'}}>
      <Row style={{ margin: '0 auto', alignItems: 'center', padding: '20px' }}>
        <Col span={14}>
          <h1>{props.card.name}</h1>
          <p style={{ marginTop: 20, fontSize: 16 }}>
            {props.card.description}
          </p>
          <div>{props.card.dops && <CardDopList dops={props.card.dops} />}</div>
          <Row gutter={16} style={{ marginTop: 60 }}>
            <Col span={4}>
              <Button
                className="bgBranded"
                style={{ padding: '5px 10px' }}
                size="large"
                type="primary"
              >
                Подробнее
              </Button>
            </Col>
            {/*<Col span={4}>*/}
            {/*  <Button style={{padding: '5px 10px'}} size='large' type='primary'>Заказать</Button>*/}
            {/*</Col>*/}
          </Row>
        </Col>
        <Col span={10}>
          <img style={{transform: 'rotate(3deg)'}} src={props.img} width={420} alt="" />
        </Col>
      </Row>
    </Card>
  )
}

export default ProductCard
