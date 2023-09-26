import React from "react";

const processPage = (pagename) => {
  let rez = '';
  switch (pagename) {
    case 'home':
      {
        rez = 'home';
      }
      break;
    case 'work':
      {
        rez = 'work';
      }
      break;
    default:
      {
        rez = 'other';
      }
  }
  return rez;
}

const PageBottom = ({pageName}) => {
  return (
    <>
      <div className="position-fixed bottom-0 left-0 w-100">
        {processPage(pageName)}
      </div>
    </>
  )
}

export default PageBottom;