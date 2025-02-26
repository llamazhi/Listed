import React, { useState } from "react";
import './Profile.css';

export const Feedback = () => {
  const reasons = ["Technical Issue", "Feature Request", "General Inquiry", "Other"];
  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <div className='feeback-container'>
      <div className='feedback-paragraph'>
        <p> Having issues? </p>
        <br />
        <p>Please let use know!</p>
      </div>
      <div className='feeback-selection'>
        {reasons.map((reason) => (
            <label key={reason} className='feedback-option'>
              <input
                type="radio"
                name="feedback"
                value={reason}
                checked={selectedReason === reason}
                onChange={() => setSelectedReason(reason)}
              />
              {reason}
            </label>
          ))}
      </div>
      <div className='feedback-custom-reasons'>
        {selectedReason === "Other" && (
          <input
            type="text"
            placeholder="Please specify..."
            className="custom-reason-input"
          />
        )}
      </div>
    </div>
  )
}

export default Feedback;