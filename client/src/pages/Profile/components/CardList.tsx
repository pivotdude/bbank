import React from 'react'
import CardItem from './CardItem'

export interface CardI {
  id: number
  cardNumber: string
  expirationDate: string
  cvv: number
  accountId: number
  balance: number
  name: string
  createdAt: string
  updatedAt: string
}

interface CardListProps {
  cards: CardI[]
}

function CardList(props: CardListProps) {
  return (
    <>
      {props.cards.map((card) => (
        <CardItem card={card} />
      ))}
    </>
  )
}

export default CardList
