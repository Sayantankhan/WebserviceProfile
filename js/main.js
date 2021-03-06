$(function(){
	
		//on load time 
		$('#demo-bootstrap-textarea-line').linenumbers({col_width:'75px'});	
		$("#auth").css("display","none");
		$("#wsdlFileBox").css("display","none");
		
		//action bind functions 
		$(".addheader").on("click",function(event){
			var count = $('#headerTable tbody').children('tr').length;
			var eligableForNewRow = true;
			for(var tableRow = 1; tableRow <= count; tableRow++){
				var element = $("#key"+tableRow).val() || null;
				if(element == null){
					eligableForNewRow = false;
					break;
				}
			}
			if(eligableForNewRow){
				var appendNewRow = '<tr><td><input class="form-control" id="key'+count+'" name="headerkey'+count+'" type="text" /></td><td><input class="form-control" id="value'+count+'" name="headervalue'+count+'" type="text" /></td></tr>';
				$("#headerTable tbody").append(appendNewRow);
			}
		});
		
		$("#wstype").on("change",function(){
			var selectedText = $( "#wstype option:selected" ).text();
			if(selectedText == "SOAP")
				$("#wsdlFileBox").css("display","block");
			else
				$("#wsdlFileBox").css("display","none");
		});
		
		$("#authtab").on("click",function(e){
			$("#header").css("display","none");
			$("#auth").css("display","block");
			$("#headertab").removeClass("active");
			$("#authtab").addClass("active");
		});
		
		$("#headertab").on("click",function(e){
			$("#auth").css("display","none");
			$("#header").css("display","block");
			$("#authtab").removeClass("active");
			$("#headertab").addClass("active");
		});
		
		$("#wsdlFileBox").focusout(function(e){
			var wsdlUrl = $("#wsdlFileBox").val() || null;
			//alert(wsdlUrl);
			if(wsdlUrl != null){
				$("#status").removeClass("fa-spinner fa-spin");
				$("#status").addClass("fa-spinner fa-spin");
				$.get(wsdlUrl,function(data,status){
					
				}).done(function() {
					alert( "second success" );
				 })
			     .fail(function() {
			 	    $("#status").removeClass("fa-spinner fa-spin");
					
				});
			}
		});
		
});$(function(){
	
		//on load time 
		$('#demo-bootstrap-textarea-line').linenumbers({col_width:'75px'});	
		$("#auth").css("display","none");
		$("#wsdlFile").css("display","none");
		
		//action bind functions 
		$(".addheader").on("click",function(event){
			var count = $('#headerTable tbody').children('tr').length;
			var eligableForNewRow = true;
			for(var tableRow = 1; tableRow <= count; tableRow++){
				var element = $("#key"+tableRow).val() || null;
				if(element == null){
					eligableForNewRow = false;
					break;
				}
			}
			if(eligableForNewRow){
				var appendNewRow = '<tr><td><input class="form-control" id="key'+count+'" name="headerkey'+count+'" type="text" /></td><td><input class="form-control" id="value'+count+'" name="headervalue'+count+'" type="text" /></td></tr>';
				$("#headerTable tbody").append(appendNewRow);
			}
		});
		
		$("#wstype").on("change",function(){
			var selectedText = $( "#wstype option:selected" ).text();
			if(selectedText == "SOAP")
				$("#wsdlFile").css("display","block");
			else
				$("#wsdlFile").css("display","none");
		});
		
		$("#authtab").on("click",function(e){
			$("#header").css("display","none");
			$("#auth").css("display","block");
			$("#headertab").removeClass("active");
			$("#authtab").addClass("active");
		});
		
		$("#headertab").on("click",function(e){
			$("#auth").css("display","none");
			$("#header").css("display","block");
			$("#authtab").removeClass("active");
			$("#headertab").addClass("active");
		});
		
		$("#wsdlFileBox").focusout(function(e){
			var wsdlUrl = $("#wsdlFileBox").val() || null;
			if(wsdlUrl != null){
				$("#status").removeClass("fa-times");
				$("#status").addClass("fa-spinner fa-spin");
				$.get(wsdlUrl,function(data,status){
				}).done(function() {
					
				 })
			     .fail(function() {
					$("#status").removeClass("fa-spinner fa-spin");
					$("#status").addClass("fa-times");
				});
			}
		});
		
		
});