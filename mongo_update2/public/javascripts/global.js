// menu data array for filling in info box
var menuData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

	 // Delete menu item link click
    $('#menu table tbody').on('click', 'td a.linkdeleteitem', deleteItem);
});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/menu/menu', function( data ) {
		
		menuData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.id + '</td>';
            tableContent += '<td>' + this.item + '</td>';
			tableContent += '<td>' + this.price + '</td>';
            tableContent += '<td>' + this.course + '</td>';
			tableContent += '<td>' + this.vegetarian + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteitem" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#menu table tbody').html(tableContent);
    });
};

// Delete menu item
function deleteItem(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this menu item?');

    // Check confirmation
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/menu/deleteitem/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};