var partei = new Object();

// removes the content from the given element
partei.clearContainer = function(container) {
	container.innerHtml="";
}

// adds the data table to the given element
partei.addTable = function(container, jsonArray) {
	var tbl = document.createElement('table');
	tbl.id = "dataTable";

	var tblBody = document.createElement('tbody');
	tbl.appendChild(tblBody);

	// create table head
	var tblHeadRow = tblBody.insertRow();
	$.each(['Partei', 'Spend in €', 'Spender', 'Eingang der Spende', 'Eingang der Anzeige, Drucksache'], function() {
		var tblHeadCell = document.createElement('th');
		tblHeadRow.appendChild(tblHeadCell);
		tblHeadCell.appendChild(document.createTextNode(this.toString()));
	});

	// create data rows
	$.each(jsonArray, function(rowIndex, jsonObject) {
		var tblRow = tbl.insertRow();
		// create cells
		$.each(jsonObject, function(cellIndex, jsonValue) {
			var tblCell = tblRow.insertCell();
			tblCell.appendChild(document.createTextNode(jsonValue.toString()));
		});
	});
	container.append(tbl);
}
