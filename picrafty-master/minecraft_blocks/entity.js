// FILE: entity.js
// AUTHOR: Matt Hardin, Nathan Robertson
// PURPOSE: Implement google_blocks to map to Minecraft().entity methods.

const ENTITY_ID = 'ENTITY_ID';
const ENTITY_ID_LABEL = "Entity ID:";

const ENTITY_MESSAGE = ENTITY_ID_LABEL+"%1";

const ENTITY_ARGS = {
    "type": "field_input",
    "name": ENTITY_ID,
    "text": "0"
};


// JSON Block Layout

// BLOCK:  mc.entity.getPos()
Blockly.defineBlocksWithJsonArray([
    // mc.entity.getPos()
    {
        "type": "entity_getPos",
        "message0": "Get entity position",
        "message1": ENTITY_MESSAGE,
        "args1": [
            ENTITY_ARGS
        ],
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns entity position as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    },

    // mc.entity.getTilePos()
    {
        "type": "entity_getTilePos",
        "message0": "Get entity tile position",
        "message1": ENTITY_ID_LABEL + "%1",
        "args1": [
            ENTITY_ARGS
        ],
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns entity position as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    },

    // mc.entity.getTilePos()
    {
        "type": "entity_getRotation",
        "message0": "Get entity rotation",
        "message1": ENTITY_ID_LABEL + "%1",
        "args1": [
            ENTITY_ARGS
        ],
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns entity rotation as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    },

    // mc.entity.getPitch()
    {
        "type": "entity_getPitch",
        "message0": "Get entity pitch",
        "message1": ENTITY_ID_LABEL + "%1",
        "args1": [
            ENTITY_ARGS
        ],
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns entity pitch as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    },

    // mc.entity.getDirection()
    {
        "type": "entity_getDirection",
        "message0": "Get entity tile position",
        "message1": ENTITY_ID_LABEL + "%1",
        "args1": [
            ENTITY_ARGS
        ],
        "output": "Number",
        "colour": BLOCK_COLOR,
        "tooltip": "Returns entity position as a Vec3 object.",
        "helpUrl": "documentation/index.html"
    }
]);


// Code Generation Functions

Blockly.Python['entity_getPos'] = function (block) {
    let entity_id = block.getFieldValue(ENTITY_ID);
    let code = "mc.entity.getPos(" + entity_id + ")\n";
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_setPos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set entity's position");
        this.appendDummyInput(ENTITY_ID_LABEL)
            .appendField(ENTITY_ID_LABEL)
            .appendField(new Blockly.FieldTextInput("0"), ENTITY_ID);
        this.appendDummyInput("x:")
            .appendField("x:")
            .appendField(new Blockly.FieldTextInput("0"), 'X');
        this.appendDummyInput("y:")
            .appendField("y:")
            .appendField(new Blockly.FieldTextInput("0"), 'Y');
        this.appendDummyInput("z:")
            .appendField("z:")
            .appendField(new Blockly.FieldTextInput("0"), 'Z');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Sets entity's position to top of given x,y,z coordinates");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_setPos'] = function (block) {
    let entityId = block.getFieldValue(ENTITY_ID);
    let x = block.getFieldValue('X');
    let y = block.getFieldValue('Y');
    let z = block.getFieldValue('Z');
    let arguments = [entityId, x, y, z].join(',');
    return 'mc.entity.setPos(' + arguments + ')' + '\n';
};


Blockly.Python['entity_getTilePos'] = function (block) {
    let entityId = block.getFieldValue(ENTITY_ID);
    let code = 'mc.entity.getTilePos(' + entityId + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_setTilePos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set entity tile position");
        this.appendDummyInput(ENTITY_ID_LABEL)
            .appendField(ENTITY_ID_LABEL)
            .appendField(new Blockly.FieldTextInput("0"), ENTITY_ID);
        this.appendDummyInput("x:")
            .appendField("x:")
            .appendField(new Blockly.FieldTextInput("0"), 'X');
        this.appendDummyInput("y:")
            .appendField("y:")
            .appendField(new Blockly.FieldTextInput("0"), 'Y');
        this.appendDummyInput("z:")
            .appendField("z:")
            .appendField(new Blockly.FieldTextInput("0"), 'Z');
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl("");
    }
};


Blockly.Python['entity_setTilePos'] = function (block) {
    let entityId = block.getField(ENTITY_ID);
    let X = block.getFieldValue('X');
    let Y = block.getFieldValue('Y');
    let Z = block.getFieldValue('Z');
    return 'mc.entity.setTilePos(' + [entityId, X, Y, Z].join(',') + ')\n';
};


Blockly.Python['entity_getRotation'] = function (block) {
    let code = 'mc.entity.getRotation(' + block.getFieldValue(ENTITY_ID) + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['entity_getPitch'] = function (block) {
    let entityId = block.getFieldValue(ENTITY_ID);
    let code = 'mc.entity.getPitch(' + entityId + '\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['entity_getDirection'] = function (block) {
    let code = 'mc.entity.getDirection(' + block.getFieldValue(ENTITY_ID) + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};