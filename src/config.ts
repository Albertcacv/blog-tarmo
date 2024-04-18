import type { NavItems } from './types';

export const NAV_ITEMS: NavItems = {
	home: {
		path: '/',
		title: 'home',
	},
	blog: {
		path: '/blog',
		title: 'blog',
	},
	// tags: {
	// 	path: '/tags',
	// 	title: 'tags',
	// },
	// media: {
	// 	path: '/media',
	// 	title: 'media',
	// },
	// about: {
	// 	path: '/about',
	// 	title: 'about',
	// },
};

export const SITE = {
	// Your site's detail?
	name: 'Tarmo',
	title: 'El rincón de Tarmo',
	description: 'Programación competitiva, Hacking a veces',
	// url: 'https://astro-ink.vercel.app',
	githubUrl: 'https://github.com/t4rmop',
	listDrafts: true,
	// image:
	// 	'https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png',
	// // YT video channel Id (used in media.astro)
	// ytChannelId: '',
	// // Optional, user/author settings (example)
	// // Author: name
	// author: '', // Example: Fred K. Schott
	// // Author: Twitter handler
	// authorTwitter: '', // Example: FredKSchott
	// // Author: Image external source
	// authorImage: '', // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// // Author: Bio
	// authorBio:
	// 	'Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro',
};

export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false;

export const USE_VIEW_STATS = true;