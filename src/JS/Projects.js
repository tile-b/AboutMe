import React from "react";
import '../CSS/projects.css'

const Projects = () => {
    const menuItems = [
        { id: 1, text: 'In Progress', icon: '\uf015' },
        { id: 2, text: 'Coming soon', icon: '\uf015' },
        { id: 3, text: 'In Progress', icon: '\uf015' },
        { id: 4, text: 'In Progress', icon: '\uf015' },
        { id: 5, text: 'In Progress', icon: '\uf015' },
        { id: 6, text: 'In Progress', icon: '\uf015' }
      ];

    return(
<>
<div className="centriran">
<ul>
      {menuItems.map(item => (
        <li key={item.id} style={{ '--i': item.id }} data-icon={item.icon}>
          <a href="#">{item.text}</a>
        </li>
      ))}
    </ul>
</div>
</>
    )
    }
    export default Projects