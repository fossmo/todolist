$(document).ready(function(){

  function Task(description, minutes) {
      var self = this;
      self.description = ko.observable(description);
      self.minutes = ko.observable(minutes);
  };
  
  function TasksViewModel() {
      var self = this;
  
      self.tasks = ko.observableArray([
        new Task("Forstå hvordan knockoutjs fungerer.", "25"),
        new Task("Spise lunsj", "60")
      ]);
  
      self.totalMinutes = ko.computed(function(){
        var total = 0;
        $.each(self.tasks(), function(){ total += parseInt(this.minutes()) })
        return total;
      });
  
      self.removeTask = function(task) { self.tasks.remove(task) };
  };
  
  var tasksViewModel = new TasksViewModel();
  ko.applyBindings(tasksViewModel);
  
  $('#addTask').click(function(){
    if(($('#inputDescription').val()) && ($('#inputMinutes').val()))
    {
      tasksViewModel.tasks.push(new Task($('#inputDescription').val(),$('#inputMinutes').val()));
      $('#inputDescription').val('');
      $('#inputMinutes').val('');
    };
  });

}); 

