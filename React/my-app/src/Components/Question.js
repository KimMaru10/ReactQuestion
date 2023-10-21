import React, { Component } from "react";
import '../styles/Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      totalScore: 0,
      answers: Array(quizSteps.length).fill(null), // 각 질문에 대한 응답 저장
    };
  }

  handleAnswerClick = (answerScore) => {
    const { currentStep, answers } = this.state;
    const newTotalScore = this.state.totalScore + answerScore;

    // 현재 질문에 대한 응답 저장
    answers[currentStep] = answerScore;

    if (currentStep < lastIndex) {
      this.setState(
        {
          currentStep: currentStep + 1,
          totalScore: newTotalScore,
          answers, // 수정된 응답 상태
        },
        () => {
          console.log("업데이트 후의 currentStep" + this.state.currentStep);
          console.log("업데이트 후의 totalScore" + this.state.totalScore);
        }
      );
    } else {
      this.calculateResults(newTotalScore);
    }
  };

  calculateResults = (totalScore) => {
    // 결과 계산 로직 작성
    // 결과를 상태에 저장하고 다시 렌더링하여 결과를 표시
    let resultTitle = '';
    let resultDesc = '';
  
    if (totalScore >= 8) {
      resultTitle = '씨애랑';
      resultDesc = '<img src="https://i.imgur.com/dipkE0v.jpg"/>';
    } else if (totalScore >= 6) {
      resultTitle = '썬더일레븐';
      resultDesc = '<img src="https://i.imgur.com/tXTjD9k.jpg"/>';
    } else {
      resultTitle = '봉현회';
      resultDesc = '<img src="https://i.imgur.com/WXox0Yv.jpg"/>';
    }
  
    this.setState({ resultTitle, resultDesc }, () => {
        console.log("Result title and description set:", this.state.resultTitle, this.state.resultDesc);
    });
  };

  render() {
    const { currentStep, resultTitle, resultDesc, answers } = this.state;

    // 모든 질문에 대한 응답이 완료된 경우 결과 섹션 표시
    const allQuestionsAnswered = answers.every((answer) => answer !== null);

    return (
      <div id="quizzie">
        <div 
            style={{ display: allQuestionsAnswered ? 'none' : 'block' }}
        >
            <h1>너에게 맞는 동아리 찾아줄게!</h1>
            <ul className={`quiz-step step${currentStep + 1} current`}>
            <li className="question">
                <div className="question-wrap">
                <h2>{quizSteps[currentStep].question}</h2>
                </div>
            </li>
            {quizSteps[currentStep].answers.map((answer, index) => (
                <li
                key={index}
                className={`quiz-answer ${answer.value > 2 ? "high-value" : "low-value"}`}
                data-quizindex={answer.value}
                >
                <div className="answer-wrap" onClick={() => this.handleAnswerClick(answer.value)}>
                    <p className="answer-text">{answer.text}</p>
                </div>
                </li>
            ))}
            </ul>
        </div>  
        {allQuestionsAnswered && (
          <ul id="results">
            <li className="results-inner">
              <p>Your result is:</p>
              <h1>{resultTitle}</h1>
              <div className="desc" dangerouslySetInnerHTML={{ __html: resultDesc }}></div>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

const quizSteps = [
  {
    question: "Question 1: 나는 인싸다",
    answers: [
      { text: "누구나 친구 쌉가능", value: 2 },
      { text: "하하... 친구 없음", value: 4 },
    ],
  },
  {
    question: "Question 2: 나는 스포츠를 좋아한다",
    answers: [
      { text: "운동이 최고지", value: 2 },
      { text: "움직이기 싫어", value: 4 },
    ],
  },
  {
    question: "Question 3: 난 창의적이다.",
    answers: [
      { text: "그렇다", value: 2 },
      { text: "그렇지 않다 ", value: 4 },
    ],
  },
  {
    question: "Question 4: 난 주말에 교회에 간다",
    answers: [
      { text: "갑니다", value: 2 },
      { text: "안가요~", value: 4 },
    ],
  },
];

const totalSteps = quizSteps.length;
const lastIndex = totalSteps - 1;

export default Question;
