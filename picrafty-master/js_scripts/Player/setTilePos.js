Blockly.Blocks['setTilePos'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Set Player Tile Position");
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
        this.setTooltip("Sets player position to top of given x,y,z coordinates");
        this.setHelpUrl("");
    }
};
Blockly.Python['setTilePos'] = function(block) {
    let arguments = block.getFieldValue('X') + block.getFieldValue('Y') + block.getFieldValue('Z');
    var code = 'mc.player.setTilePos(' + arguments + ')\n';
    return code;
};