import { Container } from "@/components/ui/Container";
import { OrderForm } from "@/components/sections";
import { FAQS } from "@/data/faq";

const Contact = () => {
  return (
    <section id="contact" className="py-22">
      <Container className="grid items-start gap-14 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Order produce
          </span>
          <h2 className="mb-7 mt-1.5 font-display text-[clamp(2rem,4vw,2.9rem)] font-bold">
            Place an order or ask a question
          </h2>

          <OrderForm />
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Common questions
          </span>
          <h2 className="mb-7 mt-1.5 font-display text-[clamp(2rem,4vw,2.9rem)] font-bold">
            Frequently asked
          </h2>

          <div className="grid gap-3.5">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-line bg-paper px-5 py-4.5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-[1.02rem] font-semibold">
                  {faq.question}
                  <span className="font-mono text-xl text-terracotta group-open:hidden">+</span>
                  <span className="hidden font-mono text-xl text-terracotta group-open:inline">
                    &minus;
                  </span>
                </summary>
                <p className="mt-3 text-[0.94rem] text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;