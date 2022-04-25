import React from "react";

    const Button = ({onSubmit}: any) => {
      return (
        <button type="button" onClick={onSubmit} className="button">Search</button>
      );
    }
  
  export default Button;