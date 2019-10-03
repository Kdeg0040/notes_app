(function(exports) {
  function SingleNoteView(noteObject) {
    this.notetext = noteObject.text
  }

  SingleNoteView.prototype.html = function() {
    return ("<div>" + this.notetext + "</div>");
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
