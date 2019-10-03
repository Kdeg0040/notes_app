(function(exports) {
  function NoteList() {
    this.all = [];
  };

  NoteList.prototype.add = function(noteText) {
    var newNote = new Note(noteText);
    newNote.setId(this.all.length);
    this.all.push(newNote)
  }

  exports.NoteList = NoteList;
})(this);
