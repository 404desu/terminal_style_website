var email = 'mailto:';

whoami = [
  "<br>",
  "More about you. (Tell more about who you are)!",
  "<br>"
];

// Platform config. enabled: false hides the platform from the visible social output.
var socialPlatforms = [
  { name: 'twitter',   url: 'https://twitter.com/YOUR_USERNAME',           enabled: true },
  { name: 'linkedin',  url: 'https://linkedin.com/in/YOUR_USERNAME',      enabled: false },
  { name: 'instagram', url: 'https://instagram.com/YOUR_USERNAME',         enabled: false },
  { name: 'facebook',  url: 'https://facebook.com/YOUR_USERNAME',          enabled: false },
  { name: 'kick',      url: 'https://kick.com/YOUR_USERNAME',             enabled: false },
  { name: 'twitch',    url: 'https://twitch.tv/YOUR_USERNAME',           enabled: false },
  { name: 'youtube',   url: 'https://youtube.com/@YOUR_USERNAME',         enabled: false }
];

function formatSocialEntry(platform) {
  var padding = '               '; // align columns for display
  return platform.name + padding.substring(platform.name.length) +
    '<a href="' + platform.url + '" target="_blank">' + platform.name + '/</a>';
}

social = ["<br>"];
socialPlatforms.forEach(function(platform) {
  if (platform.enabled) {
    social.push(formatSocialEntry(platform));
  }
});
social.push("<br>");

projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub, or confidential.",
  'github         <a href="https://github.com/YOUR_USERNAME" target="_blank">github/</a>',
  "<br>",
  "If you enjoy my work, you can support it with a coffee.",
  'buymeacoffee   <a href="https://www.buymeacoffee.com/YOUR_USERNAME" target="_blank">buymeacoffee/</a>',
  "<br>"
];

certifications = [
  "<br>",
  "Any certifications I earn will be posted here.",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whoami</span>         Who are you?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">certifications</span> View current certifications',
  '<span class="command">email</span>          Mail address: [REDACTED] to prevent spam overload. Nice try!',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];

banner = [
"⣿⣿⣿⣿⣿⣷⣿⣿⣿⡅⡹⢿⠆⠙⠋⠉⠻⠿⣿⣿⣿⣿⣿⣿⣮⠻⣦⡙⢷⡑⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠡⠌⠂⣙⠻⣛⠻⠷⠐⠈⠛⢱⣮⣷⣽⣿",
"⣿⣿⣿⣿⡇⢿⢹⣿⣶⠐⠁⠀⣀⣠⣤⠄⠀⠀⠈⠙⠻⣿⣿⣿⣦⣵⣌⠻⣷⢝⠦⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣻⣿⣊⡃⠀⣙⠿⣿⣿⣿⣎⢮⡀⢮⣽⣿⣿",
"⢿⣿⣿⣿⣧⡸⡎⡛⡩⠖⠀⣴⣿⣿⣿⠀⠀⠀⠀⠸⠇⠀⠙⢿⣿⣿⣿⣷⣌⢷⣑⢷⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣫⠶⠛⠉⠀⠁⠀⠈⠈⠀⠠⠜⠻⣿⣆⢿⣼⣿⣿⣿",
"⢐⣿⣿⣿⣿⣧⢧⣧⢻⣦⢀⣹⣿⣿⣿⣇⠀⠄⠀⠀⠀⡀⠀⠈⢻⣿⣿⣿⣿⣷⣝⢦⡹⠷⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⠈⠁⠀⠀⠀⠁⠀⠀⠀⠱⣶⣄⡀⠀⠈⠛⠜⣿⣿⣿⣿",
"⠀⠊⢫⣿⣏⣿⡌⣼⣄⢫⡌⣿⣿⣿⣿⣿⣦⡈⠲⣄⣤⣤⡡⢀⣠⣿⣿⣿⣿⣿⣿⣷⣼⣍⢬⣦⡙⣿⣿⣿⣿⣿⣯⢁⡄⠀⡀⡀⠀⠄⢈⣠⢪⠀⣿⣿⣿⣦⠀⢉⢂⠹⡿⣿⣿",
"⠀⠀⠄⢹⢃⢻⣟⠙⣿⣦⠱⢻⣿⣿⣿⣿⣿⣿⣷⣬⣍⣭⣥⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡙⢿⣼⡿⣿⣿⣿⣿⣿⣷⣄⠘⣱⢦⣤⡴⡿⢈⣼⣿⣿⣿⣇⣴⣶⣮⣅⢻⣿⡏",
"⠀⠀⠈⠹⣇⢡⢿⡆⠻⣿⣷⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣍⡻⣿⣟⣻⣿⣿⣿⣿⣷⣦⣥⣬⣤⣴⣾⣿⣿⣿⣿⣷⣿⣿⣿⣿⣷⡜⠃",
"⠀⠀⠀⢀⣘⠈⢂⠃⣧⡹⣿⣷⡄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣅⡙⢿⣟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⡕⠂",
"⠀⠀⠀⠀⠀⠀⠛⢷⣜⢷⡌⠻⣿⣿⣦⣝⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣹⣷⣦⣹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠉⠃⠀",


 '<span class="color2">Booting my terminal portfolio...</span>',
  '<span class="color2">Built, broken, shipped by</span> <a href="https://github.com/wasdefeatedby" target="_blank"><span class="highlight">wasdefeatedby</span></a>.',
  '<span class="color2">Want to see the source? Fork it on GitHub.</span> <a href="https://github.com/wasdefeatedby/terminal_style_website" target="_blank"><span class="highlight">fork it</span></a>.',
  '<span class="color2">Type</span> <span class="command">\'help\'</span> <span class="color2">to see available commands.</span>',
];

