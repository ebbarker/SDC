import React, { useState, useEffect } from 'react';

const Answer = (props) => {
  const { answer, updateAnswersHelpfulness, reportAnswer } = props;
  const { answerer_name, body, helpfulness, id, photos, date } = answer;
  let [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [isHelpful, setIsHelpful] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isReported, setIsReported] = useState(false);

  const convertDate = (inputDate) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const newDate = new Date(inputDate).toLocaleDateString([], options);
    return newDate;
  };

  const updateHelpfulCount = () => {
    if (!isHelpful) {
      setIsHelpful(true);
      setHelpfulCount(helpfulCount += 1);
      updateAnswersHelpfulness(id);
    }
  };

  const updateSeller = () => {
    if (answerer_name.toLowerCase() === 'seller') {
      setIsSeller(true);
    }
  };

  const handleReportClick = () => {
    reportAnswer(id);
    setIsReported(true);
  };

  useEffect(() => {
    updateSeller();
  }, [answerer_name]);

  return (
    <div className="answer">
      <div className="answer-body">
        <strong>A:</strong>
        &nbsp;
        {body}
      </div>
      <div className="answer-flavor-text-container">
        {isSeller
          ? (
            <span className="answer-flavor-text">
              by&nbsp;
              <strong>Seller</strong>
              ,&nbsp;
              {convertDate(date)}
            </span>
          )
          : (
            <span className="answer-flavor-text">
              by&nbsp;
              {answerer_name}
              ,&nbsp;
              {convertDate(date)}
            </span>
          )}
        <span className="answer-flavor-text">|</span>
        <span className="answer-flavor-text">
          Helpful?
        </span>
        <span
          className="answer-flavor-text underline"
          role="button"
          tabIndex="0"
          onKeyPress={() => updateHelpfulCount()}
          onClick={() => updateHelpfulCount()}
        >
          Yes
        </span>
        <span className="answer-flavor-text">
          &#40;
          {helpfulCount}
          &#41;
        </span>
        <span className="answer-flavor-text">|</span>
        {isReported
          ? (
            <span className="answer-flavor-text">
              Reported
            </span>
          )
          : (
            <span
              className="answer-flavor-text underline"
              role="button"
              tabIndex="0"
              onKeyPress={() => handleReportClick()}
              onClick={() => handleReportClick()}
            >
              Report
            </span>
          )}
      </div>
      {photos.map((url, idx) => (
        <img className="answer-image" src={url} key={id + idx} width="75" height="75" alt="" />
      ))}
    </div>
  );
};

export default Answer;
