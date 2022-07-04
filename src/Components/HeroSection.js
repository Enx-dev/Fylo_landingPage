import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import heroImg from "../images/illustration-1.svg";

const HeroSection = () => {
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
    <section id='Hero_Section' className='HeroSection'>
      <div className='HeroSection__img'>
        <img src={heroImg} alt='Illustration' />
      </div>
      <div className='HeroSection__content'>
        <h1 className='HeroSection__content__title'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className='HeroSection__content__text'>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form
          className='HeroSection__content__signup'
          onSubmit={handleSubmit(submitHandler)}>
          <input
            className={`${
              errors.email
                ? "border border-red-500"
                : "border-primaryDarkBlue border"
            } HeroSection__content__signup__input`}
            type='email'
            {...register("email", {
              required: "Enter an email address",
              pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                message: "Please check your email",
              },
            })}
            placeholder='Enter your email'
          />
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => (
              <p className='absolute -bottom-8 text-red-500'>{message}</p>
            )}
          />
          <button type='submit' className='HeroSection__content__signup__btn'>
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
