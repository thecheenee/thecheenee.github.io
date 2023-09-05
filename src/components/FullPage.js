import React from "react";
import Image from "next/image";
import Link from "next/link";

const FullPage = ({children}) => {
  return (
    <section>
      <div className="relative flex min-h-screen min-w-full">
        {children}
      </div>
    </section>
  )
}

export default FullPage