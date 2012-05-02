function WebboardViewWindow() {
	var self = Titanium.UI.createWindow({
		backgroundColor:'transparent',
		backgroundImage: '/images/grain.png',
		title: "Webboard",
		barColor: '#6d0a0c'
	});

	var table = Titanium.UI.createTableView({
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		scrollable: true
	});
	self.add(table);
	
	(function() {
		table.addEventListener('click', function(e){
			Ti.API.warn(e.index);
		});
		
		var header = Ti.UI.createTableViewRow({
			height: 60,
			allowsSelection: false
		});
		
		var topicLabel = Ti.UI.createLabel({
			text: 'What happened to Peter?',
			top: 5,
			left: 5,
			width: 'auto',
			height: 30,
			font: { fontSize: 20, fontFamily: 'Helvetica Neue' }
		})
		header.add(topicLabel);
		
		var subLabel = Ti.UI.createLabel({
			text: 'Submitted 3 hours ago by Test',
			top: 30,
			left: 10,
			width: 'auto',
			height: 20,
			font: { fontSize: 10, fontFamily: 'Helvetica Neue' }
		})
		header.add(subLabel);
		
		
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


module.exports = WebboardViewWindow;