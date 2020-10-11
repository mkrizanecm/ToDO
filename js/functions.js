
$(document).ready(function () {
    $(function() {
        $('#time').timepicker({
            timeFormat: 'HH:mm',
            interval: 60,
            dynamic: true,
            dropdown: true,
            scrollbar: true
        });
    });

    $("#insert-task").click(function(){
        var taskName = $("#task").val();
        var reminder = $("#time").val();

        if (taskName == '' || taskName == null) {

        }

        $("#task-list").append('<li class="list-group-item list-group-item-primary">' + taskName + '</li>');
    });
});  

function addTask() {
    

}