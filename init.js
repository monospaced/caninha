//
// Function: setPageElement
// Wikifies a passage into a DOM element.
//
// Parameters:
// id - the id of the element
// title - the title of the passage
// defaultText - text to use if the passage doesn't exist
//
// Returns:
// a DOM element, or null if none with the id exist.
//
// See also:
// <Wikifier>
//

function setPageElement(id, title, defaultText){
  'use strict';
  var place = $(id);
  if (place) {
    removeChildren(place);
    if (tale.has(title)) {
      new Wikifier(place, tale.get(title).text);
    } else {
      new Wikifier(place, defaultText);
    }
  }
}

//
// Function: main
//
// Loads the story from the storage div, initializes macros and
// custom stylesheets, and displays the first passages of the story.
//
// Returns:
// nothing
//

function main(){
  'use strict';
  var styles,
      scripts;
  tale = new Tale();
  document.title = tale.title;
  // process title, subtitle, author passages
  setPageElement('storyTitle', 'StoryTitle', 'Untitled Story');
  if (tale.has('StoryAuthor')){
    $('titleSeparator').innerHTML = '<br />';
    setPageElement('storyAuthor', 'StoryAuthor', '');
  }
  if (tale.has('StoryMenu')){
    $('storyMenu').style.display = 'block';
    setPageElement('storyMenu', 'StoryMenu', '');
  }
  // initialize macros
  for (var macro in macros) {
    if (typeof macro.init === 'function') {
      macro.init();
    }
  }
  // process passages tagged 'stylesheet'
  styles = tale.lookup('tags', 'stylesheet');
  for (var i = 0; i < styles.length; i++) {
    addStyle(styles[i].text);
  }
  // process passages tagged 'script'
  scripts = tale.lookup('tags', 'script');
  for (var n = 0; n < scripts.length; n++) {
    try {
      eval(scripts[n].text);
    } catch(e) {
      window.alert('There is a technical problem with this story ('+scripts[n].title +': '+e.message+'). You may be able '+'to continue reading, but all parts of the story may not '+'work properly.');
    }
  }
  // initialize history and display initial passages
  state = new History();
  state.init();
  console.log('init complete', tale, state);
}
