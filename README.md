<h1>Social media app</h1>
<h2>A BeReal website copy</h2>
<img src='https://github.com/w-i-l/social-media-app/assets/65015373/8aad2e6e-3f5b-4e0e-979f-a7b3a0cfc99c'>



<br>
<hr>
<h2>About it</h2>

<p>This project is a template for a simply social media website built using:</p>
<ul style='list-style:none; display:flex; gap:10px;'>
    <li><img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'></li>
    <li><img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'></li>
    <li><img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'></li>
    <li><img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'></li>
    <li><img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'></li>
</ul>

<br>
<hr>
<h2>How to use it</h2>

<p>Create an account and the post! Search for your friends and see the lattest photo.</p>


<br>
<hr>
<h2>Tech specs</h2>

<p>For login sessions I saved the user's id in cookies. I also implemented a middleware that checks if you are curently logged in and if not redirects you to the sign in page.</p>

<p>The users along with their posts are saved locally in a 2 json files. </p>

<p>All the front-end stuffs are located in <a href='https://github.com/w-i-l/social-media-app/tree/main/public'> views folder</a>.</p>

<p>The structure for every view has the following structure:</p>
<ul>
    <li>view.ejs - contains the content that needs to be randered for the client.</li>
    <li>view.js - is the router used to handle the <code>/view</code> route.</li>
    <li>views.cjs - contains functions only used for that specific <code>.ejs</code> file.</li>
    <p>All the files from above are located in the same directory <code>view</code>.</p>
    <li>/public/view.js - will contains the code that runs on the front-end of the page.</li>
</ul>