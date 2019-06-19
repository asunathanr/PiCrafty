Blockly.Blocks['set_vector_attribute_to'] = {
    init: function() {
      this.appendValueInput("LEFT")
          .setCheck(null)
          .appendField("set");
      this.appendDummyInput()
          .appendField("to");
      this.appendValueInput("RIGHT")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Set variable attribute to a value.");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['set_vector_attribute_to'] = function(block) {
    var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
    var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_left+' = '+ value_right + '\n';
    return code;
  };