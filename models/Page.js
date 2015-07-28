var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page Model
 * ==========
 */

var Page = new keystone.List('Page', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	track: true
});

Page.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, height: 400 }
});

Page.defaultColumns = 'title, state|15%, createdAt|15%, createdBy|15%, updatedAt|15%, updatedBy|15%';
Page.register();
