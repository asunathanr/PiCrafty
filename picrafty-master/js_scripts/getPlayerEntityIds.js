Blockly.Blocks['getPlayerEntityIds'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("");

        this.setColour(230);
        this.setTooltip("Post a message to in-game chat.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getPlayerEntityIds'] = function(block) {

    var code = '';
    return code;
};