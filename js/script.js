const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

const titleClickHandler = function(event){
  event.preventDefault();
  const articles = document.querySelectorAll(optArticleSelector);
  const links = document.querySelectorAll('.titles a');
  const clickedElement = this;
  for (let link of links) {
    link.classList.remove('active');
  }
  clickedElement.classList.add('active');
  for (article of articles) {
    article.classList.remove('active');
  }
  const href = clickedElement.getAttribute('href');
  const hrefWithNoHashtag = href.replace('#', '');
  const correctArticle = document.getElementById(hrefWithNoHashtag);
  correctArticle.classList.add('active')
}

function generateTitleLinks(){
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for (article of articles) {
    const title = article.querySelector(optTitleSelector).innerHTML;
    const id = article.getAttribute('id');
    const linkHTML = '<li><a href="#' + id + '"><span>' + title + '</span></a></li>';
    html = html + linkHTML;
  }
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = html;
}
generateTitleLinks();
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}