const admin = { email: 'admin@galuchat.com', password: 'galuchat', birthDate: new Date() };

module.exports = function (server) {
  const models = server.models;
  models.user.findOrCreate(
    { where: { email: 'admin@galuchat.com' } },
    admin
  , function(err, user) {
    if (err) return console.log('%j', err);
    models.Role.findOrCreate(
      { where: { name: 'admin' } },
      { name: 'admin' },
      function(err, role) {
        if (err) return console.log('error findorcreate', err);
        role.principals.create({
          principalType: models.RoleMapping.USER,
          principalId: user.id
        }, function(err, principal) {
          if (err) return console.log('error', err);
          console.log(principal);
      });
    });
  });
};
