(function(exports) {
  function Note(text) {
    this.text = text
    this.id = null
  };

  Note.prototype.setId = function(index) {
    this.id = index;
  }

  exports.Note = Note;
})(this);
