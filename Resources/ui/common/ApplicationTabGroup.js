function ApplicationTabGroup() {
	var self = Ti.UI.createTabGroup();
	
	var WebboardMainWindow = require('ui/common/Wb_WebboardMainWindow');
	
	{
		var win = new WebboardMainWindow();
		var tabWebboard = Ti.UI.createTab({
			title: 'Webboard',
			icon: '/images/fugitives.png',
			window: win
		});
		win.containingTab = tabWebboard;
	}
	
	self.addTab(tabWebboard);
	
	return self;
};

module.exports = ApplicationTabGroup;
