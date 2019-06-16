Blockly.Blocks['saveCheckpoint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Save checkpoint.");
    this.setColour(230);
 this.setTooltip("Save server state.");
 this.setHelpUrl("");
  }
};
Blockly.Python['saveCheckpoint'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.saveCheckpoint()\n';
  return code;
};
