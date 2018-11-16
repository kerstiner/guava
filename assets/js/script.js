$(document).ready(function(){

var checkAll = $("#checkAll");
var deleteSelect = $("#deleteSelect");
var favoriteSelect = $("#favoriteSelect");
var checkbox = $(".checkbox");
var checkItem1 = $("#checkItem1");
var tableData = $("#tableData");
var trData = $("#trData");

deleteSelect.hide();
favoriteSelect.hide();


//select all checkboxes
checkAll.change(function(){  //"select all" change 
	var status = this.checked; // "select all" checked status
	checkbox.each(function(){ //iterate all listed checkbox items
		this.checked = status; //change ".checkbox" checked status
	});
	showbutton(status);
});

checkbox.change(function(){ //".checkbox" change 

	var value = this.checked;
	//uncheck "select all", if one of the listed checkbox item is unchecked
	if(value == false){ //if this item is unchecked
		checkAll[0].checked = false; //change "select all" checked status to false
	}
	
	//check "select all" if all checkbox items are checked
	if ($(".checkbox:checked").length == $(".checkbox").length ){ 
		$("#checkAll")[0].checked = true; //change "select all" checked status to true
	}

	showbutton(value);

});

deleteSelect.click(function(){
	var checked = $("input:checkbox:checked").map(function(){
		return this.value;
	}).get();
	$("input:checkbox:checked").parents("tr").remove();
 });

favoriteSelect.click(function(){
	var checked = $("input:checkbox:checked").map(function(){
		return this.value;
	}).get();
	$("input:checkbox:checked").parents("tr").children(".starRate").addClass("star");
	
});


function showbutton(status){
	if (status) {
		favoriteSelect.show();
		deleteSelect.show();
	}else if($(".checkbox:checked").length == 0){
		deleteSelect.hide();
		favoriteSelect.hide();
	}

}


});