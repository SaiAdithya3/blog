import React, { useState, useEffect } from 'react'

import Link from 'next/link';
import { getCategories } from '../services';

 

const Header = () => {
    const [categories, setCategoreis] = useState([]);

    useEffect(()=> {
      getCategories()
      .then((newCategories) => setCategoreis(newCategories))
    },[]);
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        Sri
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                <Link href="/about">
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            About Me
                        </span>
                </Link>
                <Link href="/contact">
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            Contact us
                        </span>
                </Link>
                {categories.map((category)=> (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header