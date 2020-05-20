const Migrations = artifacts.require("Migrations");
// const ECCMath_noconflict = artifacts.require("ECCMath_noconflict");
// const Secp256k1_noconflict = artifacts.require("Secp256k1_noconflict");
// const LocalCrypto = artifacts.require("LocalCrypto");
const Prisoners = artifacts.require("prisoners");
const Colluders = artifacts.require("Colluders");
const Traitors = artifacts.require("Traitors");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(ECCMath_noconflict);
  // deployer.link(ECCMath_noconflict, Secp256k1_noconflict);
  // deployer.deploy(Secp256k1_noconflict);
  // deployer.link(Secp256k1_noconflict, LocalCrypto);
  // deployer.deploy(LocalCrypto);
  // deployer.link(Secp256k1_noconflict, Prisoners);
  deployer.deploy(Prisoners);
  deployer.deploy(Colluders);
  deployer.deploy(Traitors);
};
