// FILE: player.js
// AUTHOR: Richie Burch; Nathan Robertson
// PURPOSE: Implement google_blocks for all methods in the Minecraft.Player class


// Each block is implemented in two parts: First the new block is added to the Block associative array.
// Then the appropriate python conversion function is added to the Blockly.Python associative array.

const BLOCK_COLOR = 230;


Blockly.defineBlocksWithJsonArray([

    // BLOCK: mc.player.setPos()
    {
        "type":"setPos",
        "message0": "Set Player's position",
        "message1": "%1",
        "args1": [
            {
                "type": "input_value",
                "name": "VEC3",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": BLOCK_COLOR,
        "tooltip": "Sets player position to new x,y,z coordinates",
        "helpUrl": "",
    },

    // BLOCK: mc.player.setTilePos()
    {
        "type":"setTilePos",
        "message0": "Set Player tile position",
        "message1": "%1",
        "args1": [
            {
                "type": "input_value",
                "name": "VEC3",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": BLOCK_COLOR,
        "tooltip": "Sets position underneath player to new x,y,z coordinates",
        "helpUrl": "",
    },

    // BLOCK:  mc.player.getDirection()
    {
    "type": "getDirection",
    "message0": 'Get player direction',
    "output": "Number",
    "colour": BLOCK_COLOR,
    "tooltip": "Returns player direction as a Vec3 object.",
    "helpUrl": "documentation/index.html"
    },

    // BLOCK: mc.player.getPitch()
    {
        "type": "getPitch",
        "message0": "Get Player Pitch",
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns player pitch as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    },

    // BLOCK: mc.player.getPos()
    {
        "type": "getPos",
        "message0": "Get Player Position",
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns player position as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    },

    // BLOCK: mc.player.getRotation()
    {
        "type": "getRotation",
        "message0": "Get player rotation",
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns player rotation as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    },

    // BLOCK: mc.player.getTilePos()
    {
        "type": "getTilePos",
        "message0": "Get tile position",
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns position of tile player is standing on.",
        "helpUrl": "documentation/index.html"
    }
]);


// Had to set key as player_setting since a setting key already exists.
Blockly.Blocks['player_setting'] = {
    init: function () {
        this.appendDummyInput("Player Setting")
            .appendField("Set player settings");
        this.appendDummyInput("Setting Name: ")
            .appendField('Setting:')
            .appendField(new Blockly.FieldTextInput(), "SETTING");
        this.appendDummyInput("Status: ")
            .appendField("Status: ")
            .appendField(new Blockly.FieldCheckbox(), "STATUS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Sets a particular setting to be either true or false. ");
        this.setHelpUrl("");
    }
};


Blockly.Python['getDirection'] = function (block) {
    let code = 'mc.player.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['getPitch'] = function (block) {
    let code = 'mc.player.getPitch()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['getPos'] = function (block) {
    let code = 'mc.player.getPos()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['getRotation'] = function (block) {
    var code = 'mc.player.getRotation()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['getTilePos'] = function (block) {
    var code = 'mc.player.getTilePos()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['setPos'] = function (block) {
    let arguments = Blockly.Python.valueToCode(block,"VEC3", Blockly.Python.ORDER_ATOMIC);
    return 'mc.player.setPos(' + arguments + ')\n';
};


Blockly.Python['setTilePos'] = function (block) {
    let arguments = Blockly.Python.valueToCode(block,"VEC3", Blockly.Python.ORDER_ATOMIC);
    return 'mc.player.setPos(' + arguments + ')\n';
};



Blockly.Python['player_setting'] = function (block) {
    let status = "true" ? block.getFieldValue("STATUS").isChecked() : "false";
    let arguments = block.getFieldValue("SETTING") + ',' + status;
    return 'mc.player.setting(' + arguments + ')\n';
};
