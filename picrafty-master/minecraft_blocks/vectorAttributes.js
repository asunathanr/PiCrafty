Blockly.Blocks['vector_x_attribute'] = {
    init: function() {
      this.appendValueInput("NAME")
          .appendField("x attribute of ")
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

  Blockly.Blocks['vector_y_attribute'] = {
    init: function() {
      this.appendValueInput("NAME")
          .appendField("y attribute of")
          .setCheck(null);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("Manipulate the y attribute of a vector object.");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['vector_y_attribute'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + '.y';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks['vector_z_attribute'] = {
    init: function() {
      this.appendValueInput("NAME")
          .appendField("z attribute of")
          .setCheck(null);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("Manipulate the z attribute of a vector object.");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['vector_z_attribute'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + '.z';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };