(function(exports) {
  function singleNoteObjectReturnsStringInHtmlDivHeaders() {
    var note = new Note("NoteOne")
    var singlenoteview = new SingleNoteView(note);
    assert.isTrue(singlenoteview.html() === "<div>NoteOne</div>")
  }

  singleNoteObjectReturnsStringInHtmlDivHeaders();
})(this);
