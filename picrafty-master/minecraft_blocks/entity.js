// FILE: entity.js
// AUTHOR: Matt Hardin, Nathan Robertson
// PURPOSE: Implement blocks to map to Minecraft().entity methods.

const ENTITY_ID = 'ENTITY_ID';

Blockly.Blocks['entity_getPos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get players position");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), ENTITY_ID);
        this.setColour(230);
        this.setTooltip("Sets player position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setTooltip("Returns player direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getPos'] = function (block) {
    var code = 'mc.player.getPos(' + block.getFieldValue(ENTITY_ID) +')\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_setPos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set entity's position");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), ENTITY_ID);
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), 'X');
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), 'Y');
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), 'Z');
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
    let code = 'mc.entity.setPos('+ arguments + ')' +'\n';
    return code;
};


Blockly.Blocks['entity_getTilePos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Tile Position");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), ENTITY_ID);
        this.setColour(230);
        this.setTooltip("Gets entity tile position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setHelpUrl("");
    }
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
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), ENTITY_ID);
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), 'X');
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), 'Y');
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), 'Z');
        this.setColour(230);
        this.setTooltip("Sets player position to top of given x,y,z coordinates");
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
    var code = 'mc.player.setTilePos(' + [entityId, X, Y, Z].join(',') +  ')\n';
    return code;
};


Blockly.Blocks['entity_getRotation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Entity Rotation.");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(), 'Entity_ID');
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Get entity rotation");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getRotation'] = function (block) {
    let code = 'mc.entity.getRotation(' + block.getFieldValue(ENTITY_ID) + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_getPitch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Player Pitch");
        this.appendDummyInput("Entity ID")
            .appendField(new Blockly.FieldNumber(), ENTITY_ID);
        this.setColour(230);
        this.setOutput(true, null);
        this.setTooltip("Returns entity pitch");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getPitch'] = function (block) {
    let entityId = block.getFieldValue(ENTITY_ID);
    let code = 'mc.entity.getPitch(' + entityId + '\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_getDirection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Entity Direction");
        this.appendDummyInput("Entity ID")
            .appendField(new Blockly.FieldNumber(), ENTITY_ID);
        this.setColour(230);
        this.setTooltip("Sets player position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getDirection'] = function (block) {
    let code = 'mc.entity.getDirection(' + block.getFieldValue(ENTITY_ID) + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};