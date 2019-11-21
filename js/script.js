const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',
optArticleTagsSelector = '.post-tags .list'
optArticleAuthorSelector = '.post-author';
optTagsListSelector = '.tags.list';

const titleClickHandler = function(event){
  event.preventDefault();
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles)
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

function generateTitleLinks(customSelector = ''){
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for (let article of articles) {
    const title = article.querySelector(optTitleSelector).innerHTML;
    const id = article.getAttribute('id');
    const linkHTML = '<li><a href="#' + id + '"><span>' + title + '</span></a></li>';
    html = html + linkHTML;
  }
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = html;
}
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
  for (let article of articles) {
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '' ;
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
    for (let articleTag of articleTagsArray) {
      /* generate HTML of the link */
      const liTagHTML = '<li><a href="#tag-' + articleTag + '">' + articleTag + '</a></li>';
      /* add generated code to html variable */
      html = html + liTagHTML;
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags.hasOwnProperty(articleTag)){
        /* [NEW] add generated code to allTags array */
        allTags[articleTag] = 1;
      } else {
        allTags[articleTag]++;
      }
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
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
}
generateTags();

    const tagClickHandler = function(event){
      event.preventDefault();
      const articleTag = document.querySelectorAll(optArticleTagSelector);
      const tagHr = articleTag.querySelectorAll('li a');
      const activeTags = tagHr.querySelectorAll('a.active[href^="#tag-"]');
      const clickedElement = this;
      const tag = tagHr.replace('#tag-', '');
      const href = clickedElement.getAttribute('href');
      for (let activeTag of activeTags) {
        activeTag.classList.remove('active');
      }
      const tags = document.querySelectorAll('a[href^="#tag-' + href + '"]');
      for (let singleTag of tags) {
        singleTag.classList.add('active');
      }
      /* execute function "generateTitleLinks" with article selector as argument */   
  }
  //generateTitleLinks('[data-tags~="' + tag + '"]')
  function addClickListenersToTags(){
  /* find all links to tags */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each link */
    for (let tagLink of tagLinks) {
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();

function generateAuthors(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  let html = '' ;
  for (let article of articles) {
    /* find names wrapper */
    const nameWrapper = article.querySelector(optArticleAuthorSelector);
    const nameWithBy = nameWrapper.innerHTML;
    const nameWithoutBy = nameWithBy.replace('by ', '');
    const nameWithoutSpaces = nameWithoutBy.replace(' ', '');
    const nameHTML = '<li><a href="#' + nameWithoutSpaces + '">' + nameWithoutBy +'</a></li>'
    html = html + nameHTML;
    if(!nameHTML.hasOwnProperty(article)){
      /* [NEW] add generated code to allTags array */
      nameHTML[article] = 1;
    } else {
      nameHTML[article]++;
      console.log(nameHTML)
    }
    // const listAuthors= tagWrapper.querySelector(optArticleTagsSelector);
  /* END LOOP: for every article: */
  }
  const listAuthors = document.querySelector('.list.authors');
  listAuthors.innerHTML = html;
}
generateAuthors ()

function authorClickHandler(event){
//   /* prevent default action for this event */
event.preventDefault();
//   /* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement = this;
//   /* make a new constant "href" and read the attribute "href" of the clicked element */
const href = clickedElement.getAttribute('href');
//   /* make a new constant "tag" and extract tag from the "href" constant */
//   const author = href.replace('#', '');
//     /* find all tag links with class active */
//   const activeAuthor = author.querySelectorAll('a.active[href^="#"]');
//   /* START LOOP: for each active tag link */
//   for (let activeAuthor of authors) {
//     /* remove class active */
//     author.activeAuthor.remove('active');
//   /* END LOOP: for each active tag link */
//   }
//   /* find all tag links with "href" attribute equal to the "href" constant */
// const equalHref = author.querySelector('href'== href);
//   /* START LOOP: for each found tag link */
// for (equalHref of authors) {
//     /* add class active */
//   authors.equalHref.add('active');
//   /* END LOOP: for each found tag link */
// }
//   /* execute function "generateTitleLinks" with article selector as argument */
//   function generateTitleLinks(customSelector = ''){
//     const article = document.querySelectorAll(optArticleAuthorSelector + customSelector);
//   }
//   generateTitleLinks('[data-tags="' + author + '"]');
}

// function addClickListenersToAuthors(){
  /* find all links to tags */
  // const authorLinks = author.querySelectorAll('a[href="' + href + '"]')
    /* START LOOP: for each link */
  // for (let author of authors) {
  //     /* add tagClickHandler as event listener for that link */
  //     link.addEventListener('click',authorClickHandler);
  //   /* END LOOP: for each link */
  // }
// }
// addClickListenersToAuthors()