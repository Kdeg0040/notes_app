(function(exports) {
  function NoteController() {
    var notelist = new NoteList();
    this.notelist = notelist
  };

  NoteController.prototype.addNote = function(noteText) {
    this.notelist.add(noteText);
    var notelistvew = new NoteListView();
    var htmllist = notelistview.html(this.notelist)

    document.getElementById("app").innerHTML = htmllist
  }

  exports.NoteController = NoteController;
})(this);
