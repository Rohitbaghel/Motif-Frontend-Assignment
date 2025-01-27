import React from "react";

const EmailCard = ({ data, date, handleOpenEmail }) => {
  const {
    from_email,
    from_name,
    id,
    short_description,
    subject,
    read,
    favorite,
  } = data;

  return (
    <div
      className={`email-card ${read ? "read" : ""}`}
      onClick={() => handleOpenEmail(id, data)}
    >
      <div className="icon">{from_name[0]}</div>
      <div className="card-content">
        <div>
          From:{" "}
          <b>
            {from_name} &lt;{from_email}&gt;{" "}
          </b>
        </div>
        <div>
          Subject: <b>{subject}</b>
        </div>
        <p>{short_description}</p>
        <small>
          <time dateTime={date}>{date}</time>
          {favorite && (
            <b style={{ color: "#E54065", marginLeft: "20px" }}>Favorite</b>
          )}
        </small>
      </div>
    </div>
  );
};

export default EmailCard;
