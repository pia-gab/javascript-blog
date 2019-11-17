const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',
optArticleTagsSelector = '.post-tags .list'
optArticleAuthorSelector = '.post-author';
optTagsListSelector = '.tags.list';

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
function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (article of articles) {
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector).innerHTML;
    /* make html variable with empty string */
    let html = '' ;
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('href');
    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let articleTag of articleTagsArray) {
      /* generate HTML of the link */
      const tagHTML = '<li><a href="#tag-' + html + '"></a></li>'
      /* add generated code to html variable */
      html = html + tagHTML;
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add generated code to allTags array */
        allTags[tags] = 1;
      } else {
        allTags[tag]++;
      }
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    const tag= tagWrapper.querySelector(optArticleTagsSelector);
    tagWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');
  /* create variable for all links html cose*/
  let allTagsHTML = '';
  /* start loop: for each tah in allTags*/
  for (let tag in allTags) {
    /*generate code of a link and add it to allTagsHTML */
    allTagsHTML += tag + '(' + allTags[tag] +')';
  }
  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTagsHTML;
  console.log(allTags);
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
  const activeTag = tag.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (activeTag of tags) {
    /* remove class active */
    tag.activeTag.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
const equalHref = tag.querySelector('href'== href);
  /* START LOOP: for each found tag link */
for (equalHref of tags) {
    /* add class active */
  tags.equalHref.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  function generateTitleLinks(customSelector = ''){
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
  }
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
const tagLinks = tag.querySelectorAll('a[href="' + href + '"]')
  /* START LOOP: for each link */
for (link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}
addClickListenersToTags();

function generateAuthors(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (article of articles) {
    /* find names wrapper */
    const nameWrapper = article.querySelector(optArticleAuthorSelector).innerHTML;
    /* make html variable with empty string */
    let html = '' ;
    /* get tags from data-tags attribute */
    const listAuthors = nameWrapper.getAttribute('href');
    /* generate HTML of the link */
    const nameHTML = '<li><a href="#' + html + '"></a></li>'
      /* add generated code to html variable */
    html = html + nameHTML;
    /* insert HTML of all the links into the tags wrapper */
    const listAuthors= tagWrapper.querySelector(optArticleTagsSelector);
    nameWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
generateAuthors ()

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const author = href.replace('#', '');
    /* find all tag links with class active */
  const activeAuthor = author.querySelectorAll('a.active[href^="#"]');
  /* START LOOP: for each active tag link */
  for (let activeAuthor of authors) {
    /* remove class active */
    author.activeAuthor.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
const equalHref = author.querySelector('href'== href);
  /* START LOOP: for each found tag link */
for (equalHref of authors) {
    /* add class active */
  authors.equalHref.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  function generateTitleLinks(customSelector = ''){
    const article = document.querySelectorAll(optArticleAuthorSelector + customSelector);
  }
  generateTitleLinks('[data-tags="' + author + '"]');
}

function addClickListenersToAuthors(){
  /* find all links to tags */
const authorLinks = author.querySelectorAll('a[href="' + href + '"]')
  /* START LOOP: for each link */
for (author of authors) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click',authorClickHandler);
  /* END LOOP: for each link */
  }
}
addClickListenersToAuthors()