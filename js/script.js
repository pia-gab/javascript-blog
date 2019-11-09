/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }

  /* [DONE] add class 'active' to the clicked link */

    this .classList.add('active');
    console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let _activeArticle of activeArticles){
    activeLink.classList.remove('active');
    }

  /* get 'href' attribute from the clicked link */

    const articleSelector = a.getAttribute(href);

  /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(href);

  /* add class 'active' to the correct article */
    this .targetArticle.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }