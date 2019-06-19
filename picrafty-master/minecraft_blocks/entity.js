// FILE: entity.js
// AUTHOR: Matt Hardin
// PURPOSE: Implement blocks to map to Minecraft().entity methods.

Blockly.Blocks['entity_getPos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get entity's position")
            .appendField(new Blockly.FieldNumber(), 'Entity_ID')
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getPos'] = function (block) {
    var code = 'mc.entity.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_setPos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get entity Direction")
            .appendField(new Blockly.FieldNumber(), 'Entity_ID');
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_setPos'] = function (block) {
    var code = 'mc.entity.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['enetity_getTilePos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get entity Direction")
            .appendField(new Blockly.FieldNumber(), 'Entity_ID');
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getTilePos'] = function (block) {
    var code = 'mc.entity.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_setTilePos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get entity Direction")
            .appendField(new Blockly.FieldNumber(), 'Entity_ID');
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_setTilePos'] = function (block) {
    var code = 'mc.entity.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_getRotation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get entity Direction")
            .appendField(new Blockly.FieldNumber(), 'Entity_ID');
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getRotation'] = function (block) {
    var code = 'mc.entity.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_getPitch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get entity Direction")
            .appendField(new Blockly.FieldNumber(), 'Entity_ID');
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getPitch'] = function (block) {
    var code = 'mc.entity.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['entity_getDirection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get entity Direction")
            .appendField(new Blockly.FieldNumber(), 'Entity_ID');
        this.setColour(230);
        this.setTooltip("Sets entity position to top of given x,y,z coordinates");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Returns entity direction as a Vec3 object.");
        this.setHelpUrl("");
    }
};
Blockly.Python['entity_getDirection'] = function (block) {
    var code = 'mc.entity.getDirection()\n';
    return [code, Blockly.Python.ORDER_NONE];
};