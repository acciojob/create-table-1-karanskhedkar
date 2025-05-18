function insert_Row() {
    //Write your code here
	const mytable=document.getElementById("sampleTable");
	const newRow=document.createElement("tr");
	newRow.innerHTML="<td>New Cell1</td><td>New Cell2</td>"
	mytable.childNodes[1].prepend(newRow)
}
