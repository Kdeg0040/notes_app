(function(exports) {

  function testNoteObjectReturnsText() {
    var note = new Note("My favourite language is Javascript");
    assert.isTrue(note.text === "My favourite language is Javascript");
  }

  function testNoteObjectHasAnID () {
    nl = new NoteList();
    nl.add("Bananas are typically yellow");
    assert.isTrue(nl.all[0].id === 0);
  }

  testNoteObjectReturnsText();
})(this);
