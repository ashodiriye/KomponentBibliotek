import React from 'react';

function Navbar({links}) {
   return (
  <div>
    <nav>
        <ul >
            {links.map(link => (
                <li key={link.path}>
                    <a href={link.path}>{link.label}</a>
                </li>
            ))}
        </ul>
    </nav>
  </div>
 
   );

};

export default Navbar;