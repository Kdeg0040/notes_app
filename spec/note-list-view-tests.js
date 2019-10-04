(function(exports) {
  function correctHTMLOutputtedFromNotelist() {
    var notelist = new NoteList()
    notelist.add("NoteOne")
    notelist.add("NoteTwo")
    notelistview = new NoteListView();
    assert.isTrue(notelistview.html(notelist) ===
    "<ul><li><div><a href='#notes/0'>NoteOne<a/></div></li><li><div><a href='#notes/1'>NoteTwo<a/></div></li></ul>")
  }

  function listViewOnlyShowsTheFirst20Characters() {
    var notelist = new NoteList()
    notelist.add("The substring() method returns the part of the string between the start and end indexes, or to the end of the string.")
    assert.isTrue(notelistview.html(notelist) ===
    "<ul><li><div><a href='#notes/0'>The substring() meth<a/></div></li></ul>")
  }
  correctHTMLOutputtedFromNotelist()
  listViewOnlyShowsTheFirst20Characters()
})(this);
