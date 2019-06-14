Blockly.Blocks['getPitch'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Get Player Pitch");
        this.setColour(230);
        this.setTooltip("Returns player position as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getPitch'] = function(block) {
    var code = 'mc.player.getPitch()\n';
    return code;
};