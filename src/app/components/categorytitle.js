import React from 'react'
import Head from "next/head";

/*

 <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>


*/

const CategoryTitle = ({title}) => {
  return (

       
      <span className='text-[24px] mb-5 font-chivo'>{title}</span>

    
  )
}

export default CategoryTitle