import React from 'react';
import { Features } from '../../components';
import './next.css';

const nextData = [
  {
  title: "Tworzenie własnej listy obserwowanych",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam dolores dolorem sed, a rem fugit in ratione iste magnam."
  },
  {
  title: "Gotowe listy o różnej tematyce",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam dolores dolorem sed, a rem fugit in ratione iste magnam."
  },
  {
  title: "Możliwość tweetowania bezpośrednio z ReTweet",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam dolores dolorem sed, a rem fugit in ratione iste magnam."
  }
]

const Next = () => {
  return (
    <div className='reTweet__next section__margin' id="next">
      <div className='reTweet__next-heading'>
        <h1 className='gradient__text-red'>To dopiero początek! Zobacz jak ReTweet bedzie zmieniał się, aby jak najlepiej dopasować się do Twoich oczekiwań.</h1>
        <p>Masz pomysł na nowe funkcje? Napisz!</p>
      </div>
      <div className='reTweet__next-cointainer'>
        {nextData.map((item, index) => (
          <Features className="reTweet__next-cointainer-features" title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Next

