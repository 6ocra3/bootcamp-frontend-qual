import React from 'react'
import s from "./link.module.scss"
export default function Link(props) {
  return (
    <span className={s.infoSpan}>
      <i className={s.icon} data-image="./../static/img/github.png">
        <img className={s.imgIcon} src={props.img}></img>
      </i>
      <a href={props.href} target={"_blank"} className={s.github + " " + s.link}>{props.text}</a>
    </span>
  )
}
