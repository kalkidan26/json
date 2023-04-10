import { useState, useEffect } from 'react';
import post from '../data.json';

const Form = () => {
   const [posts, setPosts] = useState([]);
     useEffect(() => {
      fetch('../../data.json')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <>
         
            <form className='form'>
               <input name="username" type="text" placeholder="username" />
               <button type="submit">submit</button>
            </form>
         
         <div className="posts-container">
            {posts.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                     <h2 className="post-title">{post.title}</h2>
                     <p className="post-description">{post.description}</p>
                  </div>
               );
            })}
         </div>
      </>
   );
};

export default Form;