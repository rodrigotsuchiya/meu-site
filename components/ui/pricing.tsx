import { CheckIcon } from "lucide-react";
import React from "react";
import { TextScramble } from "./text-scramble";

const Pricing1 = () => {
  // Pricing plan data
  const pricingPlans = [
    {
      title: "Starter",
      popular: false,
      description:
        "Perfect for individuals or small teams just getting started with their projects.",
      price: "R$ 499",
      features: [
        "Basic support",
        "1 project included",
        "Community access",
        "Email support",
        "Cancel anytime",
      ],
    },
    {
      title: "Pro",
      popular: true,
      description:
        "It is most ideal for growing teams who need more features and priority support .",
      price: "R$ 1.299",
      features: [
        "Priority support",
        "Up to 5 projects",
        "Team collaboration",
        "Advanced analytics",
        "Monthly check-ins",
        "Cancel anytime",
      ],
    },
    {
      title: "Enterprise",
      popular: false,
      description:
        "Best for large organizations requiring custom solutions and dedicated support.",
      price: "Custom",
      features: [
        "Dedicated account manager",
        "Unlimited projects",
        "Custom integrations",
        "24/7 support",
        "Onboarding & training",
        "Cancel anytime",
      ],
    },
  ];

  return (
    <section id="pricing" className="flex flex-col items-center justify-center gap-20 w-full mx-auto py-20 bg-background text-foreground brutal-border-b">
      <div className="flex flex-col items-center gap-7 w-full px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
          <TextScramble as="span">Preços simples e transparentes</TextScramble>
        </h2>
      </div>

      <div className="flex justify-center flex-wrap w-full max-w-7xl px-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex-1 min-w-[300px] border border-black/10 ${
              index === 1 ? "bg-black text-bg border-black" : "bg-bg text-black"
            }`}
          >
            <div className="p-[30px] flex flex-col h-full gap-6 justify-between">
              <div className="flex flex-col gap-6">
                <div className="p-0 flex flex-col gap-4">
                  <div className="font-bold text-2xl uppercase tracking-tighter">
                    <TextScramble as="span">{plan.title}</TextScramble>{" "}
                    {plan.popular && (
                      <span className={`text-xs uppercase tracking-widest px-2 py-1 rounded-full border ${index === 1 ? 'border-bg/30' : 'border-black/30'}`}>
                        // mais popular
                      </span>
                    )}
                  </div>
                  <TextScramble className="opacity-80 font-medium text-sm leading-relaxed">
                    {plan.description}
                  </TextScramble>
                  <div className="flex items-baseline gap-1">
                    <TextScramble className="font-bold text-3xl tracking-tighter">
                      {plan.price}
                    </TextScramble>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60"> / mensal</span>
                  </div>
                </div>
                <hr className={index === 1 ? "border-bg/20" : "border-black/20"} />

                <div className="flex flex-col gap-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <CheckIcon className="w-5 h-5 shrink-0" />
                      <TextScramble className="font-medium text-sm">
                        {feature}
                      </TextScramble>
                    </div>
                  ))}
                </div>
              </div>
              <hr className={index === 1 ? "border-bg/20" : "border-black/20"} />
              <div className="p-0 ">
                <a
                  href="https://wa.me/5515991703282"
                  target="_blank"
                  rel="noopener"
                  className={`inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all w-full brutal-border ${
                    index === 1
                      ? "bg-bg text-black border-bg hover-invert"
                      : "bg-black text-bg border-black hover-invert-reverse"
                  }`}
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Pricing1 };
