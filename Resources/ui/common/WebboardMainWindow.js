function WebboardMainWindow() {
	var self = Titanium.UI.createWindow({
		backgroundColor:'transparent',
		backgroundImage: '/images/grain.png',
		title: "Webboard",
		barColor: '#6d0a0c'
	});
	
	
	var table = Ti.UI.createTableView({
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		scrollable: true
	});
	
	self.add(table);
	
	(function() {
		var WebboardViewWindow = require('ui/common/WebboardViewWindow');
		var viewWindow = new WebboardViewWindow();
		table.addEventListener('click', function(e){
			Ti.API.warn(e.index);
			if (e.index == 0) return;
			self.containingTab.open(viewWindow);
		});
		
		var header = Ti.UI.createTableViewRow({
			height: 140,
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
		});
		
		var thumbnail = Ti.UI.createImageView({
			url: '/images/whitecollar.jpg',
			top: 5,
			left: 5,
			width: 120,
			height: 90,
			backgroundColor: '#CCC'
		});
		header.add(thumbnail);
		
		var nameLabel = Ti.UI.createLabel({
			text: 'White Collar',
			top: 5,
			left: 135,
			width: 'auto',
			height: 20
		})
		header.add(nameLabel);
		
		var subNameLabel = Ti.UI.createLabel({
			text: 'Season 3 Episode 14',
			top: 20,
			left: 135,
			width: 'auto',
			height: 20
		})
		header.add(subNameLabel);
		
		var peopleIcon = Ti.UI.createImageView({
			top: 70,
			left: 135,
			width: 20,
			height: 20,
			backgroundColor: '#CCC'
		});
		header.add(peopleIcon);
		
		var peopleLabel = Ti.UI.createLabel({
			text: '13122',
			top: 70,
			left: 160,
			width: 40,
			height: 20
		})
		header.add(peopleLabel);
		
		var likeIcon = Ti.UI.createImageView({
			top: 70,
			left: 210,
			width: 20,
			height: 20,
			backgroundColor: '#CCC'
		});
		header.add(likeIcon);
		
		var likeLabel = Ti.UI.createLabel({
			text: '5',
			top: 70,
			left: 235,
			width: 40,
			height: 20
		})
		header.add(likeLabel);
		
		
		var searchTextbox = Ti.UI.createTextField({
			left: 10,
			top: 100,
			width: 200,
			height: 30
		});
		header.add(searchTextbox);
		
			
		var addButton = Ti.UI.createButton({
			right: 10,
			top: 100,
			width: 30,
			height: 30,
			title: '+'
		});
		
		var WebboardAddWindow = require('ui/common/WebboardAddWindow');
		var addWindow = new WebboardAddWindow();
		addButton.addEventListener('click', function(e) {
			Ti.API.warn('aaaaa');
			self.containingTab.open(addWindow);
		});
		
		header.add(addButton);
		
		
		var data = [
			header,
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' },
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' },
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' },
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' }
		];
	
		table.setData(data);
	})();
	
	return self;
}

module.exports = WebboardMainWindow;