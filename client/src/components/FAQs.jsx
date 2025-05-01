import { useState, useRef } from "react";
import PlusIcon from "../assets/icons/plus.svg?react";
import MinusIcon from "../assets/icons/minus.svg?react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useInView } from "framer-motion";

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef);
  return (
    <div className="text-white py-[72px] sm:py-24 bg-gradient-to-b to-black from-[#5D2CAB]">
      <div className="items-center p-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl max-w-[648px] mx-auto tracking-tighter">
          Frequently asked questions
        </h2>
        <div
          className="mt-12 max-w-[648px] mx-auto"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={accordionRef}
        >
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
