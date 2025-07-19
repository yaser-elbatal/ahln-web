export type BaseFaq = { questionKey: string; answerKey: string };

const baseFaqs: BaseFaq[] = [
  { questionKey: "faq1Question", answerKey: "faq1Answer" },
  { questionKey: "faq2Question", answerKey: "faq2Answer" },
  { questionKey: "faq3Question", answerKey: "faq3Answer" },
  { questionKey: "faq4Question", answerKey: "faq4Answer" },
  { questionKey: "faq5Question", answerKey: "faq5Answer" },
  { questionKey: "faq6Question", answerKey: "faq6Answer" },
  { questionKey: "faq7Question", answerKey: "faq7Answer" },
  { questionKey: "faq8Question", answerKey: "faq8Answer" },
  { questionKey: "faq9Question", answerKey: "faq9Answer" },
  { questionKey: "faq10Question", answerKey: "faq10Answer" },
  { questionKey: "faq11Question", answerKey: "faq11Answer" },
  { questionKey: "faq12Question", answerKey: "faq12Answer" },
  { questionKey: "faq13Question", answerKey: "faq13Answer" },
  { questionKey: "faq14Question", answerKey: "faq14Answer" },
  { questionKey: "faq15Question", answerKey: "faq15Answer" },
  { questionKey: "faq16Question", answerKey: "faq16Answer" },
];

export function getFaqs(t: (key: string) => string) {
  return baseFaqs.map((f) => ({
    question: t(f.questionKey),
    answer: t(f.answerKey),
  }));
}
