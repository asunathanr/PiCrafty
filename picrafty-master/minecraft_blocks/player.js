// FILE: player.js
// AUTHOR: Richie Burch; Nathan Robertson
// PURPOSE: Implement blocks for all methods in the Minecraft.Player class


Blockly.Blocks['getDirection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Direction");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns player direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getDirection'] = function (block) {
    var code = 'mc.player.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


// Minecraft.player.getPitch()
Blockly.Blocks['getPitch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Pitch");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns player position as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getPitch'] = function (block) {
    var code = 'mc.player.getPitch()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['getPos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Position");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns player position as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getPos'] = function (block) {
    var code = 'mc.player.getPos()\n';
    return [code, Blockly.Python.ORDER_NONE];;
};


Blockly.Blocks['getRotation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Position");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns player position as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getRotation'] = function (block) {
    var code = 'mc.player.getRotation()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['getTilePos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Tile Position");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns position of tile player is standing on");
        this.setHelpUrl("");
    }
};
Blockly.Python['getTilePos'] = function (block) {
    var code = 'mc.player.getTilePos()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['setPos'] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Set Player Position");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldNumber(), "X");
        this.appendDummyInput()
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(), "Y");
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldNumber(), "Z");
        this.setColour(230);
        this.setTooltip("Sets player position to new x,y,z coordinates");
        this.setHelpUrl("");
    }
};
Blockly.Python['setPos'] = function (block) {
    let arguments = block.getFieldValue("X") + block.getFieldValue("Y") + block.getFieldValue("Z");
    var code = 'mc.player.setPos(' + arguments + ')\n';
    return code;
};


Blockly.Blocks['setTilePos'] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Set Player Tile Position");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldNumber(), 'X');
        this.appendDummyInput()
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(), 'Y');
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldNumber(), 'Z');
        this.setColour(230);
        this.setTooltip("Sets player position to top of given x,y,z coordinates");
        this.setHelpUrl("");
    }
};
Blockly.Python['setTilePos'] = function (block) {
    let arguments = block.getFieldValue('X') + block.getFieldValue('Y') + block.getFieldValue('Z');
    var code = 'mc.player.setTilePos(' + arguments + ')\n';
    return code;
};


// Had to set key as player_setting since a setting key already exists.
Blockly.Blocks['player_setting'] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput("Player Setting")
            .appendField("Set player settings");
        this.appendDummyInput("Setting Name: ")
            .setCheck(null)
            .appendField(new Blockly.FieldTextInput(), "SETTING");
        this.appendDummyInput("Status: ")
            .appendField(new Blockly.FieldCheckbox(), "STATUS");
        this.setColour(230);
        this.setTooltip("Sets a particular setting to be either true or false. ");
        this.setHelpUrl("");
    }
};
Blockly.Python['player_setting'] = function (block) {
    let status = "true" ? block.getFieldValue("STATUS").isChecked() : "false";
    let arguments = block.getFieldValue("SETTING") + ',' + status;
    var code = 'mc.player.setting(' + arguments + ')\n';
    return code;
};