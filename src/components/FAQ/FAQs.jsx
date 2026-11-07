import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import faqImg from "../../assests/diningfaq.jpeg";
import styles from "./FAQs.module.css";

const faqs = [
  {
    question: "How does the reservation system work?",
    answer:
      "Search for a restaurant by state and city, pick a date and time slot, and confirm. Your booking is saved instantly under My Bookings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel or change a reservation up to 2 hours before your booked time at no charge.",
  },
  {
    question: "Do you accommodate special dietary requirements?",
    answer:
      "Yes. Most partner restaurants offer vegetarian, vegan and gluten-free options. Let the restaurant know when you arrive.",
  },
  {
    question: "Can I make group reservations?",
    answer:
      "Yes, you can book for larger groups. For very large parties, contact the restaurant directly to confirm seating.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Get Your Answer</p>
        <h2 className={styles.title}>Frequently Asked Questions</h2>

        <div className={styles.body}>
          <img src={faqImg} alt="Restaurant dining room" className={styles.image} />

          <div className={styles.list}>
            {faqs.map((faq, i) => (
              <Accordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}