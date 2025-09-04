import Quiz from "./component/quiz";

const Home = () => {
  const quizQuestions = [
    {
      answer: "Adam",
      question: "1: Sab se pehle kon se Nabi dunya me bheje gaye?",
      option: ["Nuh", "Ibrahim", "Adam", "Musa"]
    },
    {
      answer: "Abu Bakr",
      question: "2: Hazrat Muhammad S.A.W ke baad pehle Khalifa kon the?",
      option: ["Ali", "Umar", "Usman", "Abu Bakr"]
    },
    {
      answer: "Madina",
      question: "3: Hijrat ke baad Rasool Allah S.A.W ne kon se shehar me qiyam farmaya?",
      option: ["Makkah", "Madina", "Taif", "Bait-ul-Muqaddas"]
    },
    {
      answer: "27 Ramzan",
      question: "4: Quran Pak kis din nazil hona shuru hua?",
      option: ["12 Rabi-ul-Awal", "27 Ramzan", "10 Muharram", "1 Shaban"]
    },
    {
      answer: "Khadija",
      question: "5: Rasool Allah S.A.W ki pehli biwi ka naam kya tha?",
      option: ["Ayesha", "Khadija", "Hafsa", "Zainab"]
    },
    {
      answer: "Bilal",
      question: "6: Pehle Moazzin kon the?",
      option: ["Abu Huraira", "Ali", "Umar", "Bilal"]
    },
    {
      answer: "Yousuf",
      question: "7: Kon se Nabi ko khoobsurti ki wajah se mashhoor kaha jata hai?",
      option: ["Isa", "Yousuf", "Dawood", "Yahya"]
    },
    {
      answer: "Ali",
      question: "8: Dar-e-Khyber kis Sahabi ne fatah kiya?",
      option: ["Abu Bakr", "Umar", "Usman", "Ali"]
    },
    {
      answer: "Nuh",
      question: "9: Kis Nabi ki Qoum tufan me tabah hui thi?",
      option: ["Ibrahim", "Nuh", "Saleh", "Musa"]
    },
    {
      answer: "Umar",
      question: "10: Kon sahabi ko 'Farooq' ke laqab se yaad kiya jata hai?",
      option: ["Ali", "Usman", "Umar", "Talha"]
    }
  ];

  return (
    <div>
      <div className="bg">
        <h1>Islamic Quiz App</h1>
        <Quiz question={quizQuestions} />
      </div>
    </div>
  );
};

export default Home;
