import React, { useState } from 'react';
import { IoCaretForwardSharp } from "react-icons/io5";
import { wheat } from '../assets';

const data = [
  {
    name: 'Bob',
    job: 'Designer',
    imgUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/080.jpg',
    remark: 'Fusce sit amet malesuada velit. Integer sit amet tellus nec mauris commodo interdum. Nulla facilisi.'
  },
  {
    name: 'Alice',
    job: 'Engineer',
    imgUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/082.jpg',
    remark: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante ac orci maximus elementum. Sed lobortis, sem a luctus aliquam, dui est suscipit odio, at vestibulum urna justo ut justo.'
  },
  {
    name: 'Frank',
    job: 'Consultant',
    imgUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/084.jpg',
    remark: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non dolor a mauris lacinia volutpat id eget mauris.'
  }
]

function Testimonials({ cards = data }) {
  const [currentCard, setCurrentCard] = useState(0)

  const handleForwardChange = () => {
    if (currentCard >= (cards.length -1)) {
      setCurrentCard(0);
    } else {
      setCurrentCard(prev => prev + 1);
    }
    console.log(currentCard)
  }

  const handleBackwardChange = () => {
    if (currentCard <= 0) {
      setCurrentCard(cards.length - 1);
    } else {
      setCurrentCard(prev => prev - 1);
    }
    console.log(currentCard)
  }

  return (
    <section class="relative text-center lg:text-left bg-[#faf8ec] py-[100px] px-[40px] ">
      <img src={wheat} alt="" className="absolute z-[0] w-[300px] scale-x-[-1] -right-[80px] -bottom-[140px] opacity-80" />
      <div className="relative py-12 md:px-6 md:px-12 max-w-[800px] mx-auto">
        <Card card={cards[currentCard]}/>
        <div className='absolute top-[50%] w-full'>
          <IoCaretForwardSharp className='absolute -left-10 rotate-[180deg] hover:text-color-acsent-1' size={60} onClick={() => handleBackwardChange()} />
          <IoCaretForwardSharp className='absolute -right-10 hover:text-color-acsent-1' size={60} onClick={() => handleForwardChange()} />
        </div>
      </div>
    </section>
  );
}

const Card = ({ card }) => {
  return (
    <div class="container mx-auto xl:px-32">
      <div class="flex grid items-center lg:grid-cols-2">
        <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
          <div
            class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 class="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
              {card.name}
            </h2>
            <p class="mb-4 font-semibold">{card.job}</p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              {card.remark}
            </p>
            <ul class="flex justify-center lg:justify-start">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  class="w-5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  class="w-5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  class="w-5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  class="w-5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  class="w-5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:mb-12 lg:mb-0">
          <img src={card.imgUrl}
            class="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
