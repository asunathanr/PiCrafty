Blockly.Blocks['setBlocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set cube of blocks.");
    this.appendDummyInput()
        .appendField("x0:")
        .appendField(new Blockly.FieldTextInput("0"), "X0")
        .appendField("x1:")
        .appendField(new Blockly.FieldTextInput("1"), "X1");
    this.appendDummyInput()
        .appendField("y0:")
        .appendField(new Blockly.FieldTextInput("0"), "Y0")
        .appendField("y1:")
        .appendField(new Blockly.FieldTextInput("1"), "Y1")
        .appendField("Block Type:")
        .appendField(new Blockly.FieldTextInput("1"), "TYPE");
    this.appendDummyInput()
        .appendField("z0:")
        .appendField(new Blockly.FieldTextInput("0"), "Z0")
        .appendField("z1:")
        .appendField(new Blockly.FieldTextInput("1"), "Z1")
        .appendField("Block      Id:")
        .appendField(new Blockly.FieldTextInput("0"), "ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['setBlocks'] = function(block) {
  var x0 = block.getFieldValue('X0');
  var x1 = block.getFieldValue('X1');
  var y0 = block.getFieldValue('Y0');
  var y1 = block.getFieldValue('Y1');
  var type = block.getFieldValue('TYPE');
  var z0 = block.getFieldValue('Z0');
  var z1 = block.getFieldValue('Z1');
  var id = block.getFieldValue('ID');
  // TODO: Assemble Python into code variable.
  let aString = x0 + ',' + y0 + ',' + z0 + ',' + x1 + ',' + y1 + ',' + z1 + ',' + type + ',' + id;
  var code = 'mc.setBlocks('+aString+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
