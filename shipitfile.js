module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/galuchat',
      deployTo: '~/galuchat',
      repositoryUrl: 'git@github.com:tcheymol/galuchat.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      key: '~/.ssh/id_rsa',
      shallowClone: true,
    },
    staging: {
      branch: 'staging',
      servers: 'www-data@51.254.133.65',
    },
    prod: {
      branch: 'master',
      servers: 'www-data@',
    },
  });

  shipit.task('deploy:finish', () => {
    switch(shipit.config.branch) {
      case 'master':
        return shipit.remote('cd ~/galuchat/current && yarn && yarn start:prod');
      default:
        return shipit.remote('cd ~/galuchat/current && yarn && yarn start');
    }
  });
};
