Blockly.Blocks['minecraft_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Connect to server");
    this.appendDummyInput()
        .appendField("address:")
        .appendField(new Blockly.FieldTextInput("localhost"), "ADDRESS");
    this.appendDummyInput()
        .appendField("port:")
        .appendField(new Blockly.FieldNumber(25565, 10000, 65565), "PORT");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Connect to minecraft session.");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_create'] = function(block) {
  var text_address = block.getFieldValue('ADDRESS');
  var number_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  var code = 'minecraft.Minecraft.create(address=' +text_address+', port=' +number_port+')\n';
  return code;
};
