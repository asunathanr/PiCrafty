Blockly.Blocks['getBlock'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Get a block");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldNumber(), 'X');
        this.appendDummyInput()
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(), 'Y');
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldNumber(), 'Z');
        this.setColour(230);
        this.setTooltip("Gets a block at position (x, y, z).");
        this.setHelpUrl("");
    }
};
Blockly.Python['getBlock'] = function(block) {
    var X = block.getFieldValue('X');
    var Y = block.getFieldValue('Y');
    var Z = block.getFieldValue('Z');
    let argumentString = X + ',' + Y + ',' + Z;
    var code = 'mc.setBlock(' + argumentString + ')\n';
    return code;
};