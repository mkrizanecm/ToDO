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
            $("#notification").text('Please insert task description.');
            $("#task").css({"border": '#FF0000 1px solid'});
            return;
        } 

        if (reminder != '' && reminder != null && !reminder.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/)) {
            $("#notification").text('Enter valid time for timer.');
            $("#time").css({"border": '#FF0000 1px solid'});
            return;
        }

        $("#notification").text('');


        $("#main").append(
            '<div class="row justify-content-center">' +
                '<div class="col">'+
                    '<li class="list-group-item list-group-item-primary">' + taskName + '</li>'+
                '</div>'+
                '<div class="col-6">'+
                    '<button id="finish-task" type="button" class="btn btn-primary btn-lg">Task done</button>'+
                    '<button id="finish-task" type="button" class="btn btn-primary btn-lg">Remove task</button>'+
                '</div>'+
            '</div>'
        );

        $("#insert-task").blur();
    });
});  
