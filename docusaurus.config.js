module.exports = {
	title: "Camptie",
	tagline: "A free, feature-rich Discord-to-Roblox bot.",
	url: "https://camptie-github-io.vercel.app/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "throw",
	favicon: "https://i.imgur.com/Bs0XtAM.png",
	organizationName: "svenroblox", // Usually your GitHub org/user name.
	projectName: "camptie.github.io", // Usually your repo name.
	trailingSlash: false,
	themeConfig: {
		prism: {
			theme: require("prism-react-renderer/themes/vsDark"),
			additionalLanguages: ["lua"],
		},
		colorMode: {
			defaultMode: "dark",
			respectPrefersColorScheme: false,
			disableSwitch: true,
		},
		navbar: {
			hideOnScroll: true,
			title: "Camptie",
			logo: {
				src: "",
			},
			items: [
				/* {
					to: 'dashboard/',
					activeBasePath: 'dashboard',
					label: 'Dashboard',
					position: 'right',
				}, */
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "right",
				},
				{
					to: "https://discord.gg/UsvKGaxEuu",
					label: "Discord Server",
					position: "right",
				},
			],
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} Camptie`,
		},
	},
	themes: [
		[
			"@docusaurus/theme-classic",
			{
				customCss: [
					require.resolve("./src/css/custom.css"),
					require.resolve("./src/css/quicksand.css"),
					require.resolve("./src/css/nord.css"),
				],
			},
		],
	],
	plugins: [
		"@docusaurus/plugin-content-pages",
		[
			"@docusaurus/plugin-content-docs",
			{
				sidebarPath: require.resolve("./sidebars.js"),
				// Please change this to your repo.
				editUrl: "github.com/svenroblox/camptie.github.io/edit/main/",
			},
		],
		[
			"@docusaurus/plugin-sitemap",
			{
				changefreq: "weekly",
				priority: 0.5,
			},
		],
	],
	scripts: [
		{
			src: "",
			async: true,
			defer: true,
			"data-website-id": "3d11690f-43db-47de-a895-d81345623235",
		},
	],
};
