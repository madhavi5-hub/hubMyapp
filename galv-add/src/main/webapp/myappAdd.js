(function($, window, document, undefined){
	var supportRef = {
			data:{}
			,attributesData:{}
			,staticData:{}
			,namespaceData:{}
			,getNumberAsInt: function(value){
				try {
					if (value == undefined || value == ""){
						return parseInt("0");
					} else {
						return parseInt(eval(value));
					}
				} catch(err){
					return parseInt("0");
				};
			}
					
			,getString: function(loc){
				try {
					if (loc == undefined || loc == ""){
						return "";
					} else {
						return support.toString(eval(loc));
					}
				} catch(err){
					return "";
				};
			},
			
			newRequestAdd: function(e){
				
				$("#newRequestIbCreate").hide();
				$("#IbErrorDiv3").text("processing request.... please wait....");
				$("#IbErrorDiv3").show();
				
				var num = '';
				if (!$("#addNum2").val()){
					$("#IbErrorDiv3").text("enter a valid number");
				}else {					
					num = $("#addNum2").val();
				}				
				$.get('/galv-add/api/addTen/v1/'+parseInt(num), function (data, textStatus, jqXHR) {
					if ( data.error == false)
						$("#IbErrorDiv3").text("The sum is : " +  data.response);
					else
						$("#IbErrorDiv3").text("enter a valid number");
				});
				
				
			}
		
			        
		
	};
	var methods = {
		init: function(){
			
			
			$("#newRequestAdd").bind("click",supportRef.newRequestAdd);
			
		}
	};
	$.fn.addRef = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.addRef' );
		}
	};
	
	$( document ).ready(function() {
		$.fn.addRef("init"); 
	});
})(jQuery, window, document);
