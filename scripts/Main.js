import { world, ItemStack } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

world.afterEvents.itemUse.subscribe(data => {
  const source = data.source

  if (data.itemStack.typeId === "hidden:item_giver") {
    if (!source.hasTag("allow_hig")) {
      source.sendMessage("§cこのアイテムを使用する許可がありません！")
      return
    }
    
    const ui = new ActionFormData()
    ui.title("Hidden Item Giver")
    ui.body("通常の/giveコマンドでは入手できないような\nアイテムなどを入手できます！\n\n欲しいアイテムを指定してください！")
    ui.button("IDを指定して入手\n§8Give item by ID")
    ui.button("ネザーリアクターコア\n§8minecraft:netherreactor","textures/blocks/reactor_core_stage_0")
    ui.button("輝く黒曜石\n§8minecraft:glowingobsidian","textures/blocks/glowing_obsidian")
    ui.button("ストーンカッター (旧)\n§8minecraft:stonecutter","textures/blocks/stonecutter_side")
    ui.button("カメラ (エンティティ)\n§8minecraft:camera","textures/blocks/camera_front")
    ui.button("カメラ (ブロック)\n§8minecraft:item.camera","textures/blocks/camera_front")
    ui.button("§　info_update\n§8minecraft:info_update","textures/blocks/missing_tile")
    ui.button("§　info_update2\n§8minecraft:info_update2","textures/blocks/missing_tile")
    ui.button("§　reserved6\n§8minecraft:reserved6","textures/blocks/missing_tile")
    ui.button("不明\n§8minecraft:unknown","textures/blocks/missing_tile")
    ui.button("不可視の岩盤\n§8minecraft:invisible_bedrock","textures/blocks/stone")
    ui.button("重なった滑らかな石ハーフブロック\n§8double_stone_block_slab","textures/blocks/stone_slab_side")
    ui.button("エンドポータル\n§8minecraft:end_portal","textures/blocks/end_portal")
    ui.button("エンドゲートウェイ\n§8minecraft:end_gateway","textures/blocks/end_gateway")
    ui.button("ネザーポータル\n§8minecraft:portal","textures/blocks/portal_placeholder")
    ui.button("レッドストーン ワイヤー\n§8minecraft:redstone_wire","textures/blocks/redstone_dust_cross")
    ui.button("火\n§8minecraft:fire","textures/blocks/fire_0_placeholder")
    ui.button("魂の火\n§8minecraft:soul_fire","textures/blocks/fire_0_placeholder")
    ui.button("水\n§8minecraft:water","textures/blocks/water_placeholder")
    ui.button("流れる水\n§8minecraft:flowing_water","textures/blocks/water_placeholder")
    ui.button("溶岩\n§8minecraft:lava","textures/blocks/lava_placeholder")
    ui.button("流れる溶岩\n§8minecraft:flowing_lava","textures/blocks/lava_placeholder")
    ui.button("氷霜\n§8minecraft:frosted_ice","textures/blocks/frosted_ice_0")
    ui.button("§　client_request_placeholder_block","textures/blocks/missing_tile")
    ui.show(source).then(({canceled, selection}) => {
      if (canceled) return
      const inventory = source.getComponent("inventory").container

      if (selection === 0) { 
        const ui = new ModalFormData()
        ui.title("Hidden Item Giver")
        ui.textField("入手したいアイテムIDを入力してください！","")
        ui.show(source).then(({canceled, formValues}) => {
          if (canceled) return
          try {
            inventory.addItem(new ItemStack(formValues[0]))
            source.sendMessage("§a入手しました！")
          } catch(e) {
            source.sendMessage("§cIDが間違っています！")
          }
        })
        return
      }
      if (selection === 1) { inventory.addItem(new ItemStack("minecraft:netherreactor")) }
      if (selection === 2) { inventory.addItem(new ItemStack("minecraft:glowingobsidian")) }
      if (selection === 3) { inventory.addItem(new ItemStack("minecraft:stonecutter")) }
      if (selection === 4) { inventory.addItem(new ItemStack("minecraft:camera")) }
      if (selection === 5) { inventory.addItem(new ItemStack("minecraft:item.camera")) }
      if (selection === 6) { inventory.addItem(new ItemStack("minecraft:info_update")) }
      if (selection === 7) { inventory.addItem(new ItemStack("minecraft:info_update2")) }
      if (selection === 8) { inventory.addItem(new ItemStack("minecraft:reserved6")) }
      if (selection === 9) { inventory.addItem(new ItemStack("minecraft:unknown")) }
      if (selection === 10) { inventory.addItem(new ItemStack("minecraft:invisible_bedrock")) }
      if (selection === 11) { inventory.addItem(new ItemStack("minecraft:double_stone_block_slab")) }
      if (selection === 12) { inventory.addItem(new ItemStack("minecraft:end_portal")) }
      if (selection === 13) { inventory.addItem(new ItemStack("minecraft:end_gateway")) }
      if (selection === 14) { inventory.addItem(new ItemStack("minecraft:portal")) }
      if (selection === 15) { inventory.addItem(new ItemStack("minecraft:redstone_wire")) }
      if (selection === 16) { inventory.addItem(new ItemStack("minecraft:fire")) }
      if (selection === 17) { inventory.addItem(new ItemStack("minecraft:soul_fire")) }
      if (selection === 18) { inventory.addItem(new ItemStack("minecraft:water")) }
      if (selection === 19) { inventory.addItem(new ItemStack("minecraft:flowing_water")) }
      if (selection === 20) { inventory.addItem(new ItemStack("minecraft:lava")) }
      if (selection === 21) { inventory.addItem(new ItemStack("minecraft:flowing_lava")) }
      if (selection === 22) { inventory.addItem(new ItemStack("minecraft:frosted_ice")) }
      if (selection === 23) { inventory.addItem(new ItemStack("minecraft:client_request_placeholder_block")) }
      source.sendMessage("§a入手しました！")
    })
    return
  }
})
