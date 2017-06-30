/**
 * Created by nggadas on 16/04/17.
 */

function activitiesModal() {
    // Get the modal
    var modal = document.getElementById('activityModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-activity")[0];

    openModal();

    // When the user clicks the button, open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function placesModal() {
    // Get the modal
    var modal = document.getElementById('placesModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-places")[0];

    openModal();

    // When the user clicks the button, open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function groupsModal() {
    // Get the modal
    var modal = document.getElementById('groupModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-group")[0];

    openModal();

    // When the user clicks the button, open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function peopleModal() {
    // Get the modal
    var modal = document.getElementById('peopleModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-people")[0];

    openModal();

    // When the user clicks the button, open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function checkMark() {
    document.getElementsByClassName('add-btn').innerHTML = '&#10004;';
}

function activityCreated() {
    alert("Activity Created!")
}

function groupCreated() {
    alert("Group Created!")
}

function feedbackAlert() {
    alert("Your request has been sent, You will be notified with an update.");
}