Blockly.Blocks['vector_x_attribute'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Vector X Attribute");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("Manipulate the x attribute of a vector object.");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['vector_x_attribute'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + '.x';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };