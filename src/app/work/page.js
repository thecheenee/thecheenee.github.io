import React from "react";
import { Nav, FullPage, PageBottom } from "@/common";
import About from './about';
import Timeline from './timeline';
import Projects from './projects';
import Skills from './skills';

export default function WorkPage () {
  return (
    <>
      <main>
        <Nav />
        <FullPage>
          <About />
        </FullPage>
        <FullPage>
          <Timeline />
        </FullPage>
        <FullPage>
          <Projects />
        </FullPage>
        <FullPage>
          <Skills />
        </FullPage>
        <PageBottom pageName={'work'} />
      </main>
    </>
  )
}