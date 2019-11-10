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
    console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(href);
    console.log(targetArticle);

  /* add class 'active' to the correct article */
    this.targetArticle.add('active');
  }
  
console.log(links);
  

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optArticleSelector);

  /* for each article */

  const articles = titleList;

  let html = '';

  for(let article of articles){
    article.titleList.remove('active');
  }
  console.log(html);
  /* get the article id */

  const articleId = article.getAttributeById(href);

  /* find the title element */

  //a nie jest znaleziony przez query ponizej?

  /* get the title from the title element */

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  /* create HTML of the link */

  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log(linkHTML);

  /* insert link into titleList */
  html = html + linkHTML;

  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();