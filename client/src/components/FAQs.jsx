"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg?react";
import MinusIcon from "../assets/icons/minus.svg?react";
import clsx from "clsx";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div
        className={clsx("mt-4", {
          hidden: !isOpen,
          "": isOpen === true,
        })}
      >
        {answer}
      </div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="text-white py-[72px] sm:py-24 bg-gradient-to-b to-black from-[#5D2CAB]">
      <div className="items-center p-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl max-w-[648px] mx-auto tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
