import React from "react";
import Link from 'next/link';
import { Press_Start_2P } from "next/font/google";
const ps = Press_Start_2P({ weight: "400", subsets: ["latin", "latin-ext"] });

const IconClasses = (icon) => {
  return "fs-5 bi bi-"+icon+"";
}