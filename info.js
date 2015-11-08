// Gathers information for use in making decisions

module.exports = {
  // Counts the number of each type of my creeps in a room and adds it to memory
  countCreeps: function (room) {
    var creepTypes = ['defender','harvester','healer','miner','collector'];
    room.memory.counts = {};
    var type;
    var count;
    for (var i in creepTypes) {
      type = creepTypes[i];
      count = 0;
      room.find(FIND_MY_CREEPS, { filter: function(creep) {
          if(creep.memory.role == type) {
              count++;
          }
      }});
      room.memory.counts[type] = count;
    }
  },

  // Counts the number of hostile creeps in a room
  // TODO change countHostiles to consider enemy strength
  countHostiles: function(room) {
    var hostileCount = 0;
    room.find(FIND_HOSTILE_CREEPS, { filter: function(i) {
        if(i.owner.username != 'Source Keeper') {
            hostileCount++;
        }
    }});
    return hostileCount;
  }
};
