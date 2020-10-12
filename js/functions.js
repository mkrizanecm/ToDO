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

        taskId = $('[id^=task_]').length + 1;
        $("#main").append(
            '<div id="task_' + taskId + '"' + 'class="row justify-content-center">' +
                '<div class="col-7">' +
                    '<li id="taskitem_' + taskId + '"' + 'class="list-group-item list-group-item-primary">' + taskName + '</li>'+
                '</div>' +
                '<div class="col-2">' +
                    '<div class="button-group">' +
                        '<button id="finish_'  + taskId + '"' + 'type="button" class="btn btn-success btn-lg finish">Finish</button>' +
                        '<button id="remove_'  + taskId + '"' + 'type="button" class="btn btn-danger btn-lg remove">Remove</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '</br>'
        );

        $("#insert-task").blur();

        $(".finish").on("click", function() {
            taskId = this.id.substr(this.id.indexOf('_') + 1);
            
            $('#taskitem_' + taskId).addClass('list-group-item list-group-item-success');
            $('#taskitem_' + taskId).wrap("<strike>");

            $("#finish_" + taskId).prop('disabled', true);
            $("#finish_" + taskId).blur();
        });
    
        $(".remove").on("click", function() {
            taskId = this.id.substr(this.id.indexOf('_') + 1);
            $('#task_' + taskId).remove();
        });
    });
});  
