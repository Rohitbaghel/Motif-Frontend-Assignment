import React from "react";
import EmailCard from "./EmailCard";

const EmailList = ({ emailListData, handleOpenEmail, date }) => {
  return (
    <main className="email-list">
      {emailListData.map((item) => (
        <EmailCard
          key={item.id}
          data={item}
          handleOpenEmail={handleOpenEmail}
          date={date}
        />
      ))}
    </main>
  );
};

export default EmailList;
