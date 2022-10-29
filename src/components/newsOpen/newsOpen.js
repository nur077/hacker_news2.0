import React from 'react';
import Header from "../background/Header";

const ActiveNewsPage = (props) => {
  return (
    <>
      <div class='card'>
     <p class='black'>iOS & iPadOS 16.2 Betas Overhaul Home App Architecture With Improved Performance</p>
        <div class='newDiv'>
          <div class="newDiv-sm">
            <p>user1</p>
            <p>26.10.22 Updated 4:00</p>
          </div>
          <div id='right'>
            <i class="fa fa-comment"></i>
          </div>
        </div>
        <a href="https://www.macrumors.com/2022/10/25/home-app-architecture-update-ios-16-2/">link to website</a>
    </div>
    <div class='comment'>
        <p>Comments: 2</p>
        <p>user1</p>
        <div class='newDiv-sm'>
         <p>comment</p>
        </div>
        <p>user2: comment</p>
    </div>
    <footer>
       @ Hacker News 2022
    </footer>
    
    <div class='foot'>
       @ Hacker News 2022
    </div>
    </>
  );
};

export default ActiveNewsPage;