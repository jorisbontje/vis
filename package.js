Package.describe({
  name: 'jorisbontje:vis',
  version: '3.11.0',
  summary: 'Wraps the vis.js visualization library into a Meteor package.',
  git: 'https://github.com/jorisbontje/vis.git',
  documentation: 'vis/README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.export('vis', 'client');

  api.addFiles('vis/dist/vis.js', 'client');
  api.addFiles('vis/dist/vis.css', 'client');
  api.addFiles('package-init.js', 'client');
});
