import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Projects from './Projects'
import Home from './Home';
import Education from './Education';
import Contact from './Contact';
import Logo from './Logo'
import SideNav from './SideNav';

import '../CSS/app.css'

const App = () => {

    return(
<>

<Routes>
<Route index element={<Home/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/education" element={<Education/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="*" element={<Home />} />
</Routes>


<SideNav/>
<Logo/>


</>
    );
    
};

export default App;