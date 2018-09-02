var options = {
	part:'snippet',
	key:'',
	q:$('#search-text').val(),
}

$('#search').click(function () {
	var searchval = $('#search-text').val();
	if(searchval.trim()=='')
	{
		alert('Enter Search Words');
		return;
	}
	
	if(options.key=='')
	{
		var api_key_ = prompt('Please Enter your youtube Api key');
		if(api_key_==null || api_key_.trim()=='')
		{
			alert('Your requst has been cancelled');
			return;
		}
		else
		{
			options.key=api_key_;
		}
	}

});

// AIzaSyDrIjtZL37bAg9hZz6uIetFCkCHS-xa7Zc