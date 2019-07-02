/*Q.1 : Define a function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any comnination of numbers in the array exculding the largest number can be added up to the equal the largest number in the array, otherwise return the string false;
*/
function arrayAddition(arr) {
	let max = Math.max(...arr);
	let sum = arr.reduce((a,b)=> a+b);
	let res = (sum-max) -  max == 0 ? "TRUE" : "FAlse";
	return res;
}
/*
Question number 2 :
LetterCapitalize(str) take the str param being passed and capitalize the first letter of each word. Words will be seperated by only one space.
*/
function captialize(str) {
	let arr = str.split(" ");
	arr = arr.map(function(v) {
	   let f = v[0].toUpperCase();
	   return f + v.slice(1);
	});
	return arr.join(" ")
}

/*
Question number 3 :
LetterChange(str). Replace by the letter following, like a replace by b and z replaced by a;
then capitalize every vowel; and finally return the string.
*/

var charShift = function(str, amount) {
   // for the reverse process
	if (amount < 0){
		return caesarShift(str, amount + 26);
	}
	var output = '';
	//loop through each element
	for (var i = 0; i < str.length; i ++) {
		var c = str[i];

		// check if it is letter only
		if (c.match(/[a-z]/i)) {
		   // take the character code
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90)) {
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			}
			else if ((code >= 97) && (code <= 122)) {
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
			}

		}
		output += c;

	}
	output = output.replace(/[aeiou]/g, function(l) {
	   return l.toUpperCase();
	})
	return output;

};

// AG Grid Configuration example

var columnDefs = [
    {headerName: "Athlete", field: "athlete", width: 150, filter: 'text'},
    {headerName: "Gold", field: "gold", width: 100, filter: 'number', floatingFilterComponent: NumberFloatingFilter,
        floatingFilterComponentParams:{
            suppressFilterButton:true
        }, filter: NumberFilter
    },
    {headerName: "Silver", field: "silver", width: 100, filter: 'number', floatingFilterComponent: NumberFloatingFilter,
        floatingFilterComponentParams:{
            suppressFilterButton:true
        }, filter: NumberFilter},
    {headerName: "Bronze", field: "bronze", width: 100, filter: 'number', floatingFilterComponent: NumberFloatingFilter,
        floatingFilterComponentParams:{
            suppressFilterButton:true
        }, filter: NumberFilter},
    {headerName: "Total", field: "total", width: 100, filter: 'number', floatingFilterComponent: NumberFloatingFilter,
        floatingFilterComponentParams:{
            suppressFilterButton:true
        }, filter: NumberFilter}
];

var gridOptions = {
    floatingFilter:true,
    columnDefs: columnDefs,
    rowData: null,
    enableFilter: true,
    defaultColDef: {
      floatingFilterComponentParams: {
        debounceMs: 3000
      }
    }
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function NumberFilter() {
}

NumberFilter.prototype.init = function (params) {
    this.valueGetter = params.valueGetter;
    this.filterText = null;
    this.params = params;
    this.setupGui();
};

// not called by ag-Grid, just for us to help setup
NumberFilter.prototype.setupGui = function () {
    this.gui = document.createElement('div');
    this.gui.innerHTML =
        '<div style="padding: 4px;">' +
        '<div style="font-weight: bold;">Greater than: </div>' +
        '<div><input style="margin: 4px 0px 4px 0px;" type="text" id="filterText" placeholder="Number of medals..."/></div>' +
        '</div>';

    var that = this;
    this.onFilterChanged = function() {
        that.extractFilterText();
        that.params.filterChangedCallback();
    };

    this.eFilterText = this.gui.querySelector('#filterText');
    this.eFilterText.addEventListener("input", this.onFilterChanged);
};

NumberFilter.prototype.extractFilterText = function () {
    this.filterText = this.eFilterText.value;
};

NumberFilter.prototype.getGui = function () {
    return this.gui;
};

NumberFilter.prototype.doesFilterPass = function (params) {
    var valueGetter = this.valueGetter;
    var value = valueGetter(params);
    var filterValue = this.filterText;

    if (this.isFilterActive()){
        if (!value) return false;
        return Number(value) > Number(filterValue)
    }
};

NumberFilter.prototype.isFilterActive = function () {
    return  this.filterText !== null &&
            this.filterText !== undefined &&
            this.filterText !== '' &&
            isNumeric(this.filterText);
};

NumberFilter.prototype.getModel = function () {
    return this.isFilterActive() ? Number(this.eFilterText.value) : null;
};

NumberFilter.prototype.setModel = function (model) {
    this.eFilterText.value = model;
    this.extractFilterText();
};


NumberFilter.prototype.destroy = function () {
    this.eFilterText.removeEventListener("input", this.onFilterChanged);
};



function NumberFloatingFilter() {
}

NumberFloatingFilter.prototype.init = function (params) {
    this.onFloatingFilterChanged = params.onFloatingFilterChanged;
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = '&gt; <input style="width:20px" type="text"/>'
    this.currentValue = null;
    this.eFilterInput = this.eGui.querySelector('input');
    var that = this;
    function onInputBoxChanged(){
        if (that.eFilterInput.value === '') {
            //Remove the filter
            that.onFloatingFilterChanged(null);
            return;
        }

        that.currentValue = Number(that.eFilterInput.value);
        that.onFloatingFilterChanged(that.currentValue);
    }
    this.eFilterInput.addEventListener('input', onInputBoxChanged);
};

NumberFloatingFilter.prototype.onParentModelChanged = function (parentModel) {
    // When the filter is empty we will receive a null message her
    if (!parentModel) {
        this.eFilterInput.value = '';
    } else {
        this.eFilterInput.value = parentModel + '';
    }
    this.currentValue = parentModel;
};

NumberFloatingFilter.prototype.getGui = function () {
    return this.eGui;
};


// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            gridOptions.api.setRowData(httpResult);
        }
    };
});

