(function(exports) {
  function NoteListView() {};

  NoteListView.prototype.html = function(noteList) {
    var listArray = noteList.all;
    var htmlArray = ["<ul>"]
    var targetUrl = window.location.hash = '#notes/'
    for (let i = 0; i < listArray.length; i++) {
      htmlArray.push("<li><div><a href='" + targetUrl + listArray[i].id + "'>" + listArray[i].text.substring(0, 20) + "<a/></div></li>")
    }
    htmlArray.push("</ul>")
    return htmlArray.join("")
  }

  exports.NoteListView = NoteListView;
})(this);
