function expandBox(boxId) {
    // Hide all boxes first
    let boxes = document.querySelectorAll(".expandable-content");
    boxes.forEach(box => box.style.display = "none");

    // Show the selected box
    document.getElementById("box-" + boxId).style.display = "block";
}
