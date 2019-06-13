Blockly.Blocks['setPos'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Set Player Position");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(Blockly.FieldNumber(), "X");
        this.appendDummyInput()
            .appendField("y:")
            .appendField(Blockly.FieldNumber(), "Y");
        this.appendDummyInput()
            .appendField("z:")
            .appendField(Blockly.FieldNumber(), "Z");
        this.setColour(230);
        this.setTooltip("Sets player position to new x,y,z coordinates");
        this.setHelpUrl("");
    }
};
Blockly.Python['setPos'] = function(block) {
    let arguments = block.getFieldValue("X") + block.getFieldValue("Y") + block.getFieldValue("Z");
    var code = 'mc.player.setPos(' + arguments + ')\n';
    return code;
};