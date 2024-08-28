import { world, system } from '@minecraft/server'
import { ActionFormData, ModalFormData } from '@minecraft/server-ui'

// index.js
import { sellPercent } from './percent.js';

//Ores and Rare Items
const OresAndRaresType = [{
  textures: "textures/items/clay_ball",
  name: "Clay",
  cost: 90,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "clay_ball",
},
{
  textures: "textures/items/flint",
  name: "Flint",
  cost: 100,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "minecraft:flint",
},
{
  textures: "textures/items/quartz",
  name: "Quartz",
  cost: 190,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "quartz",
},
{
  textures: "textures/items/coal",
  name: "Coal",
  cost: 90,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "coal",
},
{
  textures: "textures/items/amethyst_shard",
  name: "Amethyst Shard",
  cost: 90,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "amethyst_shard",
},
{
  textures: "textures/items/dye_powder_blue",
  name: "Lapis",
  cost: 130,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "Lapis_lazuli",
},
{
  textures: "textures/items/redstone_dust",
  name: "Redstone",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "redstone",
},
{
  textures: "textures/items/copper_ingot",
  name: "Copper",
  cost: 130,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "copper_ingot",
},
{
  textures: "textures/items/gold_ingot",
  name: "Gold",
  cost: 590,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "gold_ingot",
},
{
  textures: "textures/items/iron_ingot",
  name: "Iron",
  cost: 180,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "iron_ingot",
},
{
  textures: "textures/items/emerald",
  name: "Emerald",
  cost: 550,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "emerald",
},
{
  textures: "textures/items/diamond",
  name: "Diamond",
  cost: 5500,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "diamond",
},
{
  textures: "textures/items/netherite_ingot",
  name: "Netherite",
  cost: 41510,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "netherite_ingot",
},
{
  textures: "textures/items/echo_shard",
  name: "Echo Shard",
  cost: 920,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "echo_shard",
},
{
  textures: "textures/blocks/sculk_sensor_side",
  name: "Sculk Sensor",
  cost: 880,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "sculk_sensor",
},
{
  textures: "textures/items/nether_star",
  name: "Nether Star",
  cost: 300000,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "nether_star",
},
{
  textures: "textures/blocks/obsidian",
  name: "Obsidian",
  cost: 1300,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "obsidian",
},
{
  textures: "textures/blocks/crying_obsidian",
  name: "Crying Obsidian",
  cost: 3920,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "crying_obsidian",
},
{
  textures: "textures/items/experience_bottle",
  name: "Experience Bottle",
  cost: 100,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "experience_bottle",
},
];

const UtilitiesType = [{
  textures: "textures/items/snowball",
  name: "Snowball",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "snowball",
},
{
  textures: "textures/items/saddle",
  name: "Saddle",
  cost: 1100,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "saddle",
},
{
  textures: "textures/items/trident",
  name: "Trident",
  cost: 790,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "trident",
},
{
  textures: "textures/items/elytra",
  name: "Elytra",
  cost: 60000,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "elytra",
},
{
  textures: "textures/items/netherite_upgrade_smithing_template",
  name: "Netherite Template",
  cost: 15000,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "netherite_upgrade_smithing_template",
},
{
  textures: "textures/items/bucket_milk",
  name: "Milk Bucket",
  cost: 610,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "milk_bucket",
},
{
  textures: "textures/items/bucket_water",
  name: "Water Bucket",
  cost: 610,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "water_bucket",
},
{
  textures: "textures/items/bucket_lava",
  name: "Lava Bucket",
  cost: 620,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "lava_bucket",
},
{
  textures: "textures/items/bucket_cod",
  name: "Cod Bucket",
  cost: 670,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cod_bucket",
},
{
  textures: "textures/items/bucket_salmon",
  name: "Salmon Bucket",
  cost: 670,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "salmon_bucket",
},
{
  textures: "textures/items/bucket_tropical",
  name: "Tropical Bucket",
  cost: 670,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "tropical_fish_bucket",
},
{
  textures: "textures/items/bucket_pufferfish",
  name: "Pufferfish Bucket",
  cost: 670,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pufferfish_bucket",
},
{
  textures: "textures/items/bucket_powder_snow",
  name: "Powdered Snow Bucket",
  cost: 630,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "powder_snow_bucket",
},
{
  textures: "textures/items/bucket_tadpole",
  name: "Tadpole Bucket",
  cost: 550,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "tadpole_bucket",
},
{
  textures: "textures/items/bucket_axolotl",
  name: "Axolotl Bucket",
  cost: 670,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "axolotl_bucket",
},
];

const MobDropsType = [{
  textures: "textures/items/rotten_flesh",
  name: "Rotten Flesh",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "rotten_flesh",
},
{
  textures: "textures/items/bone",
  name: "Bone",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "bone",
},
{
  textures: "textures/items/spider_eye",
  name: "Spider Eye",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "spider_eye",
},
{
  textures: "textures/items/leather",
  name: "Leather",
  cost: 50,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "leather",
},
{
  textures: "textures/items/rabbit_hide",
  name: "Rabbit Hide",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "rabbit_hide",
},
{
  textures: "textures/items/rabbit_foot",
  name: "Rabbot Foot",
  cost: 220,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "rabbit_foot",
},
{
  textures: "textures/items/string",
  name: "String",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "string",
},
{
  textures: "textures/items/feather",
  name: "Feather",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "feather",
},
{
  textures: "textures/items/gunpowder",
  name: "Gunpowder",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "gunpowder",
},
{
  textures: "textures/items/glowstone_dust",
  name: "Glowstone Dust",
  cost: 90,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "glowstone_dust",
},
{
  textures: "textures/items/egg",
  name: "Egg",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "egg",
},
{
  textures: "textures/items/slimeball",
  name: "Slimeball",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "slime_ball",
},
{
  textures: "textures/items/turtle_shell_piece",
  name: "Scute",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "scute",
},
{
  textures: "textures/items/ender_pearl",
  name: "Ender Pearl",
  cost: 550,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "ender_pearl",
},
{
  textures: "textures/items/phantom_membrane",
  name: "Phantom Membrane",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "phantom_membrane",
},
{
  textures: "textures/items/dye_powder_black",
  name: "Ink Sac",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "ink_sac",
},
{
  textures: "textures/items/dye_powder_glow",
  name: "Glowing Ink Sac",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "glow_ink_sac",
},
{
  textures: "textures/items/ghast_tear",
  name: "Ghast Tear",
  cost: 830,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "ghast_tear",
},
{
  textures: "textures/items/shulker_shell",
  name: "Shulker Shell",
  cost: 340,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "shulker_shell",
},
{
  textures: "textures/items/blaze_rod",
  name: "Blaze Rod",
  cost: 1100,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "blaze_rod",
},
{
  textures: "textures/items/bone",
  name: "Wither Skeleton Skull",
  cost: 100000,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "skull",
},
{
  textures: "textures/items/heartofthesea_closed",
  name: "Heart Of The Sea",
  cost: 440,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "heart_of_the_sea",
},
{
  textures: "textures/items/nautilus",
  name: "Nautilus Shell",
  cost: 70,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "nautilus_shell",
},
{
  textures: "textures/items/prismarine_crystals",
  name: "Prismarine Crystals",
  cost: 830,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "prismarine_crystals",
},
{
  textures: "textures/items/prismarine_shard",
  name: "Prismarine Shard",
  cost: 550,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "prismarine_shard",
},
{
  textures: "textures/items/totem",
  name: "Totem",
  cost: 3200,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "totem_of_undying",
},
];

const FoodsAndGrowablesType = [{
  textures: "textures/items/fish_raw",
  name: "Cod",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cod",
},
{
  textures: "textures/items/fish_salmon_raw",
  name: "Salmon",
  cost: 40,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "salmon",
},
{
  textures: "textures/items/fish_clownfish_raw",
  name: "Tropical FIsh",
  cost: 120,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "tropical_fish",
},
{
  textures: "textures/items/fish_pufferfish_raw",
  name: "Pufferfish",
  cost: 550,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pufferfish",
},
{
  textures: "textures/items/rabbit_raw",
  name: "Raw Rabbit",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "rabbit",
},
{
  textures: "textures/items/mutton_raw",
  name: "Raw Mutton",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "mutton",
},
{
  textures: "textures/items/porkchop_raw",
  name: "Raw Porkchop",
  cost: 40,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "porkchop",
},
{
  textures: "textures/items/chicken_raw",
  name: "Raw Chicken",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "chicken",
}, {
  textures: "textures/items/beef_raw",
  name: "Raw Beef",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "beef",
},
{
  textures: "textures/items/potato",
  name: "Potato",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "potato",
},
{
  textures: "textures/items/carrot",
  name: "Carrot",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "carrot",
},
{
  textures: "textures/items/apple",
  name: "Apple",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "apple",
},
{
  textures: "textures/items/apple_golden",
  name: "Enchanted Apple",
  cost: 46000,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "enchanted_golden_apple",
},
{
  textures: "textures/items/sweet_berries",
  name: "Sweet Berries",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "sweet_berries",
},
{
  textures: "textures/items/glow_berries",
  name: "Glow Berries",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "glow_berries",
},
{
  textures: "textures/items/torchflower_seeds",
  name: "Torchflower Seeds",
  cost: 90,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "torchflower_seeds",
},
{
  textures: "textures/blocks/chorus_flower",
  name: "Chorus Flower",
  cost: 275,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "chorus_flower",
},
{
  textures: "textures/items/chorus_fruit",
  name: "Chorus Fruit",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "chorus_fruit",
},
{
  textures: "textures/blocks/mushroom_red",
  name: "Red Mushroom",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "red_mushroom",
},
{
  textures: "textures/blocks/mushroom_brown",
  name: "Brown Mushroom",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "brown_mushroom",
},
{
  textures: "textures/blocks/warped_fungus",
  name: "Warped Fungus",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "warped_fungus",
},
{
  textures: "textures/blocks/crimson_fungus",
  name: "Crimson Fungus",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "crimson_fungus",
},
{
  textures: "textures/items/kelp",
  name: "Kelp",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "kelp",
},
{
  textures: "textures/items/reeds",
  name: "Sugar Cane",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "sugar_cane",
},
{
  textures: "textures/items/bamboo",
  name: "Bamboo",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "bamboo",
},
{
  textures: "textures/blocks/cactus_top",
  name: "Cactus",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cactus",
},
{
  textures: "textures/items/nether_wart",
  name: "Nether Wart",
  cost: 170,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "nether_wart",
},
{
  textures: "textures/items/seeds_wheat",
  name: "Seeds",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "wheat_seeds",
},
{
  textures: "textures/items/seeds_pumpkin",
  name: "Pumpkin Seeds",
  cost: 50,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pumpkin_seeds",
},
{
  textures: "textures/items/seeds_melon",
  name: "Melon Seeds",
  cost: 50,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "melon_seeds",
},
{
  textures: "textures/items/seeds_beetroot",
  name: "Beetroot Seeds",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "beetroot_seeds",
},
{
  textures: "textures/items/dye_powder_brown",
  name: "Cocoa Seeds",
  cost: 50,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cocoa_beans",
},
{
  textures: "textures/blocks/pointed_dripstone_down_tip",
  name: "Pointed Dripstone",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pointed_dripstone",
},
{
  textures: "textures/items/dye_powder_white",
  name: "Bone Meal",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "bone_meal",
},
];

const PotionsType = [{
  textures: "textures/items/potion_bottle_nightVision",
  name: "Night Vision 8min",
  cost: 900,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 6,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_invisibility",
  name: "Invisibility 8min",
  cost: 1150,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 8,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_jump",
  name: "Jump Boost 8min",
  cost: 900,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 10,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_fireResistance",
  name: "Fire Resistance 8min",
  cost: 510,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 13,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_moveSpeed",
  name: "Speed Boost 8min",
  cost: 900,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 15,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_moveSpeed",
  name: "Slowness 8min",
  cost: 900,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 18,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_waterBreathing",
  name: "Water Breathing 8min",
  cost: 300,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 20,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_waterBreathing",
  name: "Instant Health 2",
  cost: 900,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 22,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_regeneration",
  name: "Regeneration 1.5min",
  cost: 900,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 29,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_resistance",
  name: "Strength 8min",
  cost: 900,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 32,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_weakness",
  name: "Weakness 8min",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 35,
  item: "potion",
},
{
  textures: "textures/items/potion_bottle_slowFall",
  name: "Slow Falling",
  cost: 590,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 41,
  item: "potion",
},
{
  textures: "textures/items/experience_bottle",
  name: "XP Bottle",
  cost: 250,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "experience_bottle",
},
];

const BooksType = [{
  textures: "textures/items/book_enchanted",
  name: "Aqua Affinity I",
  enchant: "aqua_affinity 1",
  cost: 900,
},
{
  textures: "textures/items/book_enchanted",
  name: "Bane Of Arthropods V",
  enchant: "bane_of_arthropods 5",
  cost: 900,
},
{
  textures: "textures/items/book_enchanted",
  name: "Blast Protection IV",
  enchant: "blast_protection 4",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Channeling I",
  enchant: "channeling 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Curse of Binding I",
  enchant: "binding 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Curse of Vanishing I",
  enchant: "vanishing 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Depth Strider III",
  enchant: "depth_strider 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Efficiency III",
  enchant: "efficiency 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Efficiency V",
  enchant: "efficiency 5",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Feather Falling IV",
  enchant: "feather_falling 4",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Fire Aspect II",
  enchant: "fire_aspect 2",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Fire Protection IV",
  enchant: "fire_protection 4",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Flame I",
  enchant: "flame 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Fortune III",
  enchant: "fortune 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Frost Walker II",
  enchant: "frost_walker 2",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Impaling V",
  enchant: "impaling 5",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Infinity I",
  enchant: "infinity 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Knockback II",
  enchant: "knockback 2",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Looting III",
  enchant: "looting 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Loyalty III",
  enchant: "loyalty 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Luck of the Sea III",
  enchant: "luck_of_the_sea 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Mending I",
  enchant: "mending 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Multishot I",
  enchant: "multishot 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Piercing III",
  enchant: "piercing 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Power V",
  enchant: "power 5",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Projectile Protection IV",
  enchant: "projectile_protection 4",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Protection IV",
  enchant: "protection 4",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Punch II",
  enchant: "punch 2",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Quick Charge III",
  enchant: "quick_charge 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Respiration III",
  enchant: "respiration 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Riptide III",
  enchant: "riptide 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Sharpness V",
  enchant: "sharpness 5",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Silk Touch I",
  enchant: "silk_touch 1",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Smite V",
  enchant: "smite 5",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Soul Speed III",
  enchant: "soul_speed 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Swift Sneak III",
  enchant: "swift_sneak 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Thorns III",
  enchant: "thorns 3",
  cost: 900
},
{
  textures: "textures/items/book_enchanted",
  name: "Unbreaking 3",
  enchant: "unbreaking 3",
  cost: 900,
},
];

const TreesAndGrassType = [{
  textures: "textures/blocks/log_oak",
  name: "Oak Log",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "oak_log",
},
{
  textures: "textures/blocks/log_spruce",
  name: "Spruce Log",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "spruce_log",
},
{
  textures: "textures/blocks/log_birch",
  name: "Birch Log",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "birch_log",
},
{
  textures: "textures/blocks/log_jungle",
  name: "Jungle Log",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "jungle_log",
},
{
  textures: "textures/blocks/log_acacia",
  name: "Acacia Log",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "acacia_log",
},
{
  textures: "textures/blocks/log_big_oak",
  name: "Dark Oak",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "dark_oak_log",
},
{
  textures: "textures/blocks/mangrove_log_side",
  name: "Mangrove Log",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "mangrove_log",
},
{
  textures: "textures/blocks/cherry_log_side",
  name: "Cherry Log",
  cost: 220,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cherry_log",
},
{
  textures: "textures/blocks/huge_fungus/crimson_log_top",
  name: "Crimson Stem",
  cost: 130,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "crimson_stem",
},
{
  textures: "textures/blocks/huge_fungus/warped_stem_top",
  name: "Warped Stem",
  cost: 130,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "warped_stem",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Oak Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "leaves",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Spruce Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "leaves",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Birch Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 2,
  item: "leaves",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Jungle Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 3,
  item: "leaves",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Acacia Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "leaves2",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Dark Oak Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "leaves2",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Mangrove Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "mangrove_leaves",
},
{
  textures: "textures/blocks/cherry_leaves",
  name: "Cherry Leaves",
  cost: 40,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cherry_leaves",
},
{
  textures: "textures/blocks/azalea_leaves",
  name: "Azalea Leaves",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "azalea_leaves",
},
{
  textures: "textures/blocks/azalea_leaves_flowers",
  name: "Flowering Azalea Leaves",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "azalea_leaves_flowered",
},
{
  textures: "textures/blocks/sapling_oak.png",
  name: "Oak Sapling",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "sapling",
},
{
  textures: "textures/blocks/sapling_spruce.png",
  name: "Spruce Sapling",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "sapling",
},
{
  textures: "textures/blocks/sapling_birch.png",
  name: "Birch Sapling",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 2,
  item: "sapling",
},
{
  textures: "textures/blocks/sapling_jungle.png",
  name: "Jungle Sapling",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 3,
  item: "sapling",
},
{
  textures: "textures/blocks/sapling_acacia.png",
  name: "Acacia Sapling",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 4,
  item: "sapling",
},
{
  textures: "textures/blocks/sapling_roofed_oak.png",
  name: "Dark Oak Sapling",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 5,
  item: "sapling",
},
{
  textures: "textures/items/mangrove_propagule.png",
  name: "Mangrove Propagule",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "mangrove_propagule",
},
{
  textures: "textures/blocks/cherry_sapling.png",
  name: "Cherry Sapling",
  cost: 40,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cherry_sapling",
},
{
  textures: "textures/blocks/double_plant_fern_carried",
  name: "Tall Grass",
  cost: 2,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 2,
  item: "double_plant",
},
{
  textures: "textures/blocks/double_plant_grass_carried",
  name: "Grass",
  cost: 2,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "tallgrass",
},
{
  textures: "textures/blocks/nether_sprouts",
  name: "Nether Sprout",
  cost: 2,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "nether_sprouts",
},
{
  textures: "textures/blocks/weeping_vines_base",
  name: "Weeping Vines",
  cost: 2,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "weeping_vines",
},
{
  textures: "textures/blocks/vine_carried",
  name: "Vines",
  cost: 2,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "vine",
},
{
  textures: "textures/blocks/twisting_vines_base",
  name: "Twisting Vines",
  cost: 2,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "twisting_vines",
},
{
  textures: "textures/blocks/carried_waterlily",
  name: "Lily Pad",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "waterlily",
},
{
  textures: "textures/blocks/seagrass_carried",
  name: "Sea Grass",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "seagrass",
},
{
  textures: "textures/blocks/moss_block",
  name: "Moss Block",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "moss_block",
},
{
  textures: "textures/blocks/big_dripleaf_top",
  name: "Big Dripleaf",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "big_dripleaf",
},
{
  textures: "textures/blocks/small_dripleaf_top",
  name: "Small Dripleaf",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "small_dripleaf_block",
},
];
const FlowersAndDyesType = [{
  textures: "textures/blocks/flower_rose",
  name: "Poppy",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_blue_orchid",
  name: "Blue Orchid",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_allium",
  name: "Allium",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 2,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_houstonia",
  name: "Azure Bluet",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 3,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_tulip_red",
  name: "Red Tulip",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 4,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_tulip_orange",
  name: "Orange Tulip",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 5,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_tulip_white",
  name: "White Tulip",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 6,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_tulip_pink",
  name: "Pink Tulip",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 7,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_oxeye_daisy",
  name: "Oxeye Daisy",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 8,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_cornflower",
  name: "Cornflower",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 9,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_lily_of_the_valley",
  name: "Lily Of The Valley",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 10,
  item: "red_flower",
},
{
  textures: "textures/blocks/flower_dandelion",
  name: "Dandelion",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "yellow_flower",
},
{
  textures: "textures/blocks/double_plant_sunflower_front",
  name: "Sunflower",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "double_plant",
},
{
  textures: "textures/blocks/double_plant_paeonia_bottom",
  name: "Lilac",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "double_plant",
},
{
  textures: "textures/blocks/double_plant_rose_top",
  name: "Rose Bush",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 4,
  item: "double_plant",
},
{
  textures: "textures/blocks/double_plant_paeonia_top",
  name: "Peony",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 5,
  item: "double_plant",
},
{
  textures: "textures/blocks/pitcher_crop_top_stage_4",
  name: "Pitcher Plant",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pitcher_plant",
},
{
  textures: "textures/items/pink_petals",
  name: "Pink Petals",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pink_petals",
},
{
  textures: "textures/blocks/flower_wither_rose",
  name: "Wither Rose",
  cost: 2250,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "wither_rose",
},
{
  textures: "textures/blocks/torchflower",
  name: "Torchflower",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "torchflower",
},
{
  textures: "textures/blocks/crimson_roots",
  name: "Crimson Roots",
  cost: 1,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "crimson_roots",
},
{
  textures: "textures/blocks/warped_roots",
  name: "Warped Roots",
  cost: 1,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "warped_roots",
},
{
  textures: "textures/items/dye_powder_white_new",
  name: "White Dye",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "white_dye",
},
{
  textures: "textures/items/dye_powder_silver",
  name: "Light Gray Dye",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "light_gray_dye",
},
{
  textures: "textures/items/dye_powder_gray",
  name: "Gray Dye",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "gray_dye",
},
{
  textures: "textures/items/dye_powder_black_new",
  name: "Black Dye",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "black_dye",
},
{
  textures: "textures/items/dye_powder_brown_new",
  name: "Brown Dye",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "brown_dye",
},
{
  textures: "textures/items/dye_powder_red",
  name: "Red Dye",
  cost: 60,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "red_dye",
},
{
  textures: "textures/items/dye_powder_orange",
  name: "Orange Dye",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "orange_dye",
},
{
  textures: "textures/items/dye_powder_yellow",
  name: "Yellow Dye",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "yellow_dye",
},
{
  textures: "textures/items/dye_powder_lime",
  name: "Lime Dye",
  cost: 40,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "lime_dye",
},
{
  textures: "textures/items/dye_powder_green",
  name: "Green Dye",
  cost: 70,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "green_dye",
},
{
  textures: "textures/items/dye_powder_cyan",
  name: "Cyan Dye",
  cost: 50,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cyan_dye",
},
{
  textures: "textures/items/dye_powder_light_blue",
  name: "Light Blue Dye",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "light_blue_dye",
},
{
  textures: "textures/items/dye_powder_blue_new",
  name: "Blue Dye",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "blue_dye",
},
{
  textures: "textures/items/dye_powder_purple",
  name: "Purple Dye",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "purple_dye",
},
{
  textures: "textures/items/dye_powder_magenta",
  name: "Magenta Dye",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "magenta_dye",
},
{
  textures: "textures/items/dye_powder_pink",
  name: "Pink Dye",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pink_dye",
},
]
const ConcreteType = [{
  textures: "textures/blocks/concrete_white",
  name: "White Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "white_concrete",
},
{
  textures: "textures/blocks/concrete_silver",
  name: "Light Gray Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "light_gray_concrete",
},
{
  textures: "textures/blocks/concrete_gray",
  name: "Gray Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "gray_concrete",
},
{
  textures: "textures/blocks/concrete_black",
  name: "Black Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "black_concrete",
},
{
  textures: "textures/blocks/concrete_brown",
  name: "Brown Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "brown_concrete",
},
{
  textures: "textures/blocks/concrete_red",
  name: "Red Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "red_concrete",
},
{
  textures: "textures/blocks/concrete_orange",
  name: "Orange Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "orange_concrete",
},
{
  textures: "textures/blocks/concrete_yellow",
  name: "Yellow Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "yellow_concrete",
},
{
  textures: "textures/blocks/concrete_lime",
  name: "Lime Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "lime_concrete",
},
{
  textures: "textures/blocks/concrete_green",
  name: "Green Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "green_concrete",
},
{
  textures: "textures/blocks/concrete_cyan",
  name: "Cyan Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cyan_concrete",
},
{
  textures: "textures/blocks/concrete_light_blue",
  name: "Light Blue Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "light_blue_concrete",
},
{
  textures: "textures/blocks/concrete_blue",
  name: "Blue Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "blue_concrete",
},
{
  textures: "textures/blocks/concrete_purple",
  name: "Purple Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "purple_concrete",
},
{
  textures: "textures/blocks/concrete_magenta",
  name: "Magenta Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "magenta_concrete",
},
{
  textures: "textures/blocks/concrete_pink",
  name: "Pink Concrete",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pink_concrete",
},

]
const GeneralBlocksType = [{
  textures: "textures/blocks/sand",
  name: "Sand",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "sand",
},
{
  textures: "textures/blocks/red_sand",
  name: "Red Sand",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "sand",
},
{
  textures: "textures/blocks/gravel",
  name: "Gravel",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "gravel",
},
{
  textures: "textures/blocks/soul_sand",
  name: "Soul Sand",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "soul_sand",
},
{
  textures: "textures/blocks/soul_soil",
  name: "Soul Soil",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "soul_soil",
},
{
  textures: "textures/blocks/dirt",
  name: "Dirt",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "dirt",
},
{
  textures: "textures/blocks/dirt_with_roots",
  name: "Rooted Dirt",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "dirt_with_roots",
},
{
  textures: "textures/blocks/dirt_podzol_side",
  name: "Podzol",
  cost: 30,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "podzol",
},
{
  textures: "textures/blocks/mycelium_side",
  name: "Mycelium",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "mycelium",
},
{
  textures: "textures/blocks/mud",
  name: "Mud",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "mud",
},
{
  textures: "textures/blocks/warped_wart_block",
  name: "Warped Wart Block",
  cost: 170,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "warped_wart_block",
},
{
  textures: "textures/blocks/warped_nylium_side",
  name: "Warped Nylium",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "warped_nylium",
},
{
  textures: "textures/blocks/crimson_nylium_side",
  name: "Crimson Nylium",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "crimson_nylium",
},
{
  textures: "textures/blocks/netherrack",
  name: "Netherrack",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "netherrack",
},
{
  textures: "textures/blocks/cobblestone",
  name: "Cobblestone",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cobblestone",
},
{
  textures: "textures/blocks/stone_granite",
  name: "Granite",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 1,
  item: "stone",
},
{
  textures: "textures/blocks/stone_diorite",
  name: "Diorite",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 3,
  item: "stone",
},
{
  textures: "textures/blocks/stone_andesite",
  name: "Andesite",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 5,
  item: "Stone",
},
{
  textures: "textures/blocks/blackstone",
  name: "Blackstone",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "blackstone",
},
{
  textures: "textures/blocks/deepslate/cobbled_deepslate",
  name: "Cobbled Deepslate",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "cobbled_deepslate",
},
{
  textures: "textures/blocks/calcite",
  name: "Calcite",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "calcite",
},
{
  textures: "textures/blocks/tuff",
  name: "Tuff",
  cost: 10,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "tuff",
},
{
  textures: "textures/blocks/hardened_clay",
  name: "Terracotta",
  cost: 160,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "hardened_clay",
},
{
  textures: "textures/blocks/budding_amethyst",
  name: "Budding Amethyst",
  cost: 590,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "budding_amethyst",
},
{
  textures: "textures/blocks/dripstone_block",
  name: "Dripstone Block",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "dripstone_block",
},
{
  textures: "textures/blocks/end_stone",
  name: "Endstone",
  cost: 110,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "end_stone",
},
{
  textures: "textures/blocks/sponge",
  name: "Sponge",
  cost: 120,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "sponge",
},
{
  textures: "textures/blocks/shroomlight",
  name: "Shroomlight",
  cost: 440,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "shroomlight",
},
{
  textures: "textures/blocks/pearlescent_froglight_side",
  name: "Pearlescent Froglight",
  cost: 590,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "pearlescent_froglight",
},
{
  textures: "textures/blocks/ochre_froglight_side",
  name: "Ochre Froglight",
  cost: 590,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "ochre_froglight",
},
{
  textures: "textures/blocks/verdant_froglight_side",
  name: "Verdant Froglight",
  cost: 590,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "verdant_froglight",
},
{
  textures: "textures/blocks/glass",
  name: "Glass",
  cost: 20,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "glass",
},
{
  textures: "textures/blocks/ice",
  name: "Ice",
  cost: 80,
  get sell() { 
    const calculatedSell = Math.floor(this.cost * sellPercent); 
    return calculatedSell >= 1 ? calculatedSell : 1;
  },
  data: 0,
  item: "ice",
},
]

world.beforeEvents.itemUse.subscribe(eventData => {
  const player = eventData.source
  if (eventData.itemStack.typeId == 'mv:shop') {
    system.run(() => {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      player.runCommand('scoreboard objectives add money dummy')
    })
  }
})

function rec(player, objective, min, max) {
  if (min == max) { return min }  //return player score
  const middle = min + Math.floor((max - min) / 2)
  const p1 = world.getPlayers({ name: player.name, scoreOptions: [{ objective: objective, minScore: min, maxScore: middle }] })
  if (p1.length === 1) { return rec(player, objective, min, middle) } //if player score is in lower half of score spectrum -> recursive call with lower half as bounds
  else { return rec(player, objective, middle + 1, max) } //if player score is in upper half of score spectrum -> recursive call with upper half as bounds
}

function getScore(player, objective) {
  const p1 = world.getPlayers({ name: player.name, scoreOptions: [{ objective: objective, minScore: -2147483648, maxScore: 2147483647 }] })
  if (p1.length === 0) { return 0 } //test if player has entry on the scoreboard, if not return 0
  return rec(player, objective, -2147483648, 2147483647)  //call function to get score with * * as min and max
}

function Menu(player) {
  const form = new ActionFormData()
  const score = getScore(player, "money");
  form.title(`§9§lSHOP | You have §q$${score}`)
  form.button('How to use shop', 'textures/ui/book_shiftright_default')
  form.button('Ores & Rare Items', 'textures/items/diamond')
  form.button('Utilities', 'textures/items/elytra')
  form.button('Mob Drops', 'textures/items/ender_pearl')
  form.button('Foods & Growables', 'textures/items/apple')
  form.button('Potions', 'textures/items/potion_bottle_jump')
  form.button('Trees & Grass', 'textures/blocks/sapling_oak')
  form.button('Flowers & Dyes', 'textures/blocks/flower_rose')
  form.button('Concrete', 'textures/blocks/concrete_magenta')
  form.button('General Blocks', 'textures/blocks/cobblestone')
  form.show(player).then(result => {
    if (result.selection >= 0 && result.selection <= 9 || result.canceled) { player.runCommand('playsound item.book.page_turn @s ~~+1~') }
    if (result.selection == 0) { About(player) }
    if (result.selection == 1) { OresAndRares(player) }
    if (result.selection == 2) { Utilities(player) }
    if (result.selection == 3) { MobDrops(player) }
    if (result.selection == 4) { FoodsAndGrowables(player) }
    if (result.selection == 5) { Potions(player) }
    if (result.selection == 6) { TreesAndGrass(player) }
    if (result.selection == 7) { FlowersAndDyes(player) }
    if (result.selection == 8) { Concrete(player) }
    if (result.selection == 9) { GeneralBlocks(player) }
  })
}

//About
function About(player) {
  const form = new ActionFormData()
  const score = getScore(player, "money")
  form.title(`§9§lCash: §q$${score} - §sInformation!`)
  form.body(`--------------------------------\n             §3Welcome to SHOP!\n§f--------------------------------
  \n§fUse gamepad back button or ESC to navigate back
  \nShop sells base items & non-craftables with some exceptions for convenience
  \n\n`)
  form.button(`Ok!`)
  form.show(player).then(result => {
    if (result.selection == 0 || result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    }
  })
}

//OresAndRares
function OresAndRares(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sOres & Rares`)
  for (const item of OresAndRaresType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < OresAndRaresType.length) {
      const item = OresAndRaresType[result.selection]
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sOres & Rares`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(result2 => {
        if (result2.canceled) {
          OresAndRares(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          let dataCost = item.cost * result2.formValues[0]
          let dataSell = item.sell * result2.formValues[0]
          if (result2.formValues[1] == true) {
            //conditions for selling done with logic in execute commands
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${result2.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${result2.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${result2.formValues[0]}`)
          }
          if (result2.formValues[1] == false) {
            //conditions for buying done with logic in execute commands
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${result2.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${result2.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//UtilitiesType
function Utilities(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sUtilities`)
  for (const item of UtilitiesType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < UtilitiesType.length) {
      const item = UtilitiesType[result.selection]
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sUtilities`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(res => {
        if (res.canceled) {
          Utilities(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          let dataCost = item.cost * res.formValues[0]
          let dataSell = item.sell * res.formValues[0]
          if (res.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell or the item(s) are damaged"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${res.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${res.formValues[0]}`)
          }
          if (res.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${res.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${res.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//MobDropsType
function MobDrops(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sMobs & Drops`)
  for (const item of MobDropsType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < MobDropsType.length) {
      const item = MobDropsType[result.selection];
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sMobs & Drops`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false);
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(result2 => {
        if (result2.canceled) {
          MobDrops(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          const dataCost = item.cost * result2.formValues[0]
          const dataSell = item.sell * result2.formValues[0]
          if (result2.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${result2.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${result2.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${result2.formValues[0]}`)
          }
          if (result2.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${result2.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${result2.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//PotionsType
function Potions(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sPotions`)
  for (const item of PotionsType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < PotionsType.length) {
      const item = PotionsType[result.selection];
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sPotions`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false);
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(result2 => {
        if (result2.canceled) {
          Potions(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          const dataCost = item.cost * result2.formValues[0]
          const dataSell = item.sell * result2.formValues[0]
          if (result2.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${result2.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${result2.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${result2.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${result2.formValues[0]}`)
          }
          if (result2.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${result2.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${result2.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//FoodsAndGrowablesType
function FoodsAndGrowables(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sFood & Growable`)
  for (const item of FoodsAndGrowablesType)
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < FoodsAndGrowablesType.length) {
      const item = FoodsAndGrowablesType[result.selection]
      const form2 = new ModalFormData()
        .title(`§9§lCash: §q$${score} - §sFoods & Growables`)
        .slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
        .toggle('§cBuy §f/§a Sell', false)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(res => {
        if (res.canceled) {
          FoodsAndGrowables(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          const dataCost = item.cost * res.formValues[0]
          const dataSell = item.sell * res.formValues[0]
          if (res.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${res.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${res.formValues[0]}`)
          }
          if (res.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${res.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${res.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//TreesAndGrassType
function TreesAndGrass(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sTrees & Grass`)
  for (const item of TreesAndGrassType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < TreesAndGrassType.length) {
      const item = TreesAndGrassType[result.selection]
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sTrees & Grass`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(res => {
        if (res.canceled) {
          TreesAndGrass(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          const dataCost = item.cost * res.formValues[0]
          const dataSell = item.sell * res.formValues[0]
          if (res.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${res.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${res.formValues[0]}`)
          }
          if (res.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${res.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${res.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//FlowersAndDyesType
function FlowersAndDyes(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sFlowers & Dyes`)
  for (const item of FlowersAndDyesType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < FlowersAndDyesType.length) {
      const item = FlowersAndDyesType[result.selection]
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sFlowers & Dyes`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(res => {
        if (res.canceled) {
          FlowersAndDyes(player);
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          const dataCost = item.cost * res.formValues[0]
          const dataSell = item.sell * res.formValues[0]
          if (res.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${res.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${res.formValues[0]}`)
          }
          if (res.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${res.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${res.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//ConcreteType
function Concrete(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sConcrete`)
  for (const item of ConcreteType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < ConcreteType.length) {
      const item = ConcreteType[result.selection]
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sConcrete`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(res => {
        if (res.canceled) {
          Concrete(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          const dataCost = item.cost * res.formValues[0]
          const dataSell = item.sell * res.formValues[0]
          if (res.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${res.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${res.formValues[0]}`)
          }
          if (res.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${res.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${res.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

//GeneralBlocksType
function GeneralBlocks(player) {
  const form1 = new ActionFormData()
  const score = getScore(player, "money")
  form1.title(`§9§lCash: §q$${score} - §sGeneral Blocks`)
  for (const item of GeneralBlocksType) {
    form1.button(`§l${item.name}\n§r§aPrice: §f$${item.cost}`,
      `${item.textures}`)
  }
  form1.show(player).then(result => {
    if (result.canceled) {
      Menu(player)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
    } else if (result.selection < GeneralBlocksType.length) {
      const item = GeneralBlocksType[result.selection]
      const form2 = new ModalFormData()
      form2.title(`§9§lCash: §q$${score} - §sGeneral Blocks`)
      form2.slider(`\n§c§lBuy x1 ${item.name} = -$${item.cost}\n§a§lSell x1 ${item.name} = +$${item.sell}\n\n§6Amount`, 1, 64, 1)
      form2.toggle('§cBuy §f/§a Sell', false)
      player.runCommand('playsound item.book.page_turn @s ~~+1~')
      form2.show(player).then(res => {
        if (res.canceled) {
          GeneralBlocks(player)
          player.runCommand('playsound item.book.page_turn @s ~~+1~')
        } else {
          const dataCost = item.cost * res.formValues[0]
          const dataSell = item.sell * res.formValues[0]
          if (res.formValues[1] == true) {
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=!${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough items to sell"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run scoreboard players add @s money ${dataSell}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run tellraw @s {"rawtext":[{"text":"§r§6You have successfully sold §fx${res.formValues[0]} ${item.name} §a§l$${dataSell}"}]}`)
            player.runCommand(`execute if entity @s[hasitem={item=${item.item},quantity=${res.formValues[0]}..,data=${item.data}}] run clear @s ${item.item} ${item.data} ${res.formValues[0]}`)
          }
          if (res.formValues[1] == false) {
            player.runCommand(`execute if entity @s[scores={money=!${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You do not have enough money"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run gamerule sendcommandfeedback false`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run give @s ${item.item} ${res.formValues[0]} ${item.data}`)
             
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run tellraw @s {"rawtext":[{"text":"§r§6You have bought §fx${res.formValues[0]} ${item.name} §a§l$${dataCost}"}]}`)
            player.runCommand(`execute if entity @s[scores={money=${dataCost}..}] run scoreboard players remove @s money ${dataCost}`)
          }
        }
      })
    }
  })
}

export { Menu }