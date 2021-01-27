<%@ page language="java" pageEncoding="ISO-8859-1"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<script>

</script> 
<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="jquery.json-2.2.js"></script> 

<script type="text/javascript" src="myappAdd.js"></script>  
 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>IB verify page</title>
<style>
td {font-family: Arial; font-size: 9pt; }
    table { overflow: scroll; }
body {
	padding: 10px;
}
.error {
	color: red;
	font-size: 0.8em;
}
</style>


</head>
<body>

<form method="post" id="addForm" class="form-horizontal" style="overflow-y: scroll;">

	<h2><font style='color:blue'>Galvanize add Service is up and running ! </font></h2>
		
	
		<div >
		Enter a number to add to ten : 
			<input type="text" style='width:32%' id="addNum2" name="addNum2" maxlength="25"><br>
			<input type="reset" id="newRequestAdd" class="btn btn-primary" value="Add to ten Service"  />
		</div>
		
		
	<div  style="padding-top:15px;">
	
			<div id="IbErrorDiv3" style="font-size:15px;font-weight:bold;color:blue"></div>
		</div>
		

   </form>
   
   
</body>
 </html>
