// menu data array for filling in info box
var orderData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateOrder();

	 // Delete menu item link click
    $('#order table tbody').on('click', 'td a.linkdeleteitem', deleteOrderItem);
});

// Functions =============================================================

// Fill table with data
function populateMenu() {

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
            tableContent += '<td><a href="#" class="linkdeleteitem" rel="' + this._id + '">Select</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#menu table tbody').html(tableContent);
    });
};


// Delete menu item
function deleteOrderItem(event) {

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
            populateOrder();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};