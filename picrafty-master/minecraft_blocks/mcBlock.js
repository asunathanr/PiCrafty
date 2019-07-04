// FILE: mcBlock.js
// AUTHOR: Nathan Robertson
// PURPOSE: Code to display and generate minecraft blocks





Blockly.defineBlocksWithJsonArray([

    // BLOCK: mcblock_setBlock
    {
        "type":"mcblock_setBlock",
        "message0": "Set block variable: %1 to %2",
        "args0": [
            {
                "type": "input_value",
                "name": "VAR",
            },
            {
                "type": "input_value",
                "name": "NEW_MCBLOCK"
            }
        ],

        "previousStatement": null,
        "nextStatement": null,
        "colour": BLOCK_COLOR,
        "tooltip": "Sets block to a new block value.",
        "helpUrl": "",
    },

    // BLOCK: setType
    {
        "type": "mcblock_setType",
        "message0": "Set type of block: %1 to new type: %2",
        "args0": [
            {
                "type": "input_value",
                "name": "CURRENT_MCBLOCK",
            },
            {
                "type": "input_value",
                "name": "NEW_TYPE"
            }
        ],

        "previousStatement": null,
        "nextStatement": null,
        "colour": BLOCK_COLOR,
        "tooltip": "Change type of block",
        "helpUrl": "",
    },

    // BLOCK: setData
    {
        "type":"mcblock_setData",
        "message0": "Set data of block %1 to %2",
        "args0": [
            {
                "type": "input_value",
                "name": "CURRENT_MCBLOCK",
            },

            {
                "type": "input_value",
                "name": "NEW_DATA"
            }
        ],

        "previousStatement": null,
        "nextStatement": null,
        "colour": BLOCK_COLOR,
        "tooltip": "Change data of block",
        "helpUrl": "",
    }

]);


Blockly.Python['mcblock_setBlock'] = function (block) {
    return 'hello_world\n';
};


Blockly.Python['mcblock_setType'] = function (block) {
    return 'hello_world\n';
};


Blockly.Python['mcblock_setData'] = function (block) {
    return 'hello_world\n';
};