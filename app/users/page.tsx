"use client";
import {useState} from "react";
import "../css/faq.css";


interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {question: "How many days am I required to be in the office?",
   answer: "At least 3 days in a week. Your selected days should be communicated with your lead beforehand.",} ,

  {question: "What happens if I take a sick day or a holiday?",
    answer: "If the sick day/holiday falls on one of your selected office days, your streak will be maintained and will not reset.",} ,

  {question: "What is the 'Weekly Quota' ?",
    answer: "It is simply a visual indicator indicate that keeps track of how many full days (out of the minimum 3 days) you have been to the office for the current work week.", } ,
  {question: "Will my streak break if I do not come to the office on my selected day but attend on a different day?",
    answer: "No, your streak will not break. However, your lead will be notified of your absence on the originally selected day.", },

  {question:"What happens if I spend more than 6 hours and 30 minutes in the office but arrive later than 10:00 AM?Will my streak break?",
    answer: "No, your streak will not break but you will be flagged for not getting to the office on time.",} ,

  {question:"What happens if I forget to clock in using the logger? Is my day lost?",
    answer: "If you do not clock in with the logger, your data source is solely reliant on he access control but in case the access control is offline, your data for that day might be inaccurate. So we encourage everyone to use the logger once in a while to help keep accurate data.",},

  ];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <div className="absolute top-[-10%] left-[-4%] w-45 h-45 rounded-full bg-[#BDFF00]"></div>

      <h1 className="text-3xl text-center">FAQ's</h1>
      <h2 className="p-6 text-gray-500 text-center">
        Have Questions? We are here to help.
      </h2>

      <section className="space-y-9 ml-[90px] w-[80%]">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <p className="w-[70%]">{faq.question}</p>

              <button
                onClick={() => toggleAnswer(index)}
                className="w-[25px] h-[25px] items-center justify-center font-light rounded-full border-1 border-black text-black "
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>

            {openIndex === index && (
              <div className="mt-4 text-gray-600 w-[80%]">{faq.answer}</div>
            )}

            <hr className="mt-6 border-[#A9C900] border-[1.5px] "/>
          </div>
        ))}
      </section>
    </main>
  );
}
