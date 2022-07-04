import React from "react";
import heroImg2 from "../images/illustration-2.svg";
import avaterImg from "../images/avatar-testimonial.jpg";
import linkArrowIcon from "../images/icon-arrow.svg";
import quotesIcon from "../images/icon-quotes.svg";
const Product = () => {
  return (
    <section id='Product Section' className='ProductSection'>
      <div className='ProductSection__curve'></div>
      <div className='ProductSection__top'>
        <img
          className='ProductSection__top__img'
          src={heroImg2}
          alt='Illustration'
        />
      </div>
      <div className='ProductSection__content'>
        <p className='ProductSection__content__title'>
          Stay productive, wherever you are
        </p>
        <p className='ProductSection__content__text1'>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className='ProductSection__content__text1'>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <div className='ProductSection__content__testimonial'>
          <button className='ProductSection__content__testimonial__link'>
            <p>See how Fylo works</p>
            <img src={linkArrowIcon} alt='link' />
          </button>
          <div className='ProductSection__content__testimonial__card'>
            <img src={quotesIcon} alt='quotes' />
            <p className='ProductSection__content__testimonial__card__text'>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className='ProductSection__content__testimonial__card__bottom'>
              <img
                className='ProductSection__content__testimonial__card__bottom__avater'
                src={avaterImg}
                alt='Kyle Burton'
              />
              <span className='ProductSection__content__testimonial__card__bottom__span'>
                <p>Kyle Burton </p>
                <p>Founder & CEO, Huddle</p>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
