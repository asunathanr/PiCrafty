// Had to set key as player_setting since a setting key already exists.
Blockly.Blocks['player_setting'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput("Player Setting")
            .appendField("Set player settings");
        this.appendValueInput("Setting Name: ")
            .setCheck(null)
            .appendField("SETTING");
        this.appendValueInput("Status: ")
            .appendField("STATUS");
        this.setColour(230);
        this.setTooltip("Sets a particular setting to be either true or false. ");
        this.setHelpUrl("");
    }
};
Blockly.Python['player_setting'] = function(block) {
    let arguments = block.getFieldValue("SETTING") + ',' + block.getFieldValue("STATE");
    var code = 'mc.player.setting(' + arguments + ')\n';
    return code;
};