Blockly.Blocks['getBlocks'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Get Blocks");

        this.setColour(230);
        this.setTooltip("Get multiple blocks in a cuboid.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getBlocks'] = function(block) {

    var code = '';
    return code;
};