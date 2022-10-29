import cn from 'classnames';
import React from 'react';
import '../Footer/footer.css';

const Header = () => {
  return(
    //<p className='white container'>Hacker News</p>
    <p className={cn("white", "container")}>Hacker News</p>
  )
}

export default Header;
