# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Fylo landing page with two column layout solution](#frontend-mentor---fylo-landing-page-with-two-column-layout-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

Flyo Landing page built with simplicity in mind

### Screenshot

![Fylo](./src/images/Fylo%20landing%20page.png)

### Links

   [Live site](https://fylo-landing-page-blush-phi.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCss](https://tailwindcss.com/) - A utility-first CSS framework

### What I learned

```css
.CTA {
    @apply bg-primaryDesaturatedBlue px-10 py-10 flex flex-col space-y-4 text-center lg:text-start lg:flex-row lg:px-20 lg:justify-between;
    &__top {
      @apply space-y-4 lg:max-w-md;
      &__title {
        @apply text-xl text-white font-header font-bold;
      }
      &__text {
        @apply text-white/80 font-body leading-6;
      }
    }

    &__bottom {
      @apply w-full relative space-y-2 max-w-sm self-center;
      &__input {
        @apply px-2 w-full  py-2;
      }
      &__btn {
        @apply w-full lg:w-1/2 bg-accentBrightBlue hover:bg-accentBrightBlue/50 transition-colors duration-300 ease-in-out  py-2 text-white font-body text-base shadow-sm shadow-black/50;
      }
    }
  }
```

```js
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Newsletter = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();
  const submitHandler = () => {
    resetField("email");
  };

  return (
    <section id='Call-to-action' className='CTA'>
      <div className='CTA__top'>
        <p className='CTA__top__title'> Get early access today</p>
        <p className='CTA__top__text'>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className='CTA__bottom'>
        <input
          className={`CTA__bottom__input ${
            errors.email && "border border-red-500"
          }`}
          type='email'
          {...register("email", {
            required: "Enter an email address",
            pattern: {
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message: "Please check your email",
            },
          })}
          placeholder='email@example.com'
        />
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => (
            <p className='absolute -bottom-8 text-red-500'>{message}</p>
          )}
        />
        <button type='submit' className='CTA__bottom__btn'>
          Get Started For Free
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

```

### Continued development

scroll animation upcoming

## Author

- Frontend Mentor - [@Enx_dev](https://www.frontendmentor.io/profile/Enx_dev)
- LinkedIn - [@Adejori Eniola](https://www.linkedin.com/in/eniola-adejori-0a3091204)
