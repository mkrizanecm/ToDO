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

        $("#task").css({"border": ''});
        $("#time").css({"border": ''});

        if ((taskName == '' || taskName == null) && (reminder != '' && reminder != null && !reminder.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/))) {
            $("#notification").text('Add your task and enter valid time if you want a reminder.');
            $("#task").css({"border": '#FF0000 1px solid'});
            $("#time").css({"border": '#FF0000 1px solid'});
            return;
        }

        if (taskName == '' || taskName == null) {
            $("#notification").text('Add your task.');
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
            '<div id="task_"' + taskName + 'class="row justify-content-center">' +
                '<div class="col-7">' +
                    '<li class="list-group-item list-group-item-primary">' + taskName + '</li>'+
                '</div>' +
                '<div class="col-2">' +
                    '<div class="button-group">' +
                        '<button id="finish-task" type="button" class="btn btn-success btn-lg">Finish</button>'+
                        '<button id="remove-task" type="button" class="btn btn-danger btn-lg">Remove</button>'+
                    '</div>' +
                '</div>'+
            '</div>' +
            '</br>'
        );

        $("#insert-task").blur();
    });





});  
