var options = {
	part:'snippet',
	key:'',
	q:$('#search-text').val(),
	maxResults:25,

}

const url = 'https://www.googleapis.com/youtube/v3/search';

$('#search').click(function () {
	var searchval = $('#search-text').val();
	if(searchval.trim()=='')
	{
		alert('Enter Search Words');
		return;
	}
	
	if(options.key=='')
	{
		// var api_key_ = prompt('Please Enter your youtube Api key');
		// if(api_key_==null || api_key_.trim()=='')
		// {
		// 	alert('Your requst has been cancelled');
		// 	return;
		// }
		// else
		{
			options.key='AIzaSyDrIjtZL37bAg9hZz6uIetFCkCHS-xa7Zc' //api_key_;
		}
	}

	$.getJSON(url,options,showSearchResult)
});

function showSearchResult(data)
{
	var items = data.items;
	var snippet='',tubeUrl='',thumbnails='',imgUrl='',imgHeight='',imgWidth='';
	var title='',channel='',description='';
	for(var x = 0; x < items.length; x++)
	{
		snippet = items[x].snippet;
		tubeUrl = 'https://www.youtube.com/watch?v=' + items[x].videoId;
		thumbnails=snippet.thumbnails.high;
		imgUrl = thumbnails.url;
		imgHeight = thumbnails.height; 
		imgWidth = thumbnails.width;
		title=snippet.title;
		channel=snippet.channelTitle;
		description=snippet.description; 
		
	$("<div class='row'>"+
		"<div class='col-12'>"+

		"</div>"+
	  "</div>"
	);





	}



	console.log(data);
}

// AIzaSyDrIjtZL37bAg9hZz6uIetFCkCHS-xa7Zc