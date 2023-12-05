//sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
});

//chips
$('.chips').chips();
$('.chips-initial').chips({
    data: [{
        tag: 'Breakfast',
    }, {
        tag: 'Lunch',
    }, {
        tag: 'Dinner',
    }, {
        tag: 'Take away',
    }, {
        tag: 'Urgent',
    }],
});
$('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: 'Add more tags',
});
$('.chips-autocomplete').chips({
    autocompleteOptions: {
        data: {
            'Breakfast': null,
            'Lunch': null,
            'Dinner': null,
            'Take away': null,
            'Urgent': null
        },
        limit: Infinity,
        minLength: 1
    }
});

//date picker
$(document).ready(function(){
    $('.datepicker').datepicker();
});

//dropdown
$(document).ready(function(){
    $('select').formSelect();
});