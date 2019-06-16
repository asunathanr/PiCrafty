Blockly.Blocks['getDirection'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Get Player Direction");
        this.setColour(230);
        this.setTooltip("Returns player direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getDirection'] = function(block) {
    var code = 'mc.player.getDirection()\n';
    return code;
};