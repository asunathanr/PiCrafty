Blockly.Blocks['getBlockWithData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get block type and id.");
    this.appendDummyInput()
        .appendField("x:")
        .appendField(new Blockly.FieldTextInput("0"), "X");
    this.appendDummyInput()
        .appendField("y:")
        .appendField(new Blockly.FieldTextInput("0"), "Y");
    this.appendDummyInput()
        .appendField("z:")
        .appendField(new Blockly.FieldTextInput("0"), "Z");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['getBlockWithData'] = function(block) {
  var x = block.getFieldValue('X');
  var y = block.getFieldValue('Y');
  var z = block.getFieldValue('Z');
  let aString = x + ',' + y + ',' + z;
  // TODO: Assemble Python into code variable.
  var code = 'mc.getBlockWithData(' + aString + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
