Blockly.Blocks['getRotation'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Get Player Position");
        this.setColour(230);
        this.setTooltip("Returns player position as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getRotation'] = function(block) {
    var code = 'mc.player.getRotation()\n';
    return code;
};