Blockly.Blocks['setting'] = {
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
Blockly.Python['setting'] = function(block) {

    var code = '';
    return code;
};