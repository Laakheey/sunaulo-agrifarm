"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { submitOrder, type OrderFormState } from "@/app/actions/order";
import { ORDER_PRODUCT_OPTIONS } from "@/data/products";

const INITIAL_ORDER_STATE: OrderFormState = { status: "idle", message: "" };


const inputStyles =
  "w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-base text-ink focus:border-green focus:outline-none";

const labelStyles =
  "mb-1.5 block font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-soft";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-fit rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-green-deep transition-all duration-150 hover:-translate-y-0.5 hover:bg-terracotta hover:text-paper disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {pending ? "Sending…" : "Send order request"}
    </button>
  );
}


const OrderForm = () => {
  const [state, formAction] = useActionState(submitOrder, INITIAL_ORDER_STATE);

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Full name
          </label>
          <input id="name" name="name" type="text" placeholder="Your name" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" placeholder="98X-XXXXXXX" required className={inputStyles} />
        </div>
      </div>

      <div>
        <label htmlFor="product" className={labelStyles}>
          What are you interested in?
        </label>
        <select id="product" name="product" defaultValue="" className={inputStyles}>
          <option value="" disabled>
            Select a product
          </option>
          {ORDER_PRODUCT_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us the quantity you need, your location in Dang, and a preferred pickup or delivery date."
          className={`${inputStyles} min-h-27.5 resize-y`}
        />
      </div>

      <SubmitButton />

      {state.status !== "idle" ? (
        <p
          role="status"
          className={cn(
            "text-sm font-medium",
            state.status === "success" ? "text-green" : "text-terracotta",
          )}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

export default OrderForm;
