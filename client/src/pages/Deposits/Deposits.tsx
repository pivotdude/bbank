import React from "react";
import Card from "../../components/ui/Card/Card";

import ChildImage from "../Credits/img/child.webp";
import GrowthImage from "./img/growth.jpg";
import NoobDepositImage from "./img/noob.jpeg";
import SaveDepositImage from "./img/save.jpeg";
import LongDepositImage from "./img/long.jpeg";
import BegginerImage from "./img/beginner.webp";

function Deposits () {
  return (
    <>
      <>
        <Card
          img={GrowthImage}
          card={{
            name: 'Растущий вклад',
            description:
              'Вклад с постепенно возрастающей ставкой для тех, кто хочет получить максимальную прибыль.',
            dops: [
              {
                title: '5%',
                description: 'Стартовая ставка',
              },
              {
                title: '1%',
                description: 'Ежегодный рост',
              },
              {
                title: '5 лет',
                description: 'Срок',
              },
            ],
          }}
        />
        <Card
          img={NoobDepositImage}
          card={{
            name: 'Любительский вклад',
            description:
              'Позволяет любителям более выгодно вложить свои деньги и получить небольшой прирост к своим сбережениям.',
            dops: [
              {
                title: '3%',
                description: 'Годовая ставка',
              },
              {
                title: '3 года',
                description: 'Срок',
              },
            ],
          }}
        />
        <Card
          img={SaveDepositImage}
          card={{
            name: 'Надежный вклад',
            description:
              'C возможностью снятия части своих сбережений без штрафных процентов каждый год.',
            dops: [
              {
                title: '6%',
                description: 'Годовая ставка',
              },
              {
                title: '5 лет',
                description: 'Срок',
              },
            ],
          }}
        />
        <Card
          img={LongDepositImage}
          card={{
            name: 'Долгосрочный вклад',
            description:
              'Позволяет максимально выгодно использовать свои финансовые возможности на длительный период.',
            dops: [
              {
                title: '5%',
                description: 'Стартовая ставка',
              },
              {
                title: '7%',
                description: 'Годовая ставка',
              },
              {
                title: '10 лет',
                description: 'Срок',
              },
            ],
          }}
        />
        <Card
          img={BegginerImage}
          card={{
            name: 'Стартовый вклад',
            description:
              'Без возможности досрочного снятия денег в первые 6 месяцев.',
            dops: [
              {
                title: '5%',
                description: 'Стартовая ставка',
              },
              {
                title: '2%',
                description: 'Годовая ставка',
              },
              {
                title: '1 год',
                description: 'Срок',
              },
            ],
          }}
        />
      </>
    </>
  )
}

export default Deposits;