includeIfExist = function(path) {
	try {
		Ti.include(path);
	} catch (e) {
	}
};
