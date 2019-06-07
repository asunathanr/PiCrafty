Blockly.Blocks['get_block'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Hello world!");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['get_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var code = 'print("hello world!")';
    return code;
};