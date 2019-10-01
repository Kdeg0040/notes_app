(function(exports) {
  function NoteList() {
    this.all = [];
  };

  NoteList.prototype.add = function(noteText) {
    var newNote = new Note(noteText);
    this.all.push(newNote)
  }

  exports.NoteList = NoteList;
})(this);
