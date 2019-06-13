Blockly.Blocks['setting'] = {
  init: function() {
    this.appendValueInput("SETTING")
        .setCheck(null)
        .appendField("Setting:");
    this.appendValueInput("FLAG")
        .setCheck(null)
        .appendField("Flag:");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['setting'] = function(block) {
  var value_setting = Blockly.Python.valueToCode(block, 'SETTING', Blockly.Python.ORDER_ATOMIC);
  var value_flag = Blockly.Python.valueToCode(block, 'FLAG', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.setting(' + value_setting + ', ' + value_flag + ')\n';
  return code;
};
