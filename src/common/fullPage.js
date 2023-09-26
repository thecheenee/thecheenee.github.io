import React from "react";

const FullPage = ({children}) => {
  return (
    <>
      <section>
        <div className="w-100 vh-100">
          {children}
        </div>
      </section>
    </>
  )
}

export default FullPage;