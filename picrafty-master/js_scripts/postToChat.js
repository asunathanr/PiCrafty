Blockly.Blocks['postToChat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Post to chat.");
    this.appendValueInput("TOPOST")
        .setCheck(["String", "Number"]);
    this.appendDummyInput();
    this.setColour(230);
 this.setTooltip("Post a message to in game chat.");
 this.setHelpUrl("");
  }
};
Blockly.Python['postToChat'] = function(block) {
  var value_topost = Blockly.Python.valueToCode(block, 'TOPOST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.postToChat(' + value_topost + ')\n';
  return code;
};
