"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navigation() {
  const pathname = usePathname()
  console.log(pathname)
    const navigation = [{title:"Home", href:"/"}, {title:"Profile", href:"profile"},
    {title:"Contact", href:"contact"}, {title:"Blog", href:"blog"}]
    
     return (  
 <nav>
   <ul className="flex mr-8 my-3">
     {navigation.map((list) => (
       <li key={list.href}>
         <Link className={`mr-4 text-white hover:border-b pb-1.5 hover:border-white ${
    pathname === (list.href === "/" ? "/" : `/${list.href}`)
      ? "active"
      : ""
  }`}   
         href={list.href}>{list.title}</Link>
       </li>
     ))}
   </ul>
 </nav>
     )
}
