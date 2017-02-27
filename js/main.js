// Listener for form submit
document.getElementById('myform').addEventListener('submit',savebookmark);

function savebookmark(e){


// Get form values
var sitename = document.getElementById('sitename').value;
var siteurl = document.getElementById('siteurl').value;
//
// if(!validateform(sitename,siteurl)){
//     return false;
// }


var bookmark =
{
  name : sitename,
  url : siteurl
}

// Local Storage Test
// localStorage.setItem('test','sunny khurana');
// console.log(localStorage.getItem('test'));
// localStorage.removeItem('test');
// console.log(localStorage.getItem('test'));

// Test if bookmarks is null
if(localStorage.getItem('bookmarks')===null){

// initialize array
var bookmarks = [];

// add to array
bookmarks.push(bookmark);

// set to localStorage
localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}else {
  // get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Add  bookmark to array
  bookmarks.push(bookmark);

    // re-set back to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

}

//Prevent form from Submitting
e.preventDefault();

// re-set back to localStorage
localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}




// Delete bookmarks
function deletebookmark(url){
  // console.log(url);
  //Get bookmarks from LocalStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Loop through bookmarks
  for(var i = 0;i<bookmarks.length;i++){
    if(bookmarks[i].url==url){
      // Remove From Splice
      bookmarks.splice(i,1);
    }
  }

  // re-set back to localStorage
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

  // refetch the bookmarks
  fetchbookmarks();



}

// Fetch bookmarks
function fetchbookmarks()
{
   // get localmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // get output id
    var bookmarksresults = document.getElementById('bookmarksresults');

    // build output
    bookmarksresults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
      var name = bookmarks[i].name;
      var url = bookmarks[i].url;

      bookmarksresults.innerHTML += '<div class="well">'+
                                     '<h3>'+name+
                                      '<a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
                                      '<a onclick="deletebookmark(\''+url+'\')"  class="btn btn-danger"  href="#">Delete</a>  ' +
                                      '</h3>'+
                                      '</div>';

    }
}


// function validateform()
// {
//
//   // for validation
//   if(!sitename || !siteurl){
//     alert('please fill the form');
//     return false;
//   }
//
//   var expression = https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&;
//   var regex = new RegExp(expression);
//
//   if(!siteurl.match(regex)){
//     alert('please use a Valid form');
//     return false;
//   }
//
// return true;
//
// }
