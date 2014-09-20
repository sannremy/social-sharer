Polymer('social-sharer', {
	ready: function() {
		this.list = {
			twitter: {
				name: 'Twitter',
				className: 'twitter',
				shareUrl: 'https://twitter.com/share?url=%s',
				title: 'Tweet this!',
			},
			googleplus: {
				name: 'Google+',
				className: 'googleplus',
				shareUrl: 'https://plus.google.com/share?url=%s',
				title: 'Share on Google+',
			},
			facebook: {
				name: 'Facebook',
				className: 'facebook',
				shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=%s',
				title: 'Share on Facebook',
			}
		};

		this.socials = [];

		var socials = this.show.split(' '), i, social;
		for(i = 0; i < socials.length; i++) {
			if(this.list[socials[i]]) {
				// clone social object
				social = JSON.parse(JSON.stringify(this.list[socials[i]]));

				// replace %s by the custom url or current url
				social.shareUrl = social.shareUrl.replace('%s', this.link || document.URL);

				// push to socials array
				this.socials.push(social);
			}
		}
	},
	updateModel: function() {
		this.ready();
	}
});