import React from 'react'
import s from "./bio.module.scss"
export default function Link(props) {
  console.log(props.text)
  return (
    <span className={s.infoSpan}>
      <i className={s.testIcon} data-image="./../static/img/github.png">
        <img className={s.icon} src={props.img}></img>
      </i>
      <a href={props.href} target={"_blank"} className={s.github + " " + s.link}>{props.text}</a>
    </span>
  )
}
