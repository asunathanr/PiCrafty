Blockly.Blocks['setBlock'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Set a block");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldNumber(), 'X');
        this.appendDummyInput()
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(), 'Y');
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldNumber(), 'Z');
        this.appendDummyInput()
            .appendField("Block ID:")
            .appendField(new Blockly.FieldNumber(), 'blockId');
        this.appendDummyInput()
            .appendField("Block Type")
            .appendField(new Blockly.FieldNumber(), 'blockType');
        this.setColour(230);
        this.setTooltip("Sets the block at location (x,y,z) to be the given block id and optional type. A block doesn't have to exist in that location before calling this method.");
        this.setHelpUrl("");
    }
};
Blockly.Python['setBlock'] = function(block) {
    var X = block.getFieldValue('X');
    var Y = block.getFieldValue('Y');
    var Z = block.getFieldValue('Z');
    var blockId = block.getFieldValue('blockId');
    var blockType = block.getFieldValue('blockType');
    let argumentString = X + ',' + Y + ',' + Z + ',' + blockId + ',' + blockType;
    var code = 'minecraft.Minecraft.setBlock(' + argumentString + ')\n';
    return code;
};
