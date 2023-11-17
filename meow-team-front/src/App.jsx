import React from "react";

export const App = (props) => {
 const { title, children } = props;
  return (
    <div className="accordion">
      <h3 className="accordion-title">{title}</h3>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

