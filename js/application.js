var app = {

	winSize: {},
	animationStop: 1,

	init: function()
	{
		this.cacheDom();
		this.bind();
	},

	cacheDom: function()
	{
		this.$window = $(window);
		this.$body = $("body");
		this.$menu = this.$body.find("nav");
		this.$venovox = this.$body.find(".venobox");
		this.$menuBtn = this.$menu;

		this.$anchors = $('a[href*="#"]:not([href="#"])');
	},

	bind: function()
	{
		this.$window.on("load", this.loading());
		this.$window.on("resize", this.getSize.bind(this));
		this.$window.on("scroll", this.scrolling.bind(this));
		this.$menuBtn.on("click", this.toggleMenu.bind(this));

		this.$anchors.on("click", this.smoothScrolling.bind(this));
	},

	loading: function()
	{
		this.$venovox.venobox();
		$("aside.loading").fadeOut(500);
		this.getSize();
		this.copyRight();
	},

	scrolling: function()
	{
		var yPos = this.$window.scrollTop();

		if (( yPos <= 1000 ) && ( this.winSize.height >= 950 )) {
			this.$body.removeClass("hideMonster");
		}

		if (( yPos >= 1800 ) && ( this.winSize.width >= 950 ) && ( this.animationStop == 1)) {
			this.$body.addClass("hideMonster");
			this.animationStop = 0;
		}
	},

	getSize: function()
	{
		var size = {
			width: 0,
			height: 0
		};

		size.width = this.$window.width()
		|| document.width
		|| document.documentElement.clientWidth
		|| document.innerWidth
		|| window.innerWidth
		|| screen.width;

		size.height = this.$window.height()
		|| document.height
		|| document.documentElement.clientHeight
		|| document.innerHeight
		|| window.innerHeight
		|| screen.height;

		this.winSize = size;
	},

	toggleMenu: function() {
		this.$menu.toggleClass("show");
	},

	copyRight: function() {
		var kons = '\n';
		kons += '       d8888                                              888             \n';
		kons += '      d88888                                              888             \n';
		kons += '     d88P888                                              888             \n';
		kons += '    d88P 888  .d88b.  888  888  8888b.   .d8888b  8888b.  888888  .d88b.  \n';
		kons += '   d88P  888 d88P"88b 888  888     "88b d88P"        "88b 888    d8P  Y8b \n';
		kons += '  d88P   888 888  888 888  888 .d888888 888      .d888888 888    88888888 \n';
		kons += ' d8888888888 Y88b 888 Y88b 888 888  888 Y88b.    888  888 Y88b.  Y8b.     \n';
		kons += 'd88P     888  "Y88888  "Y88888 "Y888888  "Y8888P "Y888888  "Y888  "Y8888  \n';
		kons += '                  888                                                     \n';
		kons += '             Y8b d88P                                                     \n';
		kons += '              "Y88P"  \n';
		kons += '\n';
		console.log('%c ' + kons, 'color: #96c613');
	},

	smoothScrolling: function(e) {
		var current = e.currentTarget;

		if (location.pathname.replace(/^\//,'') == current.pathname.replace(/^\//,'') && location.hostname == current.hostname) {
			var target = $(current.hash);
			target = target.length ? target : $('[name=' + current.hash.slice(1) +']');

			if (target.length) {
				this.$body.animate({
				scrollTop: target.offset().top
			}, 1000);

			return false;
			}
		}
	},

};

app.init();