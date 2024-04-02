const blogs = document.querySelectorAll('.post');
const postContent = document.querySelector('.post-content');
console.log(postContent);

blogs.forEach((blog) => {
  blog.addEventListener('click', () => {
    const fullContent = blog.querySelector('.post-full-content');
    postImg = fullContent.querySelector('img').outerHTML;
    postTitle1 = fullContent.querySelectorAll('h2')[0].outerHTML;
    postTitle2 = fullContent.querySelectorAll('h2')[1].outerHTML;
    postParagraph1 = fullContent.querySelectorAll('p')[0].outerHTML;
    postParagraph2 = fullContent.querySelectorAll('p')[1].outerHTML;

    postContent.innerHTML =
      postImg + postTitle1 + postParagraph1 + postTitle2 + postParagraph2;
  });
});
