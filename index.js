const { default: ArLocal } = require("arlocal");
(async () => {
  const arlocal = new ArLocal(8080, false, "db.path", true);
  await arlocal.start();
})();
