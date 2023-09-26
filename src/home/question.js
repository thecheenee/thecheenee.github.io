import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Press_Start_2P } from "next/font/google";
import heroData from "./heroData";

const hD = heroData;

const hs = Press_Start_2P({ weight: "400", subsets: ['latin'] })

const IconClasses = (icon) => {
  return "fs-1 bi bi-"+icon+"";
}

const Question = () => {
  return (
    <>
      <div className="container d-flex vh-100 mx-auto">
        <div className="align-self-center w-100">
          <div className="text-center my-5">
            <p className={`${hs.className} lead menu-link`}>
              {hD.question.title}
            </p>
          </div>
          <div className="row">
            {hD.question.options.map((link, i) => {
              return (
                <>
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="position-relative w-100">
                    <Link className="d-block w-50 mx-auto page-link" href={link.path}>
                      <div className={`page-link-${link.style} text-white w-100 py-5 mb-3 border border-dark text-center border-5 rounded-4`}>
                        <i className={IconClasses(link.icon)}></i>
                      </div>
                      <div className="fs-6 text-center text-capitalize">
                        <span className={hs.className}>{link.title}</span>
                      </div>
                    </Link>
                  </div>
                </div>
                </>
              )
            })}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Question;