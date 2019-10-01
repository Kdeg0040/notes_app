(function(exports) {

  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };

  function testNoteObjectReturnsText() {
    var note = new Note("My favourite language is Javascript");
    assert.isTrue(note.text === "My favourite language is Javascript");
  }

  testNoteObjectReturnsText();
})(this);
