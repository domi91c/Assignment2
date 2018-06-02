$(function(){

    $("#teams-menu").on("click",function(event){
        event.preventDefault();

        $.ajax({
            url: "http://localhost:8081/teams",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Teams</h3>").append(JSON.stringify(data));
        });
    });

    $("#employees-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "http://localhost:8081/employees",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Employees</h3>").append(JSON.stringify(data));
        });
    });

    $("#projects-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "http://localhost:8081/projects",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Projects</h3>").append(JSON.stringify(data));
        });
    });

    $("#positions-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "http://localhost:8081/positions",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Positions</h3>").append(JSON.stringify(data));
        });
    });
});