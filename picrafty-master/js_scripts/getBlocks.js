Blockly.Blocks['getBlocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get list of block types.");
    this.appendDummyInput()
        .appendField("x0:")
        .appendField(new Blockly.FieldTextInput("0"), "X0COORD")
        .appendField("x1:")
        .appendField(new Blockly.FieldTextInput("0"), "X1COORD");
    this.appendDummyInput()
        .appendField("y0:")
        .appendField(new Blockly.FieldTextInput("0"), "Y0COORD")
        .appendField("y1:")
        .appendField(new Blockly.FieldTextInput("0"), "Y1COORD");
    this.appendDummyInput()
        .appendField("z0:")
        .appendField(new Blockly.FieldTextInput("0"), "Z0COORD")
        .appendField("z1:")
        .appendField(new Blockly.FieldTextInput("0"), "Z1COORD");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Gets types of blocks in a cuboid. Returns a list of ints.");
 this.setHelpUrl("");
  }
};
Blockly.Python['getBlocks'] = function(block) {
  var x0 = block.getFieldValue('X0COORD');
  var x1 = block.getFieldValue('X1COORD');
  var y0 = block.getFieldValue('Y0COORD');
  var y1 = block.getFieldValue('Y1COORD');
  var z0 = block.getFieldValue('Z0COORD');
  var z1 = block.getFieldValue('Z1COORD');

  let argumentString = x0 + ',' + y0 + ',' + z0 + ',' + x1 + ',' + y1 + ',' + z1;

  var code = 'mc.getBlocks(' + argumentString + ')';

  return [code, Blockly.Python.ORDER_NONE];
};
