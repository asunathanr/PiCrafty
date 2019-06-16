// FILE: minecraft.js
// AUTHOR: Richie Burch; Nathan Robertson
// PURPOSE: Implement blocks for all methods found in the Minecraft class


Blockly.Blocks['minecraft_create'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Connect to server");
        this.appendDummyInput()
            .appendField("address:")
            .appendField(new Blockly.FieldTextInput("localhost"), "ADDRESS");
        this.appendDummyInput()
            .appendField("port:")
            .appendField(new Blockly.FieldNumber(25565, 10000, 65565), "PORT");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Connect to minecraft session.");
        this.setHelpUrl("");
    }
};
Blockly.Python['minecraft_create'] = function(block) {
    var text_address = block.getFieldValue('ADDRESS');
    var number_port = block.getFieldValue('PORT');
    var code = 'minecraft.Minecraft.create(address=' +text_address+', port=' +number_port+')\n';
    return code;
};



Blockly.Blocks['getBlock'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Get a block");
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
        this.setTooltip("Gets a block at position (x, y, z). Returns block type as int.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getBlock'] = function(block) {
    var X = block.getFieldValue('X');
    var Y = block.getFieldValue('Y');
    var Z = block.getFieldValue('Z');
    let argumentString = X + ',' + Y + ',' + Z;
    var code = 'mc.getBlock(' + argumentString + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['getBlocks'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get list of block types.");
        this.appendDummyInput()
            .appendField("x0:")
            .appendField(new Blockly.FieldTextInput("0"), "X0COORD")
            .appendField("x1:")
            .appendField(new Blockly.FieldTextInput("1"), "X1COORD");
        this.appendDummyInput()
            .appendField("y0:")
            .appendField(new Blockly.FieldTextInput("0"), "Y0COORD")
            .appendField("y1:")
            .appendField(new Blockly.FieldTextInput("1"), "Y1COORD");
        this.appendDummyInput()
            .appendField("z0:")
            .appendField(new Blockly.FieldTextInput("0"), "Z0COORD")
            .appendField("z1:")
            .appendField(new Blockly.FieldTextInput("1"), "Z1COORD");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Gets types of blocks in a cuboid. Returns a list of ints.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getBlocks'] = function(block) {
    var x0 = block.getFieldValue('X0COORD');
    var x1 = block.getFieldValue('X1COORD');
    var y0 = block.getFieldValue('Y0COORD');
    var y1 = block.getFieldValue('Y1COORD');
    var z0 = block.getFieldValue('Z0COORD');
    var z1 = block.getFieldValue('Z1COORD');

    let argumentString = x0 + ',' + y0 + ',' + z0 + ',' + x1 + ',' + y1 + ',' + z1;

    var code = 'mc.getBlocks(' + argumentString + ')\n';

    return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['getBlockWithData'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get block type and id.");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldTextInput("0"), "X");
        this.appendDummyInput()
            .appendField("y:")
            .appendField(new Blockly.FieldTextInput("0"), "Y");
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldTextInput("0"), "Z");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['getBlockWithData'] = function(block) {
    var x = block.getFieldValue('X');
    var y = block.getFieldValue('Y');
    var z = block.getFieldValue('Z');
    let aString = x + ',' + y + ',' + z;
    var code = 'mc.getBlockWithData(' + aString + ')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['getHeight'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get Height");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldTextInput("0"), "X");
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldTextInput("0"), "Z");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Get height of tallest non-air block at position.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getHeight'] = function(block) {
    var x = block.getFieldValue('X');
    var z = block.getFieldValue('Z');
    var code = 'mc.getHeight('+x+', '+z+')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['getPlayerEntityIds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get player ids.");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['getPlayerEntityIds'] = function(block) {
    var code = 'mc.getPlayerEntityIds()\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['getPlayerId'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get player id.");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Get players id as int.");
        this.setHelpUrl("");
    }
};
Blockly.Python['getPlayerId'] = function(block) {
    var code = 'mc.getPlayerId()\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['getBlockWithData'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get block type and id.");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldTextInput("0"), "X");
        this.appendDummyInput()
            .appendField("y:")
            .appendField(new Blockly.FieldTextInput("0"), "Y");
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldTextInput("0"), "Z");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['getBlockWithData'] = function(block) {
    var x = block.getFieldValue('X');
    var y = block.getFieldValue('Y');
    var z = block.getFieldValue('Z');
    let aString = x + ',' + y + ',' + z;
    var code = 'mc.getBlockWithData(' + aString + ')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['setting'] = {
    init: function() {
        this.appendValueInput("SETTING")
            .setCheck(null)
            .appendField("Setting:");
        this.appendValueInput("FLAG")
            .setCheck(null)
            .appendField("Flag:");
        this.appendDummyInput();
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['setting'] = function(block) {
    var value_setting = Blockly.Python.valueToCode(block, 'SETTING', Blockly.Python.ORDER_ATOMIC);
    var value_flag = Blockly.Python.valueToCode(block, 'FLAG', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.setting(' + value_setting + ', ' + value_flag + ')\n';
    return code;
};


Blockly.Blocks['postToChat'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Post to chat.");
        this.appendValueInput("TOPOST")
            .setCheck(["String", "Number"]);
        this.appendDummyInput();
        this.setColour(230);
        this.setTooltip("Post a message to in game chat.");
        this.setHelpUrl("");
    }
};
Blockly.Python['postToChat'] = function(block) {
    var value_topost = Blockly.Python.valueToCode(block, 'TOPOST', Blockly.Python.ORDER_ATOMIC);
    var code = 'mc.postToChat(' + value_topost + ')\n';
    return code;
};


//Mutator block - SetBlocks will change configuration based on dropdown option selected

Blockly.Blocks['setBlocks'] = {
    init: function() {

        // custom dropdown object that will run update shape helper function when option is changed
        var dropdown = new Blockly.FieldDropdown([["standard","STANDARD"], ["vec3","VEC3"], ["block","BLOCK"]], function(vec_input) {
            this.sourceBlock_.updateShape_(vec_input);
        });

        // initial state of block
        this.appendDummyInput()
            .appendField("Set cube of blocks.")
            .appendField(dropdown, "CONFIG");
        this.appendDummyInput("XES")
            .appendField("x0:")
            .appendField(new Blockly.FieldTextInput("0"), "X0")
            .appendField("x1:")
            .appendField(new Blockly.FieldTextInput("1"), "X1");
        this.appendDummyInput("YES")
            .appendField("y0:")
            .appendField(new Blockly.FieldTextInput("0"), "Y0")
            .appendField("y1:")
            .appendField(new Blockly.FieldTextInput("1"), "Y1")
            .appendField("Block Type:")
            .appendField(new Blockly.FieldTextInput("1"), "TYPE");
        this.appendDummyInput("ZES")
            .appendField("z0:")
            .appendField(new Blockly.FieldTextInput("0"), "Z0")
            .appendField("z1:")
            .appendField(new Blockly.FieldTextInput("1"), "Z1")
            .appendField("Block      Id:")
            .appendField(new Blockly.FieldTextInput("0"), "ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    // function that will allow changes to save to xml
    mutationToDom: function() {
        var containter1 = document.createElement('mutation');
        var vecInput = (this.getFieldValue("CONFIG") == 'VEC3');
        containter1.setAttribute('vec_input', vecInput);
        return containter1;
    },

    // function to load block from xml?
    domToMutation: function(xmlElement) {
        var hasVecInput = (xmlElement.getAttribute('vec_input' == 'true'));
        console.log("hasVecInput = ", hasVecInput);
        this.updateShape_(hasVecInput);
    },

    // function to update shape of block on dropdown change
    updateShape_: function(vecInput) {


        if(vecInput) {  // make sure an option has been passed
            if(vecInput == "VEC3") {  // if the vec3 option has been selected
                if(this.getInput("XES")){
                    this.removeInput("XES");
                }
                if(this.getInput("YES")) {
                    this.removeInput("YES");
                }
                if(this.getInput("ZES")) {
                    this.removeInput("ZES");
                }
                if(!this.getInput("VEC")) {
                    this.appendValueInput("VEC");
                }

            } else if(vecInput == "STANDARD") { // if the standard option has been selected

                if(this.getInput("VEC")) {
                    this.removeInput("VEC");
                }
                if(!this.getInput("XES")) {
                    this.appendDummyInput("XES")
                        .appendField("x0:")
                        .appendField(new Blockly.FieldTextInput("0"), "X0")
                        .appendField("x1:")
                        .appendField(new Blockly.FieldTextInput("1"), "X1");
                }

                if(!this.getInput("YES")) {
                    this.appendDummyInput("YES")
                        .appendField("y0:")
                        .appendField(new Blockly.FieldTextInput("0"), "Y0")
                        .appendField("y1:")
                        .appendField(new Blockly.FieldTextInput("1"), "Y1")
                        .appendField("Block Type:")
                        .appendField(new Blockly.FieldTextInput("1"), "TYPE");
                }

                if(!this.getInput("ZES")) {
                    this.appendDummyInput("ZES")
                        .appendField("z0:")
                        .appendField(new Blockly.FieldTextInput("0"), "Z0")
                        .appendField("z1:")
                        .appendField(new Blockly.FieldTextInput("1"), "Z1")
                        .appendField("Block      Id:")
                        .appendField(new Blockly.FieldTextInput("0"), "ID");
                }
            } else if(vecInput == "BLOCK") { // if the block option has been selected
                console.log("EVERYTHING IS OK")
            }
        }
    }
};
Blockly.Python['setBlocks'] = function(block) {
    var x0 = block.getFieldValue('X0');
    var x1 = block.getFieldValue('X1');
    var y0 = block.getFieldValue('Y0');
    var y1 = block.getFieldValue('Y1');
    var type = block.getFieldValue('TYPE');
    var z0 = block.getFieldValue('Z0');
    var z1 = block.getFieldValue('Z1');
    var id = block.getFieldValue('ID');
    let aString = x0 + ',' + y0 + ',' + z0 + ',' + x1 + ',' + y1 + ',' + z1 + ',' + type + ',' + id;
    var code = 'mc.setBlocks('+aString+')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};



Blockly.Blocks['setBlock'] = {
    init: function() {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
            .appendField("Set a block");
        this.appendDummyInput()
            .appendField("x:")
            .appendField(new Blockly.FieldNumber(), 'X');
        this.appendDummyInput()
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(), 'Y');
        this.appendDummyInput()
            .appendField("z:")
            .appendField(new Blockly.FieldNumber(), 'Z');
        this.appendDummyInput()
            .appendField("Block ID:")
            .appendField(new Blockly.FieldNumber(), 'blockId');
        this.appendDummyInput()
            .appendField("Block Type")
            .appendField(new Blockly.FieldNumber(), 'blockType');
        this.setColour(230);
        this.setTooltip("Sets the block at location (x,y,z) to be the given block id and optional type. A block doesn't have to exist in that location before calling this method.");
        this.setHelpUrl("");
    }
};
Blockly.Python['setBlock'] = function(block) {
    var X = block.getFieldValue('X');
    var Y = block.getFieldValue('Y');
    var Z = block.getFieldValue('Z');
    var blockId = block.getFieldValue('blockId');
    var blockType = block.getFieldValue('blockType');
    let argumentString = X + ',' + Y + ',' + Z + ',' + blockId + ',' + blockType;
    var code = 'mc.setBlock(' + argumentString + ')\n';
    return code;
};



Blockly.Blocks['saveCheckpoint'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Save checkpoint.");
        this.setColour(230);
        this.setTooltip("Save server state.");
        this.setHelpUrl("");
    }
};
Blockly.Python['saveCheckpoint'] = function(block) {
    var code = 'mc.saveCheckpoint()\n';
    return code;
};