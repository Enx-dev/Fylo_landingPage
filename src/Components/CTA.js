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
