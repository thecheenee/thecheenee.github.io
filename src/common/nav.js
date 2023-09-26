'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import menuItems from "./menuItems";
import { Press_Start_2P } from "next/font/google";

const ps = Press_Start_2P({ weight: "400", subsets: ["latin", "latin-ext"] });

const IconClasses = (icon) => {
  return "fs-5 bi bi-"+icon+"";
}

const CheckActiveLink = ({href}) => {
  const routePath = usePathname();
  return (
    routePath === href?
    'menu-link-active link-underline link-underline-opacity-0'
    : 'menu-link link-underline link-underline-opacity-0'
  );
}

const Nav = () => {
  return (
    <>
    <nav className="navbar fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">&nbsp;</a>
        <div className="navbar-toggler rounded-pill">
          <button type="button" className="btn btn-light" title="menu" data-bs-toggle="offcanvas" data-bs-target="#siteMenu">
            <i className="bi bi-list"></i>
          </button>
          <button type="button" className="btn btn-light" title="contact">
            <i className="bi bi-telephone-fill"></i>
          </button>
        </div>
      </div>
    </nav>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="siteMenu" aria-labelledby="siteMenuLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-shadow" id="offcanvasExampleLabel"><span className={ps.className}>Quick Menu</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="w-100 py-2">
          <ul className="list-unstyled">
            {
              menuItems.map((link, index) => {
                return (
                  <>
                    <li key={index} className="d-block justify-content-between align-items-start mb-1 bg-grey">
                      <div className="w-100 d-block position-relative p-2">
                        <div className="ms-2 me-auto d-inline-block">
                          {(link?.path)?
                            <Link className={CheckActiveLink(link.path)} href={link.path}>
                              <span className="d-inline-block pe-2 align-text-bottom">
                                <i className={IconClasses(link.icon)}></i>
                              </span>
                              <span className={`${ps.className} fs-6 text-capitalize`}>{link.title}</span>
                            </Link>
                            : 
                            <div className="menu-link link-underline link-underline-opacity-0">
                              <span className="d-inline-block pe-2 align-text-bottom">
                                <i className={IconClasses(link.icon)}></i>
                              </span>
                              <span className={`${ps.className} fs-6 text-capitalize`}>{link.title}</span>
                            </div>
                          }
                        </div>
                        {link?.counter?
                          (<span className="position-absolute bottom-50 end-0 badge bg-primary rounded-pill">{link.counter}</span>):
                          ''
                        }
                      </div>
                      <div className="clearfix w-100"></div>
                      {(link.subMenu && link.subMenu.length > 0)?
                      <div className="w-100 ps-2">
                        <ul className="list-unstyled">
                          {link.subMenu.map((subLink, i) => {
                            return (
                              <li key={i} className="d-flex justify-content-between align-items-start p-2">
                                <div className="ms-2 me-auto text-capitalize">
                                  <Link href={subLink.path} className={CheckActiveLink(subLink.path)}>
                                    <span className="d-inline-block pe-2 align-text-bottom">
                                      <i className={IconClasses(subLink.icon)}></i>
                                    </span>
                                    <span className="text-capitalize">{subLink.title}</span>
                                  </Link>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      :''}
                    </li>
                  </>
                )
              })
            }
            
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav;