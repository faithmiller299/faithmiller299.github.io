import React from "react";

const GetInTouch = ({heading, message, email, phone }) => {
  return (
    <>
      <h2 id="getInTouch" className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
      {message && `${message} `}<a className="text-decoration-none" href={`mailto:${email}`}>{email}</a> or call me at: <a className="text-decoration-none" href={`tel:${phone}`}>{phone}</a>.
      </p>
    </>
  );
};

export default GetInTouch;