// FILE: player.js
// AUTHOR: Richie Burch; Nathan Robertson
// PURPOSE: Implement blocks for all methods in the Minecraft.Player class


const BLOCK_COLOR = 230;

Blockly.Blocks['getDirection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Direction");
        this.setOutput(true, null);
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Returns player direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getDirection'] = function (block) {
    let code = 'mc.player.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


// Minecraft.player.getPitch()
Blockly.Blocks['getPitch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Pitch");
        this.setOutput(true, null);
        this.setColour(BLOCK_COLOR);
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
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Returns player position as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getPos'] = function (block) {
    var code = 'mc.player.getPos()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['getRotation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Position");
        this.setOutput(true, null);
        this.setColour(BLOCK_COLOR);
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
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Returns position of tile player is standing on");
        this.setHelpUrl("");
    }
};
Blockly.Python['getTilePos'] = function (block) {
    var code = 'mc.player.getTilePos()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

const X_NAME = "XES";
const Y_NAME = "YES";
const Z_NAME = "ZES";

const X_FIELD = "X";
const Y_FIELD = "Y";
const Z_FIELD = "Z";

const VECTOR_NAMES = [X_NAME, Y_NAME, Z_NAME];

Blockly.Blocks['setPos'] = {
    init: function () {
        const INPUT_TYPES = [["standard", "STANDARD"], ["vec3", "VEC3"], ["block", "BLOCK"]];
        let dropdown = new Blockly.FieldDropdown(INPUT_TYPES, function (vec_input) {
            this.sourceBlock_.updateShape_(vec_input);
        });

        // initial state of block
        this.appendDummyInput()
            .appendField(dropdown, "CONFIG");
        this.appendDummyInput()
            .appendField("Set Player Position");
        this.appendDummyInput(X_NAME)
            .appendField("x:")
            .appendField(new Blockly.FieldNumber(), X_FIELD);
        this.appendDummyInput(Y_NAME)
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(), Y_FIELD);
        this.appendDummyInput(Z_NAME)
            .appendField("z:")
            .appendField(new Blockly.FieldNumber(), Z_FIELD);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Sets player position to new x,y,z coordinates");
        this.setHelpUrl("");
    },

    mutationToDom: function () {
        var blockCache = document.createElement('mutation');
        var vecInput = (this.getFieldValue("CONFIG") === 'VEC3');
        blockCache.setAttribute('vec_input', vecInput);
        return blockCache;
    },

    // function to load block from xml?
    domToMutation: function (xmlElement) {
        var hasVecInput = (xmlElement.getAttribute('vec_input' === 'true'));
        console.log("hasVecInput = ", hasVecInput);
        this.updateShape_(hasVecInput);
    },

    // function to update shape of block on dropdown change
    updateShape_: function (vecInput) {
        if (vecInput !== null) {
            [
                ["VEC3", this.updateVec3Shape],
                ["STANDARD", this.updateStandardShape],
                ["BLOCK", this.updateBlockShape]
            ].find((updateList) => {
                return updateList[0] === vecInput;
            })[1]();
        }
    },


    // Change shape of Vec3
    updateVec3Shape: function () {
        for (let name in VECTOR_NAMES) {
            if (this.getInput(name)) {
                this.removeInput(name);
            }
        }
        if (!this.getInput("VEC")) {
            this.appendValueInput("VEC");
        }
    },

    updateStandardShape: function () {
        if (this.getInput("VEC")) {
            this.removeInput("VEC");
        }
        for (let name in VECTOR_NAMES) {
            if (!this.getInput(name)) {
                this.appendDummyInput(X_NAME)
                    .appendField()
            }
        }
        const FIELDS = [
            [X_NAME, "x:", "0", X_FIELD],
            [Y_NAME, "y:", "0", Y_FIELD],
            [Z_NAME, "z:", "1", Z_FIELD]
        ];
        for (let field in FIELDS) {
            if (!this.getInput(field[0])) {
                this.appendDummyInput(field[0])
                    .appendField(field[1])
                    .appendField(new Blockly.FieldTextInput(field[2]), field[3]);
            }
        }
    },

    updateBlockShape() {
        console.log("EVERYTHING IS OK");
    }
};
Blockly.Python['setPos'] = function (block) {
    let arguments = block.getFieldValue(X_FIELD) + ',' + block.getFieldValue(Y_FIELD) + ',' + block.getFieldValue(Z_FIELD);
    return 'mc.player.setPos(' + arguments + ')\n';
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
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Sets player position to top of given x,y,z coordinates");
        this.setHelpUrl("");
    }
};
Blockly.Python['setTilePos'] = function (block) {
    let arguments = block.getFieldValue('X') + block.getFieldValue('Y') + block.getFieldValue('Z');
    return 'mc.player.setTilePos(' + arguments + ')\n';
};


// Had to set key as player_setting since a setting key already exists.
Blockly.Blocks['player_setting'] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput("Player Setting")
            .appendField("Set player settings");
        this.appendDummyInput("Setting Name: ")
            .appendField('Setting:')
            .appendField(new Blockly.FieldTextInput(), "SETTING");
        this.appendDummyInput("Status: ")
            .appendField("Status: ")
            .appendField(new Blockly.FieldCheckbox(), "STATUS");
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Sets a particular setting to be either true or false. ");
        this.setHelpUrl("");
    }
};
Blockly.Python['player_setting'] = function (block) {
    let status = "true" ? block.getFieldValue("STATUS").isChecked() : "false";
    let arguments = block.getFieldValue("SETTING") + ',' + status;
    return 'mc.player.setting(' + arguments + ')\n';
};