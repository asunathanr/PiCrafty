Blockly.Blocks['getTilePos'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Get Tile Position");
        this.setColour(230);
        this.setTooltip("Returns position of tile player is standing on");
        this.setHelpUrl("");
    }
};
Blockly.Python['getTilePos'] = function(block) {
    var code = 'mc.player.getTilePos()\n';
    return code;
};