Blockly.Blocks['hello_world'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello world, My name is ")
        .appendField(new Blockly.FieldTextInput("Joe"), "NAME");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['hello_world'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'print("Hello World, My name is '+ text_name + '")';
  return code;
};