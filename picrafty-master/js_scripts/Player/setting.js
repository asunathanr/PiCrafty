// Had to set key as player_setting since a setting key already exists.
Blockly.Blocks['player_setting'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput("Player Setting")
            .appendField("Set player settings");
        this.appendDummyInput("Setting Name: ")
            .setCheck(null)
            .appendField(new Blockly.FieldTextInput(), "SETTING");
        this.appendDummyInput("Status: ")
            .appendField(new Blockly.FieldCheckbox(),"STATUS");
        this.setColour(230);
        this.setTooltip("Sets a particular setting to be either true or false. ");
        this.setHelpUrl("");
    }
};
Blockly.Python['player_setting'] = function(block) {
    let status = "true" ? block.getFieldValue("STATUS").isChecked() : "false";
    let arguments = block.getFieldValue("SETTING") + ',' + status;
    var code = 'mc.player.setting(' + arguments + ')\n';
    return code;
};