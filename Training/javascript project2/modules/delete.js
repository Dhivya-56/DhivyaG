function onDelete(td) {
  if (
  confirm("Do you want to delete this data")) {
    row = td.parentElement.parentElement;
     document.getElementById("Table").deleteRow(row.rowIndex);
  }
 
}
  
   