export function deleteRow(btn){
    let row = btn.parentNode.parentNode;

    let confirmation = confirm("Are you sure you want to delete");

    if (confirmation) {
      row.parentNode.removeChild(row);
    }

}