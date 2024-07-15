import React from "react";
import '../CSS/home.css'

const Home = () => {
    const menuItems = [
        { id: 1, text: 'Home', icon: '\uf015' },
        { id: 2, text: 'Home2', icon: '\uf015' },
        { id: 3, text: 'Home3', icon: '\uf015' },
        { id: 4, text: 'Home4', icon: '\uf015' },
        { id: 5, text: 'Home5', icon: '\uf015' },
        { id: 6, text: 'Home6', icon: '\uf015' }
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
    export default Home