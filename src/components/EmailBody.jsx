import React from "react";

const EmailBody = ({ date, markAsFavorite ,emailData}) => {
  const { id, from_name, subject, body, favorite } = emailData;
  return (
    <div className="email-body">
      <div className="icon">{from_name[0]}</div>
      <div>
        <div className="email-body-topbar">
          <h2>{subject}</h2>
          <button
            className="favorite-btn"
            onClick={() => markAsFavorite(id)}
          >
            {favorite ? "Remove from favorite" : "Mark as favorite"}
          </button>
        </div>
        <time dateTime={date.replaceAll("/", "-")}>{date}</time>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

export default EmailBody;
