Blockly.Blocks['getHeight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Height");
    this.appendDummyInput()
        .appendField("x:")
        .appendField(new Blockly.FieldTextInput("0"), "X");
    this.appendDummyInput()
        .appendField("z:")
        .appendField(new Blockly.FieldTextInput("0"), "Z");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get height of tallest non-air block at position.");
 this.setHelpUrl("");
  }
};
Blockly.Python['getHeight'] = function(block) {
  var x = block.getFieldValue('X');
  var z = block.getFieldValue('Z');
  // TODO: Assemble Python into code variable.
  var code = 'mc.getHeight('+x+', '+z+')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
