(function(exports) {
  function correctHTMLOutputtedFromNotelist() {
    var notelist = new NoteList()
    notelist.add("Karlo")
    notelist.add("Tom")
    assert.isTrue(noteListView(notelist) ===
    "<ul><li><div>Karlo</div></li><li><div>Tom</div></li></ul>")
  }

correctHTMLOutputtedFromNotelist()

})(this)