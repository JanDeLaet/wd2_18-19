<html>
<head>
<script src="./ajax_utils.js"></script>
</head>
<body>
<button onclick="doe_iets('bla')">blabla</button>

<p><b>Start typing a name in the input field below:</b></p>
<form> 
First name: <input type="text" onkeyup="doe_iets(this.value)">
</form>
<p>Suggestions: <span id="txtHint"></span></p>
</body>
</html>