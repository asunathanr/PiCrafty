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
  // TODO: Assemble Python into code variable.
  let aString = x0 + ',' + y0 + ',' + z0 + ',' + x1 + ',' + y1 + ',' + z1 + ',' + type + ',' + id;
  var code = 'mc.setBlocks('+aString+')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
