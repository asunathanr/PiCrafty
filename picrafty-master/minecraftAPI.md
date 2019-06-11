# Python Minecraft API
## Minecraft.py
* [Minecraft](##Minecraft) - Main class for connecting to and interacting with the game.
  * [Player](##Player) - getting and changing the players position and settings
  * [Entity](##Entity) - getting and changing an entity's position and settings
  * [Camera](##Camera) - changing camera angle and position
  * events - retreiving events which have occurred in the game
* ~~~
  import mcpi.minecraft as minecraft
  ~~~
## Minecraft
1. .create(address, port)
 * Inputs
    * address - address of server
    * port - port on server
  * Outputs
    * minecraft server object
  * Example
    * use default address and port
        * ~~~
          mc = minecraft.Minecraft.create()
          ~~~
    * specify ip address and port
        * ~~~
          mc = minecraft.Minecraft.create("192.168.1.1", 4711)
          ~~~
2. .getBlock(x,y,z)
   * Inputs
     * x,y,z coordinates (can be grouped in Vec3 object)
   * Outputs
     * Block ID
   * Example
     * Retrieves the block type at 0,0,0
       * ~~~
         blockType = mc.getBlock(0,0,0)
         ~~~
3. .getBlocks(x0,y0,z0,x1,y1,z1)
   * Inputs
     * x0,y0,z0 coordinates (can be grouped in Vec3 object)
     * x1,y1,z1 coordinates (can be grouped in Vec3 object)
   * Outputs
     * List of block ids
   * Example
     * Get the block id's in a cuboid
       * ~~~
         blocks = mc.getBlocks(-1,-1,-1,1,1,1)\
         for block in blocks:
             print block
         ~~~
4. .getBlockWithData(x,y,z)
   * Inputs
     * x,y,z coordinates (can be grouped in Vec3 object)
   * Outputs
     * Block object
   * Example
     * retrieves a block object for the block at 0,0,0
       * ~~~
         blockObj = mc.getBlockWithData(0,0,0)
         ~~~
5. .setBlock(x,y,z)
   * Inputs
     * x coordinate
       * x,y coordinates (can be grouped in Vec3 object)
       * Type - base type for block
       * Subtype - subtype for block
   * Outputs
     * n/a - modifies in game block at provided coordinates
   * Example
     * sets a block at an x, y, z co-ordinate to a particular type   
       * ~~~
         mc.setBlock(0,0,0,block.DIRT.id)
         ~~~
   * sets a block to a particular type and 'subtype' 
     * ~~~
       mc.setblock(0,0,0,block.WOOD.id, 1)
       ~~~
6. .setBlocks(x0,y0,z0,x1,y1,z1,blockType, blockData)
   * Inputs
     * x0,y0,z0 coordinates (can be grouped in Vec3 object)
     * x1,y1,z1 coordinates (can be grouped in Vec3 object)
     * Block type and data (can be grouped in block object)
   * Outputs
     * n/a - modifies cuboid of blocks between given coordinates 
   * Example
     * sets many blocks at a time, filling the gap between 2 sets of x,y, z coordinates
     * ~~~
       mc.setBlocks(-1, -1, -1, 1, 1, 1, block.STONE.id)
       ~~~
7. .getHeight(x,z)
   * Inputs
     * x, y coordinates (can be grouped in Vec3 object)
   * Outputs
     * Max height of blocks in world at given coordinates
   * Example
     * find the y (vertical) of an x, z co-ordinate which represents the 'highest' (non-air) block
       * ~~~
         y = mc.getHeight(0,0)
         ~~~
8. .getPlayerEntityIds()
   * Inputs
     * n/a
   * Outputs
     * list of player ids
   * Example
     * get the entity id's of the players connected to the game
       * ~~~
         entityIds = mc.getPlayerEntityIds()
         ~~~
9. .getPlayerId(playerName)
   * Inputs
     * Player name
   * Outputs
     * player id
   * Example
     * get the entity id of a name player 'lljksod'
       * ~~~
         entityId = mc.getPlayerId("martinohanlon")
         ~~~
10. .saveCheckpoint()
    * Inputs
      * n/a
    * Outputs
      * ?
    * Example
      * Save a checkpoint that can be used for restoring the world
        * ~~~
          mc.saveCheckpoint()
          ~~~
11. .postToChat(message)
    * Inputs
      * Message
    * Outputs
      * Posts message to in game chat
    * Example
      * write 'Hello Minecraft World' to the chat window
        * ~~~
          mc.postToChat("Hello Minecraft World")
          ~~~
12. .setting(setting, status)
    * Inputs
      * Setting - in game option
      * Status - True or False
    * Outputs
      * n/a - adjust in game option
    * Example
      * change world immutable to True
        * ~~~
          mc.setting("world_immutable", True)
          ~~~
      * change nametags_visible setting to False
        * ~~~
          mc.setting("nametags_visible", False)
          ~~~
## Player
1. .getPos()
   * Inputs
     * n/a
   * Outputs
     * Vec3 object with players current position
   * Example
     * get players position as floats
       * ~~~
         playerPos = mc.player.getPos()
         ~~~
2. .setPos(x,y,z)
   * Inputs
     * x,y,z coordinates (can be grouped in Vec3 object)
   * Outputs
     * n/a - updates players position in game
   * Example
     * Move player to specified positon 10,10,10
       * ~~~
         mc.player.setPos(10,10,10) 
         ~~~
3. .getTilePos()
   * Input
     * N/a
   * Output
     * Vec3 Object of tile coordinates
   * Example
     * get coordinates of tile player is standing on
       * ~~~
         playerTile = mc.player.getTilePos()
         ~~~ 
4. .setTilePos(x,y,z)
   * Inputs
     * x,y,z coordinates (can be grouped in Vec3 object)
   * Outputs
     * n/a - moves player on top of tiles coordinates
   * Example
     * move player to tile
       * ~~~
         mc.player.setTilePos(1,1,1)

         print("Move to tile 1,1,1")

         time.sleep(2)

         mc.player.setTilePos(playerTile)
         ~~~
5. .setting(setting, status)
   * Input
     * Player setting - name of setting
     * Status - true or false
   * Outputs
     * n/a - changes player setting in game
   * Example
     * turn auto jump off and on
       * ~~~
         mc.player.setting("autojump", False)

         print("Autojump off, 5 seconds to test")

         time.sleep(5)

         mc.player.setting("autojump", True)

         print("Autojump back on")
         ~~~
6. .getRotation()
   * Inputs
     * N/A
   * Outputs
     * Rotation angle as float
   * Example
     * Get and print player rotation
       * ~~~
         playerRot = mc.player.getRotation()

         print(playerRot)
         ~~~
7. .getPitch()
   * Inputs
     * N/A
   * Outputs
     * Pitch angle as float
   * Example
     * get and print player pitch
       * ~~~
         playerPitch = mc.player.getPitch()

         print(playerPitch)
         ~~~
8. .getDirection()
   * Inputs
     * N/A
   * Outputs
     * Player direction as vec3 object
   * Example
     * Get and print player direction
       * ~~~
         playerDirection = mc.player.getDirection()

         print(playerDirection)
         ~~~     
## Entity
1. .getPos(entityId)
   * Inputs
     * Entity Id (can get using mc.getPlayerEntityIds())
   * Outputs
     * position as vec3 object
   * Example
     * get players position
       * ~~~
         entityPos = mc.entity.getPos(entityIds[0])

         print("entity pos" , entityPos) 
         ~~~
2. .setPos(entityId,x,y,z)
   * Inputs
     * Entity ID
     * x,y,z coordinates (can be grouped in Vec3 object)
   * Outputs
     * N/A - changes entitys position in game
   * Example
     * change entity position
       * ~~~
         entityPos = mc.entity.getPos(entityIds[0])

         print("entity pos" , entityPos)

         mc.entity.setPos(entityIds[0], 20,20,20)

         time.sleep(2)

         mc.entity.setPos(entityIds[0], entityPos)
         ~~~
3. .getTilePos(entityId)
   * Inputs
     * Entity ID
   * Outputs
     * Vec3 position of tile entity is on
   * Example
     * print position of tile entity is on
       * ~~~
         entityTilePos = mc.entity.getTilePos(entityIds[0])

         print("Entity tile pos", entityTilePos) 
         ~~~
4. .setTilePos(entityId, x,y,z)
   * Inputs
     * Entity ID
     * x,y,z coordinates (can be grouped in Vec3 object)
   * Outputs
     * N/A - changes entitys tile position in game
   * Example
     * change entity tile position
       * ~~~
         mc.entity.setTilePos(entityIds[0], 15,1,25)

         time.sleep(2)

         mc.entity.setTilePos(entityIds[0], entityTilePos) 
         ~~~
5. .getRotation(entityId)
   * Inputs
     * Entity Id
   * Outputs
     * Entity rotation angle
   * Example
     * get entity rotation
       * ~~~
         entityRot = mc.entity.getRotation(entityIds[0])

         mc.postToChat(entityRot) 
         ~~~
6. .getPitch(entityId)
   * Inputs
     * Entity Id
   * Outputs
     * Entity pitch angle
   * Example
     * get entity pitch
       * ~~~
         entityPitch = mc.entity.getPitch(entityIds[0])

         mc.postToChat(entityPitch) 
         ~~~
7. .getDirection(entityId)
   * Inputs
     * Entity ID
   * Outputs
     * Vec3 Object of entity direction
   * Example
     * get entity direction
       * ~~~
         entityDirection = mc.entity.getDirection(entityIds[0])

         mc.postToChat("Entity direction = ")
         mc.postToChat(entityDirection) 
         ~~~
## Camera
1. .setNormal(entityId)
   * Inputs
     * Entity Id
   * Outputs
     * n/a - sets entity camera to normal in game
   * Example
     * set entity camera to normal
       * ~~~
         mc.camera.setNormal(entityId)
         ~~~
2. .setFixed()
   * Inputs
     * N/A
   * Outputs
     * N/A - set entity camera to fixed in game
   * Example
     * set entity camera to fixed
       * ~~~
          