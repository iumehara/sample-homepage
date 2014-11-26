var cvServices = angular.module('cvServices', []);

cvServices.factory('cvData', ['$http',
	function($http) {
		cvData = {
			data: {
				cvs: {
					icons: [
						'/assets/icon-ruby.png',
						'/assets/icon-ror.png',
						'/assets/icon-js.png',
						'/assets/icon-angular.png',
						'/assets/icon-json.png',
						'/assets/icon-jquery.png',
						'/assets/icon-pg.png',
						'/assets/icon-memcached.png',
						'/assets/icon-redis.png',
						'/assets/icon-git.png',
						'/assets/icon-github.png',
						'/assets/icon-heroku.png',
						'/assets/icon-fb.png',
						'/assets/icon-aws.png',
						'/assets/icon-bootstrap.png',
						'/assets/icon-zurb.png'
					],
					experience: [
						{
							title: "Developer (2013 ~ current)",
							name: "It's On Me",
							url: 'http://itson.me',
							screenshot: '/assets/screenshot-itsonme.png',
							contents: {
								intro: "It's On Me is a web gifting platform that allows users to send restaurant gifts to their friends from their mobile or web browsers.",
								bullets: [
									"Actively involved in the development and maintenance of a Ruby on Rails API that talks to multilpe clients includes iOS and Android mobile apps, and an AngularJS web client.",
									"Also created multilpe internal administrative apps/features."
								]
							},
							languages: [
								{
									name: "Ruby",
									type: "ruby"
								},
								{
									name: "JavaScript",
									type: "js"
								},
								{
									name: "SQL (Postgres)",
									type: "pg"
								},
								{
									name: "JSON",
									type: "js"
								}
							],
							frameworks: [
								{
									name: "Ruby on Rails",
									type: "ruby"
								},
								{
									name: "AngularJS",
									type: "js"
								},
								{
									name: "jQuery",
									type: "js"
								},
							],
							services: [
								{
									name: "GitHub",
									type: "other"
								},
								{
									name: "Heroku",
									type: "other"
								},
								{
									name: "Firebase",
									type: "other"
								}
							]
						},
						{
							title: 'Founder/Developer (2012-current)',
							name: 'daidake.com',
							url: 'http://daidake.com',
							screenshot: '/assets/screenshot-daidake.png',
							contents: {
								intro: "Daidake, which means 'title only' in Japanese, is a link submission/ranking site with functionality similar to Reddit and Hacker News, where users submit links to English language articles, with short Japanese summaries. Technical features include:",
								bullets: [
									"ActiveRecord link-ranking and sorting based on link score and recency",
									"User score and badge system based on link and comment popularity",
									"Omniauth Facebook/Twitter login system"
								]
							},
						 	languages: [
								{
									name: "Ruby",
									type: "ruby"
								},
								{
									name: "JavaScript",
									type: "js"
								},
								{
									name: "SQL (Postgres)",
									type: "pg"
								}
						 	],
						 	frameworks: [
								{
									name: "Ruby on Rails",
									type: "ruby"
								},
								{
									name: "jQuery",
									type: "js"
								},
						 	],
						 	services: [
								{
									name: "GitHub",
									type: "other"
								},
								{
									name: "Heroku",
									type: "other"
								}
						 	]
						},
						{
							title: 'Co-Founder/Developer (2014 ~ current)',
							name: 'shokuget.com',
							url: 'http://shokuget.com',
							screenshot: '/assets/screenshot-shokuget.png',
							contents: {
								intro: "Shokuget, which means 'Occupation-getter' in Japanese, is a job listing site for Japanese speaking employees and employers in New York.",
								bullets: [
									"Real-time sorting/searching/filtering using AngularJS",
									"Emailing system for job posting confirmations",
									"Auto-posting to Facebook/Twitter"
								]
							},
						 	languages: [
								{
									name: "Ruby",
									type: "ruby"
								},
								{
									name: "JavaScript",
									type: "js"
								},
								{
									name: "SQL (Postgres)",
									type: "pg"
								}
						 	],
						 	frameworks: [
								{
									name: "Ruby on Rails",
									type: "ruby"
								},
								{
									name: "AngularJS",
									type: "js"
								},
						 	],
						 	services: [
								{
									name: "GitHub",
									type: "other"
								},
								{
									name: "Heroku",
									type: "other"
								}
						 	]
						},
						{
							title: 'Stategy Consultant (Non-technical) (2010 ~ 2012)',
							name: 'Simon-Kucher & Partners',
							url: 'http://simon-kucher.com',
							screenshot: '/assets/screenshot-skp.png',
							contents: {
								intro: "Simon-Kucher & Partners is a marketing strategy consulting firm with a focus on pricing and market entry. Managed projects related to new product pricing and market-entry strategy based on user data analysis and interviews."
							}
						}
					],
					education: [
						{
							degree: 'MBA (2010)',
							school: "Columbia Business School",
							logo: '/assets/logo-cbs.png'
						},
						{
							degree: "BA, Economics (2002)",
							school: "University of Virginia",
							logo: '/assets/logo-uva.png'
						}
					]
				}
			}
		};
		return cvData;
	}
]);