import React from 'react'
import s from "./bio.module.scss"
import avatar from "./../static/img/avatar.JPG"
import github from "./../static/img/github.png"
import vk from "./../static/img/vk.png"
import telegram from "./../static/img/telegram.png"
import mail from "./../static/img/mail.png"
import finger from "./../static/img/finger.png"
import Link from './Link'
export default function Bio() {
  return (
    <div className={s.bioContent}>
      <div>
        <img className={s.avatar} src={avatar} alt="my beatiful face"></img>
        <br></br>
        <h2 className={s.name}>Макар Кряжев</h2>
      </div>
      <div className={s.links}>
        <br />
        <br />
        <Link href={"6o3kmm@mail.ru"} text={"6o3kmm@mail.ru"} img={mail}></Link>
        <Link href={"https://github.com/6ocra3"} text={"github.com"} img={github}></Link>
        <Link href={"https://vk.com/makarioz"} text={"vk.com"} img={vk}></Link>
        <Link href={"https://t.me/makar_kr"} text={"telegram.org"} img={telegram}></Link>
      </div>
    </div>
  )
}
