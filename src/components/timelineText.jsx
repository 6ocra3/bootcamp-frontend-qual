import firstPortfolio from "./../static/img/first-portfolio.png"
import pizza from "./../static/img/PIZZA.png"
import sbor from "./../static/img/SBOR.png"
import myResume from "./../static/img/my-resume.png"
import sferum from "./../static/img/sferum.jpg"
import atmosferum from "./../static/img/atmosferum.png"
import whattime from "./../static/img/whattime.png"
import Carousel, { CarouselChild } from './Carousel/Carousel'
import s from "./Timeline/timeline.module.scss"
const periods = [
    {
        id: 0,
        date: "2018-2020",
        child: <><h3>Яндекс.Лицей</h3>
            <p>Мое первое знакомство с программированием произошло благодаря прекрасной программе от Яндекса. Я попал на первый набор в моем городе будучи восьмиклассником, закончил программу с отличием. Во втором году выполнил три проекта: менеджер паролей, игру 4Х стратегию, ВК бота-планера</p>
            <p>Мой сертификат: 2002 20703</p></>
    },
    {
        id: 1,
        date: "Февраль 2022",
        info: <>              <h3>Frontend и Лицей++</h3>
            <p>В начале 2022 я активно взялся за фронтенд разработку, учился в HTML Academy. </p>
            <p>Одновременно с этим Яндекс объявил о первых наборах на интенсивы, решил принять участие и прошел на "Веб-разработку на Django". В отборе было похожее творческое задание. Сравнивая их можно увидеть как я вырос в веб-разработке.</p>
        </>,
        attachment: <>              <a href="https://github.com/6ocra3/Y.Lyceum" target={"_blank"}><img src={firstPortfolio} className={s.portfolio} alt="Первый сайт резюме" /></a>
        </>
    },
    {
        id: 2,
        date: "Апрель",
        info: <>              <h3>Мой первый хакатон</h3>
            <p>В апреле в моем городе проходил международынй хакатон TechnoStrelka. Я собрал команду из трех человек, двух разработчиков и дизайнера. Был отборочный этап (создать CRM платформу для магазина пицц) и заключительный этап (создать платформу для сбора людей на поиски пропавших для волонтерской организации). Заняли второе место в нашем треке. Писали на React, Django </p>
        </>,
        attachment: <>              <Carousel>
            <CarouselChild><a style={{ display: "block" }} href="https://github.com/koval96/sbor"><img src={sbor} width={"320vw"} height={"260vw"} /></a></CarouselChild>
            <CarouselChild><a style={{ display: "block" }} href="https://www.youtube.com/watch?v=Qx_AQknaogI"><img src={pizza} width={"370vw"} height={"260vw"} /></a></CarouselChild>
        </Carousel>
        </>
    },
    {
        id: 3,
        date: "Май",
        info: <>              <h3>Защита проекта Лицей++</h3>
            <p>В мае была защита проекта Лицея++. Я был на роли teamlead. Вместе с командой мы создали сервис для создания и рассылки своего резюме, по итогу мы получили максимальный балл за проект. Это был мой первый опыт управления командой, поэтому я сильно прокачал свои soft-skills</p>
        </>,
        attachment: <>              <a style={{ display: "block" }} href="https://github.com/YandexLyceumPP/Resume" target={"_blank"}><img src={myResume} className={s.portfolio} alt="Первый сайт резюме" /></a>
        </>
    },
    {
        id: 4,
        date: "Июнь",
        info: <>              <h3>Стажировка в VK Sferum</h3>
            <p>В июне я отобрался на стажировку от  Sferum, которая является совместной компанией "VK" и "Ростелеком", я отобрался на позицию frontend-разработчика. Каждый день были лекции на развитие soft-skills, были рабочие сессии с сеньорами компании. Пользу этой стажировки сложно переоценить, она оставила несгладимое впечатление </p>
        </>,
        attachment: <>              <a style={{ display: "block" }} href="https://vk.com/wall-203504769_17036" target={"_blank"}><img src={sferum} className={s.sferum} alt="Первый сайт резюме" /></a>
        </>
    },
    {
        id: 5,
        date: "Август",
        info: <>              <h3>MeetTime</h3>
            <p>На стажировке я обрел не только новые навыки, но и команду продактов, frontend-, backend-разработчиков. Вместе с ними мы разрабатывали сервис MeetTime. Я опять исполнял роль teamlead и смог исправить ошибки, которые допустил в прошлый раз и у нас получился рабочий, удобный сервис.</p>
        </>,
        attachment: <>              <Carousel>
            <CarouselChild><a href="https://www.youtube.com/watch?v=qFsqPb8FuEk"><img src={atmosferum} height={"200vw"} /></a></CarouselChild>
            <CarouselChild><a href="https://github.com/atmosferum/frontend"><img src={whattime} height={"200vw"} /></a></CarouselChild>
        </Carousel>
        </>
    }

]

export default periods