// Functions governing the spawn.
// Global Variables.
var makeCreep;
var harvester;

// Includes.
harvester = requires('harvester');

// spawnController.
makeCreep = function (spawn) {
  // Decides which creep to make and creates it.
  // Local Variables
  var creep;
  creep = new harvester();
  // makeCreep
  spawn.createCreep(creep.body, null);
};
