const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Duckduckgo',
      key: '*',
      url: 'https://duckduckgo.com',
      search: '/?q={}'
    },
    {
      category: 'General',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Reddit',
      key: 'r',
      url: 'https://old.reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Vox',
      key: 'v',
      url: 'https://vox.com',
      color: 'linear-gradient(135deg, #4c4e4d 70%, 92%, #FFF200)',
      quickLaunch: false,
    },


    {
      category: 'Dev',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      quickLaunch: true,
    },
    {
      category: 'Dev',
      name: 'StackOverflow',
      key: 'so',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      quickLaunch: true,
    },
    {
      category: 'Dev',
      name: 'Medium',
      key: 'me',
      url: 'https://medium.com',
      color: 'linear-gradient(135deg, #212121 65%, 88%, #A1A1A1)',
      quickLaunch: true,
    },


    {
      category: 'Media',
      name: 'Spotify',
      key: 's',
      url: 'https://open.spotify.com/',
      search: '/search/{}',
      color: '#1dd35e',
      quickLaunch: false,
    },
    {
      category: 'Media',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      quickLaunch: false,
    },
    {
      category: 'Media',
      name: 'YouTube TV',
      key: 'tv',
      url: 'https://tv.youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      quickLaunch: false,
    },


    {
      category: 'Finance',
      name: 'Simple',
      key: 'si',
      url: 'https://simple.com',
      color: 'linear-gradient(135deg, #3a8495, #192854)',
      quickLaunch: true,
    },
    {
      category: 'Finance',
      name: 'Amex',
      key: 'am',
      url: 'https://americanexpress.com',
      color: 'linear-gradient(135deg, #1d71b9, #192854)',
      quickLaunch: true,
    },
    {
      category: 'Finance',
      name: 'Wealthfront',
      key: 'wf',
      url: 'https://wealthfront.com',
      color: 'linear-gradient(135deg, #8f53d7, #44a8f2)',
      quickLaunch: true,
    },

    {
      category: 'Self Hosted',
      name: 'Home Assistant',
      key: 'ha',
      url: 'https://hass.murrayfoundry.com',
      color: '#038fc7',
      quickLaunch: true,
    },
    {
      category: 'Self Hosted',
      name: 'Nextcloud',
      key: 'nc',
      url: 'https://cloud.murrayfoundry.com',
      color: '#007ec3',
      quickLaunch: true,
    },
    {
      category: 'Self Hosted',
      name: 'Plex',
      key: 'p',
      url: 'https://plex.murrayfoundry.com',
      color: 'linear-gradient(135deg, #282A2D 66%, 90%, #E5A00D)',
      quickLaunch: true,
    },


  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/worldnews', 'r/r/programmerhumor', 'r/r/unixporn', 'r/r/fantasyfootball'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: true,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: '',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
