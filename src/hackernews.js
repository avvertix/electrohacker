// must be done in a different way, but for now let's kick things off

window.HN = (function(Zepto, _){
	
	var HN_BASE_URL = "https://hacker-news.firebaseio.com/v0/",
		HN_NEW_STORIES = HN_BASE_URL + "newstories.json",
		HN_TOP_STORIES = HN_BASE_URL + "topstories.json",
		HN_ITEM = HN_BASE_URL + "item/ID.json";
		
	var _body = Zepto(document.body);
		
	
	var _storiesIdCollection = undefined;
	
	
	function _ajaxItemCallback(remoteData, status, xhr){
				
		_body.trigger('hn:item', remoteData);
				
	}
	
	
	function fromIdToItem(ids) {
		for (var index = 0; index < ids.length; index++) {
			var element = ids[index];
			
			Zepto.getJSON(HN_ITEM.replace('ID', element), _ajaxItemCallback);
			
		}
	}
	
		
	var module = {
		
		
		
		latest: function(callback){
			Zepto.getJSON(HN_NEW_STORIES, function(remoteData, status, xhr){

				_storiesIdCollection = _.chunk(remoteData, 500/20);
				
				_body.trigger('hn:update', _storiesIdCollection);
				
				
				if(callback){
					callback(_storiesIdCollection);
				}
				
			});
		},
		
		top: function(callback){
			Zepto.getJSON(HN_TOP_STORIES, function(remoteData, status, xhr){

				_storiesIdCollection = _.chunk(remoteData, 500/20);
				
				_body.trigger('hn:update', _storiesIdCollection);
				
				fromIdToItem(_.first(_storiesIdCollection));
				
				callback(_storiesIdCollection);
			});
		}
		
	};
	
	
	
	return module;
	
})($, _); // $ is Zepto



// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// 
// var exports = module.exports = {};
// 
// function httpGet(url)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", url, false);
//     xmlHttp.send( null );
//     return JSON.parse(xmlHttp.responseText);
// }
// 
// exports.getItem = function(item_id) {
// 	item_id = item_id.toString();
// 	var url = 'https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json';
// 	return httpGet(url);
// }
// 
// exports.getUser = function(username) {
// 	var url = 'https://hacker-news.firebaseio.com/v0/user/' + username +
// 		'.json';
// 	return httpGet(url);
// }
// 
// exports.getMaxItem = function() {
// 	return httpGet('https://hacker-news.firebaseio.com/v0/maxitem.json');
// }
// 
// exports.getTopStories = function() {
// 	return httpGet('https://hacker-news.firebaseio.com/v0/topstories.json');
// }
// 
// exports.getNewStories = function() {
// 	return httpGet('https://hacker-news.firebaseio.com/v0/newstories.json');
// }
// 
// exports.getAskStories = function () {
// 	return httpGet('https://hacker-news.firebaseio.com/v0/askstories.json');
// }
// 
// exports.getShowStories = function () {
// 	return httpGet('https://hacker-news.firebaseio.com/v0/showstories.json');
// }
// 
// exports.getJobStories = function () {
// 	return httpGet('https://hacker-news.firebaseio.com/v0/jobstories.json');
// }
// 
// exports.getUpdates = function() {
// 	return httpGet('https://hacker-news.firebaseio.com/v0/updates.json');
// }
// 
