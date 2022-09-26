import React, { useState } from 'react';
import s from './Carousel.module.scss';
import { ChevronLeft, ChevronRight } from 'react-feather';
export function CarouselChild(props) {
  const { children, width } = props;
  return (
    <div className={s.carouselItem} style={{ width }}>
      {children}
    </div>
  );
}
function Carousel(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);
  const { children } = props;
  function updateIndex(newIndex) {
    if (newIndex === 0) {
      setDisableLeft(true);
      setDisableRight(false);
    } else if (newIndex === React.Children.count(children) - 1) {
      setDisableLeft(false);
      setDisableRight(true);
    } else {
      setDisableRight(false);
      setDisableLeft(false);
    }
    setSlideIndex(newIndex);
  }

  function myHref(e) {
    if (e.target.id === "buttons") {
      console.log(children[slideIndex].props.children.props.href)
      window.open(children[slideIndex].props.children.props.href, "_blank");
    }
  }

  return (
    <div className={s.carousel} onClick={myHref}>
      <div className={s.inner} style={{ transform: `translate(-${slideIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className={s.buttons} id={"buttons"}>
        <button className={s.buttonGhost + " " + s.button} onClick={() => updateIndex(slideIndex - 1)} disabled={disableLeft}>
          <ChevronLeft size={40} />
        </button>
        <button className={s.buttonGhost + " " + s.button} disabled={disableRight} onClick={() => updateIndex(slideIndex + 1)} >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
