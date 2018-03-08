// Table data array for filling in info box
var tableData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTables();

	 // Delete menu item link click
    $('#tables table tbody').on('click', 'td a.linkclicktable', selectTable);
});


function populateTables() {

    // Empty content string
    var tableInfo = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/tables/tables', function( data ) {
		
		tableData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableInfo += '<tr>';
            tableInfo += '<td>' + this.id + '</td>';
            tableInfo += '<td>' + this.name + '</td>';
            tableInfo += '<td><a href="#" class="linkclicktable" rel="' + this._id + '">Select</a></td>';
            tableInfo += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#tables table tbody').html(tableInfo);
    });
};

// Delete menu item
function selectTable(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to select this table?');

/*    // Check confirmation
    if (confirmation === true) {

	       $.ajax({
            type: 'GET',
            url: '/counter/selecttable/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }
         
        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }
*/
};