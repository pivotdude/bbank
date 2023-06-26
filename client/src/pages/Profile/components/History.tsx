import styled from 'styled-components'
import { Col, Row, Typography } from 'antd'
import React from 'react'
import { ShopOutlined } from '@ant-design/icons'

function History() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={4}>
        <ShopOutlined />
      </Col>
      <Col span={20}>
        <ShopOutlined />
      </Col>
    </Row>
  )
}

export default History
