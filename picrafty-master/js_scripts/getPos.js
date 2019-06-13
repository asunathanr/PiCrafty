Blockly.Blocks['getPos'] = {
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
Blockly.Python['getPos'] = function(block) {
    var code = 'mc.player.getPos()\n';
    return code;
};