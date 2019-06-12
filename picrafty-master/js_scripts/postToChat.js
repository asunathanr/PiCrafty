Blockly.Blocks['postToChat'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Post a message to chat");
        this.appendDummyInput()
            .appendField("message:")
            .appendField(new Blockly.FieldTextInput(""), 'MESSAGE');
        this.setColour(230);
        this.setTooltip("Post a message to in-game chat.");
        this.setHelpUrl("");
    }
};
Blockly.Python['postToChat'] = function(block) {
    var message = block.getFieldValue('MESSAGE');
    var code = 'mc.setBlock(' + message + ')\n';
    return code;
};