(function(exports) {
  function correctHTMLOutputtedFromNotelist() {
    var notelist = new NoteList()
    notelist.add("NoteOne")
    notelist.add("NoteTwo")
    notelistview = new NoteListView();
    assert.isTrue(notelistview.html(notelist) ===
    "<ul><li><div>NoteOne</div></li><li><div>NoteTwo</div></li></ul>")
  }

  correctHTMLOutputtedFromNotelist()
})(this);
