(function(exports) {
  function testNoteObjectReturnsText() {
    var note = new Note("My favourite language is Javascript");

    if (note.text !== "My favourite language is Javascript") {
      throw new Error("No text found")
    }
  }

  testNoteObjectReturnsText();
})(this);
