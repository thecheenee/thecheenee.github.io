'use client'

import React, { useState, useEffect } from "react";
import styles from './hero.module.css';
import { Press_Start_2P } from 'next/font/google';
import heroData from "./heroData";

const hD = heroData;

const list = hD.hero.skills;

const hs = Press_Start_2P({ weight: "400", subsets: ['latin'] });

const Hero = () => {
  const [titleCounter, setTitleCounter] = useState(-1);
  const [currentTitle, setCurrentTitle] = useState(list[titleCounter]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleCounter(titleCounter+1);
      if (titleCounter === list.length-1) {
        setTitleCounter(0);
      }
      setCurrentTitle(list[titleCounter]);
    }, 1000);

    return () => clearInterval(timer);
  }, [titleCounter]);

  return (
    <>
      <div className="container d-flex vh-100 mx-auto">
        <div className="align-self-center w-100">
          <div className={styles.heroWrapper}>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-5 py-3" style={{minHeight:200+'px'}}>
                <div className={styles.heroLogo}>
                  <div className="position-absolute top-0 left-0 w-100 h-100 d-flex">
                    <div className="align-self-center text-center text-white w-100">
                      Logo here
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-7py-3">
                <div className="d-flex h-100">
                  <div className="align-self-center">
                    <h3 className={hs.className}>
                      Hi,
                      <br/>
                      <span >{hD.hero.intro}</span>
                    </h3>
                    <h4>
                      <span className="d-inline-block py-1 text-uppercase">{currentTitle}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;