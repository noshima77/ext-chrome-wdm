chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.type === 'display-count') {
		console.log('count', message.count);
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.type === 'go-dungeon') {
		console.log('Going to the dungeon...');
	  
		// Changer l'URL pour retourner sur https://dungeon.wombat.app/dungeon
		setTimeout(() => {
			window.location.href = 'https://dungeon.wombat.app/dungeon';
		}, 1000);
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.type === 'go-home') {
		console.log('Going to the clan home...');
	  
		// Changer l'URL pour retourner sur https://dungeon.wombat.app/clan/home
		setTimeout(() => {
			window.location.href = 'https://dungeon.wombat.app/clan/home';
		}, 1000);
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.type === 'go-members') {
		console.log('Going to the clan members...');
	  
		// Changer l'URL pour retourner sur https://dungeon.wombat.app/clan/members
		setTimeout(() => {
			window.location.href = 'https://dungeon.wombat.app/clan/members';
		}, 1000);
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'ask-help-all') {
    var helpBts = document.getElementsByClassName('clan-member-asset__btn');
	for (let index = 0; index < helpBts.length; index++) {
		if(helpBts[index]){
			helpBts[index].click();
		}
	}
    console.log('Ask help all players in Dungeon Master...');
  }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'help-all') {
    var helpBts = document.getElementsByClassName('request-help-asset__btn');
	for (let index = 0; index < helpBts.length; index++) {
		if(helpBts[index]){
			helpBts[index].click();
		}
	}
    console.log('Helping all players in Dungeon Master...');
  }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.type === 'start-click') {
		console.log('Start process in Dungeon Master...');
		let rewardBtn = document.querySelector('.claim-reward__btn');
		if (rewardBtn) {
			console.log('Getting reward in Dungeon Master...');
			rewardBtn.click();
		}
		setTimeout(() => {
			let wombatBtn = document.querySelector('.nfts-hidden__send-wombat-btn');
			if (wombatBtn) {
				console.log('Starting run in Dungeon Master...');
				wombatBtn.click();
			}
		}, 2000);
	}
});