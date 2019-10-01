(function(exports) {
  function noteListEmptyArrayOnInitialization() {
    var notelist = new NoteList();
    assert.isTrue(notelist.all.length === 0);
  }

  noteListEmptyArrayOnInitialization();

  function addNoteToNoteListArray() {
    var notelist = new NoteList();
    notelist.add("My favourite language is Ruby");
    assert.isTrue(notelist.all[0].text === "My favourite language is Ruby")
  }

  addNoteToNoteListArray();
})(this);
