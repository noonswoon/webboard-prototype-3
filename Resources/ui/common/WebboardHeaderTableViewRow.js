WebboardHeaderTableViewRow = function() {
	var header = Ti.UI.createTableViewRow({
		height: 140,
		selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	
	header.thumbnail = Ti.UI.createImageView({
		image: '/images/whitecollar.jpg',
		top: 5,
		left: 5,
		width: 120,
		height: 90,
		backgroundColor: '#CCC'
	});
	header.add(header.thumbnail);
	
	header.nameLabel = Ti.UI.createLabel({
		text: 'White Collar',
		top: 5,
		left: 135,
		width: 'auto',
		height: 20
	})
	header.add(header.nameLabel);
	
	header.subNameLabel = Ti.UI.createLabel({
		text: 'Season 3 Episode 14',
		top: 20,
		left: 135,
		width: 'auto',
		height: 20
	})
	header.add(header.subNameLabel);
	
	header.peopleIcon = Ti.UI.createImageView({
		top: 70,
		left: 135,
		width: 20,
		height: 20,
		backgroundColor: '#CCC'
	});
	header.add(header.peopleIcon);
	
	header.peopleLabel = Ti.UI.createLabel({
		text: '13122',
		top: 70,
		left: 160,
		width: 40,
		height: 20
	})
	header.add(header.peopleLabel);
	
	header.likeIcon = Ti.UI.createImageView({
		top: 70,
		left: 210,
		width: 20,
		height: 20,
		backgroundColor: '#CCC'
	});
	header.add(header.likeIcon);
	
	header.likeLabel = Ti.UI.createLabel({
		text: '5',
		top: 70,
		left: 235,
		width: 40,
		height: 20
	})
	header.add(header.likeLabel);
	
	
	header.searchTextField = Ti.UI.createTextField({
		left: 10,
		top: 100,
		width: 200,
		height: 30,
		hintText: "Search here...",
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		font: { fontSize: 14, fontFamily: 'Helvetica Neue' }
	});
	header.add(header.searchTextField);
	
		
	header.addButton = Ti.UI.createButton({
		right: 10,
		top: 100,
		width: 30,
		height: 30,
		title: '+'
	});
	header.add(header.addButton);
	
	return header;
}

module.exports = WebboardHeaderTableViewRow;
