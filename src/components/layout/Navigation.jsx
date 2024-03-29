import { Link } from "react-router-dom";

function Navigation () {
  const navigation = [{title:"Home", href:""}, {title:"Profile", href:"profile"},
   {title:"Contact", href:"contact"}, {title:"Blog", href:"blog"}]
   
    return (  
<nav>
  <ul className="flex mr-8 my-3">
    {navigation.map((list) => (
      <li key={list.href}>
        <Link className="mr-4 text-white hover:border-b hover:border-white" 
        to={`/${list.href}`}>{list.title}</Link>
      </li>
    ))}
  </ul>
</nav>

    );
}

export default Navigation ;