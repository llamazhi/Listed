import React, { useState } from "react";
import './Feedback.css';

export const Feedback = () => {
  const reasons = ["Technical Issue", "Feature Request", "General Inquiry", "Other"];
  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <div className='feeback-container'>
      <div className='feedback-paragraph'>
        <p> Having issues? </p>
        <p>Please let use know!</p>
      </div>
      <div className='feedback-selection'>
        {reasons.map((reason) => (
          <div className="feedback-select-itmes">
            <div className="feedback-radio-btn">
              <input
                type="radio"
                name="feedback"
                value={reason}
                checked={selectedReason === reason}
                onChange={() => setSelectedReason(reason)}
              />
            </div>
            <div className="feedback-radio-label">
              <p>{reason}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='feedback-custom-reasons'>
        {selectedReason === "Other" && (
          <input
            type="text"
            placeholder="Please specify..."
            className="custom-custom-input"
          />
        )}
      </div>
      <div className="feedback-submit">
        <button className="feedback-submit-btn">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Feedback;