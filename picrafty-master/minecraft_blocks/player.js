// FILE: player.js
// AUTHOR: Richie Burch; Nathan Robertson
// PURPOSE: Implement blocks for all methods in the Minecraft.Player class


// Each block is implemented in two parts: First the new block is added to the Block associative array.
// Then the appropriate python conversion function is added to the Blockly.Python associative array.

const BLOCK_COLOR = 230;

Blockly.defineBlocksWithJsonArray([
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


const X_NAME = "XES";
const Y_NAME = "YES";
const Z_NAME = "ZES";

const X_FIELD = "X";
const Y_FIELD = "Y";
const Z_FIELD = "Z";

const VECTOR_NAMES = [X_NAME, Y_NAME, Z_NAME];

Blockly.Blocks['setPos'] = {
    init: function () {
        const INPUT_TYPES = [["standard", "STANDARD"], ["vec3", "VEC3"]];
        let dropdown = new Blockly.FieldDropdown(INPUT_TYPES, function (vec_input) {
            this.sourceBlock_.updateShape_(vec_input);
        });

        // initial state of block
        this.appendDummyInput()
            .appendField("Set Player Position")
            .appendField(dropdown, "CONFIG");

        this.appendDummyInput(X_NAME)
            .appendField('x:')
            .appendField(new Blockly.FieldTextInput("0"), X_NAME);
        this.appendDummyInput(Y_NAME)
            .appendField('y:')
            .appendField(new Blockly.FieldTextInput("0"), Y_NAME);
        this.appendDummyInput(Z_NAME)
            .appendField('z:')
            .appendField(new Blockly.FieldTextInput("0"), Z_NAME);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Sets player position to new x,y,z coordinates");
        this.setHelpUrl("");
    },

    mutationToDom: function () {
        let blockCache = document.createElement('mutation');
        let vecInput = (this.getFieldValue("CONFIG") === 'VEC3');
        blockCache.setAttribute('vec_input', vecInput);
        return blockCache;
    },

    // function to load block from xml?
    domToMutation: function (xmlElement) {
        let hasVecInput = (xmlElement.getAttribute('vec_input' === 'true'));
        this.updateShape_(hasVecInput);
    },

    // function to update shape of block on dropdown change
    updateShape_: function (vecInput) {
        if (vecInput) {  // make sure an option has been passed
            if (vecInput === "VEC3") {  // if the vec3 option has been selected
                addVectorInput(this);
                addBlockInput(this);

            } else if (vecInput === "STANDARD") { // if the standard option has been selected
                addVectorCoordinatesSingle(this);
                addBlockInput(this);

            }
        }
    },
};
Blockly.Python['setPos'] = function (block) {
    let arguments = block.getFieldValue(X_FIELD) + ',' + block.getFieldValue(Y_FIELD) + ',' + block.getFieldValue(Z_FIELD);
    return 'mc.player.setPos(' + arguments + ')\n';
};


Blockly.Blocks['setTilePos'] = {
    init: function () {
        const INPUT_TYPES = [["standard", "STANDARD"], ["vec3", "VEC3"]];
        let dropdown = new Blockly.FieldDropdown(INPUT_TYPES, function (vec_input) {
            this.sourceBlock_.updateShape_(vec_input);
        });

        // initial state of block
        this.appendDummyInput()
            .appendField("Set Player Tile Position")
            .appendField(dropdown, "CONFIG");

        this.appendDummyInput(X_NAME)
            .appendField('x:')
            .appendField(new Blockly.FieldNumber(), X_NAME);
        this.appendDummyInput(Y_NAME)
            .appendField('y:')
            .appendField(new Blockly.FieldNumber(), Y_NAME);
        this.appendDummyInput(Z_NAME)
            .appendField('z:')
            .appendField(new Blockly.FieldNumber(), Z_NAME);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BLOCK_COLOR);
        this.setTooltip("Sets player position to top of given x,y,z coordinates");
        this.setHelpUrl("");
    },

    mutationToDom: function () {
        let blockCache = document.createElement('mutation');
        let vecInput = (this.getFieldValue("CONFIG") === 'VEC3');
        blockCache.setAttribute('vec_input', vecInput);
        return blockCache;
    },

    // function to load block from xml?
    domToMutation: function (xmlElement) {
        let hasVecInput = (xmlElement.getAttribute('vec_input' === 'true'));
        console.log("hasVecInput = ", hasVecInput);
        this.updateShape_(hasVecInput);
    },

    // function to update shape of block on dropdown change
    updateShape_: function (vecInput) {
        if (vecInput) {  // make sure an option has been passed
            if (vecInput === "VEC3") {  // if the vec3 option has been selected
                addVectorInput(this);
                addBlockInput(this);

            } else if (vecInput === "STANDARD") { // if the standard option has been selected
                addVectorCoordinatesSingle(this);
                addBlockInput(this);
            }
        }
    },
};
Blockly.Python['setTilePos'] = function (block) {
    let arguments = block.getFieldValue('X') + block.getFieldValue('Y') + block.getFieldValue('Z');
    return 'mc.player.setTilePos(' + arguments + ')\n';
};


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
Blockly.Python['player_setting'] = function (block) {
    let status = "true" ? block.getFieldValue("STATUS").isChecked() : "false";
    let arguments = block.getFieldValue("SETTING") + ',' + status;
    return 'mc.player.setting(' + arguments + ')\n';
};


// functions that are reused to shape blocks in multiple mutators

// replace manual vector coordinates with vector input
function addVectorInput(block) {
    if (block.getInput("XES")) {
        block.removeInput("XES");
    }
    if (block.getInput("YES")) {
        block.removeInput("YES");
    }
    if (block.getInput("ZES")) {
        block.removeInput("ZES");
    }
    if (!block.getInput("VEC")) {
        block.appendValueInput("VEC");
    }

    var xCheck = new Blockly.FieldCheckbox("FALSE", function(xChecked) {
        block.sourceBlock_.updateShape_(xChecked);
    });
}

// replace vector input with manual vector coordinates for cube
function addVectorCoordinatesCube(block) {
    if (block.getInput("VEC")) {
        block.removeInput("VEC");
    }
    if (!block.getInput("XES")) {
        block.appendDummyInput("XES")
            .appendField("x0:")
            .appendField(new Blockly.FieldTextInput("0"), "X0")
            .appendField("x1:")
            .appendField(new Blockly.FieldTextInput("1"), "X1");
    }

    if (!block.getInput("YES")) {
        block.appendDummyInput("YES")
            .appendField("y0:")
            .appendField(new Blockly.FieldTextInput("0"), "Y0")
            .appendField("y1:")
            .appendField(new Blockly.FieldTextInput("1"), "Y1")
            .appendField("Block Type:")
            .appendField(new Blockly.FieldTextInput("1"), "TYPE");
    }

    if (!block.getInput("ZES")) {
        block.appendDummyInput("ZES")
            .appendField("z0:")
            .appendField(new Blockly.FieldTextInput("0"), "Z0")
            .appendField("z1:")
            .appendField(new Blockly.FieldTextInput("1"), "Z1")
            .appendField("Block      Id:")
            .appendField(new Blockly.FieldTextInput("0"), "ID");
    }
}

// replace vector input with manual vector coordinates
function addVectorCoordinatesSingle(block) {
    if (block.getInput("VEC")) {
        block.removeInput("VEC");
    }
    if (!block.getInput("XES")) {
        block.appendDummyInput("XES")
            .appendField("x:")
            .appendField(new Blockly.FieldTextInput("0"), "X");
    }

    if (!block.getInput("YES")) {
        block.appendDummyInput("YES")
            .appendField("y:")
            .appendField(new Blockly.FieldTextInput("0"), "Y");
    }

    if (!block.getInput("ZES")) {
        block.appendDummyInput("ZES")
            .appendField("z:")
            .appendField(new Blockly.FieldTextInput("0"), "Z");
    }
}

// replace input block entry with manual fields
function addBlockStandard(block) {
    if(block.getInput("BLOCKINPUT")) {
        block.removeInput("BLOCKINPUT");
    }
    if(!block.getInput("BLOCKSTANDARD")) {
        block.appendDummyInput("BLOCKSTANDARD")
            .appendField("Block Type:")
            .appendField(new Blockly.FieldTextInput("1"), "TYPE")
            .appendField("Block ID:")
            .appendField(new Blockly.FieldTextInput("0"), "ID");
    }
}

// replace manual block entries with input type
function addBlockInput(block) {
    if(!block.getInput("BLOCKINPUT")) {
        block.appendValueInput("BLOCKINPUT");
    }
    if(block.getInput("BLOCKSTANDARD")) {
        block.removeInput("BLOCKSTANDARD");
    }
}