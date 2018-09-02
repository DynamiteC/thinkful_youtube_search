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
	options.q = searchval;
	$('#search-results').empty();
	$.getJSON(url,options,showSearchResult)
});

function showSearchResult(data)
{
	var items = data.items;
	var snippet='',tubeUrl='',thumbnails='',imgUrl='',imgHeight='',imgWidth='';
	var title='',channel='',description='';
	var dsgn='';
	$('#search-results').empty();
	for(var x = 0; x < items.length; x++)
	{
		snippet = items[x].snippet;
		console.log(items[x])
		tubeUrl = 'https://www.youtube.com/watch?v=' + items[x].id.videoId;
		thumbnails=snippet.thumbnails.medium;
		imgUrl = thumbnails.url;
		imgHeight = thumbnails.height; 
		imgWidth = thumbnails.width;
		title=snippet.title;
		channel=snippet.channelTitle;
		description=snippet.description; 
		
		dsgn = $("<div class='row' style='border:1px solid white;border-radius:2px;padding-top:3px;padding-bottom:3px;margin:3px auto;'>"+
					"<div class='col-12'>"+
						"<div class='col-4'>"+
							"<a href='"+tubeUrl+"' target='_blank' >"+
								"<img src='"+imgUrl+"' height='"+imgHeight+"' width='"+imgWidth+"' alt='search-thumbnail'/>"+
							"</a>"+
						"</div>"+
						"<div class='col-6' style='margin-left:15px;'>"+
							"<a href='"+tubeUrl+"' target='_blank' >"+
								"<h3><span class='change'>"+title+"<span></h3>"+
							"</a>"+
							"<h4>By "+
								"<a href='https://www.youtube.com/channel/"+snippet.channelId+"' target='_blank'>"+
									"<span class='change'><em>"+channel+"</em></span>"+
								"</a>"+
							"</h4>"+
							"<h5>"+description+"</h5>"+
						"</div>"+
					"</div>"+
		  		"</div>");
		$('#search-results').append(dsgn);
	}
	$('#search-text').val('');
}

