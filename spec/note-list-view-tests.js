(function(exports) {
  function correctHTMLOutputtedFromNotelist() {
    var notelist = new NoteList()
    notelist.add("NoteOne")
    notelist.add("NoteTwo")
    notelistview = new NoteListView();
    assert.isTrue(notelistview.html(notelist) ===
    "<ul><li><div>NoteOne</div></li><li><div>NoteTwo</div></li></ul>")
  }

  function listViewOnlyShowsTheFirst20Characters() {
    var notelist = new NoteList()
    notelist.add("The substring() method returns the part of the string between the start and end indexes, or to the end of the string.")
    assert.isTrue(notelistview.html(notelist) ===
    "<ul><li><div>The substring() meth</div></li></ul>")
  }
  correctHTMLOutputtedFromNotelist()
  listViewOnlyShowsTheFirst20Characters()
})(this);
