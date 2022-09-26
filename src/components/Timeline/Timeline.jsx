import React from 'react'
import s from "./timeline.module.scss"
import firstPortfolio from "./../../static/img/first-portfolio.png"
import pizza from "./../../static/img/PIZZA.png"
import sbor from "./../../static/img/SBOR.png"
import myResume from "./../../static/img/my-resume.png"
import sferum from "./../../static/img/sferum.jpg"
import atmosferum from "./../../static/img/atmosferum.png"
import whattime from "./../../static/img/whattime.png"
import Carousel, { CarouselChild } from '../Carousel/Carousel'
import periods from "./../timelineText.jsx"
export default function Timeline() {
  return (
    <div id="timeline-content" className={s.timelineContent}>
      <div className={s.aboutMe}>
        <h3>Обо мне</h3>
        <p>
          Всем привет, меня зовут Макар Кряжев, я из Нижнего Новгорода, сейчас учусь в 11 классе в физ-мат лицее. Это мой сайт-визитка, в нем я рассказал о своем пути фронтенд-разработчика
        </p>
        <p>
          Я стараюсь развиваться не только как разработчик. Уделяю много времени спорту, своему здоровью, плаваю на длинные дистанции. В моем городе огромное количество научных сообществ, коворкингов, я стараюсь посещать все мероприятия, которые они проводят.
        </p>
      </div>
      <ul className={s.timeline}>
        {periods.map((period) =>
          <div key={period.id} className={s.divLi}>
            <li className={s.event} id="date" data-date={period.date}>
              {!!period.info ?
                <>
                  <div className={s.info}>
                    {period.info}
                  </div>
                  <div className={s.attachment}>
                    {period.attachment}
                  </div>
                </>
                :
                period.child}
            </li>
          </div>
        )}
      </ul>
    </div>
  )
}
