function fetchJsonData(selectedIdentifier) {
    //Read JSON File here.
    var myArr = [];
    $.getJSON('data.json', function (data) {
        var identifierDropDowns = '';   //variable for holding dropdowns HTML.
        var output = '';    //variable to store table HTML data.
        identifierDropDowns = jQuery.map(data, function (val, index) {
            if (val.identifier === selectedIdentifier) {
                output += '<tr>';
                output += '<td>' + val.title + '</td>';
                output += '<td>' + val.accesslevel + '</td>';
                output += '<td>' + val.accrualperiodicity + '</td>';
                output += '<td>' + val.contactpoint_type + '</td>';
                output += '<td>' + val.contactpoint_fn + '</td>';
                output += '<td>' + val.contactpoint_hasemail + '</td>';
                output += '<td>' + val.description + '</td>';
                output += '<td>' + val.identifier + '</td>';
                output += '<td>' + val.modified + '</td>';
                output += '<td>' + val.publisher_type + '</td>';
                output += '<td>' + val.publisher_name + '</td>';
                output += '<td>' + val.spatial.type + '</td>';
                output += '<td>' + val.spatial.coordinates + '</td>';
                output += '<td>' + val.temporal + '</td>';
                output += '</tr>';
            }
        });
        $('#data_table').removeClass('hidden').find('.jsonBody').html(output);
    });
}

function filterByIdentifier(selector) {
    fetchJsonData(selector);     //Load data based on selected identifier value.
}

function fetchIdentifiersFromJson() {
    var identifierDropDowns = '';   //variable for holding dropdowns HTML.
    $.getJSON('data.json', function (data) {
        identifierDropDowns = jQuery.map(data, function (data, index) {
            return '<option value="' + data.identifier + '">' + data.identifier + '</option>';
        });
        $('#identifierDropDowns').append(identifierDropDowns);
    });
}

fetchIdentifiersFromJson(); //Display all identifiers in dropdowns.