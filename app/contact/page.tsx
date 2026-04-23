"use client";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

export default function Page() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM!);

  return (
    <>
      <h2 className="visually-hidden">Contact</h2>
      <form
        className={`form${state.submitting ? " form--loading" : ""}`}
        onSubmit={handleSubmit}
      >
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          className="form__input"
          id="name"
          type="text"
          name="name"
          required
          disabled={state.submitting}
          autoComplete="given-name"
        />
        <ValidationError
          className="form__error"
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          id="email"
          type="email"
          name="email"
          required
          disabled={state.submitting}
          autoComplete="email"
        />
        <ValidationError
          className="form__error"
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label className="form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form__textarea"
          id="message"
          name="message"
          rows={6}
          required
          disabled={state.submitting}
        />
        <ValidationError
          className="form__error"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="form__button"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError className="form__error" errors={state.errors} />
        {state.succeeded && !state.submitting ? <p>Thank you!</p> : null}
      </form>
    </>
  );
}
