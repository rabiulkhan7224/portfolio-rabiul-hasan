"use client"
import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
export default function Navbar() {

    const [isSrolled,setIsScrolled]=useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const NavItems= [
        {name:"Home", href:"#" },
        {name:"About", href:"#about" },
        {name:"Skills", href:"#skills" },
        {name:"Projects", href:"#projects" },
        {name:"Education", href:"#education" },
        {name:"Contact", href:"#contact" },
    ]

  return (
    <>
<motion.header>
    <div className="container mx-auto px-4">
    <nav className='hidden md:flex items-center space-x-1'>
{
    NavItems.map((item, index)=>(
        <div  key={index}>

            <Button>
                {item.name}
            </Button>
        </div>
    ))
}
    </nav>
    </div>
</motion.header>

    </>
  )
}
