document.getElementById('ask-help-all').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'ask-help-all'});
  });
});

document.getElementById('help-all').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'help-all'});
  });
});

let timerId;

document.getElementById('start').addEventListener('click', () => {
	const delay = parseInt(document.getElementById('delay').value);
	const iterations = parseInt(document.getElementById('iterations').value);
	var count = 0;
	function clickOnIt(){
		console.log("inside interval, count: ", count);
		if (count >= iterations) {
			console.log("stopping interval");
			clearInterval(timerId);
			return;
		}
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log("sending message to tab: ", tabs[0].id);
			chrome.tabs.sendMessage(tabs[0].id, {type: 'start-click'});
		});
		
		setTimeout(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {type: 'go-members'});
			});

		}, 5000);
		
		setTimeout(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {type: 'ask-help-all'});
			});

		}, 20000);
		
		setTimeout(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {type: 'go-home'});
			});

		}, 25000);
		
		setTimeout(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {type: 'help-all'});
			});

		}, 40000);
		
		setTimeout(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {type: 'go-dungeon'});
			});
		}, 50000);
		
		count++;
		
		setTimeout(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {type: 'display-count',count: count});
			});
		}, 55000);
	}

	console.log("delay: ", delay);
	console.log("iterations: ", iterations);

	clickOnIt();
	timerId = setInterval(() => {
		clickOnIt();
	}, delay);
});

document.getElementById('stop').addEventListener('click', () => {
	console.log("stop interval : ", timerId);
	clearInterval(timerId);
});