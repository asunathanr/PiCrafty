Blockly.Blocks['getPlayerId'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get player id.");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get players id as int.");
 this.setHelpUrl("");
  }
};
Blockly.Python['getPlayerId'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.getPlayerId()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
