import PropTypes from "prop-types";

function AnswerDiv({ resp }) {
  AnswerDiv.propTypes = {
    resp: PropTypes.string.isRequired,
  };

  return <div className="answerDiv">{resp}</div>;
}

export default AnswerDiv;
