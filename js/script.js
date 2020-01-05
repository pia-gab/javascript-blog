{
  const templates = {
    articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
    articleAuthor: Handlebars.compile(document.querySelector('#template-article-author').innerHTML),
    tagCloudLink: Handlebars.compile(document.querySelector('#tagCloudLink').innerHTML),
    tagAuthorLink: Handlebars.compile(document.querySelector('#tagAuthorLink').innerHTML),
  };

  const opts = {
    selectors: {
      Article: '.post',
      Title: '.post-title',
      TitleList: '.titles',
      ArticleTags: '.post-tags .list',
      ArticleAuthor: '.post-author',
      AuthorsList: '.list.authors',
    },
    tagSize: {
      CloudClassCount: 5,
      CloudClassPrefix: 'tag-size-',
    },

  };
  //------------------------------------------------------------------------------------------
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    const activeLinks = document.querySelectorAll('.titles a.active');
      for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
      }
    clickedElement.classList.add('active');

    const articles = document.querySelectorAll(opts.selectors.Article);
    for (article of articles) {
      article.classList.remove('active');
    }
    
    const href = this.getAttribute('href');
    const hrefWithNoHashtag = href.replace('#', '');
    const correctArticle = document.getElementById(hrefWithNoHashtag);
    correctArticle.classList.add('active')
  }
  function generateTitleLinks(customSelector = '') {
    const titleList = document.querySelector(opts.selectors.TitleList);
    titleList.innerHTML = '';
    let html = '';
    const articles = document.querySelectorAll(opts.selectors.Article + customSelector);
    for (let article of articles) {
      const articleID = article.getAttribute('id');
      const articleTitle = article.querySelector(opts.selectors.Title).innerHTML;
      const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
      html = html + linkHTML;
    }
    titleList.insertAdjacentHTML('afterbegin', html);
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();

  function calculateTagsParams(tags) {
    const parms = {
      max: 0,
      min: 999999
    };
    for (let tag in tags) {
      parms.max = Math.max(tags[tag], parms.max);
      parms.min = Math.min(tags[tag], parms.min);
    }
    return parms;
  }
  function calculateTagClass(count, params) {

    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor(percentage * (opts.tagSize.CloudClassCount - 1) + 1);

    const tagClassResult = opts.tagSize.CloudClassPrefix + classNumber;
    return tagClassResult;
  }
  function generateTagLinks() {
    let allTags = {};
    const articles = document.querySelectorAll(opts.selectors.Article);
    for (let article of articles) {
      const tagWrapper = article.querySelector(opts.selectors.ArticleTags);
      let html='';
        const dataTag = article.getAttribute('data-tags');
        const tagsArray = dataTag.split(' ');
        for (let tag of tagsArray) {
          const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + ', </a></li>';
          html = html + linkHTML;
          if (!allTags.hasOwnProperty(tag)) {
            allTags[tag] = 1;
          } else {
            allTags[tag]++;
          }
        }
        tagWrapper.insertAdjacentHTML('afterbegin', html);
      }
    const tagList = document.querySelector('.tags');
    const tagsParams = calculateTagsParams(allTags);
    //console.log(tagsParams);
    let allTagsHTML = '';
    for (let tag in allTags) {
      allTagsHTML += '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '">' + tag + '</a></li>';
    }
    tagList.innerHTML = allTagsHTML;
  }

  generateTagLinks();

  const tagClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const tag = href.replace('#tag-', '');
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    for (let activeTag of activeTags) {
      activeTag.classList.remove('active');
    }
    const tags = document.querySelectorAll('a[href^="#tag-' + href + '"]');
    for (let singleTag of tags) {
      singleTag.classList.add('active');
    }
    generateTitleLinks('[data-tags~="' + tag + '"]'); 
  }
  function addClickListenersToTags(){
    const tagLinks = document.querySelectorAll('.post-tags li a');
    for (let tagLink of tagLinks) 
    {
      tagLink.addEventListener('click', tagClickHandler);
    }
  }

  addClickListenersToTags();

  function generateAuthors() {
    let allAuthors = {};

    const articles = document.querySelectorAll(opts.selectors.Article);
    const authorList = document.querySelector(opts.selectors.AuthorsList);
    for (let article of articles) {
      const articleAuthor = article.querySelector(opts.selectors.ArticleAuthor);
      const dataAuthor = article.getAttribute('data-author');
      if (!allAuthors.hasOwnProperty(dataAuthor)) {
        allAuthors[dataAuthor] = 1;
      } else {
        allAuthors[dataAuthor]++;
      }
      const authorObj = {
        id: dataAuthor,
        title: dataAuthor,
      };
      const linkAuthor = templates.articleAuthor(authorObj);
      articleAuthor.insertAdjacentHTML('beforeend', linkAuthor);
    }
    const allAtuhorsData = {
      tags: [],
    };
    let linkAuthor = '';
    for (let author in allAuthors) {
      allAtuhorsData.tags.push({
        name: author,
        count: allAuthors[author],
      });

      linkAuthor = templates.tagAuthorLink(allAtuhorsData);
    }
    authorList.insertAdjacentHTML('afterbegin', linkAuthor);
  }

  generateAuthors();


  function authorClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    //console.log(href);
    const activeAuthorLinks = document.querySelectorAll('a.active[href^="' + href + '"]');
    for (let activeAuthor of activeAuthorLinks) {
      activeAuthor.classList.remove('active');
    }
    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
    //console.log(authorLinks);
    for (let authorLink of authorLinks) {
      authorLink.classList.add('active');
    }
      generateTitleLinks('[data-author="' + href + '"]');
    
  }

  function addClickListListenersToAuthors() {
    const authors = document.querySelectorAll('.authors li a');
    for (let author of authors) {
      author.addEventListener('click', authorClickHandler);
    }
  }

  addClickListListenersToAuthors();
}