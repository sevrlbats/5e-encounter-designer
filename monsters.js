const MONSTER_DATA = [
  {
    "name": "Aboleth",
    "size": "Large",
    "type": "Aberration",
    "alignment": "Lawful Evil",
    "ac": 17,
    "hp": 150,
    "hpDice": "20d10 + 40",
    "speed": "10 ft., Swim 40 ft.",
    "str": 21,
    "dex": 9,
    "con": 15,
    "int": 18,
    "wis": 15,
    "cha": 18,
    "cr": "10",
    "xp": 5900,
    "initiative": 7,
    "senses": "Darkvision 120 ft.; Passive Perception 20",
    "languages": "Deep Speech; telepathy 120 ft.",
    "skills": "History +12, Perception +10",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The aboleth can breathe air and water."
      },
      {
        "name": "Eldritch Restoration",
        "description": "If destroyed, the aboleth gains a new body in 5d10 days, reviving with all its Hit Points in the Far Realm or another location chosen by the GM."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the aboleth fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Mucus Cloud",
        "description": "While underwater, the aboleth is surrounded by mucus. Constitution Saving Throw: DC 14, each creature in a 5-foot Emanation originating from the aboleth at the end of the aboleth’s turn. Failure: The target is cursed. Until the curse ends, the target’s skin becomes slimy, the target can breathe air and water, and it can’t regain Hit Points unless it is underwater. While the cursed creature is outside a body of water, the creature takes 6 (1d12) Acid damage at the end of every 10 minutes unless moisture is applied to its skin before those minutes have passed."
      },
      {
        "name": "Probing Telepathy",
        "description": "If a creature the aboleth can see communicates telepathically with the aboleth, the aboleth learns the creature’s greatest desires."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The aboleth makes two Tentacle attacks and uses either Consume Memories or Dominate Mind if available."
      },
      {
        "name": "Tentacle",
        "description": "Melee Attack Roll: +9, reach 15 ft. Hit: 12 (2d6 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of four tentacles."
      },
      {
        "name": "Consume Memories",
        "description": "Intelligence Saving Throw: DC 16, one creature within 30 feet that is Charmed or Grappled by the aboleth. Failure: 10 (3d6) Psychic damage. Success: Half damage. Failure or Success: The aboleth gains the target’s memories if the target is a Humanoid and is reduced to 0 Hit Points by this action."
      },
      {
        "name": "Dominate Mind (2/Day)",
        "description": "Wisdom Saving Throw: DC 16, one creature the aboleth can see within 30 feet. Failure: The target has the Charmed condition until the aboleth dies or is on a different plane of existence from the target. While Charmed, the target acts as an ally to the aboleth and is under its control while within 60 feet of it. In addition, the aboleth and the target can communicate telepathically with each other over any distance. The target repeats the save whenever it takes damage as well as after every 24 hours it spends at least 1 mile away from the aboleth, ending the effect on itself on a success."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Lash",
        "description": "The aboleth makes one Tentacle attack."
      },
      {
        "name": "Psychic Drain",
        "description": "If the aboleth has at least one creature Charmed or Grappled, it uses Consume Memories and regains 5 (1d10) Hit Points."
      }
    ]
  },
  {
    "name": "Adult Black Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 19,
    "hp": 195,
    "hpDice": "17d12 + 85",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 23,
    "dex": 14,
    "con": 21,
    "int": 14,
    "wis": 13,
    "cha": 19,
    "cr": "14",
    "xp": 11500,
    "initiative": 12,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +11, Stealth +7",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Acid Arrow (level 3 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 13 (2d6 + 6) Slashing damage plus 4 (1d8) Acid damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 18, each creature in a 60-foot-long, 5-footwide Line. Failure: 54 (12d8) Acid damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17, +9 to hit with spell attacks): At Will: Acid Arrow (level 3 version), Detect Magic, Fear 1/Day Each: Speak with Dead, Vitriolic Sphere"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Cloud of Insects",
        "description": "Dexterity Saving Throw: DC 17, one creature the dragon can see within 120 feet. Failure: 22 (4d10) Poison damage, and the target has Disadvantage on saving throws to maintain Concentration until the end of its next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Frightful Presence",
        "description": "The dragon uses Spellcasting to cast"
      },
      {
        "name": "Fear",
        "description": "The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack. 262 System Reference Document 5.2"
      }
    ]
  },
  {
    "name": "Adult Blue Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 19,
    "hp": 212,
    "hpDice": "17d12 + 102",
    "speed": "40 ft., Burrow 30 ft., Fly 80 ft.",
    "str": 25,
    "dex": 10,
    "con": 23,
    "int": 16,
    "wis": 15,
    "cha": 20,
    "cr": "16",
    "xp": 15000,
    "initiative": 10,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +12, Stealth +5",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Shatter."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +12, reach 10 ft. Hit: 16 (2d8 + 7) Slashing damage plus 5 (1d10) Lightning damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 19, each creature in a 90-foot-long, 5-foot- 264 System Reference Document 5.2 wide Line. Failure: 60 (11d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 18): At Will: Detect Magic, Invisibility, Mage Hand, Shatter 1/Day Each: Scrying, Sending"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Cloaked Flight",
        "description": "The dragon uses Spellcasting to cast Invisibility on itself, and it can fly up to half its Fly Speed. The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Sonic Boom",
        "description": "The dragon uses Spellcasting to cast Shatter. The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Tail Swipe",
        "description": "The dragon makes one Rend attack."
      }
    ]
  },
  {
    "name": "Adult Brass Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 18,
    "hp": 172,
    "hpDice": "15d12 + 75",
    "speed": "40 ft., Burrow 30 ft., Fly 80 ft.",
    "str": 23,
    "dex": 10,
    "con": 21,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "cr": "13",
    "xp": 10000,
    "initiative": 10,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "History +7, Perception +11, Persuasion +8, Stealth +5",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast Scorching Ray."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 17 (2d10 + 6) Slashing damage plus 4 (1d8) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 18, each creature in a 60-foot-long, 5-footwide Line. Failure: 45 (10d8) Fire damage. Success: Half damage."
      },
      {
        "name": "Sleep Breath",
        "description": "Constitution Saving Throw: DC 18, each creature in a 60-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure: The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it. 266 System Reference Document 5.2"
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 16): At Will: Detect Magic, Minor Illusion, Scorching Ray, Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), Speak with Animals 1/Day Each: Detect Thoughts, Control Weather"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Blazing Light",
        "description": "The dragon uses Spellcasting to cast Scorching Ray."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Scorching Sands",
        "description": "Dexterity Saving Throw: DC 16, one creature the dragon can see within 120 feet. Failure: 27 (6d8) Fire damage, and the target’s Speed is halved until the end of its next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      }
    ]
  },
  {
    "name": "Adult Bronze Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 18,
    "hp": 212,
    "hpDice": "17d12 + 102",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 25,
    "dex": 10,
    "con": 23,
    "int": 16,
    "wis": 15,
    "cha": 20,
    "cr": "15",
    "xp": 13000,
    "initiative": 10,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Insight +7, Perception +12, Stealth +5",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast Guiding Bolt (level 2 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +12, reach 10 ft. Hit: 16 (2d8 + 7) Slashing damage plus 5 (1d10) Lightning damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 19, each creature in a 90-foot-long, 5-footwide Line. Failure: 55 (10d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Repulsion Breath",
        "description": "Strength Saving Throw: DC 19, each creature in a 30-foot Cone. Failure: The target is pushed up to 60 feet straight away from the dragon and has the Prone condition."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17, +10 to hit with spell attacks): At Will: Detect Magic, Guiding Bolt (level 2 version), Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), Speak with Animals, Thaumaturgy 1/Day Each: Detect Thoughts, Water Breathing"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Guiding Light",
        "description": "The dragon uses Spellcasting to cast Guiding Bolt (level 2 version)."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Thunderclap",
        "description": "Constitution Saving Throw: DC 17, each creature in a 20-foot-radius Sphere centered on a point the dragon can see within 90 feet. Failure: 10 (3d6) 268 System Reference Document 5.2 Thunder damage, and the target has the Deafened condition until the end of its next turn."
      }
    ]
  },
  {
    "name": "Adult Copper Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 18,
    "hp": 184,
    "hpDice": "16d12 + 80",
    "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
    "str": 23,
    "dex": 12,
    "con": 21,
    "int": 18,
    "wis": 15,
    "cha": 18,
    "cr": "14",
    "xp": 11500,
    "initiative": 11,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Deception +9, Perception +12, Stealth +6",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast Mind Spike (level 4 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 17 (2d10 + 6) Slashing damage plus 4 (1d8) Acid damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 18, each creature in an 60-foot-long, 5-footwide Line. Failure: 54 (12d8) Acid damage. Success: Half damage."
      },
      {
        "name": "Slowing Breath",
        "description": "Constitution Saving Throw: DC 18, each creature in a 60-foot Cone. Failure: The target can’t take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): At Will: Detect Magic, Mind Spike (level 4 version), Minor Illusion, Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Greater Restoration, Major Image"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Giggling Magic",
        "description": "Charisma Saving Throw: DC 17, one creature the dragon can see within 90 feet. Failure: 24 (7d6) Psychic damage. Until the end of its next turn, the target rolls 1d6 whenever it makes an ability check or attack roll and subtracts the number rolled from the D20 Test. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Mind Jolt",
        "description": "The dragon uses Spellcasting to cast Mind"
      },
      {
        "name": "Spike (level 4 version)",
        "description": "The dragon can’t take this action again until the start of its next turn. 274 System Reference Document 5.2"
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Adult Gold Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 19,
    "hp": 243,
    "hpDice": "18d12 + 126",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 27,
    "dex": 14,
    "con": 25,
    "int": 16,
    "wis": 15,
    "cha": 24,
    "cr": "17",
    "xp": 18000,
    "initiative": 14,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Insight +8, Perception +14, Persuasion +13, Stealth",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast Guiding Bolt (level 2 version) or (B) Weakening Breath."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 17 (2d8 + 8) Slashing damage plus 4 (1d8) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 21, each creature in a 60-foot Cone. Failure: 66 (12d10) Fire damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21, +13 to hit with spell attacks): At Will: Detect Magic, Guiding Bolt (level 2 version), Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Flame Strike, Zone of Truth"
      },
      {
        "name": "Weakening Breath",
        "description": "Strength Saving Throw: DC 21, each creature that isn’t currently affected by this breath in a 60-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Tests and subtracts 3 (1d6) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. 289 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Banish",
        "description": "Charisma Saving Throw: DC 21, one creature the dragon can see within 120 feet. Failure: 10 (3d6) Force damage, and the target has the Incapacitated condition and is transported to a harmless demiplane until the start of the dragon’s next turn, at which point it re­appears in an unoccupied space of the dragon’s choice within 120 feet of the dragon. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Guiding Light",
        "description": "The dragon uses Spellcasting to cast Guiding Bolt (level 2 version)."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Adult Green Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 19,
    "hp": 207,
    "hpDice": "18d12 + 90",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 23,
    "dex": 12,
    "con": 21,
    "int": 18,
    "wis": 15,
    "cha": 18,
    "cr": "15",
    "xp": 13000,
    "initiative": 11,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Deception +9, Perception +12, Persuasion +9,",
    "resistances": "",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Mind Spike (level 3 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 15 (2d8 + 6) Slashing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Poison Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 18, each creature in a 60-foot Cone. Failure: 56 (16d6) Poison damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): At Will: Detect Magic, Mind Spike (level 3 version) 1/Day: Geas"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Mind Invasion",
        "description": "The dragon uses Spellcasting to cast Mind Spike (level 3 version)."
      },
      {
        "name": "Noxious Miasma",
        "description": "Constitution Saving Throw: DC 17, each creature in a 20-foot-radius Sphere centered on a point the dragon can see within 90 feet. Failure: 7 (2d6) Poison damage, and the target takes a −2 penalty to AC until the end of its next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Adult Red Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 19,
    "hp": 256,
    "hpDice": "19d12 + 133",
    "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
    "str": 27,
    "dex": 10,
    "con": 25,
    "int": 16,
    "wis": 13,
    "cha": 23,
    "cr": "17",
    "xp": 18000,
    "initiative": 12,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +13, Stealth +6",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Scorching Ray."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 13 (1d10 + 8) Slashing damage plus 5 (2d4) Fire damage. 316 System Reference Document 5.2"
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 21, each creature in a 60-foot Cone. Failure: 59 (17d6) Fire damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 20, +12 to hit with spell attacks): At Will: Command (level 2 version), Detect Magic, Scorching Ray 1/Day: Fireball"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Commanding Presence",
        "description": "The dragon uses Spellcasting to cast Command (level 2 version). The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Fiery Rays",
        "description": "The dragon uses Spellcasting to cast Scorching Ray. The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Adult Silver Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 19,
    "hp": 216,
    "hpDice": "16d12 + 112",
    "speed": "40 ft., Fly 80 ft.",
    "str": 27,
    "dex": 10,
    "con": 25,
    "int": 16,
    "wis": 13,
    "cha": 22,
    "cr": "16",
    "xp": 15000,
    "initiative": 10,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "History +8, Perception +11, Stealth +5",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast Ice Knife."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +13, reach 10 ft. Hit: 17 (2d8 + 8) Slashing damage plus 4 (1d8) Cold damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 20, each creature in a 60-foot Cone. Failure: 54 (12d8) Cold damage. Success: Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "description": "Constitution Saving Throw: DC 20, each creature in a 60-foot Cone. First Failure: The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure: The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 19, +11 to hit with spell attacks): 322 System Reference Document 5.2 At Will: Detect Magic, Hold Monster, Ice Knife, Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Ice Storm (level 5 version), Zone of Truth"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Chill",
        "description": "The dragon uses Spellcasting to cast Hold Monster. The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Cold Gale",
        "description": "Dexterity Saving Throw: DC 19, each creature in a 60-foot-long, 10-foot-wide Line. Failure: 14 (4d6) Cold damage, and the target is pushed up to 30 feet straight away from the dragon. Success: Half damage only. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Adult White Dragon",
    "size": "Huge",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 18,
    "hp": 200,
    "hpDice": "16d12 + 96",
    "speed": "40 ft., Burrow 30 ft., Fly 80 ft., Swim 40 ft.",
    "str": 22,
    "dex": 10,
    "con": 22,
    "int": 8,
    "wis": 12,
    "cha": 12,
    "cr": "13",
    "xp": 10000,
    "initiative": 10,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +11, Stealth +5",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ice Walk",
        "description": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn’t cost it extra movement."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 13 (2d6 + 6) Slashing damage plus 4 (1d8) Cold damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 19, each creature in a 60-foot Cone. Failure: 54 (12d8) Cold damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Freezing Burst",
        "description": "Constitution Saving Throw: DC 14, each creature in a 30-foot-radius Sphere centered on a point the dragon can see within 120 feet. Failure: 7 (2d6) Cold damage, and the target’s Speed is 0 until the end of the target’s next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Frightful Presence",
        "description": "The dragon casts Fear, requiring no"
      },
      {
        "name": "Material components and using Charisma as the spellcasting ability (spell save DC 14)",
        "description": "The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack. 338 System Reference Document 5.2"
      }
    ]
  },
  {
    "name": "Air Elemental",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 15,
    "hp": 90,
    "hpDice": "12d10 + 24",
    "speed": "10 ft., Fly 90 ft. (hover)",
    "str": 14,
    "dex": 20,
    "con": 14,
    "int": 6,
    "wis": 10,
    "cha": 6,
    "cr": "5",
    "xp": 1800,
    "initiative": 5,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Auran)",
    "skills": "",
    "resistances": "Bludgeoning, Lightning, Piercing, Slashing",
    "immunities": "Poison, Thunder; Exhaustion, Grappled,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Air Form",
        "description": "The elemental can enter a creature’s space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two Thunderous Slam attacks."
      },
      {
        "name": "Thunderous Slam",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5) Thunder damage. 256 System Reference Document 5.2"
      },
      {
        "name": "Whirlwind (Recharge 4–6)",
        "description": "Strength Saving Throw: DC 13, one Medium or smaller creature in the elemental’s space. Failure: 24 (4d10 + 2) Thunder damage, and the target is pushed up to 20 feet straight away from the elemental and has the Prone condition. Success: Half damage only. Animated Objects"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Allosaurus",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 51,
    "hpDice": "6d10 + 18",
    "speed": "60 ft.",
    "str": 19,
    "dex": 13,
    "con": 17,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "2",
    "xp": 450,
    "initiative": 1,
    "senses": "Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4) Piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Slashing damage. If the target is a Large or smaller creature and the allosaurus moved 30+ feet straight toward it immediately before the hit, the target has the Prone condition, and the allosaurus can make one Bite attack against it."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ancient Black Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 22,
    "hp": 367,
    "hpDice": "21d20 + 147",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 27,
    "dex": 14,
    "con": 25,
    "int": 16,
    "wis": 15,
    "cha": 22,
    "cr": "21",
    "xp": 33000,
    "initiative": 16,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +16, Stealth +9",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Acid Arrow (level 4 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +15, reach 15 ft. Hit: 17 (2d8 + 8) Slashing damage plus 9 (2d8) Acid damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 22, each creature in a 90-foot-long, 10-footwide Line. Failure: 67 (15d8) Acid damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21, +13 to hit with spell attacks): At Will: Acid Arrow (level 4 version), Detect Magic, Fear 1/Day Each: Create Undead, Speak with Dead, Vitriolic Sphere (level 5 version)"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Cloud of Insects",
        "description": "Dexterity Saving Throw: DC 21, one creature the dragon can see within 120 feet. Failure: 33 (6d10) Poison damage, and the target has Disadvantage on saving throws to maintain Concentration until the end of its next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Frightful Presence",
        "description": "The dragon uses Spellcasting to cast"
      },
      {
        "name": "Fear",
        "description": "The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Ancient Blue Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 22,
    "hp": 481,
    "hpDice": "26d20 + 208",
    "speed": "40 ft., Burrow 40 ft., Fly 80 ft.",
    "str": 29,
    "dex": 10,
    "con": 27,
    "int": 18,
    "wis": 17,
    "cha": 25,
    "cr": "23",
    "xp": 50000,
    "initiative": 14,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +17, Stealth +7",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Shatter (level 3 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +16, reach 15 ft. Hit: 18 (2d8 + 9) Slashing damage plus 11 (2d10) Lightning damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 23, each creature in a 120-foot-long, 10-foot-wide Line. Failure: 88 (16d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 22): At Will: Detect Magic, Invisibility, Mage Hand, Shatter (level 3 version) 1/Day Each: Scrying, Sending"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Cloaked Flight",
        "description": "The dragon uses Spellcasting to cast Invisibility on itself, and it can fly up to half its Fly Speed. The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Sonic Boom",
        "description": "The dragon uses Spellcasting to cast Shatter (level 3 version). The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Tail Swipe",
        "description": "The dragon makes one Rend attack."
      }
    ]
  },
  {
    "name": "Ancient Brass Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 20,
    "hp": 332,
    "hpDice": "19d20 + 133",
    "speed": "40 ft., Burrow 40 ft., Fly 80 ft.",
    "str": 27,
    "dex": 10,
    "con": 25,
    "int": 16,
    "wis": 15,
    "cha": 22,
    "cr": "20",
    "xp": 25000,
    "initiative": 12,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "History +9, Perception +14, Persuasion +12, Stealth",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast Scorching Ray (level 3 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +14, reach 15 ft. Hit: 19 (2d10 + 8) Slashing damage plus 7 (2d6) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 21, each creature in a 90-foot-long, 5-footwide Line. Failure: 58 (13d8) Fire damage. Success: Half damage."
      },
      {
        "name": "Sleep Breath",
        "description": "Constitution Saving Throw: DC 21, each creature in a 90-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure: The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 20): At Will: Detect Magic, Minor Illusion, Scorching Ray (level 3 version), Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), Speak with Animals 1/Day Each: Control Weather, Detect Thoughts"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Blazing Light",
        "description": "The dragon uses Spellcasting to cast Scorching Ray (level 3 version)."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Scorching Sands",
        "description": "Dexterity Saving Throw: DC 20, one creature the dragon can see within 120 feet. Failure: 36 (8d8) Fire damage, and the target’s Speed is halved until the end of its next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn. Bronze Dragons"
      }
    ]
  },
  {
    "name": "Ancient Bronze Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 22,
    "hp": 444,
    "hpDice": "24d20 + 192",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 29,
    "dex": 10,
    "con": 27,
    "int": 18,
    "wis": 17,
    "cha": 25,
    "cr": "22",
    "xp": 41000,
    "initiative": 14,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Insight +10, Perception +17, Stealth +7",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast Guiding Bolt (level 2 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +16, reach 15 ft. Hit: 18 (2d8 + 9) Slashing damage plus 9 (2d8) Lightning damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 23, each creature in a 120-foot-long, 10-foot-wide Line. Failure: 82 (15d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Repulsion Breath",
        "description": "Strength Saving Throw: DC 23, each creature in a 30-foot Cone. Failure: The target is pushed up to 60 feet straight away from the dragon and has the Prone condition."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 22, +14 to hit with spell attacks): At Will: Detect Magic, Guiding Bolt (level 2 version), Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), Speak with Animals, Thaumaturgy 1/Day Each: Detect Thoughts, Control Water, Scrying, Water Breathing"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Guiding Light",
        "description": "The dragon uses Spellcasting to cast Guiding Bolt (level 2 version)."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Thunderclap",
        "description": "Constitution Saving Throw: DC 22, each creature in a 20-foot-radius Sphere centered on a point the dragon can see within 120 feet. Failure: 13 (3d8) Thunder damage, and the target has the Deafened condition until the end of its next turn. Bugbears"
      }
    ]
  },
  {
    "name": "Ancient Copper Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 21,
    "hp": 367,
    "hpDice": "21d20 + 147",
    "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
    "str": 27,
    "dex": 12,
    "con": 25,
    "int": 20,
    "wis": 17,
    "cha": 22,
    "cr": "21",
    "xp": 33000,
    "initiative": 15,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Deception +13, Perception +17, Stealth +8",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast Mind Spike (level 5 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +15, reach 15 ft. Hit: 19 (2d10 + 8) Slashing damage plus 9 (2d8) Acid damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 22, each creature in an 90-foot-long, 10-footwide Line. Failure: 63 (14d8) Acid damage. Success: Half damage."
      },
      {
        "name": "Slowing Breath",
        "description": "Constitution Saving Throw: DC 22, each creature in a 90-foot Cone. Failure: The target can’t take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21): At Will: Detect Magic, Mind Spike (level 5 version), Minor Illusion, Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Greater Restoration, Major Image, Project Image"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Giggling Magic",
        "description": "Charisma Saving Throw: DC 21, one creature the dragon can see within 120 feet. Failure: 31 (9d6) Psychic damage. Until the end of its next turn, the target rolls 1d8 whenever it makes an ability check or attack roll and subtracts the number rolled from the D20 Test. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Mind Jolt",
        "description": "The dragon uses Spellcasting to cast Mind"
      },
      {
        "name": "Spike (level 5 version)",
        "description": "The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Ancient Gold Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 22,
    "hp": 546,
    "hpDice": "28d20 + 252",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 30,
    "dex": 14,
    "con": 29,
    "int": 18,
    "wis": 17,
    "cha": 28,
    "cr": "24",
    "xp": 62000,
    "initiative": 16,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Insight +10, Perception +17, Persuasion +16, Stealth",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast Guiding Bolt (level 4 version) or (B) Weakening Breath."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +17 to hit, reach 15 ft. Hit: 19 (2d8 + 10) Slashing damage plus 9 (2d8) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 24, each creature in a 90-foot Cone. Failure: 71 (13d10) Fire damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 24, +16 to hit with spell attacks): At Will: Detect Magic, Guiding Bolt (level 4 version), Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Flame Strike (level 6 version), Word of Recall, Zone of Truth"
      },
      {
        "name": "Weakening Breath",
        "description": "Strength Saving Throw: DC 24, each creature that isn’t currently affected by this breath in a 90-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Tests and subtracts 5 (1d10) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Banish",
        "description": "Charisma Saving Throw: DC 24, one creature the dragon can see within 120 feet. Failure: 24 (7d6) Force damage, and the target has the Incapacitated condition and is transported to a harmless demiplane until the start of the dragon’s next turn, at which point it reappears in an unoccupied space of the dragon’s choice within 120 feet of the dragon. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Guiding Light",
        "description": "The dragon uses Spellcasting to cast Guiding Bolt (level 4 version)."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Ancient Green Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 21,
    "hp": 402,
    "hpDice": "23d20 + 161",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 27,
    "dex": 12,
    "con": 25,
    "int": 20,
    "wis": 17,
    "cha": 22,
    "cr": "22",
    "xp": 41000,
    "initiative": 15,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Deception +13, Perception +17, Persuasion +13,",
    "resistances": "",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Mind Spike (level 5 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +15, reach 15 ft. Hit: 17 (2d8 + 8) Slashing damage plus 10 (3d6) Poison damage."
      },
      {
        "name": "Poison Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 22, each creature in a 90-foot Cone. Failure: 77 (22d6) Poison damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21): At Will: Detect Magic, Mind Spike (level 5 version) 1/Day Each: Geas, Modify Memory 292 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Mind Invasion",
        "description": "The dragon uses Spellcasting to cast Mind Spike (level 5 version)."
      },
      {
        "name": "Noxious Miasma",
        "description": "Constitution Saving Throw: DC 21, each creature in a 30-foot-radius Sphere centered on a point the dragon can see within 90 feet. Failure: 17 (5d6) Poison damage, and the target takes a −2 penalty to AC until the end of its next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Ancient Red Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 22,
    "hp": 507,
    "hpDice": "26d20 + 234",
    "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
    "str": 30,
    "dex": 10,
    "con": 29,
    "int": 18,
    "wis": 15,
    "cha": 27,
    "cr": "24",
    "xp": 62000,
    "initiative": 14,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +16, Stealth +7",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Scorching Ray (level 3 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +17, reach 15 ft. Hit: 19 (2d8 + 10) Slashing damage plus 10 (3d6) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 24, each creature in a 90-foot Cone. Failure: 91 (26d6) Fire damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 23, +15 to hit with spell attacks): At Will: Command (level 2 version), Detect Magic, Scorching Ray (level 3 version) 1/Day Each: Fireball (level 6 version), Scrying"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Commanding Presence",
        "description": "The dragon uses Spellcasting to cast Command (level 2 version). The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Fiery Rays",
        "description": "The dragon uses Spellcasting to cast Scorching Ray (level 3 version). The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Ancient Silver Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 22,
    "hp": 468,
    "hpDice": "24d20 + 216",
    "speed": "40 ft., Fly 80 ft.",
    "str": 30,
    "dex": 10,
    "con": 29,
    "int": 18,
    "wis": 15,
    "cha": 26,
    "cr": "23",
    "xp": 50000,
    "initiative": 14,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "History +11, Perception +16, Stealth +7",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast Ice Knife (level 2 version)."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +17, reach 15 ft. Hit: 19 (2d8 + 10) Slashing damage plus 9 (2d8) Cold damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 24, each creature in a 90-foot Cone. Failure: 67 (15d8) Cold damage. Success: Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "description": "Constitution Saving Throw: DC 24, each creature in a 90-foot Cone. First Failure: The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure: The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Spellcasting",
        "description": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 23, +15 to hit with spell attacks): At Will: Detect Magic, Hold Monster, Ice Knife (level 2 version), Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Control Weather, Ice Storm (level 7 version), Teleport, Zone of Truth"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Chill",
        "description": "The dragon uses Spellcasting to cast Hold Monster. The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Cold Gale",
        "description": "Dexterity Saving Throw: DC 23, each creature in a 60-foot-long, 10-foot-wide Line. Failure: 14 (4d6) Cold damage, and the target is pushed up to 30 feet straight away from the dragon. Success: Half damage only. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack. Skeletons"
      }
    ]
  },
  {
    "name": "Ancient White Dragon",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 20,
    "hp": 333,
    "hpDice": "18d20 + 144",
    "speed": "40 ft., Burrow 40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 26,
    "dex": 10,
    "con": 26,
    "int": 10,
    "wis": 13,
    "cha": 18,
    "cr": "20",
    "xp": 25000,
    "initiative": 12,
    "senses": "Blindsight 60 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +13, Stealth +6",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ice Walk",
        "description": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn’t cost it extra movement."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +14, reach 15 ft. Hit: 17 (2d8 + 8) Slashing damage plus 7 (2d6) Cold damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 22, each creature in a 90-foot Cone. Failure: 63 (14d8) Cold damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Freezing Burst",
        "description": "Constitution Saving Throw: DC 20, each creature in a 30-foot-radius Sphere centered on a point the dragon can see within 120 feet. Failure: 14 (4d6) Cold damage, and the target’s Speed is 0 until the end of the target’s next turn. Failure or Success: The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Frightful Presence",
        "description": "The dragon casts Fear, requiring no"
      },
      {
        "name": "Material components and using Charisma as the spellcasting ability (spell save DC 18)",
        "description": "The dragon can’t take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "description": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  },
  {
    "name": "Animated Armor",
    "size": "Medium",
    "type": "Construct",
    "alignment": "Unaligned",
    "ac": 18,
    "hp": 33,
    "hpDice": "6d8 + 6",
    "speed": "25 ft.",
    "str": 14,
    "dex": 11,
    "con": 13,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Blindsight 60 ft.; Passive Perception 6",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Poison, Psychic; Charmed, Deafened,",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The armor makes two Slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Animated Flying Sword",
    "size": "Small",
    "type": "Construct",
    "alignment": "Unaligned",
    "ac": 17,
    "hp": 14,
    "hpDice": "4d6",
    "speed": "5 ft., Fly 50 ft. (hover)",
    "str": 12,
    "dex": 15,
    "con": 11,
    "int": 1,
    "wis": 5,
    "cha": 1,
    "cr": "1/4",
    "xp": 50,
    "initiative": 4,
    "senses": "Blindsight 60 ft.; Passive Perception 7",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Poison, Psychic; Charmed, Deafened,",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Slash",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Animated Rug of Smothering",
    "size": "Large",
    "type": "Construct",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 27,
    "hpDice": "5d10",
    "speed": "10 ft.",
    "str": 17,
    "dex": 14,
    "con": 10,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "cr": "2",
    "xp": 450,
    "initiative": 4,
    "senses": "Blindsight 60 ft.; Passive Perception 6",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Poison, Psychic; Charmed, Deafened,",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Smother",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Bludgeoning damage. If the target is a Medium or smaller creature, the rug can give it the Grappled condition (escape DC 13) instead of dealing damage. Until the grapple ends, the target has the Blinded and Restrained conditions, is suffocating, and takes 10 (2d6 + 3) Bludgeoning damage at the start of each of its turns. The rug can smother only one creature at a time. While grappling the target, the rug can’t take this action, the rug halves the damage it takes (round down), and the target takes the same amount of damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ankheg",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 45,
    "hpDice": "6d10 + 12",
    "speed": "30 ft., Burrow 10 ft.",
    "str": 17,
    "dex": 11,
    "con": 14,
    "int": 1,
    "wis": 13,
    "cha": 6,
    "cr": "2",
    "xp": 450,
    "initiative": 0,
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.;",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Tunneler",
        "description": "The ankheg can burrow through solid rock at half its Burrow Speed and leaves a 10-foot-diameter tunnel in its wake."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5 (with Advantage if the target is Grappled by the ankheg), reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage plus 3 (1d6) Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 13)."
      },
      {
        "name": "Acid Spray (Recharge 6)",
        "description": "Dexterity Saving Throw: DC 12, each creature in a 30-foot-long, 5-foot-wide Line. Failure: 14 (4d6) Acid damage. Success: Half damage. 257 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ankylosaurus",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 15,
    "hp": 68,
    "hpDice": "8d12 + 16",
    "speed": "30 ft.",
    "str": 19,
    "dex": 11,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "3",
    "xp": 700,
    "initiative": 0,
    "senses": "Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ankylosaurus makes two Tail attacks."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 9 (1d10 + 4) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ape",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 19,
    "hpDice": "3d8 + 6",
    "speed": "30 ft., Climb 30 ft.",
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "cr": "1/2",
    "xp": 100,
    "initiative": 2,
    "senses": "Passive Perception 13",
    "languages": "None",
    "skills": "Athletics +5, Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ape makes two Fist attacks."
      },
      {
        "name": "Fist",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Bludgeoning damage."
      },
      {
        "name": "Rock (Recharge 6)",
        "description": "Ranged Attack Roll: +5, range 25/50 ft. Hit: 10 (2d6 + 3) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Archelon",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 17,
    "hp": 90,
    "hpDice": "12d12 + 12",
    "speed": "20 ft., Swim 80 ft.",
    "str": 18,
    "dex": 16,
    "con": 13,
    "int": 4,
    "wis": 14,
    "cha": 6,
    "cr": "4",
    "xp": 1100,
    "initiative": 3,
    "senses": "Passive Perception 12",
    "languages": "None",
    "skills": "Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The archelon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The archelon makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 14 (3d6 + 4) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Archmage",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 170,
    "hpDice": "31d8 + 31",
    "speed": "30 ft.",
    "str": 10,
    "dex": 14,
    "con": 12,
    "int": 20,
    "wis": 15,
    "cha": 16,
    "cr": "12",
    "xp": 8000,
    "initiative": 7,
    "senses": "Passive Perception 16",
    "languages": "Common plus five other languages",
    "skills": "Arcana +13, History +9, Perception +6",
    "resistances": "",
    "immunities": "Psychic; Charmed (with Mind Blank)",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The archmage has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The archmage makes four Arcane Burst attacks."
      },
      {
        "name": "Arcane Burst",
        "description": "Melee or Ranged Attack Roll: +9, reach 5 ft. or range 150 ft. Hit: 27 (4d10 + 5) Force damage."
      },
      {
        "name": "Spellcasting",
        "description": "The archmage casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 17): At Will: Detect Magic, Detect Thoughts, Disguise Self, Invisibility, Light, Mage Armor (included in AC), Mage Hand, Prestidigitation 2/Day Each: Fly, Lightning Bolt (level 7 version) 1/Day Each: Cone of Cold (level 9 version), Mind Blank (cast before combat), Scrying, Teleport"
      }
    ],
    "bonusActions": [
      {
        "name": "Misty Step (3/Day)",
        "description": "The mage casts Misty Step, using the same spellcasting ability as Spellcasting."
      }
    ],
    "reactions": [
      {
        "name": "Protective Magic (3/Day)",
        "description": "The archmage casts Counterspell or Shield in response to the spell’s trigger, using the same spellcasting ability as Spellcasting."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Assassin",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 16,
    "hp": 97,
    "hpDice": "15d8 + 30",
    "speed": "30 ft.",
    "str": 11,
    "dex": 18,
    "con": 14,
    "int": 16,
    "wis": 11,
    "cha": 10,
    "cr": "8",
    "xp": 3900,
    "initiative": 10,
    "senses": "Passive Perception 16",
    "languages": "Common, Thieves’ Cant",
    "skills": "Acrobatics +7, Perception +6, Stealth +10",
    "resistances": "Poison",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Evasion",
        "description": "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the save and only half damage if it fails. It can’t use this trait if it has the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The assassin makes three attacks, using Shortsword or Light Crossbow in any combination."
      },
      {
        "name": "Shortsword",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Piercing damage plus 17 (5d6) Poison damage, and the target has the Poisoned condition until the start of the assassin’s next turn."
      },
      {
        "name": "Light Crossbow",
        "description": "Ranged Attack Roll: +7, range 80/320 ft. Hit: 8 (1d8 + 4) Piercing damage plus 21 (6d6) Poison damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Cunning Action",
        "description": "The assassin takes the Dash, Disengage, or Hide action. Awakened Plants"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Awakened Shrub",
    "size": "Small",
    "type": "Plant",
    "alignment": "Neutral",
    "ac": 9,
    "hp": 10,
    "hpDice": "3d6",
    "speed": "20 ft.",
    "str": 3,
    "dex": 8,
    "con": 11,
    "int": 10,
    "wis": 10,
    "cha": 6,
    "cr": "0",
    "xp": 10,
    "initiative": -1,
    "senses": "Passive Perception 10",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "Piercing",
    "immunities": "",
    "vulnerabilities": "Fire",
    "traits": [],
    "actions": [
      {
        "name": "Rake",
        "description": "Melee Attack Roll: +1, reach 5 ft. Hit: 1 Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Awakened Tree",
    "size": "Huge",
    "type": "Plant",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 59,
    "hpDice": "7d12 + 14",
    "speed": "20 ft.",
    "str": 19,
    "dex": 6,
    "con": 15,
    "int": 10,
    "wis": 10,
    "cha": 7,
    "cr": "2",
    "xp": 450,
    "initiative": -2,
    "senses": "Passive Perception 10",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "Bludgeoning, Piercing",
    "immunities": "",
    "vulnerabilities": "Fire",
    "traits": [],
    "actions": [
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 14 (3d6 + 4) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Axe Beak",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "hpDice": "3d10 + 3",
    "speed": "50 ft.",
    "str": 14,
    "dex": 12,
    "con": 12,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "cr": "1/4",
    "xp": 50,
    "initiative": 1,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing damage. 258 System Reference Document 5.2 Azer"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Azer Sentinel",
    "size": "Medium",
    "type": "Elemental",
    "alignment": "Lawful Neutral",
    "ac": 17,
    "hp": 39,
    "hpDice": "6d8 + 12",
    "speed": "30 ft.",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 12,
    "wis": 13,
    "cha": 10,
    "cr": "2",
    "xp": 450,
    "initiative": 1,
    "senses": "Passive Perception 11",
    "languages": "Primordial (Ignan)",
    "skills": "",
    "resistances": "",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Fire Aura",
        "description": "At the end of each of the azer’s turns, each creature of the azer’s choice in a 5-foot Emanation originating from the azer takes 5 (1d10) Fire damage unless the azer has the Incapacitated condition."
      },
      {
        "name": "Illumination",
        "description": "The azer sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Burning Hammer",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Bludgeoning damage plus 3 (1d6) Fire damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Baboon",
    "size": "Small",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 3,
    "hpDice": "1d6",
    "speed": "30 ft., Climb 30 ft.",
    "str": 8,
    "dex": 14,
    "con": 11,
    "int": 4,
    "wis": 12,
    "cha": 6,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The baboon has Advantage on an attack roll against a creature if at least one of the baboon’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 − 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Badger",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 5,
    "hpDice": "1d4 + 3",
    "speed": "20 ft., Burrow 5 ft.",
    "str": 10,
    "dex": 11,
    "con": 16,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Darkvision 30 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "Poison",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Balor",
    "size": "Huge",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 19,
    "hp": 287,
    "hpDice": "23d12 + 138",
    "speed": "40 ft., Fly 80 ft.",
    "str": 26,
    "dex": 15,
    "con": 22,
    "int": 20,
    "wis": 16,
    "cha": 22,
    "cr": "19",
    "xp": 22000,
    "initiative": 14,
    "senses": "Truesight 120 ft.; Passive Perception 19",
    "languages": "Abyssal; telepathy 120 ft.",
    "skills": "Perception +9",
    "resistances": "Cold, Lightning",
    "immunities": "Fire, Poison; Charmed, Frightened, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Death Throes",
        "description": "The balor explodes when it dies. Dexterity Saving Throw: DC 20, each creature in a 30-foot"
      },
      {
        "name": "Emanation originating from the balor",
        "description": "Failure: 31 (9d6) Fire damage plus 31 (9d6) Force damage. Success: Half damage. Failure or Success: If the balor dies outside the Abyss, it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
      },
      {
        "name": "Fire Aura",
        "description": "At the end of each of the balor’s turns, each creature in a 5-foot Emanation originating from the balor takes 13 (3d8) Fire damage."
      },
      {
        "name": "Legendary Resistance (3/Day)",
        "description": "If the balor fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "description": "The balor has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The balor makes one Flame Whip attack and one Lightning Blade attack."
      },
      {
        "name": "Flame Whip",
        "description": "Melee Attack Roll: +14, reach 30 ft. Hit: 18 (3d6 + 8) Force damage plus 17 (5d6) Fire damage. If the target is a Huge or smaller creature, the balor pulls the target up to 25 feet straight toward itself, and the target has the Prone condition."
      },
      {
        "name": "Lightning Blade",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 21 (3d8 + 8) Force damage plus 22 (4d10) Lightning damage, and the target can’t take Reactions until the start of the balor’s next turn."
      }
    ],
    "bonusActions": [
      {
        "name": "Teleport",
        "description": "The balor teleports itself or a willing demon within 10 feet of itself up to 60 feet to an unoccupied space the balor can see. Bandits"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bandit",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "30 ft.",
    "str": 11,
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 10,
    "cr": "1/8",
    "xp": 25,
    "initiative": 1,
    "senses": "Passive Perception 10",
    "languages": "Common, Thieves’ Cant",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Scimitar",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage."
      },
      {
        "name": "Light Crossbow",
        "description": "Ranged Attack Roll: +3, range 80/320 ft. Hit: 5 (1d8 + 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bandit Captain",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 15,
    "hp": 52,
    "hpDice": "8d8 + 16",
    "speed": "30 ft.",
    "str": 15,
    "dex": 16,
    "con": 14,
    "int": 14,
    "wis": 11,
    "cha": 14,
    "cr": "2",
    "xp": 450,
    "initiative": 3,
    "senses": "Passive Perception 10",
    "languages": "Common, Thieves’ Cant",
    "skills": "Athletics +4, Deception +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bandit makes two attacks, using Scimitar and Pistol in any combination."
      },
      {
        "name": "Scimitar",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing damage."
      },
      {
        "name": "Pistol",
        "description": "Ranged Attack Roll: +5, range 30/90 ft. Hit: 8 (1d10 + 3) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Parry",
        "description": "Trigger: The bandit is hit by a melee attack roll while holding a weapon. Response: The bandit adds 2 to its AC against that attack, possibly causing it to miss."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Barbed Devil",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 15,
    "hp": 110,
    "hpDice": "13d8 + 52",
    "speed": "30 ft., Climb 30 ft.",
    "str": 16,
    "dex": 17,
    "con": 18,
    "int": 12,
    "wis": 14,
    "cha": 14,
    "cr": "5",
    "xp": 1800,
    "initiative": 3,
    "senses": "Darkvision 120 ft. (unimpeded by magical",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "Deception +5, Insight +5, Perception +8",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Barbed Hide",
        "description": "At the start of each of its turns, the devil deals 5 (1d10) Piercing damage to any creature it is grappling or any creature grappling it."
      },
      {
        "name": "Diabolical Restoration",
        "description": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "description": "The devil has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes one Claws attack and one Tail attack, or it makes two Hurl Flame attacks."
      },
      {
        "name": "Claws",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 13) from both claws."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 14 (2d10 + 3) Slashing damage."
      },
      {
        "name": "Hurl Flame",
        "description": "Ranged Attack Roll: +5, range 150 ft. Hit: 17 (5d6) Fire damage. If the target is a flammable object that isn’t being worn or carried, it starts burning."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Basilisk",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 15,
    "hp": 52,
    "hpDice": "8d8 + 16",
    "speed": "20 ft.",
    "str": 16,
    "dex": 8,
    "con": 15,
    "int": 2,
    "wis": 8,
    "cha": 7,
    "cr": "3",
    "xp": 700,
    "initiative": -1,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage plus 7 (2d6) Poison damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Petrifying Gaze (Recharge 4–6)",
        "description": "Constitution Saving Throw: DC 12, each creature in a 30-foot Cone. If the basilisk sees its reflection in the Cone, the basilisk must make this save. First Failure: The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure: The target has the Petrified condition instead of the Restrained condition."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bat",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "5 ft., Fly 30 ft.",
    "str": 2,
    "dex": 15,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Blindsight 60 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bearded Devil",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 58,
    "hpDice": "9d8 + 18",
    "speed": "30 ft.",
    "str": 16,
    "dex": 15,
    "con": 15,
    "int": 9,
    "wis": 11,
    "cha": 14,
    "cr": "3",
    "xp": 700,
    "initiative": 2,
    "senses": "Darkvision 120 ft. (unimpeded by magical",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Frightened, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The devil has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes one Beard attack and one Infernal Glaive attack."
      },
      {
        "name": "Beard",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage, and the target has the Poisoned condition until the start of the devil’s next turn. Until this poison ends, the target can’t regain Hit Points."
      },
      {
        "name": "Infernal Glaive",
        "description": "Melee Attack Roll: +5, reach 10 ft. Hit: 8 (1d10 + 3) Slashing damage. If the target is a creature and doesn’t already have an infernal wound, it is subjected to the following effect. Constitution Saving Throw: DC 12. Failure: The target receives an infernal wound. While wounded, the target loses 5 (1d10) Hit"
      },
      {
        "name": "Points at the start of each of its turns",
        "description": "The wound closes after 1 minute, after a spell restores Hit Points to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a DC 12 Wisdom (Medicine) check."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Behir",
    "size": "Huge",
    "type": "Monstrosity",
    "alignment": "Neutral Evil",
    "ac": 17,
    "hp": 168,
    "hpDice": "16d12 + 64",
    "speed": "50 ft., Climb 50 ft.",
    "str": 23,
    "dex": 16,
    "con": 18,
    "int": 7,
    "wis": 14,
    "cha": 12,
    "cr": "11",
    "xp": 7200,
    "initiative": 3,
    "senses": "Darkvision 90 ft.; Passive Perception 16",
    "languages": "Draconic",
    "skills": "Perception +6, Stealth +7",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The behir makes one Bite attack and uses Constrict."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 19 (2d12 + 6) Piercing damage plus 11 (2d10) Lightning damage."
      },
      {
        "name": "Constrict",
        "description": "Strength Saving Throw: DC 18, one Large or smaller creature the behir can see within 5 feet. Failure: 28 (5d8 + 6) Bludgeoning damage. The target has the Grappled condition (escape DC 16), and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 16, each creature in a 90-foot-long, 5-footwide Line. Failure: 66 (12d10) Lightning damage. Success: Half damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Swallow",
        "description": "Dexterity Saving Throw: DC 18, one Large or smaller creature Grappled by the behir (the behir can have only one creature swallowed at a time). Failure: The behir swallows the target, which is no longer Grappled. While swallowed, a creature has the Blinded and Restrained conditions, has Total Cover against attacks and other effects outside the behir, and takes 21 (6d6) Acid damage at the start of each of the behir’s turns. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls in a space within 10 feet of the behir and has the Prone condition. If the behir dies, a swallowed creature is no longer Restrained and can escape from the corpse by using 15 feet of movement, exiting Prone."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Berserker",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 67,
    "hpDice": "9d8 + 27",
    "speed": "30 ft.",
    "str": 16,
    "dex": 12,
    "con": 17,
    "int": 9,
    "wis": 11,
    "cha": 9,
    "cr": "2",
    "xp": 450,
    "initiative": 1,
    "senses": "Passive Perception 10",
    "languages": "Common",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Bloodied Frenzy",
        "description": "While Bloodied, the berserker has Advantage on attack rolls and saving throws."
      }
    ],
    "actions": [
      {
        "name": "Greataxe",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 9 (1d12 + 3) Slashing damage. Black Dragons"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Black Bear",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "hpDice": "3d8 + 6",
    "speed": "30 ft., Climb 30 ft., Swim 30 ft.",
    "str": 15,
    "dex": 12,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bear makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Black Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 17,
    "hp": 33,
    "hpDice": "6d8 + 6",
    "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
    "str": 15,
    "dex": 14,
    "con": 13,
    "int": 10,
    "wis": 11,
    "cha": 13,
    "cr": "2",
    "xp": 450,
    "initiative": 4,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +4",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage plus 2 (1d4) Acid damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 11, each creature in a 15-foot-long, 5-footwide Line. Failure: 22 (5d8) Acid damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Black Pudding",
    "size": "Large",
    "type": "Ooze",
    "alignment": "Unaligned",
    "ac": 7,
    "hp": 68,
    "hpDice": "8d10 + 24",
    "speed": "20 ft., Climb 20 ft.",
    "str": 16,
    "dex": 5,
    "con": 16,
    "int": 1,
    "wis": 6,
    "cha": 1,
    "cr": "4",
    "xp": 1100,
    "initiative": -3,
    "senses": "Blindsight 60 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Acid, Cold, Lightning, Slashing; Charmed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amorphous",
        "description": "The pudding can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Corrosive Form",
        "description": "A creature that hits the pudding with a melee attack roll takes 4 (1d8) Acid damage. Nonmagical ammunition is destroyed immediately after hitting the pudding and dealing any damage. Any nonmagical weapon takes a cumulative −1 penalty to attack rolls immediately after dealing damage to the pudding and coming into contact with it. The weapon is destroyed if the penalty reaches −5. The penalty can be removed by casting the Mending spell on the weapon. In 1 minute, the pudding can eat through 2 feet of nonmagical wood or metal."
      },
      {
        "name": "Spider Climb",
        "description": "The pudding can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Dissolving Pseudopod",
        "description": "Melee Attack Roll: +5, reach 10 ft. Hit: 17 (4d6 + 3) Acid damage. Nonmagical armor worn by the target takes a −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the Mending spell on the armor."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Split",
        "description": "Trigger: While the pudding is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. Response: The pudding splits into two new Black Puddings. Each new pudding is one size smaller than the original pudding and acts on its Initiative. The original pudding’s Hit 263 System Reference Document 5.2 Points are divided evenly between the new puddings (round down)."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Blink Dog",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Lawful Good",
    "ac": 13,
    "hp": 22,
    "hpDice": "4d8 + 4",
    "speed": "40 ft.",
    "str": 12,
    "dex": 17,
    "con": 12,
    "int": 10,
    "wis": 13,
    "cha": 11,
    "cr": "1/4",
    "xp": 50,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "Blink Dog; understands Elvish and Sylvan but",
    "skills": "Perception +5, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Teleport (Recharge 4–6)",
        "description": "The dog teleports up to 40 feet to an unoccupied space it can see. Blue Dragons"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Blood Hawk",
    "size": "Small",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 7,
    "hpDice": "2d6",
    "speed": "10 ft., Fly 60 ft.",
    "str": 6,
    "dex": 14,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 5,
    "cr": "1/8",
    "xp": 25,
    "initiative": 2,
    "senses": "Passive Perception 16",
    "languages": "None",
    "skills": "Perception +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The hawk has Advantage on an attack roll against a creature if at least one of the hawk’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage, or 6 (1d8 + 2) Piercing damage if the target is Bloodied."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Blue Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 17,
    "hp": 65,
    "hpDice": "10d8 + 20",
    "speed": "30 ft., Burrow 15 ft., Fly 60 ft.",
    "str": 17,
    "dex": 10,
    "con": 15,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "cr": "3",
    "xp": 700,
    "initiative": 2,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +2",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Slashing damage plus 3 (1d6) Lightning damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 12, each creature in a 30-foot-long, 5-footwide Line. Failure: 21 (6d6) Lightning damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Boar",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 13,
    "hpDice": "2d8 + 4",
    "speed": "40 ft.",
    "str": 13,
    "dex": 11,
    "con": 14,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Bloodied Fury",
        "description": "While Bloodied, the boar has Advantage on attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Piercing damage. If the target is a Medium or smaller creature and the boar moved 20+ feet straight toward it immediately before the hit, the target takes an extra 3 (1d6) Piercing damage and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bone Devil",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 16,
    "hp": 161,
    "hpDice": "17d10 + 68",
    "speed": "40 ft., Fly 40 ft.",
    "str": 18,
    "dex": 16,
    "con": 18,
    "int": 13,
    "wis": 14,
    "cha": 16,
    "cr": "9",
    "xp": 5000,
    "initiative": 7,
    "senses": "Darkvision 120 ft. (unimpeded by magical",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "Deception +7, Insight +6",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Diabolical Restoration",
        "description": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "description": "The devil has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes two Claw attacks and one Infernal Sting attack."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 13 (2d8 + 4) Slashing damage."
      },
      {
        "name": "Infernal Sting",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 15 (2d10 + 4) Piercing damage plus 18 (4d8) Poison 265 System Reference Document 5.2 damage, and the target has the Poisoned condition until the start of the devil’s next turn. While Poisoned, the target can’t regain Hit Points. Brass Dragons"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Brass Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 22,
    "hpDice": "4d8 + 4",
    "speed": "30 ft., Burrow 15 ft., Fly 60 ft.",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 10,
    "wis": 11,
    "cha": 13,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +2",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 11, each creature in a 20-foot-long, 5-footwide Line. Failure: 14 (4d6) Fire damage. Success: Half damage."
      },
      {
        "name": "Sleep Breath",
        "description": "Constitution Saving Throw: DC 11, each creature in a 15-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure: The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bronze Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 15,
    "hp": 39,
    "hpDice": "6d8 + 12",
    "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
    "str": 17,
    "dex": 10,
    "con": 15,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +2",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Slashing damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 12, each creature in a 40-foot-long, 5-footwide Line. Failure: 16 (3d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Repulsion Breath",
        "description": "Strength Saving Throw: DC 12, each creature in a 30-foot Cone. Failure: The target is pushed up to 30 feet straight away from the dragon and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Brown Bear",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 22,
    "hpDice": "3d10 + 6",
    "speed": "40 ft., Climb 30 ft.",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "cr": "1",
    "xp": 200,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bear makes one Bite attack and one Claw attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bugbear Stalker",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Chaotic Evil",
    "ac": 15,
    "hp": 65,
    "hpDice": "10d8 + 20",
    "speed": "30 ft.",
    "str": 17,
    "dex": 14,
    "con": 14,
    "int": 11,
    "wis": 12,
    "cha": 11,
    "cr": "3",
    "xp": 700,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "Common, Goblin",
    "skills": "Stealth +6, Survival +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Abduct",
        "description": "The bugbear needn’t spend extra movement to move a creature it is grappling."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bugbear makes two Javelin or Morningstar attacks."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Attack Roll: +5, reach 10 ft. or range 30/120 ft. Hit: 13 (3d6 + 3) Piercing damage."
      },
      {
        "name": "Morningstar",
        "description": "Melee Attack Roll: +5 (with Advantage if the target is Grappled by the bugbear), reach 10 ft. Hit: 12 (2d8 + 3) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Quick Grapple",
        "description": "Dexterity Saving Throw: DC 13, one Medium or smaller creature the bugbear can see within 10 feet. Failure: The target has the Grappled condition (escape DC 13). 269 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bugbear Warrior",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 33,
    "hpDice": "6d8 + 6",
    "speed": "30 ft.",
    "str": 15,
    "dex": 14,
    "con": 13,
    "int": 8,
    "wis": 11,
    "cha": 9,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Common, Goblin",
    "skills": "Stealth +6, Survival +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Abduct",
        "description": "The bugbear needn’t spend extra movement to move a creature it is grappling."
      }
    ],
    "actions": [
      {
        "name": "Grab",
        "description": "Melee Attack Roll: +4, reach 10 ft. Hit: 9 (2d6 + 2) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 12)."
      },
      {
        "name": "Light Hammer",
        "description": "Melee or Ranged Attack Roll: +4 (with Advantage if the target is Grappled by the bugbear), reach 10 ft. or range 20/60 ft. Hit: 9 (3d4 + 2) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Bulette",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 17,
    "hp": 94,
    "hpDice": "9d10 + 45",
    "speed": "40 ft., Burrow 40 ft.",
    "str": 19,
    "dex": 11,
    "con": 21,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "cr": "5",
    "xp": 1800,
    "initiative": 0,
    "senses": "Darkvision 60 ft., Tremorsense 120 ft.;",
    "languages": "None",
    "skills": "Perception +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bulette makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 17 (2d12 + 4) Piercing damage."
      },
      {
        "name": "Deadly Leap",
        "description": "The bulette spends 5 feet of movement to jump to a space within 15 feet that contains one or more Large or smaller creatures. Dexterity Saving Throw: DC 15, each creature in the bulette’s destination space. Failure: 19 (3d12) Bludgeoning damage, and the target has the Prone condition. Success: Half damage, and the target is pushed 5 feet straight away from the bulette."
      }
    ],
    "bonusActions": [
      {
        "name": "Leap",
        "description": "The bulette jumps up to 30 feet by spending 10 feet of movement. Centaur"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Camel",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 17,
    "hpDice": "2d10 + 6",
    "speed": "50 ft.",
    "str": 15,
    "dex": 8,
    "con": 17,
    "int": 2,
    "wis": 11,
    "cha": 5,
    "cr": "1/8",
    "xp": 25,
    "initiative": -1,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Cat",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 2,
    "hpDice": "1d4",
    "speed": "40 ft., Climb 40 ft.",
    "str": 3,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Jumper",
        "description": "The cat’s jump distance is determined using its Dexterity rather than its Strength."
      }
    ],
    "actions": [
      {
        "name": "Scratch",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Centaur Trooper",
    "size": "Large",
    "type": "Fey",
    "alignment": "Neutral Good",
    "ac": 16,
    "hp": 45,
    "hpDice": "6d10 + 12",
    "speed": "50 ft.",
    "str": 18,
    "dex": 14,
    "con": 14,
    "int": 9,
    "wis": 13,
    "cha": 11,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Passive Perception 13",
    "languages": "Elvish, Sylvan",
    "skills": "Athletics +6, Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The centaur makes two attacks, using Pike or Longbow in any combination."
      },
      {
        "name": "Pike",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 9 (1d10 + 4) Piercing damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8 + 2) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Trampling Charge (Recharge 5–6)",
        "description": "The centaur moves up to its Speed without provoking Opportunity Attacks and can move through the spaces of Medium or smaller creatures. Each creature whose space the centaur enters is targeted once by the following effect. Strength Saving Throw: DC 14. Failure: 7 (1d6 + 4) Bludgeoning damage, and the target has the Prone condition."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Chain Devil",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 15,
    "hp": 85,
    "hpDice": "10d8 + 40",
    "speed": "30 ft.",
    "str": 18,
    "dex": 15,
    "con": 18,
    "int": 11,
    "wis": 12,
    "cha": 14,
    "cr": "8",
    "xp": 3900,
    "initiative": 5,
    "senses": "Darkvision 120 ft. (unimpeded by magical",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "",
    "resistances": "Bludgeoning, Cold, Piercing, Slashing",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Diabolical Restoration",
        "description": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "description": "The devil has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes two Chain attacks and uses Conjure Infernal Chain."
      },
      {
        "name": "Chain",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Slashing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of two chains, and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Conjure Infernal Chain",
        "description": "The devil conjures a fiery chain to bind a creature. Dexterity Saving Throw: DC 15, one creature the devil can see within 60 feet. Failure: 9 (2d4 + 4) Fire damage, and the target has the Restrained condition until the end of the devil’s next turn, at which point the chain disappears. If the target is Large or smaller, the devil moves the target up to 30 feet straight toward itself. Success: The chain disappears."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Unnerving Gaze",
        "description": "Trigger: A creature the devil can see starts its turn within 30 feet of the devil and can see the devil. Response—Wisdom Saving Throw: DC 15, the triggering creature. Failure: The target has the"
      },
      {
        "name": "Frightened condition until the end of its turn",
        "description": "Success: The target is immune to this devil’s Unnerving Gaze for 24 hours."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Chimera",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 114,
    "hpDice": "12d10 + 48",
    "speed": "30 ft., Fly 60 ft.",
    "str": 19,
    "dex": 11,
    "con": 19,
    "int": 3,
    "wis": 14,
    "cha": 10,
    "cr": "6",
    "xp": 2300,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 18",
    "languages": "Understands Draconic but can’t speak",
    "skills": "Perception +8",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The chimera makes one Ram attack, one Bite attack, and one Claw attack. It can replace the Claw attack with a use of Fire Breath if available."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage, or 18 (4d6 + 4) Piercing damage if the chimera had Advantage on the attack roll."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Slashing damage."
      },
      {
        "name": "Ram",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 10 (1d12 + 4) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 15, each creature in a 15-foot Cone. Failure: 31 (7d8) Fire damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Chuul",
    "size": "Large",
    "type": "Aberration",
    "alignment": "Chaotic Evil",
    "ac": 16,
    "hp": 76,
    "hpDice": "9d10 + 27",
    "speed": "30 ft., Swim 30 ft.",
    "str": 19,
    "dex": 10,
    "con": 16,
    "int": 5,
    "wis": 11,
    "cha": 5,
    "cr": "4",
    "xp": 1100,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Understands Deep Speech but can’t speak",
    "skills": "Perception +4",
    "resistances": "",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The chuul can breathe air and water."
      },
      {
        "name": "Sense Magic",
        "description": "The chuul senses magic within 120 feet of itself. This trait otherwise works like the Detect Magic spell but isn’t itself magical."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The chuul makes two Pincer attacks and uses Paralyzing Tentacles."
      },
      {
        "name": "Pincer",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 9 (1d10 + 4) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of two pincers. 271 System Reference Document 5.2"
      },
      {
        "name": "Paralyzing Tentacles",
        "description": "Constitution Saving Throw: DC 13, one creature Grappled by the chuul. Failure: The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While Poisoned, the target has the Paralyzed condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Clay Golem",
    "size": "Large",
    "type": "Construct",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 123,
    "hpDice": "13d10 + 52",
    "speed": "30 ft.",
    "str": 20,
    "dex": 9,
    "con": 18,
    "int": 3,
    "wis": 8,
    "cha": 1,
    "cr": "9",
    "xp": 5000,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Acid, Poison, Psychic; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Acid Absorption",
        "description": "Whenever the golem is subjected to Acid damage, it takes no damage and instead regains a number of Hit Points equal to the Acid damage dealt."
      },
      {
        "name": "Berserk",
        "description": "Whenever the golem starts its turn Bloodied, roll 1d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it continues to be berserk until it is destroyed or it is no longer Bloodied."
      },
      {
        "name": "Immutable Form",
        "description": "The golem can’t shape-shift."
      },
      {
        "name": "Magic Resistance",
        "description": "The golem has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The golem makes two Slam attacks, or it makes three Slam attacks if it used Hasten this turn."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +9, reach 5 ft. Hit: 10 (1d10 + 5) Bludgeoning damage plus 6 (1d12) Acid damage, and the target’s Hit Point maximum decreases by an amount equal to the Acid damage taken."
      }
    ],
    "bonusActions": [
      {
        "name": "Hasten (Recharge 5–6)",
        "description": "The golem takes the Dash and Disengage actions."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Cloaker",
    "size": "Large",
    "type": "Aberration",
    "alignment": "Chaotic Neutral",
    "ac": 14,
    "hp": 91,
    "hpDice": "14d10 + 14",
    "speed": "10 ft., Fly 40 ft.",
    "str": 17,
    "dex": 15,
    "con": 12,
    "int": 13,
    "wis": 14,
    "cha": 7,
    "cr": "8",
    "xp": 3900,
    "initiative": 5,
    "senses": "Darkvision 120 ft.; Passive Perception 12",
    "languages": "Deep Speech, Undercommon",
    "skills": "Stealth +5",
    "resistances": "",
    "immunities": "Frightened",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Light Sensitivity",
        "description": "While in Bright Light, the cloaker has Disadvantage on attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The cloaker makes one Attach attack and two Tail attacks."
      },
      {
        "name": "Attach",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 13 (3d6 + 3) Piercing damage. If the target is a Large or smaller creature, the cloaker attaches to it. While the cloaker is attached, the target has the Blinded condition, and the cloaker can’t make Attach attacks against other targets. In addition, the cloaker halves the damage it takes (round down), and the target takes the same amount of damage. The cloaker can detach itself by spending 5 feet of movement. The target or a creature within 5 feet of it can take an action to try to detach the cloaker, doing so by succeeding on a DC 14 Strength (Athletics) check."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 8 (1d10 + 3) Slashing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Moan",
        "description": "Wisdom Saving Throw: DC 13, each creature in a 60-foot Emanation originating from the cloaker. Failure: The target has the Frightened condition until the end of the cloaker’s next turn. Success: The target is immune to this cloaker’s Moan for the next 24 hours."
      },
      {
        "name": "Phantasms (Recharge after a Short or Long Rest)",
        "description": "The cloaker casts the Mirror Image spell, requiring no spell components and using Wisdom as the spellcasting ability. The spell ends early if the cloaker starts or ends its turn in Bright Light. 272 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Cloud Giant",
    "size": "Huge",
    "type": "Giant",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 200,
    "hpDice": "16d12 + 96",
    "speed": "40 ft., Fly 20 ft. (hover)",
    "str": 27,
    "dex": 10,
    "con": 22,
    "int": 12,
    "wis": 16,
    "cha": 16,
    "cr": "9",
    "xp": 5000,
    "initiative": 4,
    "senses": "Passive Perception 21",
    "languages": "Common, Giant",
    "skills": "Insight +7, Perception +11",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two attacks, using Thunderous Mace or Thundercloud in any combination. It can replace one attack with a use of Spellcasting to cast Fog Cloud."
      },
      {
        "name": "Thunderous Mace",
        "description": "Melee Attack Roll: +12, reach 10 ft. Hit: 21 (3d8 + 8) Bludgeoning damage plus 7 (2d6) Thunder damage."
      },
      {
        "name": "Thundercloud",
        "description": "Ranged Attack Roll: +12, range 240 ft. Hit: 18 (3d6 + 8) Thunder damage, and the target has the Incapacitated condition until the end of its next turn."
      },
      {
        "name": "Spellcasting",
        "description": "The giant casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 15): At Will: Detect Magic, Fog Cloud, Light 1/Day Each: Control Weather, Gaseous Form, Telekinesis"
      }
    ],
    "bonusActions": [
      {
        "name": "Misty Step",
        "description": "The giant casts the Misty Step spell, using the same spellcasting ability as Spellcasting."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Cockatrice",
    "size": "Small",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 22,
    "hpDice": "5d6 + 5",
    "speed": "20 ft., Fly 40 ft.",
    "str": 6,
    "dex": 12,
    "con": 12,
    "int": 2,
    "wis": 13,
    "cha": 5,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Petrified",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Petrifying Bite",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Piercing damage. If the target is a creature, it is subjected to the following effect. Constitution Saving Throw: DC 11. First Failure: The target has the Restrained condition. The target repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure: The target has the Petrified condition, instead of the Restrained condition, for 24 hours."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Commoner",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 10,
    "hp": 4,
    "hpDice": "1d8",
    "speed": "30 ft.",
    "str": 10,
    "dex": 10,
    "con": 10,
    "int": 10,
    "wis": 10,
    "cha": 10,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Passive Perception 10",
    "languages": "Common",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Training",
        "description": "The commoner has proficiency in one skill of the GM’s choice and has Advantage whenever it makes an ability check using that skill."
      }
    ],
    "actions": [
      {
        "name": "Club",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Bludgeoning damage. Copper Dragons"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Constrictor Snake",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 13,
    "hpDice": "2d10 + 2",
    "speed": "30 ft., Swim 30 ft.",
    "str": 15,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Blindsight 10 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing damage."
      },
      {
        "name": "Constrict",
        "description": "Strength Saving Throw: DC 12, one Medium or smaller creature the snake can see within 5 feet. Failure: 7 (3d4) Bludgeoning damage, and the target has the Grappled condition (escape DC 12)."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Copper Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 16,
    "hp": 22,
    "hpDice": "4d8 + 4",
    "speed": "30 ft., Climb 30 ft., Fly 60 ft.",
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 14,
    "wis": 11,
    "cha": 13,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +3",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 11, each creature in a 20-foot-long, 5-footwide Line. Failure: 18 (4d8) Acid damage. Success: Half damage."
      },
      {
        "name": "Slowing Breath",
        "description": "Constitution Saving Throw: DC 11, each creature in a 15-foot Cone. Failure: The target can’t take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Couatl",
    "size": "Medium",
    "type": "Celestial",
    "alignment": "Lawful Good",
    "ac": 19,
    "hp": 60,
    "hpDice": "8d8 + 24",
    "speed": "30 ft., Fly 90 ft.",
    "str": 16,
    "dex": 20,
    "con": 17,
    "int": 18,
    "wis": 20,
    "cha": 18,
    "cr": "4",
    "xp": 1100,
    "initiative": 5,
    "senses": "Truesight 120 ft.; Passive Perception 15",
    "languages": "All; telepathy 120 ft.",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Psychic, Radiant",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Shielded Mind",
        "description": "The couatl’s thoughts can’t be read by any means, and other creatures can communicate with it telepathically only if it allows them."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (1d12 + 5) Piercing damage, and the target has the Poisoned condition until the end of the couatl’s next turn."
      },
      {
        "name": "Constrict",
        "description": "Strength Saving Throw: DC 15, one Medium or smaller creature the couatl can see within 5 feet. Failure: 8 (1d6 + 5) Bludgeoning damage. The target has the Grappled condition (escape DC 13), and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Spellcasting",
        "description": "The couatl casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save DC 15): At Will: Detect Evil and Good, Detect Magic, Detect Thoughts, Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, 275 System Reference Document 5.2 and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Create Food and Water, Dream, Greater Restoration, Scrying, Sleep"
      }
    ],
    "bonusActions": [
      {
        "name": "Divine Aid (2/Day)",
        "description": "The couatl casts Bless, Lesser Restoration, or Sanctuary, requiring no spell components and using the same spellcasting ability as Spellcasting. Crawling Claw"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Crab",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 3,
    "hpDice": "1d4 + 1",
    "speed": "20 ft., Swim 20 ft.",
    "str": 6,
    "dex": 11,
    "con": 12,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Blindsight 30 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "Stealth +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The crab can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Crocodile",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 13,
    "hpDice": "2d10 + 2",
    "speed": "20 ft., Swim 30 ft.",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "cr": "1/2",
    "xp": 100,
    "initiative": 0,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "Stealth +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Hold Breath",
        "description": "The crocodile can hold its breath for 1 hour."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 12). While Grappled, the target has the Restrained condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Cultist",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 9,
    "hpDice": "2d8",
    "speed": "30 ft.",
    "str": 11,
    "dex": 12,
    "con": 10,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "cr": "1/8",
    "xp": 25,
    "initiative": 1,
    "senses": "Passive Perception 10",
    "languages": "Common",
    "skills": "Deception +2, Religion +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Ritual Sickle",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Slashing damage plus 1 Necrotic damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Cultist Fanatic",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 44,
    "hpDice": "8d8 + 8",
    "speed": "30 ft.",
    "str": 11,
    "dex": 14,
    "con": 12,
    "int": 10,
    "wis": 14,
    "cha": 13,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Passive Perception 12",
    "languages": "Common",
    "skills": "Deception +3, Persuasion +3, Religion +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Pact Blade",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing damage plus 7 (2d6) Necrotic damage."
      },
      {
        "name": "Spellcasting",
        "description": "The cultist casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 12, +4 to hit with spell attacks): At Will: Light, Thaumaturgy 2/Day: Command 1/Day: Hold Person"
      }
    ],
    "bonusActions": [
      {
        "name": "Spiritual Weapon (2/Day)",
        "description": "The cultist casts the Spiritual Weapon spell, using the same spellcasting ability as Spellcasting."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Darkmantle",
    "size": "Small",
    "type": "Aberration",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 22,
    "hpDice": "5d6 + 5",
    "speed": "10 ft., Fly 30 ft.",
    "str": 16,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "cr": "1/2",
    "xp": 100,
    "initiative": 3,
    "senses": "Blindsight 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "Stealth +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Crush",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage, and the darkmantle attaches to the target. If the target is a Medium or smaller creature and the darkmantle had Advantage on the attack roll, it covers the target, which has the Blinded condition and is suffocating while the darkmantle is attached in this way. While attached to a target, the darkmantle can attack only the target but has Advantage on its attack rolls. Its Speed becomes 0, it can’t benefit from any bonus to its Speed, and it moves with the target. A creature can take an action to try to detach the darkmantle from itself, doing so with a successful DC 13 Strength (Athletics) check. On its turn, the darkmantle can detach itself by using 5 feet of movement."
      },
      {
        "name": "Darkness Aura (1/Day)",
        "description": "Magical Darkness fills a 15-foot"
      },
      {
        "name": "Emanation originating from the darkmantle",
        "description": "This effect lasts while the darkmantle maintains Concentration on it, up to 10 minutes. Darkvision can’t penetrate this area, and no light can illuminate it."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Death Dog",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 39,
    "hpDice": "6d8 + 12",
    "speed": "40 ft.",
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 3,
    "wis": 13,
    "cha": 6,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 120 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5, Stealth +4",
    "resistances": "",
    "immunities": "Blinded, Charmed, Deafened, Frightened,",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The death dog makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage. If the target is a creature, it is subjected to the following effect. Constitution Saving Throw: DC 12. First Failure: The target has the Poisoned condition. While Poisoned, the target’s Hit Point maximum doesn’t return to normal when finishing a Long Rest, and it repeats the save every 24 hours that elapse, ending the effect on itself on a success. Subsequent Failures: The Poisoned target’s Hit Point maximum decreases by 5 (1d10)."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Deer",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 4,
    "hpDice": "1d8",
    "speed": "50 ft.",
    "str": 11,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 14,
    "cha": 5,
    "cr": "0",
    "xp": 10,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "None",
    "skills": "Perception +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Agile",
        "description": "The deer doesn’t provoke an Opportunity Attack when it moves out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Deva",
    "size": "Medium",
    "type": "Celestial",
    "alignment": "Lawful Good",
    "ac": 17,
    "hp": 229,
    "hpDice": "27d8 + 108",
    "speed": "30 ft., Fly 90 ft. (hover)",
    "str": 18,
    "dex": 18,
    "con": 18,
    "int": 17,
    "wis": 20,
    "cha": 20,
    "cr": "10",
    "xp": 5900,
    "initiative": 4,
    "senses": "Darkvision 120 ft.; Passive Perception 19",
    "languages": "All; telepathy 120 ft.",
    "skills": "Insight +9, Perception +9",
    "resistances": "Radiant",
    "immunities": "Charmed, Exhaustion, Frightened",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Exalted Restoration",
        "description": "If the deva dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia."
      },
      {
        "name": "Magic Resistance",
        "description": "The deva has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The deva makes two Holy Mace attacks."
      },
      {
        "name": "Holy Mace",
        "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 7 (1d6 + 4) Bludgeoning damage plus 18 (4d8) Radiant damage."
      },
      {
        "name": "Spellcasting",
        "description": "The deva casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): At Will: Detect Evil and Good, Shapechange (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) 1/Day Each: Commune, Raise Dead"
      }
    ],
    "bonusActions": [
      {
        "name": "Divine Aid (2/Day)",
        "description": "The deva casts Cure Wounds, Lesser Restoration, or Remove Curse, using the same spellcasting ability as Spellcasting. 277 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Dire Wolf",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 22,
    "hpDice": "3d10 + 6",
    "speed": "50 ft.",
    "str": 17,
    "dex": 15,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The wolf has Advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Djinni",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 218,
    "hpDice": "19d10 + 114",
    "speed": "30 ft., Fly 90 ft. (hover)",
    "str": 21,
    "dex": 15,
    "con": 22,
    "int": 15,
    "wis": 16,
    "cha": 20,
    "cr": "11",
    "xp": 7200,
    "initiative": 2,
    "senses": "Darkvision 120 ft.; Passive Perception 13",
    "languages": "Primordial (Auran)",
    "skills": "",
    "resistances": "",
    "immunities": "Lightning, Thunder",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Elemental Restoration",
        "description": "If the djinni dies outside the Elemental Plane of Air, its body dissolves into mist, and it gains a new body in 1d4 days, reviving with all its Hit Points somewhere on the Plane of Air."
      },
      {
        "name": "Magic Resistance",
        "description": "The djinni has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Wishes",
        "description": "The djinni has a 30 percent chance of knowing the Wish spell. If the djinni knows it, the djinni can cast it only on behalf of a non-genie creature who communicates a wish in a way the djinni can understand. If the djinni casts the spell for the creature, the djinni suffers none of the spell’s stress. Once the djinni has cast it three times, the djinni can’t do so again for 365 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The djinni makes three attacks, using Storm Blade or Storm Bolt in any combination."
      },
      {
        "name": "Storm Blade",
        "description": "Melee Attack Roll: +9, reach 5 feet. Hit: 12 (2d6 + 5) Slashing damage plus 7 (2d6) Lightning damage."
      },
      {
        "name": "Storm Bolt",
        "description": "Ranged Attack Roll: +9, range 120 feet. Hit: 13 (3d8) Thunder damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Create Whirlwind",
        "description": "The djinni conjures a whirlwind at a point it can see within 120 feet. The whirlwind fills a 20-foot-radius, 60-foot-high Cylinder centered on that point. The whirlwind lasts until the djinni’s Concentration on it ends. The djinni can move the whirlwind up to 20 feet at the start of each of its turns. Whenever the whirlwind enters a creature’s space or a creature enters the whirlwind, that creature is subjected to the following effect. Strength Saving Throw: DC 17 (a creature makes this save only once per turn, and the djinni is unaffected). Failure: While in the whirlwind, the target has the Restrained condition and moves with the whirlwind. At the start of each of its turns, the Restrained target takes 21 (6d6) Thunder damage. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success."
      },
      {
        "name": "Spellcasting",
        "description": "The djinni casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): At Will: Detect Evil and Good, Detect Magic 2/Day Each: Create Food and Water (can create wine instead of water), Tongues, Wind Walk 1/Day Each: Creation, Gaseous Form, Invisibility, Major Image, Plane Shift"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Doppelganger",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 52,
    "hpDice": "8d8 + 16",
    "speed": "30 ft.",
    "str": 11,
    "dex": 18,
    "con": 14,
    "int": 11,
    "wis": 12,
    "cha": 14,
    "cr": "3",
    "xp": 700,
    "initiative": 4,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "Common plus three other languages",
    "skills": "Deception +6, Insight +3",
    "resistances": "",
    "immunities": "Charmed",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The doppelganger makes two Slam attacks and uses Unsettling Visage if available."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +6 (with Advantage during the first round of each combat), reach 5 ft. Hit: 11 (2d6 + 4) Bludgeoning damage."
      },
      {
        "name": "Read Thoughts",
        "description": "The doppelganger casts Detect Thoughts, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 12)."
      },
      {
        "name": "Unsettling Visage (Recharge 6)",
        "description": "Wisdom Saving Throw: DC 12, each creature in a 15-foot Emanation originating from the doppelganger that can see the doppelganger. Failure: The target has the Frightened condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The doppelganger shape-shifts into a Medium or Small Humanoid, or it returns to its true form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. 278 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Draft Horse",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 15,
    "hpDice": "2d10 + 4",
    "speed": "40 ft.",
    "str": 18,
    "dex": 10,
    "con": 15,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 6 (1d4 + 4) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Dragon Turtle",
    "size": "Gargantuan",
    "type": "Dragon",
    "alignment": "Neutral",
    "ac": 20,
    "hp": 356,
    "hpDice": "23d20 + 115",
    "speed": "20 ft., Swim 50 ft.",
    "str": 25,
    "dex": 10,
    "con": 20,
    "int": 10,
    "wis": 12,
    "cha": 12,
    "cr": "17",
    "xp": 18000,
    "initiative": 6,
    "senses": "Darkvision 120 ft.; Passive Perception 11",
    "languages": "Draconic, Primordial (Aquan)",
    "skills": "",
    "resistances": "Fire",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Bite attacks. It can replace one attack with a Tail attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +13, reach 15 ft. Hit: 23 (3d10 + 7) Piercing damage plus 7 (2d6) Fire damage. Being underwater doesn’t grant Resistance to this Fire damage."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +13, reach 15 ft. Hit: 18 (2d10 + 7) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      },
      {
        "name": "Steam Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 19, each creature in a 60-foot Cone. Failure: 56 (16d6) Fire damage. Success: Half damage. Failure or Success: Being underwater doesn’t grant Resistance to this Fire damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Dretch",
    "size": "Small",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 18,
    "hpDice": "4d6 + 4",
    "speed": "20 ft.",
    "str": 12,
    "dex": 11,
    "con": 12,
    "int": 5,
    "wis": 8,
    "cha": 3,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "Abyssal; telepathy 60 ft. (works only with",
    "skills": "",
    "resistances": "Cold, Fire, Lightning",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage."
      },
      {
        "name": "Fetid Cloud (1/Day)",
        "description": "Constitution Saving Throw: DC 11, each creature in a 10-foot Emanation originating from the dretch. Failure: The target has the Poisoned condition until the end of its next turn. While Poisoned, the creature can take either an action or a Bonus Action on its turn, not both, and it can’t take Reactions."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Drider",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 19,
    "hp": 123,
    "hpDice": "13d10 + 52",
    "speed": "30 ft., Climb 30 ft.",
    "str": 16,
    "dex": 19,
    "con": 18,
    "int": 13,
    "wis": 16,
    "cha": 12,
    "cr": "6",
    "xp": 2300,
    "initiative": 4,
    "senses": "Darkvision 120 ft.; Passive Perception 16",
    "languages": "Elvish, Undercommon",
    "skills": "Perception +6, Stealth +10",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The drider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Sunlight Sensitivity",
        "description": "While in sunlight, the drider has Disadvantage on ability checks and attack rolls."
      },
      {
        "name": "Web Walker",
        "description": "The drider ignores movement restrictions caused by webs, and the drider knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The drider makes three attacks, using Foreleg or Poison Burst in any combination."
      },
      {
        "name": "Foreleg",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 13 (2d8 + 4) Piercing damage."
      },
      {
        "name": "Poison Burst",
        "description": "Ranged Attack Roll: +6, range 120 ft. Hit: 13 (3d6 + 3) Poison damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Magic of the Spider Queen (Recharge 5–6)",
        "description": "The drider casts Darkness, Faerie Fire, or Web, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 14). 279 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Druid",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 44,
    "hpDice": "8d8 + 8",
    "speed": "30 ft.",
    "str": 10,
    "dex": 12,
    "con": 13,
    "int": 12,
    "wis": 16,
    "cha": 11,
    "cr": "2",
    "xp": 450,
    "initiative": 1,
    "senses": "Passive Perception 15",
    "languages": "Common, Druidic, Sylvan",
    "skills": "Medicine +5, Nature +3, Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The druid makes two attacks, using Vine Staff or Verdant Wisp in any combination."
      },
      {
        "name": "Vine Staff",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Bludgeoning damage plus 2 (1d4) Poison damage."
      },
      {
        "name": "Verdant Wisp",
        "description": "Ranged Attack Roll: +5, range 90 ft. Hit: 10 (3d6) Radiant damage."
      },
      {
        "name": "Spellcasting",
        "description": "The druid casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 13): At Will: Druidcraft, Speak with Animals 2/Day Each: Entangle, Thunderwave 1/Day Each: Animal Messenger, Longstrider, Moonbeam"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Dryad",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Neutral",
    "ac": 16,
    "hp": 22,
    "hpDice": "5d8",
    "speed": "30 ft.",
    "str": 10,
    "dex": 12,
    "con": 11,
    "int": 14,
    "wis": 15,
    "cha": 18,
    "cr": "1",
    "xp": 200,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Elvish, Sylvan",
    "skills": "Perception +4, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The dryad has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Speak with Beasts and Plants",
        "description": "The dryad can communicate with Beasts and Plants as if they shared a language."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dryad makes one Vine Lash or Thorn Burst attack, and it can use Spellcasting to cast Charm Monster."
      },
      {
        "name": "Vine Lash",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 8 (1d8 + 4) Slashing damage."
      },
      {
        "name": "Thorn Burst",
        "description": "Ranged Attack Roll: +6, range 60 ft. Hit: 7 (1d6 + 4) Piercing damage."
      },
      {
        "name": "Spellcasting",
        "description": "The dryad casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 14): At Will: Animal Friendship, Charm Monster (lasts 24 hours; ends early if the dryad casts the spell again), Druidcraft 1/Day Each: Entangle, Pass without Trace"
      }
    ],
    "bonusActions": [
      {
        "name": "Tree Stride",
        "description": "If within 5 feet of a Large or bigger tree, the dryad teleports to an unoccupied space within 5 feet of a second Large or bigger tree that is within 60 feet of the previous tree."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Dust Mephit",
    "size": "Small",
    "type": "Elemental",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 17,
    "hpDice": "5d6",
    "speed": "30 ft., Fly 30 ft.",
    "str": 5,
    "dex": 14,
    "con": 10,
    "int": 9,
    "wis": 11,
    "cha": 10,
    "cr": "1/2",
    "xp": 100,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "Primordial (Auran, Terran)",
    "skills": "Perception +2, Stealth +4",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Poisoned",
    "vulnerabilities": "Fire",
    "traits": [
      {
        "name": "Death Burst",
        "description": "The mephit explodes when it dies. Dexterity Saving Throw: DC 10, each creature in a 5-foot"
      },
      {
        "name": "Emanation originating from the mephit",
        "description": "Failure: 5 (2d4) Bludgeoning damage. Success: Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage."
      },
      {
        "name": "Blinding Breath (Recharge 6)",
        "description": "Dexterity Saving Throw: DC 10, each creature in a 15-foot Cone. Failure: The target has the Blinded condition until the end of the mephit’s next turn."
      },
      {
        "name": "Sleep (1/Day)",
        "description": "The mephit casts the Sleep spell, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 10)."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Eagle",
    "size": "Small",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 4,
    "hpDice": "1d6 + 1",
    "speed": "10 ft., Fly 60 ft.",
    "str": 6,
    "dex": 15,
    "con": 12,
    "int": 2,
    "wis": 14,
    "cha": 7,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Passive Perception 16",
    "languages": "None",
    "skills": "Perception +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Attack Roll: +4, reach 5 feet. Hit: 4 (1d4 + 2) Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Earth Elemental",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 147,
    "hpDice": "14d10 + 70",
    "speed": "30 ft., Burrow 30 ft.",
    "str": 20,
    "dex": 8,
    "con": 20,
    "int": 5,
    "wis": 10,
    "cha": 5,
    "cr": "5",
    "xp": 1800,
    "initiative": -1,
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.;",
    "languages": "Primordial (Terran)",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Paralyzed, Petrified,",
    "vulnerabilities": "Thunder",
    "traits": [
      {
        "name": "Earth Glide",
        "description": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn’t disturb the material it moves through."
      },
      {
        "name": "Siege Monster",
        "description": "The elemental deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two attacks, using Slam or Rock Launch in any combination."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5) Bludgeoning damage. 280 System Reference Document 5.2"
      },
      {
        "name": "Rock Launch",
        "description": "Ranged Attack Roll: +8, range 60 ft. Hit: 8 (1d6 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Efreeti",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 212,
    "hpDice": "17d10 + 119",
    "speed": "40 ft., Fly 60 ft. (hover)",
    "str": 22,
    "dex": 12,
    "con": 24,
    "int": 16,
    "wis": 15,
    "cha": 19,
    "cr": "11",
    "xp": 7200,
    "initiative": 1,
    "senses": "Darkvision 120 ft.; Passive Perception 12",
    "languages": "Primordial (Ignan)",
    "skills": "",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Elemental Restoration",
        "description": "If the efreeti dies outside the Elemental Plane of Fire, its body dissolves into ash, and it gains a new body in 1d4 days, reviving with all its Hit Points somewhere on the Plane of Fire."
      },
      {
        "name": "Magic Resistance",
        "description": "The efreeti has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Wishes",
        "description": "The efreeti has a 30 percent chance of knowing the Wish spell. If the efreeti knows it, the efreeti can cast it only on behalf of a non-genie creature who communicates a wish in a way the efreeti can understand. If the efreeti casts the spell for the creature, the efreeti suffers none of the spell’s stress. Once the efreeti has cast it three times, the efreeti can’t do so again for 365 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The efreeti makes three attacks, using Heated Blade or Hurl Flame in any combination."
      },
      {
        "name": "Heated Blade",
        "description": "Melee Attack Roll: +10, reach 5 ft. Hit: 13 (2d6 + 6) Slashing damage plus 13 (2d12) Fire damage."
      },
      {
        "name": "Hurl Flame",
        "description": "Ranged Attack Roll: +8, range 120 ft. Hit: 24 (7d6) Fire damage."
      },
      {
        "name": "Spellcasting",
        "description": "The efreeti casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 16): At Will: Detect Magic, Elementalism 1/Day Each: Gaseous Form, Invisibility, Major Image, Plane Shift, Tongues, Wall of Fire (level 7 version)"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Elephant",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 76,
    "hpDice": "8d12 + 24",
    "speed": "40 ft.",
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "cr": "4",
    "xp": 1100,
    "initiative": -1,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elephant makes two Gore attacks."
      },
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 15 (2d8 + 6) Piercing damage. If the target is a Huge or smaller creature and the elephant moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      }
    ],
    "bonusActions": [
      {
        "name": "Trample",
        "description": "Dexterity Saving Throw: DC 16, one creature within 5 feet that has the Prone condition. Failure: 17 (2d10 + 6) Bludgeoning damage. Success: Half damage."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Elk",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 11,
    "hpDice": "2d10",
    "speed": "50 ft.",
    "str": 16,
    "dex": 10,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 6,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage. If the target is a Large or smaller creature and the elk moved 20+ feet straight toward it immediately before the hit, the target takes an extra 3 (1d6) Bludgeoning damage and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Erinyes",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 18,
    "hp": 178,
    "hpDice": "21d8 + 84",
    "speed": "30 ft., Fly 60 ft.",
    "str": 18,
    "dex": 16,
    "con": 18,
    "int": 14,
    "wis": 14,
    "cha": 18,
    "cr": "12",
    "xp": 8400,
    "initiative": 7,
    "senses": "Truesight 120 ft.; Passive Perception 16",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "Perception +6, Persuasion +8",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Diabolical Restoration",
        "description": "If the erinyes dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "description": "The erinyes has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Magic Rope",
        "description": "The erinyes has a magic rope. While bearing it, the erinyes can use the Entangling Rope action. The rope has AC 20, HP 90, and Immunity to Poison and Psychic damage. The rope turns to dust if reduced to 0 Hit Points, if it is 5+ feet away from the erinyes for 1 hour or more, or if the erinyes dies. If the rope is damaged or destroyed, the erinyes can fully restore it when finishing a Short or Long Rest."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The erinyes makes three Withering Sword attacks and can use Entangling Rope."
      },
      {
        "name": "Withering Sword",
        "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 13 (2d8 + 4) Slashing damage plus 11 (2d10) Necrotic damage."
      },
      {
        "name": "Entangling Rope (Requires Magic Rope)",
        "description": "Strength Saving Throw: DC 16, one creature the erinyes can see within 120 feet. Failure: 14 (4d6) Force damage, and the target has the Restrained condition until the rope is destroyed, the erinyes uses a Bonus Action to release the target, or the erinyes uses Entangling Rope again."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Parry",
        "description": "Trigger: The erinyes is hit by a melee attack roll while holding a weapon. Response: The erinyes adds 4 to its AC against that attack, possibly causing it to miss. 281 System Reference Document 5.2"
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Ettercap",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 44,
    "hpDice": "8d8 + 8",
    "speed": "30 ft., Climb 30 ft.",
    "str": 14,
    "dex": 15,
    "con": 13,
    "int": 7,
    "wis": 12,
    "cha": 8,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3, Stealth +4, Survival +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "to Fire damage; Immunity to Bludgeoning,",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The ettercap can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "description": "The ettercap ignores movement restrictions caused by webs, and the ettercap knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ettercap makes one Bite attack and one Claw attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage plus 2 (1d4) Poison damage, and the target has the Poisoned condition until the start of the ettercap’s next turn."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Slashing damage."
      },
      {
        "name": "Web Strand (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 12, one Large or smaller creature the ettercap can see within 30 feet. Failure: The target has the Restrained condition until the web is destroyed (AC 10; HP 5; Vulnerability to Fire damage; Immunity to Bludgeoning, Poison, and Psychic damage)."
      }
    ],
    "bonusActions": [
      {
        "name": "Reel",
        "description": "The ettercap pulls one creature within 30 feet of itself that is Restrained by its Web Strand up to 25 feet straight toward itself."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ettin",
    "size": "Large",
    "type": "Giant",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 85,
    "hpDice": "10d10 + 30",
    "speed": "40 ft.",
    "str": 21,
    "dex": 8,
    "con": 17,
    "int": 6,
    "wis": 10,
    "cha": 8,
    "cr": "4",
    "xp": 1100,
    "initiative": -1,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Giant",
    "skills": "Perception +4",
    "resistances": "",
    "immunities": "Blinded, Charmed, Deafened, Frightened,",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ettin makes one Battleaxe attack and one Morningstar attack."
      },
      {
        "name": "Battleaxe",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Morningstar",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Piercing damage, and the target has Disadvantage on the next attack roll it makes before the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Fire Elemental",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 93,
    "hpDice": "11d10 + 33",
    "speed": "50 ft.",
    "str": 10,
    "dex": 17,
    "con": 16,
    "int": 6,
    "wis": 10,
    "cha": 7,
    "cr": "5",
    "xp": 1800,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Ignan)",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Fire, Poison; Exhaustion, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Fire Aura",
        "description": "At the end of each of the elemental’s turns, each creature in a 10-foot Emanation originating from the elemental takes 5 (1d10) Fire damage. Creatures and flammable objects in the Emanation start burning."
      },
      {
        "name": "Fire Form",
        "description": "The elemental can move through a space as narrow as 1 inch without expending extra movement to do so, and it can enter a creature’s space and stop there. The first time it enters a creature’s space on a turn, that creature takes 5 (1d10) Fire damage."
      },
      {
        "name": "Illumination",
        "description": "The elemental sheds Bright Light in a 30foot radius and Dim Light for an additional 30 feet. 282 System Reference Document 5.2"
      },
      {
        "name": "Water Susceptibility",
        "description": "The elemental takes 3 (1d6) Cold damage for every 5 feet the elemental moves in water or for every gallon of water splashed on it."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two Burn attacks."
      },
      {
        "name": "Burn",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Fire damage. If the target is a creature or a flammable object, it starts burning."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Fire Giant",
    "size": "Huge",
    "type": "Giant",
    "alignment": "Lawful Evil",
    "ac": 18,
    "hp": 162,
    "hpDice": "13d12 + 78",
    "speed": "30 ft.",
    "str": 25,
    "dex": 9,
    "con": 23,
    "int": 10,
    "wis": 14,
    "cha": 13,
    "cr": "9",
    "xp": 5000,
    "initiative": 3,
    "senses": "Passive Perception 16",
    "languages": "Giant",
    "skills": "Athletics +11, Perception +6",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two attacks, using Flame Sword or Hammer Throw in any combination."
      },
      {
        "name": "Flame Sword",
        "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 21 (4d6 + 7) Slashing damage plus 10 (3d6) Fire damage. Hammer Throw. Ranged Attack Roll: +11, range 60/240 ft. Hit: 23 (3d10 + 7) Bludgeoning damage plus 4 (1d8) Fire damage, and the target is pushed up to 15 feet straight away from the giant and has Disadvantage on the next attack roll it makes before the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Flesh Golem",
    "size": "Medium",
    "type": "Construct",
    "alignment": "Neutral",
    "ac": 9,
    "hp": 127,
    "hpDice": "15d8 + 60",
    "speed": "30 ft.",
    "str": 19,
    "dex": 9,
    "con": 18,
    "int": 6,
    "wis": 10,
    "cha": 5,
    "cr": "5",
    "xp": 1800,
    "initiative": -1,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Understands Common plus one other language",
    "skills": "",
    "resistances": "",
    "immunities": "Lightning, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Aversion to Fire",
        "description": "If the golem takes Fire damage, it has Disadvantage on attack rolls and ability checks until the end of its next turn."
      },
      {
        "name": "Berserk",
        "description": "Whenever the golem starts its turn Bloodied, roll 1d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it remains so until it is destroyed or it is no longer Bloodied. The golem’s creator, if within 60 feet of the berserk golem, can try to calm it by taking an action to make a DC 15 Charisma (Persuasion) check; the golem must be able to hear its creator. If this check succeeds, the golem ceases being berserk until the start of its next turn, at which point it resumes rolling for the Berserk trait again if it is still Bloodied."
      },
      {
        "name": "Immutable Form",
        "description": "The golem can’t shape-shift."
      },
      {
        "name": "Lightning Absorption",
        "description": "Whenever the golem is subjected to Lightning damage, it regains a number of Hit Points equal to the Lightning damage dealt."
      },
      {
        "name": "Magic Resistance",
        "description": "The golem has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The golem makes two Slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning damage plus 4 (1d8) Lightning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Flying Snake",
    "size": "Tiny",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 5,
    "hpDice": "2d4",
    "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
    "str": 4,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "1/8",
    "xp": 25,
    "initiative": 2,
    "senses": "Blindsight 10 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Flyby",
        "description": "The snake doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Frog",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "20 ft., Swim 20 ft.",
    "str": 1,
    "dex": 13,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "cr": "0",
    "xp": 10,
    "initiative": 1,
    "senses": "Darkvision 30 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "Perception +1, Stealth +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The frog can breathe air and water."
      },
      {
        "name": "Standing Leap",
        "description": "The frog’s Long Jump is up to 10 feet and its High Jump is up to 5 feet with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Frost Giant",
    "size": "Huge",
    "type": "Giant",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 149,
    "hpDice": "13d12 + 65",
    "speed": "40 ft.",
    "str": 23,
    "dex": 9,
    "con": 21,
    "int": 9,
    "wis": 10,
    "cha": 12,
    "cr": "8",
    "xp": 3900,
    "initiative": 2,
    "senses": "Passive Perception 13",
    "languages": "Giant",
    "skills": "Athletics +9, Perception +3",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two attacks, using Frost Axe or Great Bow in any combination."
      },
      {
        "name": "Frost Axe",
        "description": "Melee Attack Roll: +9, reach 10 ft. Hit: 19 (2d12 + 6) Slashing damage plus 9 (2d8) Cold damage."
      },
      {
        "name": "Great Bow",
        "description": "Ranged Attack Roll: +9, range 150/600 ft. Hit: 17 (2d10 + 6) Piercing damage plus 7 (2d6) Cold damage, and the target’s Speed decreases by 10 feet until the end of its next turn."
      }
    ],
    "bonusActions": [
      {
        "name": "War Cry (Recharge 5–6)",
        "description": "The giant or one creature of its choice that can see or hear it gains 16 (2d10 + 5) Temporary Hit Points and has Advantage on attack rolls until the start of the giant’s next turn. Fungi"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Gargoyle",
    "size": "Medium",
    "type": "Elemental",
    "alignment": "Chaotic Evil",
    "ac": 15,
    "hp": 67,
    "hpDice": "9d8 + 27",
    "speed": "30 ft., Fly 60 ft.",
    "str": 15,
    "dex": 11,
    "con": 16,
    "int": 6,
    "wis": 11,
    "cha": 7,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Terran)",
    "skills": "Stealth +4",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Petrified, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Flyby",
        "description": "The gargoyle doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The gargoyle makes two Claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Gelatinous Cube",
    "size": "Large",
    "type": "Ooze",
    "alignment": "Unaligned",
    "ac": 6,
    "hp": 63,
    "hpDice": "6d10 + 30",
    "speed": "15 ft.",
    "str": 14,
    "dex": 3,
    "con": 20,
    "int": 1,
    "wis": 6,
    "cha": 1,
    "cr": "2",
    "xp": 450,
    "initiative": -4,
    "senses": "Blindsight 60 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Acid; Blinded, Charmed, Deafened,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ooze Cube",
        "description": "The cube fills its entire space and is transparent. Other creatures can enter that space, but a creature that does so is subjected to the cube’s Engulf and has Disadvantage on the saving throw. Creatures inside the cube have Total Cover, and the cube can hold one Large creature or up to four Medium or Small creatures inside itself at a time. As an action, a creature within 5 feet of the cube can pull a creature or an object out of the cube by succeeding on a DC 12 Strength (Athletics) check, and the puller takes 10 (3d6) Acid damage."
      },
      {
        "name": "Transparent",
        "description": "Even when the cube is in plain sight, a creature must succeed on a DC 15 Wisdom (Perception) check to notice the cube if the creature hasn’t witnessed the cube move or otherwise act."
      }
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Acid damage."
      },
      {
        "name": "Engulf",
        "description": "The cube moves up to its Speed without provoking Opportunity Attacks. The cube can move through the spaces of Large or smaller creatures if it has room inside itself to contain them (see the Ooze Cube trait). Dexterity Saving Throw: DC 12, each creature whose space the cube enters for the first time during this move. Failure: 10 (3d6) Acid damage, and the target is engulfed. An engulfed target is suffocating, can’t cast spells with a Verbal component, has the Restrained condition, and takes 10 (3d6) Acid damage at the start of each of the cube’s turns. When the cube moves, the engulfed target moves with it. An engulfed target can try to escape by taking an action to make a DC 12 Strength (Athletics) check. On a successful check, the target escapes and enters the nearest unoccupied space. Success: Half damage, and the target moves to an unoccupied space within 5 feet of the cube. If there is no unoccupied space, the target fails the save instead."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ghast",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 36,
    "hpDice": "8d8",
    "speed": "30 ft.",
    "str": 16,
    "dex": 17,
    "con": 10,
    "int": 11,
    "wis": 10,
    "cha": 8,
    "cr": "2",
    "xp": 450,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Common",
    "skills": "",
    "resistances": "Necrotic",
    "immunities": "Poison; Charmed, Exhaustion, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Stench",
        "description": "Constitution Saving Throw: DC 10, any creature that starts its turn in a 5-foot Emanation originating from the ghast. Failure: The target has the Poisoned condition until the start of its next turn. Success: The target is immune to this ghast’s Stench for 24 hours."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage plus 9 (2d8) Necrotic damage."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage. If the target is a non-Undead creature, it is subjected to the following effect. Constitution Saving Throw: DC 10. Failure: The target has the Paralyzed condition until the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ghost",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Neutral",
    "ac": 11,
    "hp": 45,
    "hpDice": "10d8",
    "speed": "5 ft., Fly 40 ft. (hover)",
    "str": 7,
    "dex": 13,
    "con": 10,
    "int": 10,
    "wis": 12,
    "cha": 17,
    "cr": "4",
    "xp": 1100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "Acid, Bludgeoning, Cold, Fire, Lightning,",
    "immunities": "Necrotic, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ethereal Sight",
        "description": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane."
      },
      {
        "name": "Incorporeal Movement",
        "description": "The ghost can move through other creatures and objects as if they were Difficult"
      },
      {
        "name": "Terrain",
        "description": "It takes 5 (1d10) Force damage if it ends its turn inside an object. 285 System Reference Document 5.2"
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ghost makes two Withering Touch attacks."
      },
      {
        "name": "Withering Touch",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 19 (3d10 + 3) Necrotic damage."
      },
      {
        "name": "Etherealness",
        "description": "The ghost casts the Etherealness spell, requiring no spell components and using Charisma as the spellcasting ability. The ghost is visible on the Material Plane while on the Border Ethereal and vice versa, but it can’t affect or be affected by anything on the other plane."
      },
      {
        "name": "Horrific Visage",
        "description": "Wisdom Saving Throw: DC 13, each creature in a 60-foot Cone that can see the ghost and isn’t an Undead. Failure: 10 (2d6 + 3) Psychic damage, and the target has the Frightened condition until the start of the ghost’s next turn. Success: The target is immune to this ghost’s Horrific Visage for 24 hours."
      },
      {
        "name": "Possession (Recharge 6)",
        "description": "Charisma Saving Throw: DC 13, one Humanoid the ghost can see within 5 feet. Failure: The target is possessed by the ghost; the ghost disappears, and the target has the Incapacitated condition and loses control of its body. The ghost now controls the body, but the target retains awareness. The ghost can’t be targeted by any attack, spell, or other effect, except ones that specifically target Undead. The ghost’s game statistics are the same, except it uses the possessed target’s Speed, as well as the target’s Strength, Dexterity, and Constitution modifiers. The possession lasts until the body drops to 0 Hit"
      },
      {
        "name": "Points or the ghost leaves as a Bonus Action",
        "description": "When the possession ends, the ghost appears in an unoccupied space within 5 feet of the target, and the target is immune to this ghost’s Possession for 24 hours. Success: The target is immune to this ghost’s Possession for 24 hours."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ghoul",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 22,
    "hpDice": "5d8",
    "speed": "30 ft.",
    "str": 13,
    "dex": 15,
    "con": 10,
    "int": 7,
    "wis": 10,
    "cha": 6,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Common",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Charmed, Exhaustion, Poisoned",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ghoul makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage plus 3 (1d6) Necrotic damage."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage. If the target is a creature that isn’t an Undead or elf, it is subjected to the following effect. Constitution Saving Throw: DC 10. Failure: The target has the Paralyzed condition until the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Ape",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 168,
    "hpDice": "16d12 + 64",
    "speed": "40 ft., Climb 40 ft.",
    "str": 23,
    "dex": 14,
    "con": 18,
    "int": 5,
    "wis": 12,
    "cha": 7,
    "cr": "7",
    "xp": 2900,
    "initiative": 5,
    "senses": "Passive Perception 14",
    "languages": "None",
    "skills": "Athletics +9, Perception +4, Survival +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ape makes two Fist attacks."
      },
      {
        "name": "Fist",
        "description": "Melee Attack Roll: +9, reach 10 ft. Hit: 22 (3d10 + 6) Bludgeoning damage."
      },
      {
        "name": "Boulder Toss (Recharge 6)",
        "description": "The ape hurls a boulder at a point it can see within 90 feet. Dexterity Saving Throw: DC 17, each creature in a 5-foot-radius Sphere centered on that point. Failure: 24 (7d6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition. Success: Half damage only."
      }
    ],
    "bonusActions": [
      {
        "name": "Leap",
        "description": "The ape jumps up to 30 feet by spending 10 feet of movement."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Badger",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 15,
    "hpDice": "2d8 + 6",
    "speed": "30 ft., Burrow 10 ft.",
    "str": 13,
    "dex": 10,
    "con": 17,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "Poison",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Bat",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 22,
    "hpDice": "4d10",
    "speed": "10 ft., Fly 60 ft.",
    "str": 15,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "cr": "1/4",
    "xp": 50,
    "initiative": 3,
    "senses": "Blindsight 120 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Boar",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 42,
    "hpDice": "5d10 + 15",
    "speed": "40 ft.",
    "str": 17,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 7,
    "cha": 5,
    "cr": "2",
    "xp": 450,
    "initiative": 0,
    "senses": "Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Bloodied Fury",
        "description": "The boar has Advantage on melee attack rolls while it is Bloodied."
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage. If the target is a Large or smaller creature and the boar moved 20+ feet straight toward it immediately before the hit, the target takes an extra 7 (2d6) Piercing damage and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Centipede",
    "size": "Small",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 9,
    "hpDice": "2d6 + 2",
    "speed": "30 ft., Climb 30 ft.",
    "str": 5,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Blindsight 30 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage, and the target has the Poisoned condition until the start of the centipede’s next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Constrictor Snake",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 60,
    "hpDice": "8d12 + 8",
    "speed": "30 ft., Swim 30 ft.",
    "str": 19,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Blindsight 10 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The snake makes one Bite attack and uses Constrict."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Piercing damage."
      },
      {
        "name": "Constrict",
        "description": "Strength Saving Throw: DC 14, one Large or smaller creature the snake can see within 10 feet. Failure: 13 (2d8 + 4) Bludgeoning damage, and the target has the Grappled condition (escape DC 14)."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Crab",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 15,
    "hp": 13,
    "hpDice": "3d8",
    "speed": "30 ft., Swim 30 ft.",
    "str": 13,
    "dex": 13,
    "con": 11,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "cr": "1/8",
    "xp": 25,
    "initiative": 1,
    "senses": "Blindsight 30 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "Stealth +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The crab can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 11) from one of two claws."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Crocodile",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 85,
    "hpDice": "9d12 + 27",
    "speed": "30 ft., Swim 50 ft.",
    "str": 21,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 10,
    "cha": 7,
    "cr": "5",
    "xp": 1800,
    "initiative": -1,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Hold Breath",
        "description": "The crocodile can hold its breath for 1 hour."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The crocodile makes one Bite attack and one Tail attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 21 (3d10 + 5) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 15). While Grappled, the target has the Restrained condition and can’t be targeted by the crocodile’s Tail."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 18 (3d8 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Eagle",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Neutral Good",
    "ac": 13,
    "hp": 26,
    "hpDice": "4d10 + 4",
    "speed": "10 ft., Fly 80 ft.",
    "str": 16,
    "dex": 17,
    "con": 13,
    "int": 8,
    "wis": 14,
    "cha": 10,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Passive Perception 16",
    "languages": "Celestial; understands Common and Primordial",
    "skills": "Perception +6",
    "resistances": "Necrotic, Radiant",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The eagle makes two Rend attacks. 348 System Reference Document 5.2"
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing damage plus 3 (1d6) Radiant damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Elk",
    "size": "Huge",
    "type": "Celestial",
    "alignment": "Neutral Good",
    "ac": 14,
    "hp": 42,
    "hpDice": "5d12 + 10",
    "speed": "60 ft.",
    "str": 19,
    "dex": 18,
    "con": 14,
    "int": 7,
    "wis": 14,
    "cha": 10,
    "cr": "2",
    "xp": 450,
    "initiative": 6,
    "senses": "Darkvision 90 ft.; Passive Perception 14",
    "languages": "Celestial; understands Common, Elvish, and",
    "skills": "Perception +4",
    "resistances": "Necrotic, Radiant",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Bludgeoning damage plus 5 (2d4) Radiant damage. If the target is a Huge or smaller creature and the elk moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Fire Beetle",
    "size": "Small",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 4,
    "hpDice": "1d6 + 1",
    "speed": "30 ft., Climb 30 ft.",
    "str": 8,
    "dex": 10,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Blindsight 30 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "Fire",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Illumination",
        "description": "The beetle sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +1, reach 5 ft. Hit: 1 Fire damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Frog",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 18,
    "hpDice": "4d8",
    "speed": "30 ft., Swim 30 ft.",
    "str": 12,
    "dex": 13,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "cr": "1/4",
    "xp": 50,
    "initiative": 1,
    "senses": "Darkvision 30 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The frog can breathe air and water."
      },
      {
        "name": "Standing Leap",
        "description": "The frog’s Long Jump is up to 20 feet and its High Jump is up to 10 feet with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 11)."
      },
      {
        "name": "Swallow",
        "description": "The frog swallows a Small or smaller target it is grappling. While swallowed, the target isn’t Grappled but has the Blinded and Restrained conditions, and it has Total Cover against attacks and other effects outside the frog. While swallowing the target, the frog can’t use Bite, and if the frog dies, the swallowed target is no longer Restrained and can escape from the corpse using 5 feet of movement, exiting with the Prone condition. At the end of the frog’s next turn, the swallowed target takes 5 (2d4) Acid damage. If that damage doesn’t kill it, the frog disgorges it, causing it to exit Prone."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Goat",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "hpDice": "3d10 + 3",
    "speed": "40 ft., Climb 30 ft.",
    "str": 17,
    "dex": 13,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage. If the target is a Large or smaller creature and the goat moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition. 349 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Hyena",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 45,
    "hpDice": "6d10 + 12",
    "speed": "50 ft.",
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Rampage (1/Day)",
        "description": "Immediately after dealing damage to a creature that was already Bloodied, the hyena can move up to half its Speed, and it makes one Bite attack."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Lizard",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 19,
    "hpDice": "3d10 + 3",
    "speed": "40 ft., Climb 40 ft.",
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "cr": "1/4",
    "xp": 50,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The lizard can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Octopus",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 45,
    "hpDice": "7d10 + 7",
    "speed": "10 ft., Swim 60 ft.",
    "str": 17,
    "dex": 13,
    "con": 13,
    "int": 5,
    "wis": 10,
    "cha": 4,
    "cr": "1",
    "xp": 200,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "None",
    "skills": "Perception +4, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Water Breathing",
        "description": "The octopus can breathe only underwater. It can hold its breath for 1 hour outside water."
      }
    ],
    "actions": [
      {
        "name": "Tentacles",
        "description": "Melee Attack Roll: +5, reach 10 ft. Hit: 10 (2d6 + 3) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 13) from all eight tentacles. While Grappled, the target has the Restrained condition."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Ink Cloud (1/Day)",
        "description": "Trigger: The octopus takes damage while underwater. Response: The octopus releases ink that fills a 10-foot Cube centered on itself, and the octopus moves up to its Swim Speed. The Cube is Heavily Obscured for 1 minute or until a strong current or similar effect disperses the ink."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Giant Owl",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 19,
    "hpDice": "3d10 + 3",
    "speed": "5 ft., Fly 60 ft.",
    "str": 13,
    "dex": 15,
    "con": 12,
    "int": 10,
    "wis": 14,
    "cha": 10,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Darkvision 120 ft.; Passive Perception 16",
    "languages": "Celestial; understands Common, Elvish, and",
    "skills": "Perception +6, Stealth +6",
    "resistances": "Necrotic, Radiant",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Flyby",
        "description": "The owl doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing damage."
      },
      {
        "name": "Spellcasting",
        "description": "The owl casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability: At Will: Detect Evil and Good, Detect Magic 1/Day: Clairvoyance 350 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Rat",
    "size": "Small",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 7,
    "hpDice": "2d6",
    "speed": "30 ft., Climb 30 ft.",
    "str": 7,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "cr": "1/8",
    "xp": 25,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The rat has Advantage on an attack roll against a creature if at least one of the rat’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 feet. Hit: 5 (1d4 + 3) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Scorpion",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 15,
    "hp": 52,
    "hpDice": "7d10 + 14",
    "speed": "40 ft.",
    "str": 16,
    "dex": 13,
    "con": 15,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "cr": "3",
    "xp": 700,
    "initiative": 1,
    "senses": "Blindsight 60 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The scorpion makes two Claw attacks and one Sting attack."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 13) from one of two claws."
      },
      {
        "name": "Sting",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage plus 11 (2d10) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Seahorse",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 16,
    "hpDice": "3d10",
    "speed": "5 ft., Swim 40 ft.",
    "str": 15,
    "dex": 12,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Water Breathing",
        "description": "The seahorse can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Bludgeoning damage, or 11 (2d8 + 2) Bludgeoning damage if the seahorse moved 20+ feet straight toward the target immediately before the hit."
      }
    ],
    "bonusActions": [
      {
        "name": "Bubble Dash",
        "description": "While underwater, the seahorse moves up to half its Swim Speed without provoking Opportunity Attacks."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Shark",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 92,
    "hpDice": "8d12 + 40",
    "speed": "5 ft., Swim 60 ft.",
    "str": 23,
    "dex": 11,
    "con": 21,
    "int": 1,
    "wis": 10,
    "cha": 5,
    "cr": "5",
    "xp": 1800,
    "initiative": 3,
    "senses": "Blindsight 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Water Breathing",
        "description": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The shark makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +9 (with Advantage if the target doesn’t have all its Hit Points), reach 5 ft. Hit: 22 (3d10 + 6) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Spider",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 26,
    "hpDice": "4d10 + 4",
    "speed": "30 ft., Climb 30 ft.",
    "str": 14,
    "dex": 16,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 4,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "None",
    "skills": "Perception +4, Stealth +7",
    "resistances": "",
    "immunities": "to Poison and Psychic damage).",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "description": "The spider ignores movement restrictions caused by webs, and it knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Web (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 13, one creature the spider can see within 60 feet. Failure: The target has the Restrained condition until the web is destroyed (AC 10; HP 5; Vulnerability to Fire damage; Immunity to Poison and Psychic damage)."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Toad",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 39,
    "hpDice": "6d10 + 6",
    "speed": "30 ft., Swim 30 ft.",
    "str": 15,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "cr": "1",
    "xp": 200,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The toad can breathe air and water."
      },
      {
        "name": "Standing Leap",
        "description": "The toad’s Long Jump is up to 20 feet and its High Jump is up to 10 feet with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage plus 5 (2d4) Poison damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 12)."
      },
      {
        "name": "Swallow",
        "description": "The toad swallows a Medium or smaller target it is grappling. While swallowed, the target isn’t Grappled but has the Blinded and Restrained conditions, and it has Total Cover against attacks and other effects outside the toad. In addition, the target takes 10 (3d6) Acid damage at the end of each of the toad’s turns. The toad can have only one target swallowed at a time, and it can’t use Bite while it has a swallowed target. If the toad dies, a swallowed creature is no longer Restrained and can escape from the corpse using 5 feet of movement, exiting with the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Venomous Snake",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "40 ft., Swim 40 ft.",
    "str": 10,
    "dex": 18,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "cr": "1/4",
    "xp": 50,
    "initiative": 4,
    "senses": "Blindsight 10 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 6 (1d4 + 4) Piercing damage plus 4 (1d8) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Vulture",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Neutral Evil",
    "ac": 10,
    "hp": 25,
    "hpDice": "3d10 + 9",
    "speed": "10 ft., Fly 60 ft.",
    "str": 15,
    "dex": 10,
    "con": 16,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "cr": "1",
    "xp": 200,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "Understands Common but can’t speak",
    "skills": "Perception +3",
    "resistances": "Necrotic",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The vulture has Advantage on an attack roll against a creature if at least one of the vulture’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Gouge",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Piercing damage, and the target has the Poisoned condition until the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Wasp",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 22,
    "hpDice": "5d8",
    "speed": "10 ft., Fly 50 ft.",
    "str": 10,
    "dex": 14,
    "con": 10,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "cr": "1/2",
    "xp": 100,
    "initiative": 2,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Flyby",
        "description": "The wasp doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Sting",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Weasel",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 9,
    "hpDice": "2d8",
    "speed": "40 ft., Climb 30 ft.",
    "str": 11,
    "dex": 17,
    "con": 10,
    "int": 4,
    "wis": 12,
    "cha": 5,
    "cr": "1/8",
    "xp": 25,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Acrobatics +5, Perception +3, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Giant Wolf Spider",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "40 ft., Climb 40 ft.",
    "str": 12,
    "dex": 16,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 4,
    "cr": "1/4",
    "xp": 50,
    "initiative": 3,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "None",
    "skills": "Perception +3, Stealth +7",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Gibbering Mouther",
    "size": "Medium",
    "type": "Aberration",
    "alignment": "Chaotic Neutral",
    "ac": 9,
    "hp": 52,
    "hpDice": "7d8 + 21",
    "speed": "20 ft., Swim 20 ft.",
    "str": 10,
    "dex": 8,
    "con": 16,
    "int": 3,
    "wis": 10,
    "cha": 6,
    "cr": "2",
    "xp": 450,
    "initiative": -1,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Prone",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Aberrant Ground",
        "description": "The ground in a 10-foot Emanation originating from the mouther is Difficult Terrain."
      },
      {
        "name": "Gibbering",
        "description": "The mouther babbles incoherently while it doesn’t have the Incapacitated condition. Wisdom Saving Throw: DC 10, any creature that starts its turn within 20 feet of the mouther while it is babbling. Failure: The target rolls 1d8 to determine what it does during the current turn: 1–4. The target does nothing. 5–6. The target takes no action or Bonus Action and uses all its movement to move in a random direction. 7–8. The target makes a melee attack against a randomly determined creature within its reach or does nothing if it can’t make such an attack."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 7 (2d6) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition. The target dies if it is reduced to 0 Hit Points by this attack. Its body is then absorbed into the mouther, leaving only equipment behind."
      },
      {
        "name": "Blinding Spittle (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 10, each creature in a 10-foot-radius Sphere centered on a point within 30 feet. Failure: 7 (2d6) Radiant damage, and the target has the Blinded condition until the end of the mouther’s next turn. 286 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Glabrezu",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 17,
    "hp": 189,
    "hpDice": "18d10 + 90",
    "speed": "40 ft.",
    "str": 20,
    "dex": 15,
    "con": 21,
    "int": 19,
    "wis": 17,
    "cha": 16,
    "cr": "9",
    "xp": 5000,
    "initiative": 6,
    "senses": "Truesight 120 ft.; Passive Perception 17",
    "languages": "Abyssal; telepathy 120 ft.",
    "skills": "Deception +7, Perception +7",
    "resistances": "Cold, Fire, Lightning",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Demonic Restoration",
        "description": "If the glabrezu dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "description": "The glabrezu has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The glabrezu makes two Pincer attacks and uses Pummel or Spellcasting."
      },
      {
        "name": "Pincer",
        "description": "Melee Attack Roll: +9, reach 10 ft. Hit: 16 (2d10 + 5) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 15) from one of two pincers."
      },
      {
        "name": "Pummel",
        "description": "Dexterity Saving Throw: DC 17, one creature"
      },
      {
        "name": "Grappled by the glabrezu",
        "description": "Failure: 15 (3d6 + 5) Bludgeoning damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The glabrezu casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save DC 16): At Will: Darkness, Detect Magic, Dispel Magic 1/Day Each: Confusion, Fly, Power Word Stun"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Gladiator",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 16,
    "hp": 112,
    "hpDice": "15d8 + 45",
    "speed": "30 ft.",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 12,
    "cha": 15,
    "cr": "5",
    "xp": 1800,
    "initiative": 5,
    "senses": "Passive Perception 11",
    "languages": "Common",
    "skills": "Athletics +10, Performance +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The gladiator makes three Spear attacks. It can replace one attack with a use of Shield Bash."
      },
      {
        "name": "Spear",
        "description": "Melee or Ranged Attack Roll: +7, reach 5 ft. or range 20/60 ft. Hit: 11 (2d6 + 4) Piercing damage."
      },
      {
        "name": "Shield Bash",
        "description": "Strength Saving Throw: DC 15, one creature within 5 feet that the gladiator can see. Failure: 9 (2d4 + 4) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Parry",
        "description": "Trigger: The gladiator is hit by a melee attack roll while holding a weapon. Response: The gladiator adds 3 to its AC against that attack, possibly causing it to miss. Gnoll"
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Gnoll Warrior",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 15,
    "hp": 27,
    "hpDice": "6d8",
    "speed": "30 ft.",
    "str": 14,
    "dex": 12,
    "con": 11,
    "int": 6,
    "wis": 10,
    "cha": 7,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Gnoll",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage."
      },
      {
        "name": "Bone Bow",
        "description": "Ranged Attack Roll: +3, range 150/600 ft. Hit: 6 (1d10 + 1) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Rampage (1/Day)",
        "description": "Immediately after dealing damage to a creature that is already Bloodied, the gnoll moves up to half its Speed, and it makes one Rend attack. 287 System Reference Document 5.2 Goblins"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Goat",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 4,
    "hpDice": "1d8",
    "speed": "40 ft., Climb 30 ft.",
    "str": 11,
    "dex": 10,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Bludgeoning damage, or 2 (1d4) Bludgeoning damage if the goat moved 20+ feet straight toward the target immediately before the hit."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Goblin Boss",
    "size": "Small",
    "type": "Fey",
    "alignment": "Chaotic Neutral",
    "ac": 17,
    "hp": 21,
    "hpDice": "6d6",
    "speed": "30 ft.",
    "str": 10,
    "dex": 15,
    "con": 10,
    "int": 10,
    "wis": 8,
    "cha": 10,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "Common, Goblin",
    "skills": "Stealth +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The goblin makes two attacks, using Scimitar or Shortbow in any combination."
      },
      {
        "name": "Scimitar",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage, plus 2 (1d4) Slashing damage if the attack roll had Advantage."
      },
      {
        "name": "Shortbow",
        "description": "Ranged Attack Roll: +4, range 80/320 ft. Hit: 5 (1d6 + 2) Piercing damage, plus 2 (1d4) Piercing damage if the attack roll had Advantage."
      }
    ],
    "bonusActions": [
      {
        "name": "Nimble Escape",
        "description": "The goblin takes the Disengage or Hide action."
      }
    ],
    "reactions": [
      {
        "name": "Redirect Attack",
        "description": "Trigger: A creature the goblin can see makes an attack roll against it. Response: The goblin chooses a Small or Medium ally within 5 feet of itself. The goblin and that ally swap places, and the ally becomes the target of the attack instead. Gold Dragons"
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Goblin Minion",
    "size": "Small",
    "type": "Fey",
    "alignment": "Chaotic Neutral",
    "ac": 12,
    "hp": 7,
    "hpDice": "2d6",
    "speed": "30 ft.",
    "str": 8,
    "dex": 15,
    "con": 10,
    "int": 10,
    "wis": 8,
    "cha": 8,
    "cr": "1/8",
    "xp": 25,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "Common, Goblin",
    "skills": "Stealth +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Dagger",
        "description": "Melee or Ranged Attack Roll: +4, reach 5 ft. or range 20/60 ft. Hit: 4 (1d4 + 2) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Nimble Escape",
        "description": "The goblin takes the Disengage or Hide action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Goblin Warrior",
    "size": "Small",
    "type": "Fey",
    "alignment": "Chaotic Neutral",
    "ac": 15,
    "hp": 10,
    "hpDice": "3d6",
    "speed": "30 ft.",
    "str": 8,
    "dex": 15,
    "con": 10,
    "int": 10,
    "wis": 8,
    "cha": 8,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "Common, Goblin",
    "skills": "Stealth +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Scimitar",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage, plus 2 (1d4) Slashing damage if the attack roll had Advantage."
      },
      {
        "name": "Shortbow",
        "description": "Ranged Attack Roll: +4, range 80/320 ft. Hit: 5 (1d6 + 2) Piercing damage, plus 2 (1d4) Piercing damage if the attack roll had Advantage."
      }
    ],
    "bonusActions": [
      {
        "name": "Nimble Escape",
        "description": "The goblin takes the Disengage or Hide action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Gold Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 17,
    "hp": 60,
    "hpDice": "8d8 + 24",
    "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
    "str": 19,
    "dex": 14,
    "con": 17,
    "int": 14,
    "wis": 11,
    "cha": 16,
    "cr": "0",
    "xp": 0,
    "initiative": 4,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +4",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Slashing damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 13, each creature in a 15-foot Cone. Failure: 22 (4d10) Fire damage. Success: Half damage."
      },
      {
        "name": "Weakening Breath",
        "description": "Strength Saving Throw: DC 13, each creature that isn’t currently affected by this breath in a 15-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Tests and subtracts 2 (1d4) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Gorgon",
    "size": "Large",
    "type": "Construct",
    "alignment": "Unaligned",
    "ac": 19,
    "hp": 114,
    "hpDice": "12d10 + 48",
    "speed": "40 ft.",
    "str": 20,
    "dex": 11,
    "con": 18,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "cr": "5",
    "xp": 1800,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 17",
    "languages": "None",
    "skills": "Perception +7",
    "resistances": "",
    "immunities": "Exhaustion, Petrified",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 18 (2d12 + 5) Piercing damage. If the target is a Large or smaller creature and the gorgon moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      },
      {
        "name": "Petrifying Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 15, each creature in a 30-foot Cone. First Failure: The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure: The target has the Petrified condition instead of the Restrained condition."
      }
    ],
    "bonusActions": [
      {
        "name": "Trample",
        "description": "Dexterity Saving Throw: DC 16, one creature within 5 feet that has the Prone condition. Failure: 16 (2d10 + 5) Bludgeoning damage. Success: Half damage."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Gray Ooze",
    "size": "Medium",
    "type": "Ooze",
    "alignment": "Unaligned",
    "ac": 9,
    "hp": 22,
    "hpDice": "3d8 + 9",
    "speed": "10 ft., Climb 10 ft.",
    "str": 12,
    "dex": 6,
    "con": 16,
    "int": 1,
    "wis": 6,
    "cha": 2,
    "cr": "1/2",
    "xp": 100,
    "initiative": -2,
    "senses": "Blindsight 60 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "Stealth +2",
    "resistances": "Acid, Cold, Fire",
    "immunities": "Blinded, Charmed, Deafened, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amorphous",
        "description": "The ooze can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Corrosive Form",
        "description": "Nonmagical ammunition is destroyed immediately after hitting the ooze and dealing any damage. Any nonmagical weapon takes a cumulative −1 penalty to attack rolls immediately after dealing damage to the ooze and coming into contact with it. The weapon is destroyed if the penalty reaches −5. The penalty can be removed by casting the Mending spell on the weapon. The ooze can eat through 2-inch-thick, nonmagical metal or wood in 1 round."
      }
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 10 (2d8 + 1) Acid damage. Nonmagical armor worn by the target takes a −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the Mending spell on the armor. Green Dragons"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Green Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 17,
    "hp": 38,
    "hpDice": "7d8 + 7",
    "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 14,
    "wis": 11,
    "cha": 13,
    "cr": "2",
    "xp": 450,
    "initiative": 3,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +3",
    "resistances": "",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing damage plus 3 (1d6) Poison damage."
      },
      {
        "name": "Poison Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 11, each creature in a 15-foot Cone. Failure: 21 (6d6) Poison damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Green Hag",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Neutral Evil",
    "ac": 17,
    "hp": 82,
    "hpDice": "11d8 + 33",
    "speed": "30 ft., Swim 30 ft.",
    "str": 18,
    "dex": 12,
    "con": 16,
    "int": 13,
    "wis": 14,
    "cha": 14,
    "cr": "3",
    "xp": 700,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Common, Elvish, Sylvan",
    "skills": "Arcana +5, Deception +4, Perception +4, Stealth +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The hag can breathe air and water."
      },
      {
        "name": "Coven Magic",
        "description": "While within 30 feet of at least two hag allies, the hag can cast one of the following spells, requiring no Material components, using the spell’s normal casting time, and using Intelligence as the spellcasting ability (spell save DC 11): Augury, Find Familiar, Identify, Locate Object, Scrying, or Unseen Servant. The hag must finish a Long Rest before using this trait to cast that spell again."
      },
      {
        "name": "Mimicry",
        "description": "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations only with a successful DC 14 Wisdom (Insight) check."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hag makes two Claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Slashing damage plus 3 (1d6) Poison damage."
      },
      {
        "name": "Spellcasting",
        "description": "The hag casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 12, +4 to hit with spell attacks): At Will: Dancing Lights, Disguise Self (24-hour duration), Invisibility (self only, and the hag leaves no tracks while Invisible), Minor Illusion, Ray of Sickness (level 3 version)"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Grick",
    "size": "Medium",
    "type": "Aberration",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 54,
    "hpDice": "12d8",
    "speed": "30 ft., Climb 30 ft.",
    "str": 14,
    "dex": 14,
    "con": 11,
    "int": 3,
    "wis": 14,
    "cha": 5,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The grick makes one Beak attack and one Tentacles attack."
      },
      {
        "name": "Beak",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Piercing damage."
      },
      {
        "name": "Tentacles",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 12) from all four tentacles."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Griffon",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 59,
    "hpDice": "7d10 + 21",
    "speed": "30 ft., Fly 80 ft.",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 8,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The griffon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 14) from both of the griffon’s front claws. 293 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Grimlock",
    "size": "Medium",
    "type": "Aberration",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "30 ft., Climb 30 ft.",
    "str": 16,
    "dex": 12,
    "con": 12,
    "int": 9,
    "wis": 8,
    "cha": 6,
    "cr": "1/4",
    "xp": 50,
    "initiative": 1,
    "senses": "Blindsight 30 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Athletics +5, Perception +3, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bone Cudgel",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage plus 2 (1d4) Psychic damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Guard",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 16,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "30 ft.",
    "str": 13,
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "cr": "1/8",
    "xp": 25,
    "initiative": 1,
    "senses": "Passive Perception 12",
    "languages": "Common",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Spear",
        "description": "Melee or Ranged Attack Roll: +3, reach 5 ft. or range 20/60 ft. Hit: 4 (1d6 + 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Guard Captain",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 18,
    "hp": 75,
    "hpDice": "10d8 + 30",
    "speed": "30 ft.",
    "str": 18,
    "dex": 14,
    "con": 16,
    "int": 12,
    "wis": 14,
    "cha": 13,
    "cr": "4",
    "xp": 1100,
    "initiative": 4,
    "senses": "Passive Perception 14",
    "languages": "Common",
    "skills": "Athletics +6, Perception +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The guard makes two attacks, using Javelin or Longsword in any combination."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Attack Roll: +6, reach 5 ft. or range 30/120 ft. Hit: 14 (3d6 + 4) Piercing damage."
      },
      {
        "name": "Longsword",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4) Slashing damage. 294 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Guardian Naga",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Lawful Good",
    "ac": 18,
    "hp": 136,
    "hpDice": "16d10 + 48",
    "speed": "40 ft., Climb 40 ft., Swim 40 ft.",
    "str": 19,
    "dex": 18,
    "con": 16,
    "int": 16,
    "wis": 19,
    "cha": 18,
    "cr": "10",
    "xp": 5900,
    "initiative": 4,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Celestial, Common",
    "skills": "Arcana +11, History +11, Religion +11",
    "resistances": "",
    "immunities": "Poison; Charmed, Paralyzed, Poisoned,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Celestial Restoration",
        "description": "If the naga dies, it returns to life in 1d6 days and regains all its Hit Points unless Dispel Evil and Good is cast on its remains."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The naga makes two Bite attacks. It can replace any attack with a use of Poisonous Spittle."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 17 (2d12 + 4) Piercing damage plus 22 (4d10) Poison damage."
      },
      {
        "name": "Poisonous Spittle",
        "description": "Constitution Saving Throw: DC 16, one creature the naga can see within 60 feet. Failure: 31 (7d8) Poison damage, and the target has the Blinded condition until the start of the naga’s next turn. Success: Half damage only."
      },
      {
        "name": "Spellcasting",
        "description": "The naga casts one of the following spells, requiring no Somatic or Material components and using Wisdom as the spellcasting ability (spell save DC 16): At Will: Thaumaturgy 1/Day Each: Clairvoyance, Cure Wounds (level 6 version), Flame Strike (level 6 version), Geas, True Seeing Guards"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Half-Dragon",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Neutral",
    "ac": 18,
    "hp": 105,
    "hpDice": "14d8 + 42",
    "speed": "40 ft.",
    "str": 19,
    "dex": 14,
    "con": 16,
    "int": 10,
    "wis": 15,
    "cha": 14,
    "cr": "5",
    "xp": 1800,
    "initiative": 5,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Common, Draconic",
    "skills": "Athletics +7, Perception +5, Stealth +5",
    "resistances": "Damage type chosen for the Draconic Origin",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Draconic Origin",
        "description": "The half-dragon is related to a type of dragon associated with one of the following damage types (GM’s choice): Acid, Cold, Fire, Lightning, or Poison. This choice affects other aspects of the stat block."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The half-dragon makes two Claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 6 (1d4 + 4) Slashing damage plus 7 (2d6) damage of the type chosen for the Draconic Origin trait. Dragon’s Breath (Recharge 5–6). Dexterity Saving Throw: DC 14, each creature in a 30-foot Cone. Failure: 28 (8d6) damage of the type chosen for the Draconic"
      },
      {
        "name": "Origin trait",
        "description": "Success: Half damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Leap",
        "description": "The half-dragon jumps up to 30 feet by spending 10 feet of movement."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Harpy",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 38,
    "hpDice": "7d8 + 7",
    "speed": "20 ft., Fly 40 ft.",
    "str": 12,
    "dex": 13,
    "con": 12,
    "int": 7,
    "wis": 10,
    "cha": 13,
    "cr": "1",
    "xp": 200,
    "initiative": 1,
    "senses": "Passive Perception 10",
    "languages": "Common",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Slashing damage."
      },
      {
        "name": "Luring Song",
        "description": "The harpy sings a magical melody, which lasts until the harpy’s Concentration ends on it. Wisdom Saving Throw: DC 11, each Humanoid and Giant in a 300-foot Emanation originating from the harpy when the song starts. Failure: The target has the Charmed condition until the song ends and repeats the save at the end of each of its turns. While Charmed, the target has the Incapacitated condition and ignores the Luring"
      },
      {
        "name": "Song of other harpies",
        "description": "If the target is more than 5 feet from the harpy, the target moves on its turn toward the harpy by the most direct route, trying to get within 5 feet of the harpy. It doesn’t avoid Opportunity Attacks; however, before moving into damaging terrain (such as lava or a pit) and whenever it takes damage from a source other than the harpy, the target repeats the save. Success: The target is immune to this harpy’s Luring Song for 24 hours."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hawk",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "10 ft., Fly 60 ft.",
    "str": 5,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 14,
    "cha": 6,
    "cr": "0",
    "xp": 10,
    "initiative": 3,
    "senses": "Passive Perception 16",
    "languages": "None",
    "skills": "Perception +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 1 Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hell Hound",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 15,
    "hp": 58,
    "hpDice": "9d8 + 18",
    "speed": "50 ft.",
    "str": 17,
    "dex": 12,
    "con": 14,
    "int": 6,
    "wis": 13,
    "cha": 6,
    "cr": "3",
    "xp": 700,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "Understands Infernal but can’t speak",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The hound has Advantage on an attack roll against a creature if at least one of the hound’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hound makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 12, each creature in a 15-foot Cone. Failure: 17 (5d6) Fire damage. Success: Half damage. 295 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hezrou",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 18,
    "hp": 157,
    "hpDice": "15d10 + 75",
    "speed": "30 ft.",
    "str": 19,
    "dex": 17,
    "con": 20,
    "int": 5,
    "wis": 12,
    "cha": 13,
    "cr": "8",
    "xp": 3900,
    "initiative": 6,
    "senses": "Darkvision 120 ft.; Passive Perception 11",
    "languages": "Abyssal; telepathy 120 ft.",
    "skills": "",
    "resistances": "Cold, Fire, Lightning",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Demonic Restoration",
        "description": "If the hezrou dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "description": "The hezrou has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Stench",
        "description": "Constitution Saving Throw: DC 16, any creature that starts its turn in a 10-foot Emanation originating from the hezrou. Failure: The target has the Poisoned condition until the start of its next turn."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hezrou makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 6 (1d4 + 4) Slashing damage plus 9 (2d8) Poison damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Leap",
        "description": "The hezrou jumps up to 30 feet by spending 10 feet of movement."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hill Giant",
    "size": "Huge",
    "type": "Giant",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 105,
    "hpDice": "10d12 + 40",
    "speed": "40 ft.",
    "str": 21,
    "dex": 8,
    "con": 19,
    "int": 5,
    "wis": 9,
    "cha": 6,
    "cr": "5",
    "xp": 1800,
    "initiative": 2,
    "senses": "Passive Perception 12",
    "languages": "Giant",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two attacks, using Tree Club or Trash Lob in any combination."
      },
      {
        "name": "Tree Club",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 18 (3d8 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Trash Lob",
        "description": "Ranged Attack Roll: +8, range 60/240 ft. Hit: 16 (2d10 + 5) Bludgeoning damage, and the target has the Poisoned condition until the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hippogriff",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 26,
    "hpDice": "4d10 + 4",
    "speed": "40 ft., Fly 60 ft.",
    "str": 17,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 8,
    "cr": "1",
    "xp": 200,
    "initiative": 1,
    "senses": "Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Flyby",
        "description": "The hippogriff doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hippogriff makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage. Hobgoblins"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hippopotamus",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 82,
    "hpDice": "11d10 + 22",
    "speed": "30 ft., Swim 30 ft.",
    "str": 21,
    "dex": 7,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "cr": "4",
    "xp": 1100,
    "initiative": -2,
    "senses": "Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Hold Breath",
        "description": "The hippopotamus can hold its breath for 10 minutes. 353 System Reference Document 5.2"
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hippopotamus makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 16 (2d10 + 5) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hobgoblin Captain",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Lawful Evil",
    "ac": 17,
    "hp": 58,
    "hpDice": "9d8 + 18",
    "speed": "30 ft.",
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 12,
    "wis": 10,
    "cha": 13,
    "cr": "3",
    "xp": 700,
    "initiative": 4,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Common, Goblin",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Aura of Authority",
        "description": "While in a 10-foot Emanation originating from the hobgoblin, the hobgoblin and its allies have Advantage on attack rolls and saving throws, provided the hobgoblin doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hobgoblin makes two attacks, using Greatsword or Longbow in any combination."
      },
      {
        "name": "Greatsword",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Slashing damage plus 3 (1d6) Poison damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8 + 2) Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hobgoblin Warrior",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Lawful Evil",
    "ac": 18,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "30 ft.",
    "str": 13,
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 9,
    "cr": "1/2",
    "xp": 100,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Common, Goblin",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The hobgoblin has Advantage on an attack roll against a creature if at least one of the hobgoblin’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Longsword",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 12 (2d10 + 1) Slashing damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Attack Roll: +3, range 150/600 ft. Hit: 5 (1d8 + 1) Piercing damage plus 7 (3d4) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Homunculus",
    "size": "Tiny",
    "type": "Construct",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 4,
    "hpDice": "1d4 + 2",
    "speed": "20 ft., Fly 40 ft.",
    "str": 4,
    "dex": 15,
    "con": 14,
    "int": 10,
    "wis": 10,
    "cha": 7,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Understands Common plus one other language",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Charmed, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Telepathic Bond",
        "description": "While the homunculus is on the same plane of existence as its master, the two of them can communicate telepathically with each other."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage, and the target is subjected to the following effect. Constitution Saving Throw: DC 12. Failure: The target has the Poisoned condition until the end of the homunculus’s next turn. Failure by 5 or More: The target has the Poisoned condition for 1 minute. While Poisoned, the target has the Unconscious condition, which ends early if the target takes any damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Horned Devil",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 18,
    "hp": 199,
    "hpDice": "19d10 + 95",
    "speed": "30 ft., Fly 60 ft.",
    "str": 22,
    "dex": 17,
    "con": 21,
    "int": 12,
    "wis": 16,
    "cha": 18,
    "cr": "11",
    "xp": 7200,
    "initiative": 7,
    "senses": "Darkvision 150 ft. (unimpeded by magical",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Diabolical Restoration",
        "description": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "description": "The devil has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes three attacks, using Searing Fork or Hurl Flame in any combination. It can replace one attack with a use of Infernal Tail. 297 System Reference Document 5.2"
      },
      {
        "name": "Searing Fork",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 15 (2d8 + 6) Piercing damage plus 9 (2d8) Fire damage."
      },
      {
        "name": "Hurl Flame",
        "description": "Ranged Attack Roll: +8, range 150 ft. Hit: 26 (5d8 + 4) Fire damage. If the target is a flammable object that isn’t being worn or carried, it starts burning."
      },
      {
        "name": "Infernal Tail",
        "description": "Dexterity Saving Throw: DC 17, one creature the devil can see within 10 feet. Failure: 10 (1d8 + 6) Necrotic damage, and the target receives an infernal wound if it doesn’t have one. While wounded, the target loses 10 (3d6) Hit Points at the start of each of its turns. The wound closes after 1 minute, after a spell restores Hit Points to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a DC 17 Wisdom (Medicine) check."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hunter Shark",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 45,
    "hpDice": "6d10 + 12",
    "speed": "5 ft., Swim 40 ft.",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Blindsight 60 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Water Breathing",
        "description": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6 (with Advantage if the target doesn’t have all its Hit Points), reach 5 ft. Hit: 14 (3d6 + 4) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hydra",
    "size": "Huge",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 15,
    "hp": 184,
    "hpDice": "16d12 + 80",
    "speed": "40 ft., Swim 40 ft.",
    "str": 20,
    "dex": 12,
    "con": 20,
    "int": 2,
    "wis": 10,
    "cha": 7,
    "cr": "8",
    "xp": 3900,
    "initiative": 4,
    "senses": "Darkvision 60 ft.; Passive Perception 16",
    "languages": "None",
    "skills": "Perception +6",
    "resistances": "",
    "immunities": "Blinded, Charmed, Deafened, Frightened,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Hold Breath",
        "description": "The hydra can hold its breath for 1 hour."
      },
      {
        "name": "Multiple Heads",
        "description": "The hydra has five heads. Whenever the hydra takes 25 damage or more on a single turn, one of its heads dies. The hydra dies if all its heads are dead. At the end of each of its turns when it has at least one living head, the hydra grows two heads for each of its heads that died since its last turn, unless it has taken"
      },
      {
        "name": "Fire damage since its last turn",
        "description": "The hydra regains 20 Hit Points when it grows new heads."
      },
      {
        "name": "Reactive Heads",
        "description": "For each head the hydra has beyond one, it gets an extra Reaction that can be used only for Opportunity Attacks."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hydra makes as many Bite attacks as it has heads."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 10 (1d10 + 5) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Hyena",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 5,
    "hpDice": "1d8 + 1",
    "speed": "50 ft.",
    "str": 11,
    "dex": 13,
    "con": 12,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "0",
    "xp": 10,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The hyena has Advantage on an attack roll against a creature if at least one of the hyena’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 3 (1d6) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ice Devil",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 18,
    "hp": 228,
    "hpDice": "24d10 + 96",
    "speed": "40 ft.",
    "str": 21,
    "dex": 14,
    "con": 18,
    "int": 18,
    "wis": 15,
    "cha": 18,
    "cr": "14",
    "xp": 11500,
    "initiative": 7,
    "senses": "Blindsight 120 ft.; Passive Perception 17",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "Insight +7, Perception +7, Persuasion +9",
    "resistances": "",
    "immunities": "Cold, Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Diabolical Restoration",
        "description": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "description": "The devil has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes three Ice Spear attacks. It can replace one attack with a Tail attack."
      },
      {
        "name": "Ice Spear",
        "description": "Melee or Ranged Attack Roll: +10, reach 5 ft. or range 30/120 ft. Hit: 14 (2d8 + 5) Piercing damage plus 10 (3d6) Cold damage. Until the end of its next turn, the target can’t take a Bonus Action or Reaction, its Speed decreases by 10 feet, and it can move or take one action on its turn, not both. Hit or Miss: The spear magically returns to the devil’s hand immediately after a ranged attack."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 15 (3d6 + 5) Bludgeoning damage plus 18 (4d8) Cold damage."
      },
      {
        "name": "Ice Wall (Recharge 6)",
        "description": "The devil casts Wall of Ice (level 8 version), requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 17)."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ice Mephit",
    "size": "Small",
    "type": "Elemental",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 21,
    "hpDice": "6d6",
    "speed": "30 ft., Fly 30 ft.",
    "str": 7,
    "dex": 13,
    "con": 10,
    "int": 9,
    "wis": 11,
    "cha": 12,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "Primordial (Aquan, Auran)",
    "skills": "Perception +2, Stealth +3",
    "resistances": "",
    "immunities": "Cold, Poison; Exhaustion, Poisoned",
    "vulnerabilities": "Fire",
    "traits": [
      {
        "name": "Death Burst",
        "description": "The mephit explodes when it dies. Constitution Saving Throw: DC 10, each creature in a 5-foot"
      },
      {
        "name": "Emanation originating from the mephit",
        "description": "Failure: 5 (2d4) Cold damage. Success: Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Slashing damage plus 2 (1d4) Cold damage."
      },
      {
        "name": "Fog Cloud (1/Day)",
        "description": "The mephit casts Fog Cloud, requiring no spell components and using Charisma as the spellcasting ability."
      },
      {
        "name": "Frost Breath (Recharge 6)",
        "description": "Constitution Saving Throw: DC 10, each creature in a 15-foot Cone. Failure: 7 (3d4) Cold damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Imp",
    "size": "Tiny",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 21,
    "hpDice": "6d4 + 6",
    "speed": "20 ft., Fly 40 ft.",
    "str": 6,
    "dex": 17,
    "con": 13,
    "int": 11,
    "wis": 12,
    "cha": 14,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Darkvision 120 ft. (unimpeded by magical",
    "languages": "Common, Infernal",
    "skills": "Deception +4, Insight +3, Stealth +5",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The imp has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Sting",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Invisibility",
        "description": "The imp casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability."
      },
      {
        "name": "Shape-Shift",
        "description": "The imp shape-shifts to resemble a rat (Speed 20 ft.), a raven (20 ft., Fly 60 ft.), or a spider (20 ft., Climb 20 ft.), or it returns to its true form. Its game statistics are the same in each form, except for its Speed. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Incubus",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 66,
    "hpDice": "12d8 + 12",
    "speed": "30 ft., Fly 60 ft.",
    "str": 8,
    "dex": 17,
    "con": 13,
    "int": 15,
    "wis": 12,
    "cha": 20,
    "cr": "4",
    "xp": 1100,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "Abyssal, Common, Infernal; telepathy 60 ft.",
    "skills": "Deception +9, Insight +5, Perception +5, Persuasion",
    "resistances": "Cold, Fire, Poison, Psychic",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Succubus Form",
        "description": "When the incubus finishes a Long Rest, it can shape-shift into a Succubus, using that stat block instead of this one. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The incubus makes two Restless Touch attacks."
      },
      {
        "name": "Restless Touch",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 15 (3d6 + 5) Psychic damage, and the target is cursed for 24 hours or until the incubus dies. Until the curse ends, the target gains no benefit from finishing Short Rests."
      },
      {
        "name": "Spellcasting",
        "description": "The incubus casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 15): At Will: Disguise Self, Etherealness 1/Day Each: Dream, Hypnotic Pattern"
      }
    ],
    "bonusActions": [
      {
        "name": "Nightmare (Recharge 6)",
        "description": "Wisdom Saving Throw: DC 15, one creature the incubus can see within 60 feet. Failure: If the target has 20 Hit Points or fewer, it has the Unconscious condition for 1 hour, until it takes damage, or until a creature within 5 feet of it takes an action to wake it. Otherwise, the target takes 18 (4d8) Psychic damage."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Invisible Stalker",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 97,
    "hpDice": "13d10 + 26",
    "speed": "50 ft., Fly 50 ft. (hover)",
    "str": 16,
    "dex": 19,
    "con": 14,
    "int": 10,
    "wis": 15,
    "cha": 11,
    "cr": "6",
    "xp": 2300,
    "initiative": 7,
    "senses": "Darkvision 60 ft.; Passive Perception 18",
    "languages": "Common, Primordial (Auran)",
    "skills": "Perception +8, Stealth +10",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Poison; Exhaustion, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Air Form",
        "description": "The stalker can enter an enemy’s space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Invisibility",
        "description": "The stalker has the Invisible condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The stalker makes three Wind Swipe attacks. It can replace one attack with a use of Vortex."
      },
      {
        "name": "Wind Swipe",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Force damage."
      },
      {
        "name": "Vortex",
        "description": "Constitution Saving Throw: DC 14, one Large or smaller creature in the stalker’s space. Failure: 7 (1d8 + 3) Thunder damage, and the target has the Grappled condition (escape DC 13). Until the grapple ends, the target can’t cast spells with a Verbal component and 299 System Reference Document 5.2 takes 7 (2d6) Thunder damage at the start of each of the stalker’s turns."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Iron Golem",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 18,
    "hp": 52,
    "hpDice": "8d8 + 16",
    "speed": "30 ft.",
    "str": 16,
    "dex": 11,
    "con": 14,
    "int": 11,
    "wis": 11,
    "cha": 15,
    "cr": "3",
    "xp": 700,
    "initiative": 0,
    "senses": "Passive Perception 10",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "",
    "immunities": "Frightened",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The knight makes two attacks, using Greatsword or Heavy Crossbow in any combination."
      },
      {
        "name": "Greatsword",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage plus 4 (1d8) Radiant damage."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Attack Roll: +2, range 100/400 ft. Hit: 11 (2d10) Piercing damage plus 4 (1d8) Radiant damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Parry",
        "description": "Trigger: The knight is hit by a melee attack roll while holding a weapon. Response: The knight adds 2 to its AC against that attack, possibly causing it to miss. Kobold"
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Jackal",
    "size": "Small",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 3,
    "hpDice": "1d6",
    "speed": "40 ft.",
    "str": 8,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Darkvision 90 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 – 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Killer Whale",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 90,
    "hpDice": "12d12 + 12",
    "speed": "5 ft., Swim 60 ft.",
    "str": 19,
    "dex": 14,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "cr": "3",
    "xp": 700,
    "initiative": 2,
    "senses": "Blindsight 120 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Hold Breath",
        "description": "The whale can hold its breath for 30 minutes."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 21 (5d6 + 4) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Kobold Warrior",
    "size": "Small",
    "type": "Dragon",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 7,
    "hpDice": "3d6 − 3",
    "speed": "30 ft.",
    "str": 7,
    "dex": 15,
    "con": 9,
    "int": 8,
    "wis": 7,
    "cha": 8,
    "cr": "1/8",
    "xp": 25,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 8",
    "languages": "Common, Draconic",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The kobold has Advantage on an attack roll against a creature if at least one of the kobold’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      },
      {
        "name": "Sunlight Sensitivity",
        "description": "While in sunlight, the kobold has Disadvantage on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Dagger",
        "description": "Melee or Ranged Attack Roll: +4, reach 5 ft. or range 20/60 ft. Hit: 4 (1d4 + 2) Piercing damage. 300 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Kraken",
    "size": "Gargantuan",
    "type": "Monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 18,
    "hp": 481,
    "hpDice": "26d20 + 208",
    "speed": "30 ft., Swim 120 ft.",
    "str": 30,
    "dex": 11,
    "con": 26,
    "int": 22,
    "wis": 18,
    "cha": 20,
    "cr": "23",
    "xp": 50000,
    "initiative": 14,
    "senses": "Truesight 120 ft.; Passive Perception 21",
    "languages": "Understands Abyssal, Celestial, Infernal, and",
    "skills": "History +13, Perception +11",
    "resistances": "",
    "immunities": "Cold, Lightning; Frightened, Grappled,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The kraken can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the kraken fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Siege Monster",
        "description": "The kraken deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The kraken makes two Tentacle attacks and uses Fling, Lightning Strike, or Swallow."
      },
      {
        "name": "Tentacle",
        "description": "Melee Attack Roll: +17, reach 30 ft. Hit: 24 (4d6 + 10) Bludgeoning damage. The target has the Grappled condition (escape DC 20) from one of ten tentacles, and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Fling",
        "description": "The kraken throws a Large or smaller creature Grappled by it to a space it can see within 60 feet of itself that isn’t in the air. Dexterity Saving Throw: DC 25, the creature thrown and each creature in the destination space. Failure: 18 (4d8) Bludgeoning damage, and the target has the Prone condition. Success: Half damage only."
      },
      {
        "name": "Lightning Strike",
        "description": "Dexterity Saving Throw: DC 23, one creature the kraken can see within 120 feet. Failure: 33 (6d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Swallow",
        "description": "Dexterity Saving Throw: DC 25, one creature"
      },
      {
        "name": "Grappled by the kraken (it can have up to four creatures swallowed at a time)",
        "description": "Failure: 23 (3d8 + 10) Piercing damage. If the target is Large or smaller, it is swallowed and no longer Grappled. A swallowed creature has the Restrained condition, has Total Cover against attacks and other effects outside the kraken, and takes 24 (7d6) Acid damage at the start of each of its turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 10 feet of the kraken with the Prone condition. If the kraken dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 15 feet of movement, exiting Prone."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Storm Bolt",
        "description": "The kraken uses Lightning Strike."
      },
      {
        "name": "Toxic Ink",
        "description": "Constitution Saving Throw: DC 23, each creature in a 15-foot Emanation originating from the kraken while it is underwater. Failure: The target has the Blinded and Poisoned conditions until the end of the kraken’s next turn. The kraken then moves up to its Speed. Failure or Success: The kraken can’t take this action again until the start of its next turn."
      }
    ]
  },
  {
    "name": "Lamia",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 97,
    "hpDice": "13d10 + 26",
    "speed": "40 ft.",
    "str": 16,
    "dex": 13,
    "con": 15,
    "int": 14,
    "wis": 15,
    "cha": 16,
    "cr": "4",
    "xp": 1100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "Abyssal, Common",
    "skills": "Deception +7, Insight +4, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The lamia makes two Claw attacks. It can replace one attack with a use of Corrupting Touch."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage plus 7 (2d6) Psychic damage."
      },
      {
        "name": "Corrupting Touch",
        "description": "Wisdom Saving Throw: DC 13, one creature the lamia can see within 5 feet. Failure: 13 (3d8) Psychic damage, and the target is cursed for 1 hour. Until the curse ends, the target has the Charmed and Poisoned conditions."
      },
      {
        "name": "Spellcasting",
        "description": "The lamia casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 13): At Will: Disguise Self (can appear as a Large or Medium biped), Minor Illusion 1/Day Each: Geas, Major Image, Scrying 301 System Reference Document 5.2"
      }
    ],
    "bonusActions": [
      {
        "name": "Leap",
        "description": "The lamia jumps up to 30 feet by spending 10 feet of movement."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Lemure",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 9,
    "hp": 9,
    "hpDice": "2d8",
    "speed": "20 ft.",
    "str": 10,
    "dex": 5,
    "con": 11,
    "int": 1,
    "wis": 11,
    "cha": 3,
    "cr": "0",
    "xp": 10,
    "initiative": -3,
    "senses": "Darkvision 120 ft. (unimpeded by magical",
    "languages": "Understands Infernal but can’t speak",
    "skills": "",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Charmed, Frightened, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Hellish Restoration",
        "description": "If the lemure dies in the Nine Hells, it revives with all its Hit Points in 1d10 days unless it is killed by a creature under the effects of a Bless spell or its remains are sprinkled with Holy Water."
      }
    ],
    "actions": [
      {
        "name": "Vile Slime",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Lich",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Neutral Evil",
    "ac": 20,
    "hp": 315,
    "hpDice": "42d8 + 126",
    "speed": "30 ft.",
    "str": 11,
    "dex": 16,
    "con": 16,
    "int": 21,
    "wis": 14,
    "cha": 16,
    "cr": "21",
    "xp": 33000,
    "initiative": 17,
    "senses": "Truesight 120 ft.; Passive Perception 19",
    "languages": "All",
    "skills": "Arcana +19, History +12, Insight +9, Perception +9",
    "resistances": "Cold, Lightning",
    "immunities": "Necrotic, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "description": "If the lich fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Spirit Jar",
        "description": "If destroyed, the lich reforms in 1d10 days if it has a spirit jar, reviving with all its Hit Points. The new body appears in an unoccupied space within the lich’s lair."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The lich makes three attacks, using Eldritch Burst or Paralyzing Touch in any combination."
      },
      {
        "name": "Eldritch Burst",
        "description": "Melee or Ranged Attack Roll: +12, reach 5 ft. or range 120 ft. Hit: 31 (4d12 + 5) Force damage."
      },
      {
        "name": "Paralyzing Touch",
        "description": "Melee Attack Roll: +12, reach 5 ft. Hit: 15 (3d6 + 5) Cold damage, and the target has the Paralyzed condition until the start of the lich’s next turn."
      },
      {
        "name": "Spellcasting",
        "description": "The lich casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 20): At Will: Detect Magic, Detect Thoughts, Dispel Magic, Fireball (level 5 version), Invisibility, Lightning Bolt (level 5 version), Mage Hand, Prestidigitation 2/Day Each: Animate Dead, Dimension Door, Plane Shift 1/Day Each: Chain Lightning, Finger of Death, Power Word Kill, Scrying"
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Protective Magic",
        "description": "The lich casts Counterspell or Shield in response to the spell’s trigger, using the same spellcasting ability as Spellcasting."
      }
    ],
    "legendaryActions": [
      {
        "name": "Deathly Teleport",
        "description": "The lich teleports up to 60 feet to an unoccupied space it can see, and each creature within 10 feet of the space it left takes 11 (2d10) Necrotic damage."
      },
      {
        "name": "Disrupt Life",
        "description": "Constitution Saving Throw: DC 20, each creature that isn’t an Undead in a 20-foot Emanation originating from the lich. Failure: 31 (9d6) Necrotic damage. Success: Half damage. Failure or Success: The lich can’t take this action again until the start of its next turn."
      },
      {
        "name": "Frightening Gaze",
        "description": "The lich casts Fear, using the same spellcasting ability as Spellcasting. The lich can’t take this action again until the start of its next turn. 302 System Reference Document 5.2 Mages"
      }
    ]
  },
  {
    "name": "Lion",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 22,
    "hpDice": "4d10",
    "speed": "50 ft.",
    "str": 17,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The lion has Advantage on an attack roll against a creature if at least one of the lion’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      },
      {
        "name": "Running Leap",
        "description": "With a 10-foot running start, the lion can Long Jump up to 25 feet."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The lion makes two Rend attacks. It can replace one attack with a use of Roar."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage."
      },
      {
        "name": "Roar",
        "description": "Wisdom Saving Throw: DC 11, one creature within 15 feet. Failure: The target has the Frightened condition until the start of the lion’s next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Lizard",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 2,
    "hpDice": "1d4",
    "speed": "20 ft., Climb 20 ft.",
    "str": 2,
    "dex": 11,
    "con": 10,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Darkvision 30 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The lizard can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Mage",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 15,
    "hp": 81,
    "hpDice": "18d8",
    "speed": "30 ft.",
    "str": 9,
    "dex": 14,
    "con": 11,
    "int": 17,
    "wis": 12,
    "cha": 11,
    "cr": "6",
    "xp": 2300,
    "initiative": 2,
    "senses": "Passive Perception 14",
    "languages": "Common plus three other languages",
    "skills": "Arcana +6, History +6, Perception +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The mage makes three Arcane Burst attacks."
      },
      {
        "name": "Arcane Burst",
        "description": "Melee or Ranged Attack Roll: +6, reach 5 ft. or range 120 ft. Hit: 16 (3d8 + 3) Force damage."
      },
      {
        "name": "Spellcasting",
        "description": "The mage casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 14): At Will: Detect Magic, Light, Mage Armor (included in AC), Mage Hand, Prestidigitation 2/Day Each: Fireball (level 4 version), Invisibility 1/Day Each: Cone of Cold, Fly"
      }
    ],
    "bonusActions": [
      {
        "name": "Misty Step (3/Day)",
        "description": "The mage casts Misty Step, using the same spellcasting ability as Spellcasting."
      }
    ],
    "reactions": [
      {
        "name": "Protective Magic (3/Day)",
        "description": "The mage casts Counterspell or Shield in response to the spell’s trigger, using the same spellcasting ability as Spellcasting."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Magma Mephit",
    "size": "Small",
    "type": "Elemental",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 18,
    "hpDice": "4d6 + 4",
    "speed": "30 ft., Fly 30 ft.",
    "str": 8,
    "dex": 12,
    "con": 12,
    "int": 7,
    "wis": 10,
    "cha": 10,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Ignan, Terran)",
    "skills": "Stealth +3",
    "resistances": "",
    "immunities": "Fire, Poison; Exhaustion, Poisoned",
    "vulnerabilities": "Cold",
    "traits": [
      {
        "name": "Death Burst",
        "description": "The mephit explodes when it dies. Dexterity Saving Throw: DC 11, each creature in a 5-foot"
      },
      {
        "name": "Emanation originating from the mephit",
        "description": "Failure: 7 (2d6) Fire damage. Success: Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Slashing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 6)",
        "description": "Dexterity Saving Throw: DC 11, each creature in a 15-foot Cone. Failure: 7 (2d6) Fire damage. Success: Half damage. 305 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Magmin",
    "size": "Small",
    "type": "Elemental",
    "alignment": "Chaotic Neutral",
    "ac": 14,
    "hp": 13,
    "hpDice": "3d6 + 3",
    "speed": "30 ft.",
    "str": 7,
    "dex": 15,
    "con": 12,
    "int": 8,
    "wis": 11,
    "cha": 10,
    "cr": "1/2",
    "xp": 100,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Ignan)",
    "skills": "",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Death Burst",
        "description": "The magmin explodes when it dies. Dexterity Saving Throw: DC 11, each creature in a 10-foot"
      },
      {
        "name": "Emanation originating from the magmin",
        "description": "Failure: 7 (2d6) Fire damage. Success: Half damage."
      }
    ],
    "actions": [
      {
        "name": "Touch",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Fire damage. If the target is a creature or a flammable object that isn’t being worn or carried, it starts burning. 303 System Reference Document 5.2"
      }
    ],
    "bonusActions": [
      {
        "name": "Ignited Illumination",
        "description": "The magmin sets itself ablaze or extinguishes its flames. While ablaze, the magmin sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Mammoth",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 126,
    "hpDice": "11d12 + 55",
    "speed": "50 ft.",
    "str": 24,
    "dex": 9,
    "con": 21,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "cr": "6",
    "xp": 2300,
    "initiative": 2,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The mammoth makes two Gore attacks."
      },
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 18 (2d10 + 7) Piercing damage. If the target is a Huge or smaller creature and the mammoth moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      }
    ],
    "bonusActions": [
      {
        "name": "Trample",
        "description": "Dexterity Saving Throw: DC 18, one creature within 5 feet that has the Prone condition. Failure: 29 (4d10 + 7) Bludgeoning damage. Success: Half damage."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Manticore",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Lawful Evil",
    "ac": 14,
    "hp": 68,
    "hpDice": "8d10 + 24",
    "speed": "30 ft., Fly 50 ft.",
    "str": 17,
    "dex": 16,
    "con": 17,
    "int": 7,
    "wis": 12,
    "cha": 8,
    "cr": "3",
    "xp": 700,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "Common",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The manticore makes three attacks, using Rend or Tail Spike in any combination."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage."
      },
      {
        "name": "Tail Spike",
        "description": "Ranged Attack Roll: +5, range 100/200 ft. Hit: 7 (1d8 + 3) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Marilith",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 16,
    "hp": 220,
    "hpDice": "21d10 + 105",
    "speed": "40 ft., Climb 40 ft.",
    "str": 18,
    "dex": 20,
    "con": 20,
    "int": 18,
    "wis": 16,
    "cha": 20,
    "cr": "16",
    "xp": 15000,
    "initiative": 10,
    "senses": "Truesight 120 ft.; Passive Perception 18",
    "languages": "Abyssal; telepathy 120 ft.",
    "skills": "Perception +8",
    "resistances": "Cold, Fire, Lightning",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Demonic Restoration",
        "description": "If the marilith dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "description": "The marilith has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Reactive",
        "description": "The marilith can take one Reaction on every turn of combat."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The marilith makes six Pact Blade attacks and uses Constrict."
      },
      {
        "name": "Pact Blade",
        "description": "Melee Attack Roll: +10, reach 5 ft. Hit: 10 (1d10 + 5) Slashing damage plus 7 (2d6) Necrotic damage."
      },
      {
        "name": "Constrict",
        "description": "Strength Saving Throw: DC 17, one Medium or smaller creature the marilith can see within 5 feet. Failure: 15 (2d10 + 4) Bludgeoning damage. The target has the Grappled condition (escape DC 14), and it has the Restrained condition until the grapple ends."
      }
    ],
    "bonusActions": [
      {
        "name": "Teleport (Recharge 5–6)",
        "description": "The marilith teleports up to 120 feet to an unoccupied space it can see."
      }
    ],
    "reactions": [
      {
        "name": "Parry",
        "description": "Trigger: The marilith is hit by a melee attack roll while holding a weapon. Response: The marilith adds 5 to its AC against that attack, possibly causing it to miss."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Mastiff",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 5,
    "hpDice": "1d8 + 1",
    "speed": "40 ft.",
    "str": 13,
    "dex": 14,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "cr": "1/8",
    "xp": 25,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Medusa",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Lawful Evil",
    "ac": 15,
    "hp": 127,
    "hpDice": "17d8 + 51",
    "speed": "30 ft.",
    "str": 10,
    "dex": 17,
    "con": 16,
    "int": 12,
    "wis": 13,
    "cha": 15,
    "cr": "6",
    "xp": 2300,
    "initiative": 6,
    "senses": "Darkvision 150 ft.; Passive Perception 14",
    "languages": "Common plus one other language",
    "skills": "Deception +5, Perception +4, Stealth +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The medusa makes two Claw attacks and one Snake Hair attack, or it makes three Poison Ray attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
      },
      {
        "name": "Snake Hair",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage plus 14 (4d6) Poison damage."
      },
      {
        "name": "Poison Ray",
        "description": "Ranged Attack Roll: +5, range 150 ft. Hit: 11 (2d8 + 2) Poison damage. 304 System Reference Document 5.2"
      }
    ],
    "bonusActions": [
      {
        "name": "Petrifying Gaze (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 13, each creature in a 30-foot Cone. If the medusa sees its reflection in the Cone, the medusa must make this save. First Failure: The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure: The target has the Petrified condition instead of the Restrained condition. Mephits"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Merfolk Skirmisher",
    "size": "Medium",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 11,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "10 ft., Swim 40 ft.",
    "str": 10,
    "dex": 13,
    "con": 12,
    "int": 11,
    "wis": 14,
    "cha": 12,
    "cr": "1/8",
    "xp": 25,
    "initiative": 1,
    "senses": "Passive Perception 12",
    "languages": "Common, Primordial (Aquan)",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The merfolk can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Ocean Spear",
        "description": "Melee or Ranged Attack Roll: +2, reach 5 ft. or range 20/60 ft. Hit: 3 (1d6) Piercing damage plus 2 (1d4) Cold damage. If the target is a creature, its Speed decreases by 10 feet until the end of its next turn. Hit or Miss: The spear magically returns to the merfolk’s hand immediately after a ranged attack."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Merrow",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 45,
    "hpDice": "6d10 + 12",
    "speed": "10 ft., Swim 40 ft.",
    "str": 18,
    "dex": 15,
    "con": 15,
    "int": 8,
    "wis": 10,
    "cha": 9,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Abyssal, Primordial (Aquan)",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The merrow can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The merrow makes two attacks, using Bite, Claw, or Harpoon in any combination."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 6 (1d4 + 4) Piercing damage, and the target has the Poisoned condition until the end of the merrow’s next turn."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 9 (2d4 + 4) Slashing damage."
      },
      {
        "name": "Harpoon",
        "description": "Melee or Ranged Attack Roll: +6, reach 5 ft. or range 20/60 ft. Hit: 11 (2d6 + 4) Piercing damage. If the target is a Large or smaller creature, the merrow pulls the target up to 15 feet straight toward itself."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Mimic",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 58,
    "hpDice": "9d8 + 18",
    "speed": "20 ft.",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 5,
    "wis": 13,
    "cha": 8,
    "cr": "2",
    "xp": 450,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "Stealth +5",
    "resistances": "",
    "immunities": "Acid; Prone",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Adhesive (Object Form Only)",
        "description": "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic has the Grappled condition (escape DC 13). Ability checks made to escape this grapple have Disadvantage."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5 (with Advantage if the target is Grappled by the mimic), reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage—or 12 (2d8 + 3) Piercing damage if the target is Grappled by the mimic—plus 4 (1d8) Acid damage."
      },
      {
        "name": "Pseudopod",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Bludgeoning damage plus 4 (1d8) Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 13). Ability checks made to escape this grapple have Disadvantage."
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The mimic shape-shifts to resemble a Medium or Small object while retaining its game statistics, or it returns to its true blob form. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Minotaur Skeleton",
    "size": "Large",
    "type": "Undead",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 45,
    "hpDice": "6d10 + 12",
    "speed": "40 ft.",
    "str": 18,
    "dex": 11,
    "con": 15,
    "int": 6,
    "wis": 8,
    "cha": 5,
    "cr": "2",
    "xp": 450,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "Understands Abyssal but can’t speak",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Poisoned",
    "vulnerabilities": "Bludgeoning",
    "traits": [],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Piercing damage and has the Prone condition."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Minotaur of Baphomet",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 85,
    "hpDice": "10d10 + 30",
    "speed": "40 ft.",
    "str": 18,
    "dex": 11,
    "con": 16,
    "int": 6,
    "wis": 16,
    "cha": 9,
    "cr": "3",
    "xp": 700,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 17",
    "languages": "Abyssal",
    "skills": "Perception +7, Survival +7",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Abyssal Glaive",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 10 (1d12 + 4) Slashing damage plus 10 (3d6) Necrotic damage."
      },
      {
        "name": "Gore (Recharge 5–6)",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 18 (4d6 + 4) Piercing damage. If the target is a Large or smaller creature and the minotaur moved 10+ feet straight toward it immediately before the hit, the target takes an extra 10 (3d6) Piercing damage and has the Prone condition. Mummies"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Mule",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "40 ft.",
    "str": 14,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "cr": "1/8",
    "xp": 25,
    "initiative": 0,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Beast of Burden",
        "description": "The mule counts as one size larger for the purpose of determining its carrying capacity."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Mummy",
    "size": "Small",
    "type": "Undead",
    "alignment": "Lawful Evil",
    "ac": 11,
    "hp": 58,
    "hpDice": "9d8 + 18",
    "speed": "20 ft.",
    "str": 16,
    "dex": 8,
    "con": 15,
    "int": 6,
    "wis": 12,
    "cha": 12,
    "cr": "3",
    "xp": 700,
    "initiative": -1,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "Common plus two other languages",
    "skills": "",
    "resistances": "",
    "immunities": "Necrotic, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "Fire",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The mummy makes two Rotting Fist attacks and uses Dreadful Glare."
      },
      {
        "name": "Rotting Fist",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can’t regain Hit Points, its Hit Point maximum doesn’t return to normal when finishing a Long Rest, and its Hit Point maximum decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit Points by this attack."
      },
      {
        "name": "Dreadful Glare",
        "description": "Wisdom Saving Throw: DC 11, one creature the mummy can see within 60 feet. Failure: The target has the Frightened condition until the end of the mummy’s next turn. Success: The target is immune to this mummy’s Dreadful Glare for 24 hours."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Mummy Lord",
    "size": "Small",
    "type": "Undead",
    "alignment": "Lawful Evil",
    "ac": 17,
    "hp": 187,
    "hpDice": "25d8 + 75",
    "speed": "30 ft.",
    "str": 18,
    "dex": 10,
    "con": 17,
    "int": 11,
    "wis": 19,
    "cha": 16,
    "cr": "15",
    "xp": 13000,
    "initiative": 10,
    "senses": "Truesight 60 ft.; Passive Perception 19",
    "languages": "Common plus three other languages",
    "skills": "History +5, Perception +9, Religion +5",
    "resistances": "",
    "immunities": "Necrotic, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "Fire",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the mummy fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "description": "The mummy has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Undead Restoration",
        "description": "If destroyed, the mummy gains a new body in 24 hours if its heart is intact, reviving with all its Hit Points. The new body appears in an unoccupied space within the mummy’s lair. The heart is a Tiny object that has AC 17, HP 10, and Immunity to all damage except Fire."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The mummy makes one Rotting Fist or Channel Negative Energy attack, and it uses Dreadful Glare."
      },
      {
        "name": "Rotting Fist",
        "description": "Melee Attack Roll: +9, reach 5 ft. Hit: 15 (2d10 + 4) Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can’t regain Hit Points, it gains no benefit from finishing a Long Rest, and its Hit Point maximum decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit Points by this attack."
      },
      {
        "name": "Channel Negative Energy",
        "description": "Ranged Attack Roll: +9, range 60 ft. Hit: 25 (6d6 + 4) Necrotic damage."
      },
      {
        "name": "Dreadful Glare",
        "description": "Wisdom Saving Throw: DC 17, one creature the mummy can see within 60 feet. Failure: 25 (6d6 + 4) Psychic damage, and the target has the Paralyzed condition until the end of the mummy’s next turn."
      },
      {
        "name": "Spellcasting",
        "description": "The mummy casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 17, +9 to hit with spell attacks): At Will: Dispel Magic, Thaumaturgy 1/Day Each: Animate Dead, Harm, Insect Plague (level 7 version)"
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Whirlwind of Sand",
        "description": "Trigger: The mummy is hit by an attack roll. Response: The mummy adds 2 to its AC against the attack, possibly causing the attack to miss, and the mummy teleports up to 60 feet to an unoccupied space it can see. Each creature of its choice that it can see within 5 feet of its destination space has the Blinded condition until the end of the mummy’s next turn."
      }
    ],
    "legendaryActions": [
      {
        "name": "Dread Command",
        "description": "The mummy casts Command (level 2 version), using the same spellcasting ability as Spellcasting. The mummy can’t take this action again until the start of its next turn."
      },
      {
        "name": "Glare",
        "description": "The mummy uses Dreadful Glare. The mummy can’t take this action again until the start of its next turn."
      },
      {
        "name": "Necrotic Strike",
        "description": "The mummy makes one Rotting Fist or Channel Negative Energy attack."
      }
    ]
  },
  {
    "name": "Nalfeshnee",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 18,
    "hp": 184,
    "hpDice": "16d10 + 96",
    "speed": "20 ft., Fly 30 ft.",
    "str": 21,
    "dex": 10,
    "con": 22,
    "int": 19,
    "wis": 12,
    "cha": 15,
    "cr": "13",
    "xp": 10000,
    "initiative": 5,
    "senses": "Truesight 120 ft.; Passive Perception 11",
    "languages": "Abyssal; telepathy 120 ft.",
    "skills": "",
    "resistances": "Cold, Fire, Lightning",
    "immunities": "Poison; Frightened, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Demonic Restoration",
        "description": "If the nalfeshnee dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "description": "The nalfeshnee has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The nalfeshnee makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 16 (2d10 + 5) Slashing damage plus 11 (2d10) Force damage."
      },
      {
        "name": "Teleport",
        "description": "The nalfeshnee teleports up to 120 feet to an unoccupied space it can see."
      }
    ],
    "bonusActions": [
      {
        "name": "Horror Nimbus (Recharge 5–6)",
        "description": "Wisdom Saving Throw: DC 15, each creature in a 15-foot Emanation originating from the nalfeshnee. Failure: 28 (8d6) Psychic damage, and the target has the Frightened condition for 1 minute, until it takes damage, or until it ends its turn with the nalfeshnee out of line of sight. Success: 308 System Reference Document 5.2 The target is immune to this nalfeshnee’s Horror Nimbus for 24 hours."
      }
    ],
    "reactions": [
      {
        "name": "Pursuit",
        "description": "Trigger: Another creature the nalfeshnee can see ends its move within 120 feet of the nalfeshnee. Response: The nalfeshnee uses Teleport, but its destination space must be within 10 feet of the triggering creature."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Night Hag",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Neutral Evil",
    "ac": 17,
    "hp": 112,
    "hpDice": "15d8 + 45",
    "speed": "30 ft.",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 16,
    "wis": 14,
    "cha": 16,
    "cr": "5",
    "xp": 1800,
    "initiative": 5,
    "senses": "Darkvision 120 ft.; Passive Perception 15",
    "languages": "Abyssal, Common, Infernal, Primordial",
    "skills": "Deception +6, Insight +5, Perception +5, Stealth +5",
    "resistances": "Cold, Fire",
    "immunities": "Charmed",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Coven Magic",
        "description": "While within 30 feet of at least two hag allies, the hag can cast one of the following spells, requiring no Material components, using the spell’s normal casting time, and using Intelligence as the spellcasting ability (spell save DC 14): Augury, Find Familiar, Identify, Locate Object, Scrying, or Unseen Servant. The hag must finish a Long Rest before using this trait to cast that spell again."
      },
      {
        "name": "Magic Resistance",
        "description": "The hag has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Soul Bag",
        "description": "The hag has a soul bag. While holding or carrying the bag, the hag can use its Nightmare Haunting action. The bag has AC 15, HP 20, and Resistance to all damage. The bag turns to dust if reduced to 0 Hit Points. If the bag is destroyed, any souls the bag is holding are released. The hag can create a new bag after 7 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hag makes two Claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Slashing damage. Nightmare Haunting (1/Day; Requires Soul Bag). While on the Ethereal Plane, the hag casts Dream, using the same spellcasting ability as Spellcasting. Only the hag can serve as the spell’s messenger, and the target must be a creature the hag can see on the Material"
      },
      {
        "name": "Plane",
        "description": "The spell fails and is wasted if the target is under the effect of the Protection from Evil and Good spell or within a Magic Circle spell. If the target takes damage from the Dream spell, the target’s Hit Point maximum decreases by an amount equal to that damage. If the spell kills the target, its soul is trapped in the hag’s soul bag, and the target can’t be raised from the dead until its soul is released."
      },
      {
        "name": "Spellcasting",
        "description": "The hag casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save DC 14): At Will: Detect Magic, Etherealness, Magic Missile (level 4 version) 2/Day Each: Phantasmal Killer, Plane Shift (self only)"
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The hag shape-shifts into a Small or Medium Humanoid, or it returns to its true form. Other than its size, its game statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Nightmare",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 68,
    "hpDice": "8d10 + 24",
    "speed": "60 ft., Fly 90 ft. (hover)",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 15,
    "cr": "3",
    "xp": 700,
    "initiative": 2,
    "senses": "Passive Perception 11",
    "languages": "Understands Abyssal, Common, and Infernal",
    "skills": "",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Confer Fire Resistance",
        "description": "The nightmare can grant Resistance to Fire damage to a rider while it is on the nightmare."
      },
      {
        "name": "Illumination",
        "description": "The nightmare sheds Bright Light in a 10foot radius and Dim Light for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning damage plus 10 (3d6) Fire damage."
      },
      {
        "name": "Ethereal Stride",
        "description": "The nightmare and up to three willing creatures within 5 feet of it teleport to the Ethereal Plane from the Material Plane or vice versa. 309 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Noble",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 15,
    "hp": 9,
    "hpDice": "2d8",
    "speed": "30 ft.",
    "str": 11,
    "dex": 12,
    "con": 11,
    "int": 12,
    "wis": 14,
    "cha": 16,
    "cr": "1/8",
    "xp": 25,
    "initiative": 1,
    "senses": "Passive Perception 12",
    "languages": "Common plus two other languages",
    "skills": "Deception +5, Insight +4, Persuasion +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Rapier",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Parry",
        "description": "Trigger: The noble is hit by a melee attack roll while holding a weapon. Response: The noble adds 2 to its AC against that attack, possibly causing it to miss."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Ochre Jelly",
    "size": "Large",
    "type": "Ooze",
    "alignment": "Unaligned",
    "ac": 8,
    "hp": 52,
    "hpDice": "7d10 + 14",
    "speed": "20 ft., Climb 20 ft.",
    "str": 15,
    "dex": 6,
    "con": 14,
    "int": 2,
    "wis": 6,
    "cha": 1,
    "cr": "2",
    "xp": 450,
    "initiative": -2,
    "senses": "Blindsight 60 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "Acid",
    "immunities": "Lightning, Slashing; Charmed, Deafened,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amorphous",
        "description": "The jelly can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Spider Climb",
        "description": "The jelly can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Acid damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Split",
        "description": "Trigger: While the jelly is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. Response: The jelly splits into two new Ochre Jellies. Each new jelly is one size smaller than the original jelly and acts on its Initiative. The original jelly’s Hit Points are divided evenly between the new jellies (round down)."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Ogre",
    "size": "Large",
    "type": "Giant",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 68,
    "hpDice": "8d10 + 24",
    "speed": "40 ft.",
    "str": 19,
    "dex": 8,
    "con": 16,
    "int": 5,
    "wis": 7,
    "cha": 7,
    "cr": "2",
    "xp": 450,
    "initiative": -1,
    "senses": "Darkvision 60 ft.; Passive Perception 8",
    "languages": "Common, Giant",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Greatclub",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning damage."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Attack Roll: +6, reach 5 ft. or range 30/120 ft. Hit: 11 (2d6 + 4) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Ogre Zombie",
    "size": "Large",
    "type": "Undead",
    "alignment": "Neutral Evil",
    "ac": 8,
    "hp": 85,
    "hpDice": "9d10 + 36",
    "speed": "30 ft.",
    "str": 19,
    "dex": 6,
    "con": 18,
    "int": 3,
    "wis": 6,
    "cha": 5,
    "cr": "2",
    "xp": 450,
    "initiative": -2,
    "senses": "Darkvision 60 ft.; Passive Perception 8",
    "languages": "Understands Common and Giant but can’t",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Undead Fortitude",
        "description": "If damage reduces the zombie to 0 Hit Points, it makes a Constitution saving throw (DC 5 plus the damage taken) unless the damage is Radiant or from a Critical Hit. On a successful save, the zombie drops to 1 Hit Point instead."
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning damage. Animals"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Oni",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 17,
    "hp": 119,
    "hpDice": "14d10 + 42",
    "speed": "30 ft., Fly 30 ft. (hover)",
    "str": 19,
    "dex": 11,
    "con": 16,
    "int": 14,
    "wis": 12,
    "cha": 15,
    "cr": "7",
    "xp": 2900,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Common, Giant",
    "skills": "Arcana +5, Deception +8, Perception +4",
    "resistances": "Cold",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Regeneration",
        "description": "The oni regains 10 Hit Points at the start of each of its turns if it has at least 1 Hit Point."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The oni makes two Claw or Nightmare"
      },
      {
        "name": "Ray attacks",
        "description": "It can replace one attack with a use of Spellcasting. 310 System Reference Document 5.2"
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 10 (1d12 + 4) Slashing damage plus 9 (2d8) Necrotic damage."
      },
      {
        "name": "Nightmare Ray",
        "description": "Ranged Attack Roll: +5, range 60 ft. Hit: 9 (2d6 + 2) Psychic damage, and the target has the Frightened condition until the start of the oni’s next turn."
      },
      {
        "name": "Shape-Shift",
        "description": "The oni shape-shifts into a Small or Medium Humanoid or a Large Giant, or it returns to its true form. Other than its size, its game statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed."
      },
      {
        "name": "Spellcasting",
        "description": "The oni casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 13): 1/Day Each: Charm Person (level 2 version), Darkness, Gaseous Form, Sleep"
      }
    ],
    "bonusActions": [
      {
        "name": "Invisibility",
        "description": "The oni casts Invisibility on itself, requiring no spell components and using the same spellcasting ability as Spellcasting."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Otyugh",
    "size": "Large",
    "type": "Aberration",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 104,
    "hpDice": "11d10 + 44",
    "speed": "30 ft.",
    "str": 16,
    "dex": 11,
    "con": 19,
    "int": 6,
    "wis": 13,
    "cha": 6,
    "cr": "5",
    "xp": 1800,
    "initiative": 0,
    "senses": "Darkvision 120 ft.; Passive Perception 11",
    "languages": "Otyugh; telepathy 120 ft. (doesn’t allow the",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The otyugh makes one Bite attack and two Tentacle attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 12 (2d8 + 3) Piercing damage, and the target has the Poisoned condition. Whenever the Poisoned target finishes a Long Rest, it is subjected to the following effect. Constitution Saving Throw: DC 15. Failure: The target’s Hit Point maximum decreases by 5 (1d10) and doesn’t return to normal until the Poisoned condition ends on the target. Success: The Poisoned condition ends."
      },
      {
        "name": "Tentacle",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 12 (2d8 + 3) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 13) from one of two tentacles."
      },
      {
        "name": "Tentacle Slam",
        "description": "Constitution Saving Throw: DC 14, each creature Grappled by the otyugh. Failure: 16 (3d8 + 3) Bludgeoning damage, and the target has the Stunned condition until the start of the otyugh’s next turn. Success: Half damage only."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Owl",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "5 ft., Fly 60 ft.",
    "str": 3,
    "dex": 13,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "cr": "0",
    "xp": 10,
    "initiative": 1,
    "senses": "Darkvision 120 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Flyby",
        "description": "The owl doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 1 Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Owlbear",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 59,
    "hpDice": "7d10 + 21",
    "speed": "40 ft., Climb 40 ft.",
    "str": 20,
    "dex": 12,
    "con": 17,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "cr": "3",
    "xp": 700,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The owlbear makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Panther",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 13,
    "hpDice": "3d8",
    "speed": "50 ft., Climb 40 ft.",
    "str": 14,
    "dex": 16,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 7,
    "cr": "1/4",
    "xp": 50,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "None",
    "skills": "Perception +4, Stealth +7",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Nimble Escape",
        "description": "The panther takes the Disengage or Hide action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Pegasus",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Chaotic Good",
    "ac": 12,
    "hp": 59,
    "hpDice": "7d10 + 21",
    "speed": "60 ft., Fly 90 ft.",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 15,
    "cha": 13,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Passive Perception 16",
    "languages": "Understands Celestial, Common, Elvish, and",
    "skills": "Perception +6",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 7 (1d6 + 4) Bludgeoning damage plus 5 (2d4) Radiant damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Phase Spider",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 45,
    "hpDice": "7d10 + 7",
    "speed": "30 ft., Climb 30 ft.",
    "str": 15,
    "dex": 16,
    "con": 12,
    "int": 6,
    "wis": 10,
    "cha": 6,
    "cr": "3",
    "xp": 700,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "Stealth +7",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ethereal Sight",
        "description": "The spider can see 60 feet into the Ethereal Plane while on the Material Plane and vice versa."
      },
      {
        "name": "Spider Climb",
        "description": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "description": "The spider ignores movement restrictions caused by webs, and the spider knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The spider makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing damage plus 9 (2d8) Poison damage. If this damage reduces the target to 0 Hit Points, the target becomes Stable, and it has the Poisoned condition for 1 hour. While Poisoned, the target also has the Paralyzed condition."
      }
    ],
    "bonusActions": [
      {
        "name": "Ethereal Jaunt",
        "description": "The spider teleports from the Material Plane to the Ethereal Plane or vice versa. Pirates"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Piranha",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "5 ft., Swim 40 ft.",
    "str": 2,
    "dex": 16,
    "con": 9,
    "int": 1,
    "wis": 7,
    "cha": 2,
    "cr": "0",
    "xp": 10,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Water Breathing",
        "description": "The piranha can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5 (with Advantage if the target doesn’t have all its Hit Points), reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Pirate",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 33,
    "hpDice": "6d8 + 6",
    "speed": "30 ft.",
    "str": 10,
    "dex": 16,
    "con": 12,
    "int": 8,
    "wis": 12,
    "cha": 14,
    "cr": "1",
    "xp": 200,
    "initiative": 5,
    "senses": "Passive Perception 11",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The pirate makes two Dagger attacks. It can replace one attack with a use of Enthralling Panache."
      },
      {
        "name": "Dagger",
        "description": "Melee or Ranged Attack Roll: +5, reach 5 ft. or range 20/60 ft. Hit: 5 (1d4 + 3) Piercing damage."
      },
      {
        "name": "Enthralling Panache",
        "description": "Wisdom Saving Throw: DC 12, one creature the pirate can see within 30 feet. Failure: The target has the Charmed condition until the start of the pirate’s next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Pirate Captain",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 84,
    "hpDice": "13d8 + 26",
    "speed": "30 ft.",
    "str": 10,
    "dex": 18,
    "con": 14,
    "int": 10,
    "wis": 14,
    "cha": 17,
    "cr": "6",
    "xp": 2300,
    "initiative": 7,
    "senses": "Passive Perception 15",
    "languages": "Common plus one other language",
    "skills": "Acrobatics +7, Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The pirate makes three attacks, using Rapier or Pistol in any combination."
      },
      {
        "name": "Rapier",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Piercing damage, and the pirate has Advantage on the next attack roll it makes before the end of this turn."
      },
      {
        "name": "Pistol",
        "description": "Ranged Attack Roll: +7, range 30/90 ft. Hit: 15 (2d10 + 4) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Riposte",
        "description": "Trigger: The pirate is hit by a melee attack roll while holding a weapon. Response: The pirate adds 3 to its AC against that attack, possibly causing it to miss. On a miss, the pirate makes one Rapier attack against the triggering creature if within range."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Pit Fiend",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 21,
    "hp": 337,
    "hpDice": "27d10 + 189",
    "speed": "30 ft., Fly 60 ft.",
    "str": 26,
    "dex": 14,
    "con": 24,
    "int": 22,
    "wis": 18,
    "cha": 24,
    "cr": "20",
    "xp": 25000,
    "initiative": 14,
    "senses": "Truesight 120 ft.; Passive Perception 20",
    "languages": "Infernal; telepathy 120 ft.",
    "skills": "Perception +10, Persuasion +19",
    "resistances": "Cold",
    "immunities": "Fire, Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Diabolical Restoration",
        "description": "If the pit fiend dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      },
      {
        "name": "Fear Aura",
        "description": "The pit fiend emanates an aura in a 20foot Emanation while it doesn’t have the Incapacitated condition. Wisdom Saving Throw: DC 21, any enemy that starts its turn in the aura. Failure: The target has the Frightened condition until the start of its next turn. Success: The target is immune to this pit fiend’s aura for 24 hours."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "description": "If the pit fiend fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "description": "The pit fiend has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The pit fiend makes one Bite attack, two Devilish Claw attacks, and one Fiery Mace attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 18 (3d6 + 8) Piercing damage. If the target is a creature, it must make the following saving throw. Constitution Saving Throw: DC 21. Failure: The target has the Poisoned condition. While Poisoned, the target can’t regain Hit Points and takes 21 (6d6) Poison damage at the start of each of its turns, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Devilish Claw",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 26 (4d8 + 8) Necrotic damage."
      },
      {
        "name": "Fiery Mace",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 22 (4d6 + 8) Force damage plus 21 (6d6) Fire damage."
      },
      {
        "name": "Hellfire Spellcasting (Recharge 4–6)",
        "description": "The pit fiend casts Fireball (level 5 version) twice, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21). It can replace one Fireball with Hold Monster (level 7 version) or Wall of Fire."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Planetar",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Lawful Good",
    "ac": 19,
    "hp": 262,
    "hpDice": "21d10 + 147",
    "speed": "40 ft., Fly 120 ft. (hover)",
    "str": 24,
    "dex": 20,
    "con": 24,
    "int": 19,
    "wis": 22,
    "cha": 25,
    "cr": "16",
    "xp": 15000,
    "initiative": 10,
    "senses": "Truesight 120 ft.; Passive Perception 21",
    "languages": "All; telepathy 120 ft.",
    "skills": "Perception +11",
    "resistances": "Radiant",
    "immunities": "Charmed, Exhaustion, Frightened",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Divine Awareness",
        "description": "The planetar knows if it hears a lie."
      },
      {
        "name": "Exalted Restoration",
        "description": "If the planetar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia."
      },
      {
        "name": "Magic Resistance",
        "description": "The planetar has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The planetar makes three Radiant Sword attacks or uses Holy Burst twice."
      },
      {
        "name": "Radiant Sword",
        "description": "Melee Attack Roll: +12, reach 10 ft. Hit: 14 (2d6 + 7) Slashing damage plus 18 (4d8) Radiant damage."
      },
      {
        "name": "Holy Burst",
        "description": "Dexterity Saving Throw: DC 20, each enemy in a 20-foot-radius Sphere centered on a point the planetar can see within 120 feet. Failure: 24 (7d6) Radiant damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The planetar casts one of the following spells, requiring no Material components and using Charisma as spellcasting ability (spell save DC 20): At Will: Detect Evil and Good 1/Day Each: Commune, Control Weather, Dispel Evil and Good, Raise Dead"
      }
    ],
    "bonusActions": [
      {
        "name": "Divine Aid (2/Day)",
        "description": "The planetar casts Cure Wounds, Invisibility, Lesser Restoration, or Remove Curse, using the same spellcasting ability as Spellcasting. 313 System Reference Document 5.2 Priests"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Plesiosaurus",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 68,
    "hpDice": "8d10 + 24",
    "speed": "20 ft., Swim 40 ft.",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Hold Breath",
        "description": "The plesiosaurus can hold its breath for 1 hour."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Polar Bear",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 42,
    "hpDice": "5d10 + 15",
    "speed": "40 ft., Swim 40 ft.",
    "str": 20,
    "dex": 14,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "cr": "2",
    "xp": 450,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5, Stealth +4",
    "resistances": "Cold",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bear makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 9 (1d8 + 5) Slashing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Pony",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "40 ft.",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "cr": "1/8",
    "xp": 25,
    "initiative": 0,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Priest",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 38,
    "hpDice": "7d8 + 7",
    "speed": "30 ft.",
    "str": 16,
    "dex": 10,
    "con": 12,
    "int": 13,
    "wis": 16,
    "cha": 13,
    "cr": "2",
    "xp": 450,
    "initiative": 0,
    "senses": "Passive Perception 15",
    "languages": "Common plus one other language",
    "skills": "Medicine +7, Perception +5, Religion +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The priest makes two attacks, using Mace or Radiant Flame in any combination."
      },
      {
        "name": "Mace",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage plus 5 (2d4) Radiant damage."
      },
      {
        "name": "Radiant Flame",
        "description": "Ranged Attack Roll: +5, range 60 ft. Hit: 11 (2d10) Radiant damage."
      },
      {
        "name": "Spellcasting",
        "description": "The priest casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 13): At Will: Light, Thaumaturgy 1/Day: Spirit Guardians"
      }
    ],
    "bonusActions": [
      {
        "name": "Divine Aid (3/Day)",
        "description": "The priest casts Bless, Dispel Magic, Healing Word, or Lesser Restoration, using the same spellcasting ability as Spellcasting."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Priest Acolyte",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "30 ft.",
    "str": 14,
    "dex": 10,
    "con": 12,
    "int": 10,
    "wis": 14,
    "cha": 11,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Passive Perception 12",
    "languages": "Common",
    "skills": "Medicine +4, Religion +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Mace",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Bludgeoning damage plus 2 (1d4) Radiant damage."
      },
      {
        "name": "Radiant Flame",
        "description": "Ranged Attack Roll: +4, range 60 ft. Hit: 7 (2d6) Radiant damage."
      },
      {
        "name": "Spellcasting",
        "description": "The priest casts one of the following spells, using Wisdom as the spellcasting ability: At Will: Light, Thaumaturgy"
      }
    ],
    "bonusActions": [
      {
        "name": "Divine Aid (1/Day)",
        "description": "The priest casts Bless, Healing Word, or Sanctuary, using the same spellcasting ability as Spellcasting."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Pseudodragon",
    "size": "Tiny",
    "type": "Dragon",
    "alignment": "Neutral Good",
    "ac": 14,
    "hp": 10,
    "hpDice": "3d4 + 3",
    "speed": "15 ft., Fly 60 ft.",
    "str": 6,
    "dex": 15,
    "con": 13,
    "int": 10,
    "wis": 12,
    "cha": 10,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Understands Common and Draconic but can’t",
    "skills": "Perception +5, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The pseudodragon has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The pseudodragon makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage."
      },
      {
        "name": "Sting",
        "description": "Constitution Saving Throw: DC 12, one creature the pseudodragon can see within 5 feet. Failure: 5 (2d4) Poison damage, and the target has the Poisoned condition for 1 hour. Failure by 5 or More: While Poisoned, the target also has the Unconscious condition, which ends early if the target takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Pteranodon",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 13,
    "hpDice": "3d8",
    "speed": "10 ft., Fly 60 ft.",
    "str": 12,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Passive Perception 11",
    "languages": "None",
    "skills": "Perception +1",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Flyby",
        "description": "The pteranodon doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Purple Worm",
    "size": "Gargantuan",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 18,
    "hp": 247,
    "hpDice": "15d20 + 90",
    "speed": "50 ft., Burrow 50 ft.",
    "str": 28,
    "dex": 7,
    "con": 22,
    "int": 1,
    "wis": 8,
    "cha": 4,
    "cr": "15",
    "xp": 13000,
    "initiative": 3,
    "senses": "Blindsight 30 ft., Tremorsense 60 ft.;",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Tunneler",
        "description": "The worm can burrow through solid rock at half its Burrow Speed and leaves a 10-foot-diameter tunnel in its wake."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The worm makes one Bite attack and one Tail Stinger attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 22 (3d8 + 9) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 19), and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Tail Stinger",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 16 (2d6 + 9) Piercing damage plus 35 (10d6) Poison damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Swallow",
        "description": "Strength Saving Throw: DC 19, one Large or smaller creature Grappled by the worm (it can have up to three creatures swallowed at a time). Failure: The target is swallowed by the worm, and the Grappled condition ends. A swallowed creature has the Blinded and Restrained conditions, has Total Cover against attacks and other effects outside the worm, and takes 17 (5d6) Acid damage at the start of each of the worm’s turns. If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 5 feet of the worm and has the Prone condition. If the worm dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 20 feet of movement, exiting Prone."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Quasit",
    "size": "Tiny",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 25,
    "hpDice": "10d4",
    "speed": "40 ft.",
    "str": 5,
    "dex": 17,
    "con": 10,
    "int": 7,
    "wis": 10,
    "cha": 10,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Darkvision 120 ft.; Passive Perception 10",
    "languages": "Abyssal, Common",
    "skills": "Stealth +5",
    "resistances": "Cold, Fire, Lightning",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The quasit has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing damage, and the target has the Poisoned condition until the start of the quasit’s next turn."
      },
      {
        "name": "Invisibility",
        "description": "The quasit casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability."
      },
      {
        "name": "Scare (1/Day)",
        "description": "Wisdom Saving Throw: DC 10, one creature within 20 feet. Failure: The target has the Frightened condition. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Shape-Shift",
        "description": "The quasit shape-shifts to resemble a bat (Speed 10 ft., Fly 40 ft.), a centipede (40 ft., Climb 40 ft.), or a toad (40 ft., Swim 40 ft.), or it returns to its true form. Its game statistics are the same in each form, except for its Speed. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Rakshasa",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 17,
    "hp": 221,
    "hpDice": "26d8 + 104",
    "speed": "40 ft.",
    "str": 14,
    "dex": 17,
    "con": 18,
    "int": 13,
    "wis": 16,
    "cha": 20,
    "cr": "13",
    "xp": 10000,
    "initiative": 8,
    "senses": "Truesight 60 ft.; Passive Perception 18",
    "languages": "Common, Infernal",
    "skills": "Deception +10, Insight +8, Perception +8",
    "resistances": "",
    "immunities": "Charmed, Frightened",
    "vulnerabilities": "Piercing damage from weapons wielded by",
    "traits": [
      {
        "name": "Greater Magic Resistance",
        "description": "The rakshasa automatically succeeds on saving throws against spells and other magical effects, and the attack rolls of spells automatically miss it. Without the rakshasa’s permission, no spell can observe the rakshasa remotely or detect its thoughts, creature type, or alignment."
      },
      {
        "name": "Fiendish Restoration",
        "description": "If the rakshasa dies outside the Nine Hells, its body turns to ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The rakshasa makes three Cursed Touch attacks."
      },
      {
        "name": "Cursed Touch",
        "description": "Melee Attack Roll: +10, reach 5 ft. Hit: 12 (2d6 + 5) Slashing damage plus 19 (3d12) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target gains no benefit from finishing a Short or Long Rest."
      },
      {
        "name": "Baleful Command (Recharge 5–6)",
        "description": "Wisdom Saving Throw: DC 18, each enemy in a 30-foot Emanation originating from the rakshasa. Failure: 28 (8d6) Psychic damage, and the target has the Frightened and Incapacitated conditions until the start of the rakshasa’s next turn."
      },
      {
        "name": "Spellcasting",
        "description": "The rakshasa casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 18): At Will: Detect Magic, Detect Thoughts, Disguise Self, Mage Hand, Minor Illusion 1/Day Each: Fly, Invisibility, Major Image, Plane Shift Red Dragons"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Rat",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "20 ft., Climb 20 ft.",
    "str": 2,
    "dex": 11,
    "con": 9,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Darkvision 30 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Agile",
        "description": "The rat doesn’t provoke an Opportunity Attack when it moves out of an enemy’s reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Raven",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 2,
    "hpDice": "1d4",
    "speed": "10 ft., Fly 50 ft.",
    "str": 2,
    "dex": 14,
    "con": 10,
    "int": 5,
    "wis": 13,
    "cha": 6,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Mimicry",
        "description": "The raven can mimic simple sounds it has heard, such as a whisper or chitter. A hearer can discern the sounds are imitations with a successful DC 10 Wisdom (Insight) check."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Red Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 17,
    "hp": 75,
    "hpDice": "10d8 + 30",
    "speed": "30 ft., Climb 30 ft., Fly 60 ft.",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "cr": "4",
    "xp": 1100,
    "initiative": 2,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +2",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Slashing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 13, each creature in a 15-foot Cone. Failure: 24 (7d6) Fire damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Reef Shark",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 22,
    "hpDice": "4d8 + 4",
    "speed": "5 ft., Swim 30 ft.",
    "str": 14,
    "dex": 15,
    "con": 13,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "cr": "1/2",
    "xp": 100,
    "initiative": 2,
    "senses": "Blindsight 30 ft.; Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The shark has Advantage on an attack roll against a creature if at least one of the shark’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      },
      {
        "name": "Water Breathing",
        "description": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Remorhaz",
    "size": "Huge",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 17,
    "hp": 195,
    "hpDice": "17d12 + 85",
    "speed": "40 ft., Burrow 30 ft.",
    "str": 24,
    "dex": 13,
    "con": 21,
    "int": 4,
    "wis": 10,
    "cha": 5,
    "cr": "11",
    "xp": 7200,
    "initiative": 5,
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.;",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Cold, Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Heat Aura",
        "description": "At the end of each of the remorhaz’s turns, each creature in a 5-foot Emanation originating from the remorhaz takes 16 (3d10) Fire damage."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 18 (2d10 + 7) Piercing damage plus 14 (4d6) Fire damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 17), and it has the Restrained condition until the grapple ends."
      }
    ],
    "bonusActions": [
      {
        "name": "Swallow",
        "description": "Strength Saving Throw: DC 19, one Large or smaller creature Grappled by the remorhaz (it can have up to two creatures swallowed at a time). Failure: The target is swallowed by the remorhaz, and the Grappled condition ends. A swallowed creature has the Blinded 317 System Reference Document 5.2 and Restrained conditions, it has Total Cover against attacks and other effects outside the remorhaz, and it takes 10 (3d6) Acid damage plus 10 (3d6) Fire damage at the start of each of the remorhaz’s turns. If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 5 feet of the remorhaz and has the Prone condition. If the remorhaz dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse by using 15 feet of movement, exiting Prone."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Rhinoceros",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 45,
    "hpDice": "6d10 + 12",
    "speed": "40 ft.",
    "str": 21,
    "dex": 8,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "cr": "2",
    "xp": 450,
    "initiative": -1,
    "senses": "Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Piercing damage. If target is a Large or smaller creature and the rhinoceros moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Piercing damage and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Riding Horse",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 13,
    "hpDice": "2d10 + 2",
    "speed": "60 ft.",
    "str": 16,
    "dex": 13,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "cr": "1/4",
    "xp": 50,
    "initiative": 1,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Roc",
    "size": "Gargantuan",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 15,
    "hp": 248,
    "hpDice": "16d20 + 80",
    "speed": "20 ft., Fly 120 ft.",
    "str": 28,
    "dex": 10,
    "con": 20,
    "int": 3,
    "wis": 10,
    "cha": 9,
    "cr": "11",
    "xp": 7200,
    "initiative": 8,
    "senses": "Passive Perception 18",
    "languages": "None",
    "skills": "Perception +8",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The roc makes two Beak attacks. It can replace one attack with a Talons attack."
      },
      {
        "name": "Beak",
        "description": "Melee Attack Roll: +13, reach 10 ft. Hit: 28 (3d12 + 9) Piercing damage."
      },
      {
        "name": "Talons",
        "description": "Melee Attack Roll: +13, reach 5 ft. Hit: 23 (4d6 + 9) Slashing damage. If the target is a Huge or smaller creature, it has the Grappled condition (escape DC 19) from both talons, and it has the Restrained condition until the grapple ends."
      }
    ],
    "bonusActions": [
      {
        "name": "Swoop (Recharge 5–6)",
        "description": "If the roc has a creature Grappled, the roc flies up to half its Fly Speed without provoking Opportunity Attacks and drops that creature."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Roper",
    "size": "Large",
    "type": "Aberration",
    "alignment": "Neutral Evil",
    "ac": 20,
    "hp": 93,
    "hpDice": "11d10 + 33",
    "speed": "10 ft., Climb 20 ft.",
    "str": 18,
    "dex": 8,
    "con": 17,
    "int": 7,
    "wis": 16,
    "cha": 6,
    "cr": "5",
    "xp": 1800,
    "initiative": 5,
    "senses": "Darkvision 60 ft.; Passive Perception 16",
    "languages": "None",
    "skills": "Perception +6, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The roper can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The roper makes two Tentacle attacks, uses Reel, and makes two Bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 17 (3d8 + 4) Piercing damage."
      },
      {
        "name": "Tentacle",
        "description": "Melee Attack Roll: +7, reach 60 ft. Hit: The target has the Grappled condition (escape DC 14) from one of six tentacles, and the target has the Poisoned condition until the grapple ends. The tentacle can be damaged, freeing a creature it has Grappled when destroyed (AC 20, HP 10, Immunity to Poison and Psychic damage). Damaging the tentacle deals no damage to the roper, and a destroyed tentacle regrows at the start of the roper’s next turn."
      },
      {
        "name": "Reel",
        "description": "The roper pulls each creature Grappled by it up to 30 feet straight toward it."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Rust Monster",
    "size": "Medium",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 33,
    "hpDice": "6d8 + 6",
    "speed": "40 ft.",
    "str": 13,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 13,
    "cha": 6,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Iron Scent",
        "description": "The rust monster can pinpoint the location of ferrous metal within 30 feet of itself."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The rust monster makes one Bite attack and uses Antennae twice."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Piercing damage. 318 System Reference Document 5.2"
      },
      {
        "name": "Antennae",
        "description": "The rust monster targets one nonmagical metal object—armor or a weapon—worn or carried by a creature within 5 feet of itself. Dexterity Saving Throw: DC 11, the creature with the object. Failure: The object takes a −1 penalty to the AC it offers (armor) or to its attack rolls (weapon). Armor is destroyed if the penalty reduces its AC to 10, and a weapon is destroyed if its penalty reaches −5. The penalty can be removed by casting the Mending spell on the armor or weapon."
      },
      {
        "name": "Destroy Metal",
        "description": "The rust monster touches a nonmagical metal object within 5 feet of itself that isn’t being worn or carried. The touch destroys a 1-foot Cube of the object."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Reflexive Antennae",
        "description": "Trigger: An attack roll hits the rust monster. Response: The rust monster uses Antennae. Sahuagin"
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Saber-Toothed Tiger",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 52,
    "hpDice": "7d10 + 14",
    "speed": "40 ft.",
    "str": 18,
    "dex": 17,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "cr": "2",
    "xp": 450,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5, Stealth +7",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Running Leap",
        "description": "With a 10-foot running start, the tiger can Long Jump up to 25 feet."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The tiger makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Slashing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Nimble Escape",
        "description": "The tiger takes the Disengage or Hide action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Sahuagin Warrior",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 22,
    "hpDice": "4d8 + 4",
    "speed": "30 ft., Swim 40 ft.",
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 12,
    "wis": 13,
    "cha": 9,
    "cr": "1/2",
    "xp": 100,
    "initiative": 0,
    "senses": "Darkvision 120 ft.; Passive Perception 15",
    "languages": "Sahuagin",
    "skills": "Perception +5",
    "resistances": "Acid, Cold",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Blood Frenzy",
        "description": "The sahuagin has Advantage on attack rolls against any creature that doesn’t have all its Hit Points."
      },
      {
        "name": "Limited Amphibiousness",
        "description": "The sahuagin can breathe air and water, but it must be submerged at least once every 4 hours to avoid suffocating outside water."
      },
      {
        "name": "Shark Telepathy",
        "description": "The sahuagin can magically control sharks within 120 feet of itself, using a special telepathy."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The sahuagin makes two Claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Aquatic Charge",
        "description": "The sahuagin swims up to its Swim Speed straight toward an enemy it can see."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Salamander",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 90,
    "hpDice": "12d10 + 24",
    "speed": "30 ft., Climb 30 ft.",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 11,
    "wis": 10,
    "cha": 12,
    "cr": "5",
    "xp": 1800,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Ignan)",
    "skills": "",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "Cold",
    "traits": [
      {
        "name": "Fire Aura",
        "description": "At the end of each of the salamander’s turns, each creature of the salamander’s choice in a 5-foot Emanation originating from the salamander takes 7 (2d6) Fire damage."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The salamander makes two Flame"
      },
      {
        "name": "Spear attacks",
        "description": "It can replace one attack with a use of Constrict."
      },
      {
        "name": "Flame Spear",
        "description": "Melee or Ranged Attack Roll: +7, reach 5 ft. or range 20/60 ft. Hit: 13 (2d8 + 4) Piercing damage plus 7 (2d6) Fire damage. Hit or Miss: The spear magically returns to the salamander’s hand immediately after a ranged attack."
      },
      {
        "name": "Constrict",
        "description": "Strength Saving Throw: DC 15, one Large or smaller creature the salamander can see within 10 feet. Failure: 11 (2d6 + 4) Bludgeoning damage plus 7 (2d6) Fire damage. The target has the Grappled condition (escape DC 14), and it has the Restrained condition until the grapple ends."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Satyr",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Chaotic Neutral",
    "ac": 13,
    "hp": 31,
    "hpDice": "7d8",
    "speed": "40 ft.",
    "str": 12,
    "dex": 16,
    "con": 11,
    "int": 12,
    "wis": 10,
    "cha": 14,
    "cr": "1/2",
    "xp": 100,
    "initiative": 3,
    "senses": "Passive Perception 12",
    "languages": "Common, Elvish, Sylvan",
    "skills": "Perception +2, Performance +6, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The satyr has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Bludgeoning damage. If the target is a Medium or smaller creature, the satyr pushes the target up to 10 feet straight away from itself."
      },
      {
        "name": "Mockery",
        "description": "Wisdom Saving Throw: DC 12, one creature the satyr can see within 90 feet. Failure: 5 (1d6 + 2) Psychic damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Scorpion",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "10 ft.",
    "str": 2,
    "dex": 11,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Blindsight 10 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Sting",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage plus 3 (1d6) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Scout",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 16,
    "hpDice": "3d8 + 3",
    "speed": "30 ft.",
    "str": 11,
    "dex": 14,
    "con": 12,
    "int": 11,
    "wis": 13,
    "cha": 11,
    "cr": "1/2",
    "xp": 100,
    "initiative": 2,
    "senses": "Passive Perception 15",
    "languages": "Common plus one other language",
    "skills": "Nature +4, Perception +5, Stealth +6, Survival +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The scout makes two attacks, using Shortsword and Longbow in any combination."
      },
      {
        "name": "Shortsword",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8 + 2) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Sea Hag",
    "size": "Medium",
    "type": "Fey",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 52,
    "hpDice": "7d8 + 21",
    "speed": "30 ft., Swim 40 ft.",
    "str": 16,
    "dex": 13,
    "con": 16,
    "int": 12,
    "wis": 12,
    "cha": 13,
    "cr": "2",
    "xp": 450,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "Common, Giant, Primordial (Aquan)",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The hag can breathe air and water."
      },
      {
        "name": "Coven Magic",
        "description": "While within 30 feet of at least two hag allies, the hag can cast one of the following spells, requiring no Material components, using the spell’s normal casting time, and using Intelligence as the spellcasting ability (spell save DC 11): Augury, Find Familiar, Identify, Locate Object, Scrying, or Unseen Servant. The hag must finish a Long Rest before using this trait to cast that spell again."
      },
      {
        "name": "Vile Appearance",
        "description": "Wisdom Saving Throw: DC 11, any Beast or Humanoid that starts its turn within 30 feet of the hag and can see the hag’s true form. Failure: The target has the Frightened condition until the start of its next turn. Success: The target is immune to this hag’s Vile Appearance for 24 hours."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
      },
      {
        "name": "Death Glare (Recharge 5–6)",
        "description": "Wisdom Saving Throw: DC 11, one Frightened creature the hag can see within 30 feet. Failure: If the target has 20 Hit Points or fewer, it drops to 0 Hit Points. Otherwise, the target takes 13 (3d8) Psychic damage."
      },
      {
        "name": "Illusory Appearance",
        "description": "The hag casts Disguise Self, using Constitution as the spellcasting ability (spell save DC 13). The spell’s duration is 24 hours."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Seahorse",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "5 ft., Swim 20 ft.",
    "str": 1,
    "dex": 12,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "cr": "0",
    "xp": 0,
    "initiative": 1,
    "senses": "Passive Perception 12",
    "languages": "None",
    "skills": "Perception +2, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Water Breathing",
        "description": "The seahorse can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bubble Dash",
        "description": "While underwater, the seahorse moves up to its Swim Speed without provoking Opportunity Attacks."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Shadow",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 27,
    "hpDice": "5d8 + 5",
    "speed": "40 ft.",
    "str": 6,
    "dex": 14,
    "con": 13,
    "int": 6,
    "wis": 10,
    "cha": 8,
    "cr": "1/2",
    "xp": 100,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "Stealth +6",
    "resistances": "Acid, Cold, Fire, Lightning, Thunder",
    "immunities": "Necrotic, Poison; Exhaustion, Frightened,",
    "vulnerabilities": "Radiant",
    "traits": [
      {
        "name": "Amorphous",
        "description": "The shadow can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Sunlight Weakness",
        "description": "While in sunlight, the shadow has Disadvantage on D20 Tests. 320 System Reference Document 5.2"
      }
    ],
    "actions": [
      {
        "name": "Draining Swipe",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Necrotic damage, and the target’s Strength score decreases by 1d4. The target dies if this reduces that score to 0. If a Humanoid is slain by this attack, a Shadow rises from the corpse 1d4 hours later."
      }
    ],
    "bonusActions": [
      {
        "name": "Shadow Stealth",
        "description": "While in Dim Light or Darkness, the shadow takes the Hide action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Shambling Mound",
    "size": "Large",
    "type": "Plant",
    "alignment": "Unaligned",
    "ac": 15,
    "hp": 110,
    "hpDice": "13d10 + 39",
    "speed": "30 ft., Swim 20 ft.",
    "str": 18,
    "dex": 8,
    "con": 16,
    "int": 5,
    "wis": 10,
    "cha": 5,
    "cr": "5",
    "xp": 1800,
    "initiative": -1,
    "senses": "Blindsight 60 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "Stealth +3",
    "resistances": "Cold, Fire",
    "immunities": "Lightning; Deafened, Exhaustion",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Lightning Absorption",
        "description": "Whenever the shambling mound is subjected to Lightning damage, it regains a number of Hit Points equal to the Lightning damage dealt."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The shambling mound makes three"
      },
      {
        "name": "Charged Tendril attacks",
        "description": "It can replace one attack with a use of Engulf."
      },
      {
        "name": "Charged Tendril",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4) Bludgeoning damage plus 5 (2d4) Lightning damage. If the target is a Medium or smaller creature, the shambling mound pulls the target 5 feet straight toward itself."
      },
      {
        "name": "Engulf",
        "description": "Strength Saving Throw: DC 15, one Medium or smaller creature within 5 feet. Failure: The target is pulled into the shambling mound’s space and has the"
      },
      {
        "name": "Grappled condition (escape DC 14)",
        "description": "Until the grapple ends, the target has the Blinded and Restrained conditions, and it takes 10 (3d6) Lightning damage at the start of each of its turns. When the shambling mound moves, the Grappled target moves with it, costing it no extra movement. The shambling mound can have only one creature Grappled by this action at a time."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Shield Guardian",
    "size": "Large",
    "type": "Construct",
    "alignment": "Unaligned",
    "ac": 17,
    "hp": 142,
    "hpDice": "15d10 + 60",
    "speed": "30 ft.",
    "str": 18,
    "dex": 8,
    "con": 18,
    "int": 7,
    "wis": 10,
    "cha": 3,
    "cr": "7",
    "xp": 2900,
    "initiative": -1,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Understands commands given in any language",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Charmed, Exhaustion, Frightened,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Bound",
        "description": "The guardian is magically bound to an amulet. While the guardian and its amulet are on the same plane of existence, the amulet’s wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet’s wearer, half of any damage the wearer takes (round up) is transferred to the guardian."
      },
      {
        "name": "Regeneration",
        "description": "The guardian regains 10 Hit Points at the start of each of its turns if it has at least 1 Hit Point."
      },
      {
        "name": "Spell Storing",
        "description": "A spellcaster who wears the guardian’s amulet can cause the guardian to store one spell of level 4 or lower. To do so, the wearer must cast the spell on the guardian while within 5 feet of it. The spell has no effect but is stored within the guardian. Any previously stored spell is lost when a new spell is stored. The guardian can cast the spell stored with any parameters set by the original caster, requiring no spell components and using the caster’s spellcasting ability. The stored spell is then lost."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The guardian makes two Fist attacks."
      },
      {
        "name": "Fist",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Bludgeoning damage plus 7 (2d6) Force damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Protection",
        "description": "Trigger: An attack roll hits the wearer of the guardian’s amulet while the wearer is within 5 feet of the guardian. Response: The wearer gains a +5 bonus to AC, including against the triggering attack and possibly causing it to miss, until the start of the guardian’s next turn. 321 System Reference Document 5.2 Silver Dragons"
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Shrieker Fungus",
    "size": "Medium",
    "type": "Plant",
    "alignment": "Unaligned",
    "ac": 5,
    "hp": 13,
    "hpDice": "3d8",
    "speed": "5 ft.",
    "str": 1,
    "dex": 1,
    "con": 10,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "cr": "0",
    "xp": 0,
    "initiative": -5,
    "senses": "Blindsight 30 ft.; Passive Perception 6",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Blinded, Charmed, Deafened, Frightened",
    "vulnerabilities": "",
    "traits": [],
    "actions": [],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Shriek",
        "description": "Trigger: A creature or a source of Bright Light moves within 30 feet of the shrieker. Response: The shrieker emits a shriek audible within 300 feet of itself for 1 minute or until the shrieker dies."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Silver Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 17,
    "hp": 45,
    "hpDice": "6d8 + 18",
    "speed": "30 ft., Fly 60 ft.",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "cr": "0",
    "xp": 0,
    "initiative": 2,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +2",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Piercing damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 13, each creature in a 15-foot Cone. Failure: 18 (4d8) Cold damage. Success: Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "description": "Constitution Saving Throw: DC 13, each creature in a 15-foot Cone. First Failure: The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure: The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Skeleton",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Lawful Evil",
    "ac": 14,
    "hp": 13,
    "hpDice": "2d8 + 4",
    "speed": "30 ft.",
    "str": 10,
    "dex": 16,
    "con": 15,
    "int": 6,
    "wis": 8,
    "cha": 5,
    "cr": "1/4",
    "xp": 50,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "Understands Common plus one other language",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Poisoned",
    "vulnerabilities": "Bludgeoning",
    "traits": [],
    "actions": [
      {
        "name": "Shortsword",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage."
      },
      {
        "name": "Shortbow",
        "description": "Ranged Attack Roll: +5, range 80/320 ft. Hit: 6 (1d6 + 3) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Solar",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Lawful Good",
    "ac": 21,
    "hp": 297,
    "hpDice": "22d10 + 176",
    "speed": "50 ft., Fly 150 ft. (hover)",
    "str": 26,
    "dex": 22,
    "con": 26,
    "int": 25,
    "wis": 25,
    "cha": 30,
    "cr": "21",
    "xp": 33000,
    "initiative": 20,
    "senses": "Truesight 120 ft.; Passive Perception 24",
    "languages": "All; telepathy 120 ft.",
    "skills": "Perception +14",
    "resistances": "",
    "immunities": "Poison, Radiant; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Divine Awareness",
        "description": "The solar knows if it hears a lie."
      },
      {
        "name": "Exalted Restoration",
        "description": "If the solar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "description": "If the solar fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "description": "The solar has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The solar makes two Flying Sword attacks. It can replace one attack with a use of Slaying Bow."
      },
      {
        "name": "Flying Sword",
        "description": "Melee or Ranged Attack Roll: +15, reach 10 ft. or range 120 ft. Hit: 22 (4d6 + 8) Slashing damage plus 36 (8d8) Radiant damage. Hit or Miss: The sword magically returns to the solar’s hand or hovers within 5 feet of the solar immediately after a ranged attack."
      },
      {
        "name": "Slaying Bow",
        "description": "Dexterity Saving Throw: DC 21, one creature the solar can see within 600 feet. Failure: If the creature has 100 Hit Points or fewer, it dies. It otherwise takes 24 (4d8 + 6) Piercing damage plus 36 (8d8) Radiant damage."
      },
      {
        "name": "Spellcasting",
        "description": "The solar casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 25): At Will: Detect Evil and Good 1/Day Each: Commune, Control Weather, Dispel Evil and Good, Resurrection"
      }
    ],
    "bonusActions": [
      {
        "name": "Divine Aid (3/Day)",
        "description": "The solar casts Cure Wounds (level 2 version), Lesser Restoration, or Remove Curse, using the same spellcasting ability as Spellcasting. 324 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Blinding Gaze",
        "description": "Constitution Saving Throw: DC 25, one creature the solar can see within 120 feet. Failure: The target has the Blinded condition for 1 minute. Failure or Success: The solar can’t take this action again until the start of its next turn."
      },
      {
        "name": "Radiant Teleport",
        "description": "The solar teleports up to 60 feet to an unoccupied space it can see. Dexterity Saving Throw: DC 25, each creature in a 10-foot Emanation originating from the solar at its destination space. Failure: 11 (2d10) Radiant damage. Success: Half damage."
      }
    ]
  },
  {
    "name": "Specter",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 22,
    "hpDice": "5d8",
    "speed": "30 ft., Fly 50 ft. (hover)",
    "str": 1,
    "dex": 14,
    "con": 11,
    "int": 10,
    "wis": 10,
    "cha": 11,
    "cr": "1",
    "xp": 200,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Understands Common plus one other language",
    "skills": "",
    "resistances": "Acid, Bludgeoning, Cold, Fire, Lightning,",
    "immunities": "Necrotic, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Incorporeal Movement",
        "description": "The specter can move through other creatures and objects as if they were Difficult"
      },
      {
        "name": "Terrain",
        "description": "It takes 5 (1d10) Force damage if it ends its turn inside an object."
      },
      {
        "name": "Sunlight Sensitivity",
        "description": "While in sunlight, the specter has Disadvantage on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Life Drain",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d6) Necrotic damage. If the target is a creature, its Hit Point maximum decreases by an amount equal to the damage taken. Sphinxes"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Sphinx of Lore",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Lawful Neutral",
    "ac": 17,
    "hp": 170,
    "hpDice": "20d10 + 60",
    "speed": "40 ft., Fly 60 ft.",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 18,
    "wis": 18,
    "cha": 18,
    "cr": "11",
    "xp": 7200,
    "initiative": 10,
    "senses": "Truesight 120 ft.; Passive Perception 18",
    "languages": "Celestial, Common",
    "skills": "Arcana +12, History +12, Perception +8,",
    "resistances": "Necrotic, Radiant",
    "immunities": "Psychic; Charmed, Frightened",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Inscrutable",
        "description": "No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight) checks made to ascertain its intentions or sincerity are made with Disadvantage."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the sphinx fails a saving throw, it can choose to succeed instead. 325 System Reference Document 5.2"
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The sphinx makes three Claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 14 (3d6 + 4) Slashing damage."
      },
      {
        "name": "Mind-Rending Roar (Recharge 5–6)",
        "description": "Wisdom Saving Throw: DC 16, each enemy in a 300-foot Emanation originating from the sphinx. Failure: 35 (10d6) Psychic damage, and the target has the Incapacitated condition until the start of the sphinx’s next turn."
      },
      {
        "name": "Spellcasting",
        "description": "The sphinx casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save DC 16): At Will: Detect Magic, Identify, Mage Hand, Minor Illusion, Prestidigitation 1/Day Each: Dispel Magic, Legend Lore, Locate Object, Plane Shift, Remove Curse, Tongues"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Arcane Prowl",
        "description": "The sphinx can teleport up to 30 feet to an unoccupied space it can see, and it makes one Claw attack."
      },
      {
        "name": "Weight of Years",
        "description": "Constitution Saving Throw: DC 16, one creature the sphinx can see within 120 feet. Failure: The target gains 1 Exhaustion level. While the target has any Exhaustion levels, it appears 3d10 years older. Failure or Success: The sphinx can’t take this action again until the start of its next turn."
      }
    ]
  },
  {
    "name": "Sphinx of Valor",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Lawful Neutral",
    "ac": 17,
    "hp": 199,
    "hpDice": "19d10 + 95",
    "speed": "40 ft., Fly 60 ft.",
    "str": 22,
    "dex": 10,
    "con": 20,
    "int": 16,
    "wis": 23,
    "cha": 18,
    "cr": "17",
    "xp": 18000,
    "initiative": 12,
    "senses": "Truesight 120 ft.; Passive Perception 22",
    "languages": "Celestial, Common",
    "skills": "Arcana +9, Perception +12, Religion +15",
    "resistances": "Necrotic, Radiant",
    "immunities": "Psychic; Charmed, Frightened",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Inscrutable",
        "description": "No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight) checks made to ascertain its intentions or sincerity are made with Disadvantage."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the sphinx fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The sphinx makes two Claw attacks and uses Roar."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +12, reach 5 ft. Hit: 20 (4d6 + 6) Slashing damage."
      },
      {
        "name": "Roar (3/Day)",
        "description": "The sphinx emits a magical roar. Whenever it roars, the roar has a different effect, as detailed below (the sequence resets when it takes a Long Rest):"
      },
      {
        "name": "First Roar",
        "description": "Wisdom Saving Throw: DC 20, each enemy in a 500-foot Emanation originating from the sphinx. Failure: The target has the Frightened condition for 1 minute."
      },
      {
        "name": "Second Roar",
        "description": "Wisdom Saving Throw: DC 20, each enemy in a 500-foot Emanation originating from the sphinx. Failure: The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Third Roar",
        "description": "Constitution Saving Throw: DC 20, each enemy in a 500-foot Emanation originating from the sphinx. Failure: 44 (8d10) Thunder damage, and the target has the Prone condition. Success: Half damage only."
      },
      {
        "name": "Spellcasting",
        "description": "The sphinx casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 20): At Will: Detect Evil and Good, Thaumaturgy 1/Day Each: Detect Magic, Dispel Magic, Greater Restoration, Heroes’ Feast, Zone of Truth"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Arcane Prowl",
        "description": "The sphinx can teleport up to 30 feet to an unoccupied space it can see, and it makes one Claw attack."
      },
      {
        "name": "Weight of Years",
        "description": "Constitution Saving Throw: DC 16, one creature the sphinx can see within 120 feet. Failure: The target gains 1 Exhaustion level. While the target has any Exhaustion levels, it appears 3d10 years older. Failure or Success: The sphinx can’t take this action again until the start of its next turn. 326 System Reference Document 5.2"
      }
    ]
  },
  {
    "name": "Sphinx of Wonder",
    "size": "Tiny",
    "type": "Celestial",
    "alignment": "Lawful Good",
    "ac": 13,
    "hp": 24,
    "hpDice": "7d4 + 7",
    "speed": "20 ft., Fly 40 ft.",
    "str": 6,
    "dex": 17,
    "con": 13,
    "int": 15,
    "wis": 12,
    "cha": 11,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 11",
    "languages": "Celestial, Common",
    "skills": "Arcana +4, Religion +4, Stealth +5",
    "resistances": "Necrotic, Psychic, Radiant",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Magic Resistance",
        "description": "The sphinx has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing damage plus 7 (2d6) Radiant damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Burst of Ingenuity (2/Day)",
        "description": "Trigger: The sphinx or another creature within 30 feet makes an ability check or a saving throw. Response: The sphinx adds 2 to the roll."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Spider",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "20 ft., Climb 20 ft.",
    "str": 2,
    "dex": 14,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "cr": "0",
    "xp": 10,
    "initiative": 2,
    "senses": "Darkvision 30 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "description": "The spider ignores movement restrictions caused by webs, and the spider knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage plus 2 (1d4) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Spirit Naga",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 17,
    "hp": 135,
    "hpDice": "18d10 + 36",
    "speed": "40 ft.",
    "str": 18,
    "dex": 17,
    "con": 14,
    "int": 16,
    "wis": 15,
    "cha": 16,
    "cr": "8",
    "xp": 3900,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "Abyssal, Common",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Charmed, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Fiendish Restoration",
        "description": "If it dies, the naga returns to life in 1d6 days and regains all its Hit Points. Only a Wish spell can prevent this trait from functioning."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The naga makes three attacks, using Bite or Necrotic Ray in any combination."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4) Piercing damage plus 14 (4d6) Poison damage."
      },
      {
        "name": "Necrotic Ray",
        "description": "Ranged Attack Roll: +6, range 60 ft. Hit: 21 (6d6) Necrotic damage."
      },
      {
        "name": "Spellcasting",
        "description": "The naga casts one of the following spells, requiring no Somatic or Material components and using Intelligence as the spellcasting ability (spell save DC 14): At Will: Detect Magic, Mage Hand, Minor Illusion, Water Breathing 2/Day Each: Detect Thoughts, Dimension Door, Hold Person (level 3 version), Lightning Bolt (level 4 version)"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Sprite",
    "size": "Tiny",
    "type": "Fey",
    "alignment": "Neutral Good",
    "ac": 15,
    "hp": 10,
    "hpDice": "4d4",
    "speed": "10 ft., Fly 40 ft.",
    "str": 3,
    "dex": 18,
    "con": 10,
    "int": 14,
    "wis": 13,
    "cha": 11,
    "cr": "1/4",
    "xp": 50,
    "initiative": 4,
    "senses": "Passive Perception 13",
    "languages": "Common, Elvish, Sylvan",
    "skills": "Perception +3, Stealth +8",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Needle Sword",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 6 (1d4 + 4) Piercing damage."
      },
      {
        "name": "Enchanting Bow",
        "description": "Ranged Attack Roll: +6, range 40/160 ft. Hit: 1 Piercing damage, and the target has the Charmed condition until the start of the sprite’s next turn."
      },
      {
        "name": "Heart Sight",
        "description": "Charisma Saving Throw: DC 10, one creature within 5 feet the sprite can see (Celestials, Fiends, and Undead automatically fail the save). Failure: The sprite knows the target’s emotions and alignment."
      },
      {
        "name": "Invisibility",
        "description": "The sprite casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Spy",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 27,
    "hpDice": "6d8",
    "speed": "30 ft., Climb 30 ft.",
    "str": 10,
    "dex": 15,
    "con": 10,
    "int": 12,
    "wis": 14,
    "cha": 16,
    "cr": "1",
    "xp": 200,
    "initiative": 4,
    "senses": "Passive Perception 16",
    "languages": "Common plus one other language",
    "skills": "Deception +5, Insight +4, Investigation +5,",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Shortsword",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Hand Crossbow",
        "description": "Ranged Attack Roll: +4, range 30/120 ft. Hit: 5 (1d6 + 2) Piercing damage plus 7 (2d6) Poison damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Cunning Action",
        "description": "The spy takes the Dash, Disengage, or Hide action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Steam Mephit",
    "size": "Small",
    "type": "Elemental",
    "alignment": "Neutral Evil",
    "ac": 10,
    "hp": 17,
    "hpDice": "5d6",
    "speed": "30 ft., Fly 30 ft.",
    "str": 5,
    "dex": 11,
    "con": 10,
    "int": 11,
    "wis": 10,
    "cha": 12,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Aquan, Ignan)",
    "skills": "Stealth +2",
    "resistances": "",
    "immunities": "Fire, Poison; Exhaustion, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Blurred Form",
        "description": "Attack rolls against the mephit are made with Disadvantage unless the mephit has the Incapacitated condition."
      },
      {
        "name": "Death Burst",
        "description": "The mephit explodes when it dies. Dexterity Saving Throw: DC 10, each creature in a 5-foot"
      },
      {
        "name": "Emanation originating from the mephit",
        "description": "Failure: 5 (2d4) Fire damage. Success: Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Slashing damage plus 2 (1d4) Fire damage."
      },
      {
        "name": "Steam Breath (Recharge 6)",
        "description": "Constitution Saving Throw: DC 10, each creature in a 15-foot Cone. Failure: 5 (2d4) Fire damage, and the target’s Speed decreases by 10 feet until the end of the mephit’s next turn. Success:"
      },
      {
        "name": "Half damage only",
        "description": "Failure or Success: Being underwater doesn’t grant Resistance to this Fire damage. Merfolk"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Stirge",
    "size": "Tiny",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 5,
    "hpDice": "2d4",
    "speed": "10 ft., Fly 40 ft.",
    "str": 4,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 8,
    "cha": 6,
    "cr": "1/8",
    "xp": 25,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Proboscis",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage, and the stirge attaches to the target. While attached, the stirge can’t make Proboscis attacks, and the target takes 5 (2d4) Necrotic damage at the start of each of the stirge’s turns. The stirge can detach itself by spending 5 feet of its movement. The target or a creature within 5 feet of it can detach the stirge as an action."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Stone Giant",
    "size": "Huge",
    "type": "Giant",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 126,
    "hpDice": "11d12 + 55",
    "speed": "40 ft.",
    "str": 23,
    "dex": 15,
    "con": 20,
    "int": 10,
    "wis": 12,
    "cha": 9,
    "cr": "7",
    "xp": 2900,
    "initiative": 5,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Giant",
    "skills": "Athletics +12, Perception +4, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two attacks, using Stone Club or Boulder in any combination."
      },
      {
        "name": "Stone Club",
        "description": "Melee Attack Roll: +9, reach 15 ft. Hit: 22 (3d10 + 6) Bludgeoning damage."
      },
      {
        "name": "Boulder",
        "description": "Ranged Attack Roll: +9, range 60/240 ft. Hit: 15 (2d8 + 6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Deflect Missile (Recharge 5–6)",
        "description": "Trigger: The giant is hit by a ranged attack roll and takes Bludgeoning, Piercing, or Slashing damage from it. Response: The giant reduces the damage it takes from the attack by 11 (1d10 + 6), and if that damage is reduced to 0, the giant can redirect some of the attack’s force. Dexterity Saving Throw: DC 17, one creature the giant can see within 60 feet. Failure: 11 (1d10 + 6) Force damage."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Stone Golem",
    "size": "Large",
    "type": "Construct",
    "alignment": "Unaligned",
    "ac": 18,
    "hp": 220,
    "hpDice": "21d10 + 105",
    "speed": "30 ft.",
    "str": 22,
    "dex": 9,
    "con": 20,
    "int": 3,
    "wis": 11,
    "cha": 1,
    "cr": "10",
    "xp": 5900,
    "initiative": 3,
    "senses": "Darkvision 120 ft.; Passive Perception 10",
    "languages": "Understands Common plus two other",
    "skills": "",
    "resistances": "",
    "immunities": "Poison, Psychic; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Immutable Form",
        "description": "The golem can’t shape-shift."
      },
      {
        "name": "Magic Resistance",
        "description": "The golem has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The golem makes two attacks, using Slam or Force Bolt in any combination."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +10, reach 5 ft. Hit: 15 (2d8 + 6) Bludgeoning damage plus 9 (2d8) Force damage."
      },
      {
        "name": "Force Bolt",
        "description": "Ranged Attack Roll: +9, range 120 ft. Hit: 22 (4d10) Force damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Slow (Recharge 5–6)",
        "description": "The golem casts the Slow spell, requiring no spell components and using Constitution as the spellcasting ability (spell save DC 17)."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Storm Giant",
    "size": "Huge",
    "type": "Giant",
    "alignment": "Chaotic Good",
    "ac": 16,
    "hp": 230,
    "hpDice": "20d12 + 100",
    "speed": "50 ft., Fly 25 ft. (hover), Swim 50 ft.",
    "str": 29,
    "dex": 14,
    "con": 20,
    "int": 16,
    "wis": 20,
    "cha": 18,
    "cr": "13",
    "xp": 10000,
    "initiative": 7,
    "senses": "Darkvision 120 ft., Truesight 30 ft.;",
    "languages": "Common, Giant",
    "skills": "Arcana +8, Athletics +14, History +8, Perception +10",
    "resistances": "Cold",
    "immunities": "Lightning, Thunder",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The giant can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two attacks, using Storm Sword or Thunderbolt in any combination."
      },
      {
        "name": "Storm Sword",
        "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 23 (4d6 + 9) Slashing damage plus 13 (3d8) Lightning damage."
      },
      {
        "name": "Thunderbolt",
        "description": "Ranged Attack Roll: +14, range 500 ft. Hit: 22 (2d12 + 9) Lightning damage, and the target has the Blinded and Deafened conditions until the start of the giant’s next turn."
      },
      {
        "name": "Lightning Storm (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 18, each creature in a 10-foot-radius, 40-foot-high Cylinder originating from a point the giant can see within 500 feet. Failure: 55 (10d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Spellcasting",
        "description": "The giant casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 18): At Will: Detect Magic, Light 1/Day: Control Weather"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Succubus",
    "size": "Medium",
    "type": "Fiend",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 71,
    "hpDice": "13d8 + 13",
    "speed": "30 ft., Fly 60 ft.",
    "str": 8,
    "dex": 17,
    "con": 13,
    "int": 15,
    "wis": 12,
    "cha": 20,
    "cr": "4",
    "xp": 1100,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "Abyssal, Common, Infernal; telepathy 60 ft.",
    "skills": "Deception +9, Insight +5, Perception +5, Persuasion",
    "resistances": "Cold, Fire, Poison, Psychic",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Incubus Form",
        "description": "When the succubus finishes a Long Rest, it can shape-shift into an Incubus, using that stat block instead of this one."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The succubus makes one Fiendish Touch attack and uses Charm or Draining Kiss."
      },
      {
        "name": "Fiendish Touch",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 16 (2d10 + 5) Psychic damage."
      },
      {
        "name": "Charm",
        "description": "The succubus casts Dominate Person (level 8 version), requiring no spell components and using Charisma as the spellcasting ability (spell save DC 15)."
      },
      {
        "name": "Draining Kiss",
        "description": "Constitution Saving Throw: DC 15, one creature Charmed by the succubus within 5 feet. Failure: 13 (3d8) Psychic damage. Success: Half damage. Failure or Success: The target’s Hit Point maximum decreases by an amount equal to the damage taken."
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The succubus shape-shifts into a Medium or Small Humanoid, or it returns to its true form. Its game statistics are the same in each form, except its Fly"
      },
      {
        "name": "Speed is available only in its true form",
        "description": "Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Swarm of Bats",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 11,
    "hpDice": "2d10",
    "speed": "5 ft., Fly 30 ft.",
    "str": 5,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Blindsight 60 ft.; Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Charmed, Frightened, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Swarm",
        "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can’t regain Hit Points or gain Temporary Hit Points."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (2d4) Piercing damage, or 2 (1d4) Piercing damage if the swarm is Bloodied."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Swarm of Crawling Claws",
    "size": "Tiny",
    "type": "Undead",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 49,
    "hpDice": "11d8",
    "speed": "30 ft., Climb 30 ft.",
    "str": 14,
    "dex": 14,
    "con": 11,
    "int": 5,
    "wis": 10,
    "cha": 4,
    "cr": "3",
    "xp": 700,
    "initiative": 2,
    "senses": "Blindsight 30 ft.; Passive Perception 10",
    "languages": "Understands Common but can’t speak",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Necrotic, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Swarm",
        "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny creature. The swarm can’t regain Hit Points or gain Temporary Hit Points."
      }
    ],
    "actions": [
      {
        "name": "Swarm of Grasping Hands",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 20 (4d8 + 2) Necrotic damage, or 11 (2d8 + 2) Necrotic damage if the swarm is Bloodied. If the target is a Medium or smaller creature, it has the Prone condition. Cultists"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Swarm of Insects",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "hpDice": "3d8 + 6",
    "speed": "20 ft., Climb or Fly 20 ft. (GM’s choice)",
    "str": 3,
    "dex": 13,
    "con": 14,
    "int": 1,
    "wis": 7,
    "cha": 1,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Blindsight 30 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Charmed, Frightened, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "If the swarm has a Climb Speed, the swarm can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Swarm",
        "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can’t regain Hit Points or gain Temporary Hit Points."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Poison damage, or 3 (1d4 + 1) Poison damage if the swarm is Bloodied."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Swarm of Piranhas",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 28,
    "hpDice": "8d8 − 8",
    "speed": "5 ft., Swim 40 ft.",
    "str": 13,
    "dex": 16,
    "con": 9,
    "int": 1,
    "wis": 7,
    "cha": 2,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 8",
    "languages": "None",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Charmed, Frightened, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Swarm",
        "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny piranha. The swarm can’t regain Hit Points or gain Temporary Hit Points."
      },
      {
        "name": "Water Breathing",
        "description": "The swarm can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Attack Roll: +5 (with Advantage if the target doesn’t have all its Hit Points), reach 5 ft. Hit: 8 (2d4 + 3) Piercing damage, or 5 (1d4 + 3) Piercing damage if the swarm is Bloodied. 359 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Swarm of Rats",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 14,
    "hpDice": "4d8 − 4",
    "speed": "30 ft., Climb 30 ft.",
    "str": 9,
    "dex": 11,
    "con": 9,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "cr": "1/4",
    "xp": 50,
    "initiative": 0,
    "senses": "Darkvision 30 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Charmed, Frightened, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Swarm",
        "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can’t regain Hit Points or gain Temporary Hit Points."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 5 (2d4) Piercing damage, or 2 (1d4) Piercing damage if the swarm is Bloodied."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Swarm of Ravens",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "10 ft., Fly 50 ft.",
    "str": 6,
    "dex": 14,
    "con": 12,
    "int": 5,
    "wis": 12,
    "cha": 6,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Charmed, Frightened, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Swarm",
        "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can’t regain Hit Points or gain Temporary Hit Points."
      }
    ],
    "actions": [
      {
        "name": "Beaks",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage, or 2 (1d4) Piercing damage if the swarm is Bloodied."
      },
      {
        "name": "Cacophony (Recharge 6)",
        "description": "Wisdom Saving Throw: DC 10, one creature in the swarm’s space. Failure: The target has the Deafened condition until the start of the swarm’s next turn. While Deafened, the target also has Disadvantage on ability checks and attack rolls."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Swarm of Venomous Snakes",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 36,
    "hpDice": "8d8",
    "speed": "30 ft., Swim 30 ft.",
    "str": 8,
    "dex": 18,
    "con": 11,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "cr": "2",
    "xp": 450,
    "initiative": 4,
    "senses": "Blindsight 10 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Charmed, Frightened, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Swarm",
        "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can’t regain Hit Points or gain Temporary Hit Points."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Piercing damage—or 6 (1d4 + 4) Piercing damage if the swarm is Bloodied—plus 10 (3d6) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Tarrasque",
    "size": "Gargantuan",
    "type": "Monstrosity",
    "alignment": "Unaligned",
    "ac": 25,
    "hp": 697,
    "hpDice": "34d20 + 340",
    "speed": "60 ft., Burrow 40 ft., Climb 60 ft.",
    "str": 30,
    "dex": 11,
    "con": 30,
    "int": 3,
    "wis": 11,
    "cha": 11,
    "cr": "30",
    "xp": 155000,
    "initiative": 18,
    "senses": "Blindsight 120 ft.; Passive Perception 19",
    "languages": "None",
    "skills": "Perception +9",
    "resistances": "Bludgeoning, Piercing, Slashing",
    "immunities": "Fire, Poison; Charmed, Deafened, Frightened,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (6/Day)",
        "description": "If the tarrasque fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "description": "The tarrasque has Advantage on saving throws against spells and other magical effects."
      },
      {
        "name": "Reflective Carapace",
        "description": "If the tarrasque is targeted by a Magic Missile spell or a spell that requires a ranged attack roll, roll 1d6. On a 1–5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected and reflects the spell, turning the caster into the target."
      },
      {
        "name": "Siege Monster",
        "description": "The tarrasque deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The tarrasque makes one Bite attack and three other attacks, using Claw or Tail in any combination."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +19, reach 15 ft. Hit: 36 (4d12 + 10) Piercing damage, and the target has the Grappled 329 System Reference Document 5.2 condition (escape DC 20). Until the grapple ends, the target has the Restrained condition and can’t teleport."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +19, reach 15 ft. Hit: 28 (4d8 + 10) Slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +19, reach 30 ft. Hit: 23 (3d8 + 10) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      },
      {
        "name": "Thunderous Bellow (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 27, each creature and each object that isn’t being worn or carried in a 150-foot Cone. Failure: 78 (12d12) Thunder damage, and the target has the Deafened and Frightened conditions until the end of its next turn. Success: Half damage only."
      }
    ],
    "bonusActions": [
      {
        "name": "Swallow",
        "description": "Strength Saving Throw: DC 27, one Large or smaller creature Grappled by the tarrasque (it can have up to six creatures swallowed at a time). Failure: The target is swallowed, and the Grappled condition ends. A swallowed creature has the Blinded and Restrained conditions and can’t teleport, it has Total Cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) Acid damage at the start of each of the tarrasque’s turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 10 feet of the tarrasque and has the Prone condition. If the tarrasque dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 20 feet of movement, exiting Prone."
      }
    ],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Onslaught",
        "description": "The tarrasque moves up to half its Speed, and it makes one Claw or Tail attack."
      },
      {
        "name": "World-Shaking Movement",
        "description": "The tarrasque moves up to its Speed. At the end of this movement, the tarrasque creates an instantaneous shock wave in a 60-foot Emanation originating from itself. Creatures in that area lose Concentration and, if Medium or smaller, have the Prone condition. The tarrasque can’t take this action again until the start of its next turn. Toughs"
      }
    ]
  },
  {
    "name": "Tiger",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 30,
    "hpDice": "4d10 + 8",
    "speed": "40 ft.",
    "str": 17,
    "dex": 16,
    "con": 14,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "cr": "1",
    "xp": 200,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3, Stealth +7",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [
      {
        "name": "Nimble Escape",
        "description": "The tiger takes the Disengage or Hide action. 360 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Tough",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 32,
    "hpDice": "5d8 + 10",
    "speed": "30 ft.",
    "str": 15,
    "dex": 12,
    "con": 14,
    "int": 10,
    "wis": 10,
    "cha": 11,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Passive Perception 10",
    "languages": "Common",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The tough has Advantage on an attack roll against a creature if at least one of the tough’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Mace",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Bludgeoning damage."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Attack Roll: +3, range 100/400 ft. Hit: 6 (1d10 + 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Tough Boss",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 16,
    "hp": 82,
    "hpDice": "11d8 + 33",
    "speed": "30 ft.",
    "str": 17,
    "dex": 14,
    "con": 16,
    "int": 11,
    "wis": 10,
    "cha": 11,
    "cr": "4",
    "xp": 1100,
    "initiative": 2,
    "senses": "Passive Perception 10",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The tough has Advantage on an attack roll against a creature if at least one of the tough’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The tough makes two attacks, using Warhammer or Heavy Crossbow in any combination."
      },
      {
        "name": "Warhammer",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 12 (2d8 + 3) Bludgeoning damage. If the target is a Large or smaller creature, the tough pushes the target up to 10 feet straight away from itself."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Attack Roll: +4, range 100/400 ft. Hit: 13 (2d10 + 2) Piercing damage. 330 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Treant",
    "size": "Huge",
    "type": "Plant",
    "alignment": "Chaotic Good",
    "ac": 16,
    "hp": 138,
    "hpDice": "12d12 + 60",
    "speed": "30 ft.",
    "str": 23,
    "dex": 8,
    "con": 21,
    "int": 12,
    "wis": 16,
    "cha": 12,
    "cr": "9",
    "xp": 5000,
    "initiative": 3,
    "senses": "Passive Perception 13",
    "languages": "Common, Druidic, Elvish, Sylvan",
    "skills": "",
    "resistances": "Bludgeoning, Piercing",
    "immunities": "",
    "vulnerabilities": "Fire",
    "traits": [
      {
        "name": "Siege Monster",
        "description": "The treant deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The treant makes two Slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +10, reach 5 ft. Hit: 16 (3d6 + 6) Bludgeoning damage."
      },
      {
        "name": "Hail of Bark",
        "description": "Ranged Attack Roll: +10, range 180 ft. Hit: 28 (4d10 + 6) Piercing damage."
      },
      {
        "name": "Animate Trees (1/Day)",
        "description": "The treant magically animates up to two trees it can see within 60 feet of itself. Each tree uses the Treant stat block, except it has Intelligence and Charisma scores of 1, it can’t speak, and it lacks this action. The tree takes its turn immediately after the treant on the same Initiative count, and it obeys the treant. A tree remains animate for 1 day or until it dies, the treant dies, or it is more than 120 feet from the treant. The tree then takes root if possible."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Triceratops",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 114,
    "hpDice": "12d12 + 36",
    "speed": "50 ft.",
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 11,
    "cha": 5,
    "cr": "5",
    "xp": 1800,
    "initiative": -1,
    "senses": "Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The triceratops makes two Gore attacks."
      },
      {
        "name": "Gore",
        "description": "Melee Attack Roll: +9, reach 5 ft. Hit: 19 (2d12 + 6) Piercing damage. If the target is Huge or smaller and the triceratops moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Piercing damage and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Troll",
    "size": "Large",
    "type": "Giant",
    "alignment": "Chaotic Evil",
    "ac": 15,
    "hp": 94,
    "hpDice": "9d10 + 45",
    "speed": "30 ft.",
    "str": 18,
    "dex": 13,
    "con": 20,
    "int": 7,
    "wis": 9,
    "cha": 7,
    "cr": "5",
    "xp": 1800,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "Giant",
    "skills": "Perception +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Loathsome Limbs (4/Day)",
        "description": "If the troll ends any turn Bloodied and took 15+ Slashing damage during that turn, one of the troll’s limbs is severed, falls into the troll’s space, and becomes a Troll Limb. The limb acts immediately after the troll’s turn. The troll has 1 Exhaustion level for each missing limb, and it grows replacement limbs the next time it regains Hit Points."
      },
      {
        "name": "Regeneration",
        "description": "The troll regains 15 Hit Points at the start of each of its turns. If the troll takes Acid or Fire damage, this trait doesn’t function on the troll’s next turn. The troll dies only if it starts its turn with 0 Hit Points and doesn’t regenerate."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The troll makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Slashing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Charge",
        "description": "The troll moves up to half its Speed straight toward an enemy it can see."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Troll Limb",
    "size": "Small",
    "type": "Giant",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 14,
    "hpDice": "4d6",
    "speed": "20 ft.",
    "str": 18,
    "dex": 12,
    "con": 10,
    "int": 1,
    "wis": 9,
    "cha": 1,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Regeneration",
        "description": "The limb regains 5 Hit Points at the start of each of its turns. If the limb takes Acid or Fire damage, this trait doesn’t function on the limb’s next turn. The limb dies only if it starts its turn with 0 Hit Points and doesn’t regenerate."
      },
      {
        "name": "Troll Spawn",
        "description": "The limb uncannily has the same senses as a whole troll. If the limb isn’t destroyed within 24 hours, roll 1d12. On a 12, the limb turns into a Troll. Otherwise, the limb withers away."
      }
    ],
    "actions": [
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 9 (2d4 + 4) Slashing damage. 331 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Tyrannosaurus Rex",
    "size": "Huge",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 136,
    "hpDice": "13d12 + 52",
    "speed": "50 ft.",
    "str": 25,
    "dex": 10,
    "con": 19,
    "int": 2,
    "wis": 12,
    "cha": 9,
    "cr": "8",
    "xp": 3900,
    "initiative": 3,
    "senses": "Passive Perception 14",
    "languages": "None",
    "skills": "Perception +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The tyrannosaurus makes one Bite attack and one Tail attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 33 (4d12 + 7) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 17). While Grappled, the target has the Restrained condition and can’t be targeted by the tyrannosaurus’s Tail."
      },
      {
        "name": "Tail",
        "description": "Melee Attack Roll: +10, reach 15 ft. Hit: 25 (4d8 + 7) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Unicorn",
    "size": "Large",
    "type": "Celestial",
    "alignment": "Lawful Good",
    "ac": 12,
    "hp": 97,
    "hpDice": "13d10 + 26",
    "speed": "50 ft.",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 11,
    "wis": 17,
    "cha": 16,
    "cr": "5",
    "xp": 1800,
    "initiative": 8,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "Celestial, Elvish, Sylvan; telepathy 120 ft.",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Charmed, Paralyzed, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day)",
        "description": "If the unicorn fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "description": "The unicorn has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The unicorn makes one Hooves attack and one Radiant Horn attack."
      },
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Bludgeoning damage."
      },
      {
        "name": "Radiant Horn",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 9 (1d10 + 4) Radiant damage."
      },
      {
        "name": "Spellcasting",
        "description": "The unicorn casts one of the following spells, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 14): At Will: Detect Evil and Good, Druidcraft 1/Day Each: Calm Emotions, Dispel Evil and Good, Entangle, Pass without Trace, Word of Recall"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Charging Horn",
        "description": "The unicorn moves up to half its Speed without provoking Opportunity Attacks, and it makes one Radiant Horn attack."
      },
      {
        "name": "Shimmering Shield",
        "description": "The unicorn targets itself or one creature it can see within 60 feet of itself. The target gains 10 (3d6) Temporary Hit Points, and its AC increases by 2 until the end of the unicorn’s next turn. The unicorn can’t take this action again until the start of its next turn. Vampires"
      }
    ]
  },
  {
    "name": "Vampire",
    "size": "Small",
    "type": "Undead",
    "alignment": "Lawful Evil",
    "ac": 16,
    "hp": 195,
    "hpDice": "23d8 + 92",
    "speed": "40 ft., Climb 40 ft.",
    "str": 18,
    "dex": 18,
    "con": 18,
    "int": 17,
    "wis": 15,
    "cha": 18,
    "cr": "13",
    "xp": 10000,
    "initiative": 14,
    "senses": "Darkvision 120 ft.; Passive Perception 17",
    "languages": "Common plus two other languages",
    "skills": "Perception +7, Stealth +9",
    "resistances": "Necrotic",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "description": "If the vampire fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Misty Escape",
        "description": "If the vampire drops to 0 Hit Points outside its resting place, the vampire uses Shape-Shift to become mist (no action required). If it can’t use ShapeShift, it is destroyed. While it has 0 Hit Points in mist form, it can’t return to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it returns to its vampire form and has the Paralyzed condition until it regains any Hit Points, and it regains 1 Hit Point after spending 1 hour there."
      },
      {
        "name": "Spider Climb",
        "description": "The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Vampire Weakness",
        "description": "The vampire has these weaknesses:"
      },
      {
        "name": "Forbiddance",
        "description": "The vampire can’t enter a residence without an invitation from an occupant."
      },
      {
        "name": "Running Water",
        "description": "The vampire takes 20 Acid damage if it ends its turn in running water."
      },
      {
        "name": "Stake to the Heart",
        "description": "If a weapon that deals Piercing damage is driven into the vampire’s heart while the vampire has the Incapacitated condition in its resting place, the vampire has the Paralyzed condition until the weapon is removed."
      },
      {
        "name": "Sunlight",
        "description": "The vampire takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks."
      }
    ],
    "actions": [
      {
        "name": "Multiattack (Vampire Form Only)",
        "description": "The vampire makes two Grave Strike attacks and uses Bite."
      },
      {
        "name": "Grave Strike (Vampire Form Only)",
        "description": "Melee Attack Roll: +9, reach 5 ft. Hit: 8 (1d8 + 4) Bludgeoning damage plus 7 (2d6) Necrotic damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of two hands."
      },
      {
        "name": "Bite (Bat or Vampire Form Only)",
        "description": "Constitution Saving Throw: DC 17, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. Failure: 6 (1d4 + 4) Piercing damage plus 13 (3d8) Necrotic damage. The target’s Hit Point maximum 333 System Reference Document 5.2 decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit Points equal to that amount. A Humanoid reduced to 0 Hit Points by this damage and then buried rises the following sunset as a Vampire Spawn under the vampire’s control."
      }
    ],
    "bonusActions": [
      {
        "name": "Charm (Recharge 5–6)",
        "description": "The vampire casts Charm Person, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 17), and the duration is 24 hours. The Charmed target is a willing recipient of the vampire’s Bite, the damage of which doesn’t end the spell. When the spell ends, the target is unaware it was Charmed by the vampire."
      },
      {
        "name": "Shape-Shift",
        "description": "If the vampire isn’t in sunlight or running water, it shape-shifts into a Tiny bat (Speed 5 ft., Fly Speed 30 ft.) or a Medium cloud of mist (Speed 5 ft., Fly Speed 20 ft. [hover]), or it returns to its vampire form. Anything it is wearing transforms with it. While in bat form, the vampire can’t speak. Its game statistics, other than its size and Speed, are unchanged. While in mist form, the vampire can’t take any actions, speak, or manipulate objects. It is weightless and can enter an enemy’s space and stop there. If air can pass through a space, the mist can do so, but it can’t pass through liquid. It has Resistance to all damage, except the damage it takes from sunlight."
      }
    ],
    "reactions": [],
    "legendaryActions": [
      {
        "name": "Beguile",
        "description": "The vampire casts Command, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 17). The vampire can’t take this action again until the start of its next turn."
      },
      {
        "name": "Deathless Strike",
        "description": "The vampire moves up to half its Speed, and it makes one Grave Strike attack."
      }
    ]
  },
  {
    "name": "Vampire Familiar",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 65,
    "hpDice": "10d8 + 20",
    "speed": "30 ft., Climb 30 ft.",
    "str": 17,
    "dex": 16,
    "con": 15,
    "int": 10,
    "wis": 10,
    "cha": 14,
    "cr": "3",
    "xp": 700,
    "initiative": 5,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Common plus one other language",
    "skills": "Perception +4, Persuasion +4, Stealth +7",
    "resistances": "Necrotic",
    "immunities": "Charmed (except from its vampire master)",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Vampiric Connection",
        "description": "While the familiar and its vampire master are on the same plane of existence, the vampire can communicate with the familiar telepathically, and the vampire can perceive through the familiar’s senses."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The familiar makes two Umbral Dagger attacks."
      },
      {
        "name": "Umbral Dagger",
        "description": "Melee or Ranged Attack Roll: +5, reach 5 ft. or range 20/60 ft. Hit: 5 (1d4 + 3) Piercing damage plus 7 (3d4) Necrotic damage. If the target is reduced to 0 Hit Points by this attack, the target becomes Stable but has the Poisoned condition for 1 hour. While it has the Poisoned condition, the target has the Paralyzed condition."
      }
    ],
    "bonusActions": [
      {
        "name": "Deathless Agility",
        "description": "The familiar takes the Dash or Disengage action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Vampire Spawn",
    "size": "Small",
    "type": "Undead",
    "alignment": "Neutral Evil",
    "ac": 16,
    "hp": 90,
    "hpDice": "12d8 + 36",
    "speed": "30 ft.",
    "str": 16,
    "dex": 16,
    "con": 16,
    "int": 11,
    "wis": 10,
    "cha": 12,
    "cr": "5",
    "xp": 1800,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "Common plus one other language",
    "skills": "Perception +3, Stealth +6",
    "resistances": "Necrotic",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Spider Climb",
        "description": "The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Vampire Weakness",
        "description": "The vampire has these weaknesses:"
      },
      {
        "name": "Forbiddance",
        "description": "The vampire can’t enter a residence without an invitation from an occupant."
      },
      {
        "name": "Running Water",
        "description": "The vampire takes 20 Acid damage if it ends its turn in running water."
      },
      {
        "name": "Stake to the Heart",
        "description": "The vampire is destroyed if a weapon that deals Piercing damage is driven into the vampire’s heart while the vampire has the Incapacitated condition."
      },
      {
        "name": "Sunlight",
        "description": "The vampire takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The vampire makes two Claw attacks and uses Bite."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (2d4 + 3) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 13) from one of two claws."
      },
      {
        "name": "Bite",
        "description": "Constitution Saving Throw: DC 14, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. Failure: 5 (1d4 + 3) Piercing damage plus 10 (3d6) Necrotic damage. The target’s Hit Point maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit Points equal to that amount."
      }
    ],
    "bonusActions": [
      {
        "name": "Deathless Agility",
        "description": "The vampire takes the Dash or Disengage action."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Venomous Snake",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 5,
    "hpDice": "2d4",
    "speed": "30 ft., Swim 30 ft.",
    "str": 2,
    "dex": 15,
    "con": 11,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "cr": "1/8",
    "xp": 25,
    "initiative": 2,
    "senses": "Blindsight 10 ft.; Passive Perception 10",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage plus 3 (1d6) Poison damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Violet Fungus",
    "size": "Medium",
    "type": "Plant",
    "alignment": "Unaligned",
    "ac": 5,
    "hp": 18,
    "hpDice": "4d8",
    "speed": "5 ft.",
    "str": 3,
    "dex": 1,
    "con": 10,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "cr": "1/4",
    "xp": 50,
    "initiative": -5,
    "senses": "Blindsight 30 ft.; Passive Perception 6",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Blinded, Charmed, Deafened, Frightened",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The fungus makes two Rotting Touch attacks."
      },
      {
        "name": "Rotting Touch",
        "description": "Melee Attack Roll: +2, reach 10 ft. Hit: 4 (1d8) Necrotic damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Vrock",
    "size": "Large",
    "type": "Fiend",
    "alignment": "Chaotic Evil",
    "ac": 15,
    "hp": 152,
    "hpDice": "16d10 + 64",
    "speed": "40 ft., Fly 60 ft.",
    "str": 17,
    "dex": 15,
    "con": 18,
    "int": 8,
    "wis": 13,
    "cha": 8,
    "cr": "6",
    "xp": 2300,
    "initiative": 2,
    "senses": "Darkvision 120 ft.; Passive Perception 11",
    "languages": "Abyssal; telepathy 120 ft.",
    "skills": "",
    "resistances": "Cold, Fire, Lightning",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Demonic Restoration",
        "description": "If the vrock dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "description": "The vrock has Advantage on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The vrock makes two Shred attacks."
      },
      {
        "name": "Shred",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage plus 10 (3d6) Poison damage."
      },
      {
        "name": "Spores (Recharge 6)",
        "description": "Constitution Saving Throw: DC 15, each creature in a 20-foot Emanation originating from the vrock. Failure: The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. While Poisoned, the target takes 5 (1d10) Poison damage at the start of each of its turns. Emptying a flask of Holy Water on the target ends the effect early."
      },
      {
        "name": "Stunning Screech (1/Day)",
        "description": "Constitution Saving Throw: DC 15, each creature in a 20-foot Emanation originating from the vrock (demons succeed automatically). Failure: 10 (3d6) Thunder damage, and the target has the Stunned condition until the end of the vrock’s next turn. Warriors"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Vulture",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 5,
    "hpDice": "1d8 + 1",
    "speed": "10 ft., Fly 50 ft.",
    "str": 7,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "cr": "0",
    "xp": 10,
    "initiative": 0,
    "senses": "Passive Perception 13",
    "languages": "None",
    "skills": "Perception +3",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The vulture has Advantage on an attack roll against a creature if at least one of the vulture’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Warhorse",
    "size": "Large",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "hpDice": "3d10 + 3",
    "speed": "60 ft.",
    "str": 18,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Passive Perception 11",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 9 (2d4 + 4) Bludgeoning damage. If the target is a Large or smaller creature and the horse moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition. 361 System Reference Document 5.2"
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Warhorse Skeleton",
    "size": "Large",
    "type": "Undead",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 22,
    "hpDice": "3d10 + 6",
    "speed": "60 ft.",
    "str": 18,
    "dex": 12,
    "con": 15,
    "int": 2,
    "wis": 8,
    "cha": 5,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 9",
    "languages": "None",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Poisoned",
    "vulnerabilities": "Bludgeoning",
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 7 (1d6 + 4) Bludgeoning damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Warrior Infantry",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 9,
    "hpDice": "2d8",
    "speed": "30 ft.",
    "str": 13,
    "dex": 11,
    "con": 11,
    "int": 8,
    "wis": 11,
    "cha": 8,
    "cr": "1/8",
    "xp": 25,
    "initiative": 0,
    "senses": "Passive Perception 10",
    "languages": "Common",
    "skills": "",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The warrior has Advantage on an attack roll against a creature if at least one of the warrior’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Spear",
        "description": "Melee or Ranged Attack Roll: +3, reach 5 ft. or range 20/60 ft. Hit: 4 (1d6 + 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Warrior Veteran",
    "size": "Small",
    "type": "Humanoid",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 65,
    "hpDice": "10d8 + 20",
    "speed": "30 ft.",
    "str": 16,
    "dex": 13,
    "con": 14,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "cr": "3",
    "xp": 700,
    "initiative": 3,
    "senses": "Passive Perception 12",
    "languages": "Common plus one other language",
    "skills": "Athletics +5, Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The warrior makes two Greatsword or Heavy Crossbow attacks."
      },
      {
        "name": "Greatsword",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Attack Roll: +3, range 100/400 ft. Hit: 12 (2d10 + 1) Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [
      {
        "name": "Parry",
        "description": "Trigger: The warrior is hit by a melee attack roll while holding a weapon. Response: The warrior adds 2 to its AC against that attack, possibly causing it to miss."
      }
    ],
    "legendaryActions": []
  },
  {
    "name": "Water Elemental",
    "size": "Large",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 114,
    "hpDice": "12d10 + 48",
    "speed": "30 ft., Swim 90 ft.",
    "str": 18,
    "dex": 14,
    "con": 18,
    "int": 5,
    "wis": 10,
    "cha": 8,
    "cr": "5",
    "xp": 1800,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 10",
    "languages": "Primordial (Aquan)",
    "skills": "",
    "resistances": "Acid, Fire",
    "immunities": "Poison; Exhaustion, Grappled, Paralyzed,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Freeze",
        "description": "If the elemental takes Cold damage, its Speed decreases by 20 feet until the end of its next turn."
      },
      {
        "name": "Water Form",
        "description": "The elemental can enter an enemy’s space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two Slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
      },
      {
        "name": "Whelm (Recharge 4–6)",
        "description": "Strength Saving Throw: DC 15, each creature in the elemental’s space. Failure: 22 (4d8 + 4) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14). Until the grapple ends, the target has the Restrained condition, is suffocating unless it can breathe water, and takes 9 (2d8) Bludgeoning damage at the start of each of the elemental’s turns. The elemental can grapple one Large creature or up to two Medium or smaller creatures at a time with Whelm. As an action, a creature within 5 feet of the elemental can pull a creature out of it by succeeding on a DC 14 Strength (Athletics) check. Success: Half damage only."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Weasel",
    "size": "Tiny",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 1,
    "hpDice": "1d4 − 1",
    "speed": "30 ft., Climb 30 ft.",
    "str": 3,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 3,
    "cr": "0",
    "xp": 10,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "None",
    "skills": "Acrobatics +5, Perception +3, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 1 Piercing damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Werebear",
    "size": "Small",
    "type": "Monstrosity",
    "alignment": "Neutral Good",
    "ac": 15,
    "hp": 135,
    "hpDice": "18d8 + 54",
    "speed": "30 ft., 40 ft. (bear form only), Climb 30 ft. (bear",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 11,
    "wis": 12,
    "cha": 12,
    "cr": "5",
    "xp": 1800,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 17",
    "languages": "Common (can’t speak in bear form)",
    "skills": "Perception +7",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The werebear makes two attacks, using"
      },
      {
        "name": "Handaxe or Rend in any combination",
        "description": "It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Bear or Hybrid Form Only)",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 17 (2d12 + 4) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: DC 14. Failure:"
      },
      {
        "name": "The target is cursed",
        "description": "If the cursed target drops to 0 Hit Points, it instead becomes a Werebear under the GM’s 335 System Reference Document 5.2 control and has 10 Hit Points. Success: The target is immune to this werebear’s curse for 24 hours."
      },
      {
        "name": "Handaxe (Humanoid or Hybrid Form Only)",
        "description": "Melee or Ranged Attack Roll: +7, reach 5 ft or range 20/60 ft. Hit: 14 (3d6 + 4) Slashing damage."
      },
      {
        "name": "Rend (Bear or Hybrid Form Only)",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Slashing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The werebear shape-shifts into a Large bear-humanoid hybrid form or a Large bear, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Wereboar",
    "size": "Small",
    "type": "Monstrosity",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 97,
    "hpDice": "15d8 + 30",
    "speed": "30 ft., 40 ft. (boar form only)",
    "str": 17,
    "dex": 10,
    "con": 15,
    "int": 10,
    "wis": 11,
    "cha": 8,
    "cr": "4",
    "xp": 1100,
    "initiative": 2,
    "senses": "Passive Perception 12",
    "languages": "Common (can’t speak in boar form)",
    "skills": "Perception +2",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wereboar makes two attacks, using"
      },
      {
        "name": "Javelin or Tusk in any combination",
        "description": "It can replace one attack with a Gore attack."
      },
      {
        "name": "Gore (Boar or Hybrid Form Only)",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: DC 12. Failure:"
      },
      {
        "name": "The target is cursed",
        "description": "If the cursed target drops to 0 Hit Points, it instead becomes a Wereboar under the GM’s control and has 10 Hit Points. Success: The target is immune to this wereboar’s curse for 24 hours."
      },
      {
        "name": "Javelin (Humanoid or Hybrid Form Only)",
        "description": "Melee or Ranged Attack Roll: +5, reach 5 ft. or range 30/120 ft. Hit: 13 (3d6 + 3) Piercing damage."
      },
      {
        "name": "Tusk (Boar or Hybrid Form Only)",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage. If the target is a Medium or smaller creature and the wereboar moved 20+ feet straight toward it immediately before the hit, the target takes an extra 7 (2d6) Piercing damage and has the Prone condition."
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The wereboar shape-shifts into a Medium boar-humanoid hybrid or a Small boar, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Wererat",
    "size": "Small",
    "type": "Monstrosity",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 60,
    "hpDice": "11d8 + 11",
    "speed": "30 ft., Climb 30 ft.",
    "str": 10,
    "dex": 16,
    "con": 12,
    "int": 11,
    "wis": 10,
    "cha": 8,
    "cr": "2",
    "xp": 450,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Common (can’t speak in rat form)",
    "skills": "Perception +4, Stealth +5",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wererat makes two attacks, using"
      },
      {
        "name": "Scratch or Hand Crossbow in any combination",
        "description": "It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Rat or Hybrid Form Only)",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (2d4 + 3) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: DC 11. Failure: The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a Wererat under the GM’s control and has 10 Hit Points. Success: The target is immune to this wererat’s curse for 24 hours."
      },
      {
        "name": "Scratch",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing damage. Hand Crossbow (Humanoid or Hybrid Form Only). Ranged Attack Roll: +5, range 30/120 ft. Hit: 6 (1d6 + 3) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The wererat shape-shifts into a Medium rat-humanoid hybrid or a Small rat, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. 336 System Reference Document 5.2"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Weretiger",
    "size": "Small",
    "type": "Monstrosity",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 120,
    "hpDice": "16d8 + 48",
    "speed": "30 ft., 40 ft. (tiger form only)",
    "str": 17,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 11,
    "cr": "4",
    "xp": 1100,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "Common (can’t speak in tiger form)",
    "skills": "Perception +5, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The weretiger makes two attacks, using"
      },
      {
        "name": "Scratch or Longbow in any combination",
        "description": "It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Tiger or Hybrid Form Only)",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: DC 13. Failure:"
      },
      {
        "name": "The target is cursed",
        "description": "If the cursed target drops to 0 Hit Points, it instead becomes a Weretiger under the GM’s control and has 10 Hit Points. Success: The target is immune to this weretiger’s curse for 24 hours."
      },
      {
        "name": "Scratch",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
      },
      {
        "name": "Longbow (Humanoid or Hybrid Form Only)",
        "description": "Ranged Attack Roll: +4, range 150/600 ft. Hit: 11 (2d8 + 2) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Prowl (Tiger or Hybrid Form Only)",
        "description": "The weretiger moves up to its Speed without provoking Opportunity"
      },
      {
        "name": "Attacks",
        "description": "At the end of this movement, the weretiger can take the Hide action."
      },
      {
        "name": "Shape-Shift",
        "description": "The weretiger shape-shifts into a Large tiger-humanoid hybrid or a Large tiger, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Werewolf",
    "size": "Small",
    "type": "Monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 15,
    "hp": 71,
    "hpDice": "11d8 + 22",
    "speed": "30 ft., 40 ft. (wolf form only)",
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "cr": "3",
    "xp": 700,
    "initiative": 4,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Common (can’t speak in wolf form)",
    "skills": "Perception +4, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The werewolf has Advantage on an attack roll against a creature if at least one of the werewolf’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The werewolf makes two attacks, using"
      },
      {
        "name": "Scratch or Longbow in any combination",
        "description": "It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Wolf or Hybrid Form Only)",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: DC 12. Failure:"
      },
      {
        "name": "The target is cursed",
        "description": "If the cursed target drops to 0 Hit Points, it instead becomes a Werewolf under the GM’s control and has 10 Hit Points. Success: The target is immune to this werewolf’s curse for 24 hours."
      },
      {
        "name": "Scratch",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
      },
      {
        "name": "Longbow (Humanoid or Hybrid Form Only)",
        "description": "Ranged Attack Roll: +4, range 150/600 ft. Hit: 11 (2d8 + 2) Piercing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Shape-Shift",
        "description": "The werewolf shape-shifts into a Large wolf-humanoid hybrid or a Medium wolf, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. White Dragons"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "White Dragon Wyrmling",
    "size": "Medium",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 16,
    "hp": 32,
    "hpDice": "5d8 + 10",
    "speed": "30 ft., Burrow 15 ft., Fly 60 ft., Swim 30 ft.",
    "str": 14,
    "dex": 10,
    "con": 14,
    "int": 5,
    "wis": 10,
    "cha": 11,
    "cr": "0",
    "xp": 0,
    "initiative": 2,
    "senses": "Blindsight 10 ft., Darkvision 60 ft.;",
    "languages": "Draconic",
    "skills": "Perception +4, Stealth +2",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ice Walk",
        "description": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn’t cost it extra movement."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing damage plus 2 (1d4) Cold damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 12, each creature in a 15-foot Cone. Failure: 22 (5d8) Cold damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Wight",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Neutral Evil",
    "ac": 14,
    "hp": 82,
    "hpDice": "11d8 + 33",
    "speed": "30 ft.",
    "str": 15,
    "dex": 14,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 15,
    "cr": "3",
    "xp": 700,
    "initiative": 4,
    "senses": "Darkvision 60 ft.; Passive Perception 13",
    "languages": "Common plus one other language",
    "skills": "Perception +3, Stealth +4",
    "resistances": "Necrotic",
    "immunities": "Poison; Exhaustion, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Sunlight Sensitivity",
        "description": "While in sunlight, the wight has Disadvantage on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wight makes two attacks, using Necrotic Sword or Necrotic Bow in any combination. It can replace one attack with a use of Life Drain."
      },
      {
        "name": "Necrotic Sword",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing damage plus 4 (1d8) Necrotic damage."
      },
      {
        "name": "Necrotic Bow",
        "description": "Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8 + 2) Piercing damage plus 4 (1d8) Necrotic damage."
      },
      {
        "name": "Life Drain",
        "description": "Constitution Saving Throw: DC 13, one creature within 5 feet. Failure: 6 (1d8 + 2) Necrotic damage, and the target’s Hit Point maximum decreases by an amount equal to the damage taken. A Humanoid slain by this attack rises 24 hours later as a Zombie under the wight’s control, unless the Humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at a time."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Will-o’-Wisp",
    "size": "Tiny",
    "type": "Undead",
    "alignment": "Chaotic Evil",
    "ac": 19,
    "hp": 27,
    "hpDice": "11d4",
    "speed": "5 ft., Fly 50 ft. (hover)",
    "str": 1,
    "dex": 28,
    "con": 10,
    "int": 13,
    "wis": 14,
    "cha": 11,
    "cr": "2",
    "xp": 450,
    "initiative": 9,
    "senses": "Darkvision 120 ft.; Passive Perception 12",
    "languages": "Common plus one other language",
    "skills": "",
    "resistances": "Acid, Bludgeoning, Cold, Fire, Necrotic,",
    "immunities": "Lightning, Poison; Exhaustion, Grappled,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ephemeral",
        "description": "The wisp can’t wear or carry anything."
      },
      {
        "name": "Illumination",
        "description": "The wisp sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet."
      },
      {
        "name": "Incorporeal Movement",
        "description": "The wisp can move through other creatures and objects as if they were Difficult"
      },
      {
        "name": "Terrain",
        "description": "It takes 5 (1d10) Force damage if it ends its turn inside an object."
      }
    ],
    "actions": [
      {
        "name": "Shock",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 11 (2d8 + 2) Lightning damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Consume Life",
        "description": "Constitution Saving Throw: DC 10, one living creature the wisp can see within 5 feet that has 0"
      },
      {
        "name": "Hit Points",
        "description": "Failure: The target dies, and the wisp regains 10 (3d6) Hit Points."
      },
      {
        "name": "Vanish",
        "description": "The wisp and its light have the Invisible condition until the wisp’s Concentration ends on this effect, which ends early immediately after the wisp makes an attack roll or uses Consume Life."
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Winter Wolf",
    "size": "Large",
    "type": "Monstrosity",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 75,
    "hpDice": "10d10 + 20",
    "speed": "50 ft.",
    "str": 18,
    "dex": 13,
    "con": 14,
    "int": 7,
    "wis": 12,
    "cha": 8,
    "cr": "3",
    "xp": 700,
    "initiative": 1,
    "senses": "Passive Perception 15",
    "languages": "Common, Giant",
    "skills": "Perception +5, Stealth +5",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The wolf has Advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 12, each creature in a 15-foot Cone. Failure: 18 (4d8) Cold damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Wolf",
    "size": "Medium",
    "type": "Beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 11,
    "hpDice": "2d8 + 2",
    "speed": "40 ft.",
    "str": 14,
    "dex": 15,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "cr": "1/4",
    "xp": 50,
    "initiative": 2,
    "senses": "Darkvision 60 ft.; Passive Perception 15",
    "languages": "None",
    "skills": "Perception +5, Stealth +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Pack Tactics",
        "description": "The wolf has Advantage on attack rolls against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Worg",
    "size": "Large",
    "type": "Fey",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 26,
    "hpDice": "4d10 + 4",
    "speed": "50 ft.",
    "str": 16,
    "dex": 13,
    "con": 13,
    "int": 7,
    "wis": 11,
    "cha": 8,
    "cr": "1/2",
    "xp": 100,
    "initiative": 1,
    "senses": "Darkvision 60 ft.; Passive Perception 14",
    "languages": "Goblin, Worg",
    "skills": "Perception +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage, and the next attack roll made against the target before the start of the worg’s next turn has Advantage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Wraith",
    "size": "Small",
    "type": "Undead",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 67,
    "hpDice": "9d8 + 27",
    "speed": "5 ft., Fly 60 ft. (hover)",
    "str": 6,
    "dex": 16,
    "con": 16,
    "int": 12,
    "wis": 14,
    "cha": 15,
    "cr": "5",
    "xp": 1800,
    "initiative": 3,
    "senses": "Darkvision 60 ft.; Passive Perception 12",
    "languages": "Common plus two other languages",
    "skills": "",
    "resistances": "Acid, Bludgeoning, Cold, Fire, Piercing,",
    "immunities": "Necrotic, Poison; Charmed, Exhaustion,",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Incorporeal Movement",
        "description": "The wraith can move through other creatures and objects as if they were Difficult"
      },
      {
        "name": "Terrain",
        "description": "It takes 5 (1d10) Force damage if it ends its turn inside an object."
      },
      {
        "name": "Sunlight Sensitivity",
        "description": "While in sunlight, the wraith has Disadvantage on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Life Drain",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 21 (4d8 + 3) Necrotic damage. If the target is a creature, its Hit Point maximum decreases by an amount equal to the damage taken."
      },
      {
        "name": "Create Specter",
        "description": "The wraith targets a Humanoid corpse within 10 feet of itself that has been dead for no longer than 1 minute. The target’s spirit rises as a Specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith’s control. The wraith can have no more than seven specters under its control at a time."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Wyvern",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 127,
    "hpDice": "15d10 + 45",
    "speed": "30 ft., Fly 80 ft.",
    "str": 19,
    "dex": 10,
    "con": 16,
    "int": 5,
    "wis": 12,
    "cha": 6,
    "cr": "6",
    "xp": 2300,
    "initiative": 0,
    "senses": "Darkvision 120 ft.; Passive Perception 14",
    "languages": "None",
    "skills": "Perception +4",
    "resistances": "",
    "immunities": "",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wyvern makes one Bite attack and one Sting attack."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Piercing damage."
      },
      {
        "name": "Sting",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Piercing damage plus 24 (7d6) Poison damage, and the target has the Poisoned condition until the start of the wyvern’s next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Xorn",
    "size": "Medium",
    "type": "Elemental",
    "alignment": "Neutral",
    "ac": 19,
    "hp": 84,
    "hpDice": "8d8 + 48",
    "speed": "20 ft., Burrow 20 ft.",
    "str": 17,
    "dex": 10,
    "con": 22,
    "int": 11,
    "wis": 10,
    "cha": 11,
    "cr": "5",
    "xp": 1800,
    "initiative": 0,
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.;",
    "languages": "Primordial (Terran)",
    "skills": "Perception +6, Stealth +6",
    "resistances": "",
    "immunities": "Poison; Paralyzed, Petrified, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Earth Glide",
        "description": "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn’t disturb the material it moves through."
      },
      {
        "name": "Treasure Sense",
        "description": "The xorn can pinpoint the location of precious metals and stones within 60 feet of itself."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The xorn makes one Bite attack and three Claw attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 17 (4d6 + 3) Piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d10 + 3) Slashing damage."
      }
    ],
    "bonusActions": [
      {
        "name": "Charge",
        "description": "The xorn moves up to its Speed or Burrow Speed straight toward an enemy it can sense. Zombies"
      }
    ],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Black Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 18,
    "hp": 127,
    "hpDice": "15d10 + 45",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 19,
    "dex": 14,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "cr": "7",
    "xp": 2900,
    "initiative": 5,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +6, Stealth +5",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 9 (2d4 + 4) Slashing damage plus 3 (1d6) Acid damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 14, each creature in a 30-foot-long, 5-footwide Line. Failure: 49 (14d6) Acid damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Blue Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 18,
    "hp": 152,
    "hpDice": "16d10 + 64",
    "speed": "40 ft., Burrow 20 ft., Fly 80 ft.",
    "str": 21,
    "dex": 10,
    "con": 19,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "cr": "9",
    "xp": 5000,
    "initiative": 4,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +9, Stealth +4",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +9, reach 10 ft. Hit: 12 (2d6 + 5) Slashing damage plus 5 (1d10) Lightning damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 16, each creature in a 60-foot-long, 5-footwide Line. Failure: 55 (10d10) Lightning damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Brass Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 17,
    "hp": 110,
    "hpDice": "13d10 + 39",
    "speed": "40 ft., Burrow 20 ft., Fly 80 ft.",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "cr": "6",
    "xp": 2300,
    "initiative": 3,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +6, Persuasion +5, Stealth +3",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace two attacks with a use of Sleep Breath."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 15 (2d10 + 4) Slashing damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 14, each creature in a 40-foot-long, 5-footwide Line. Failure: 38 (11d6) Fire damage. Success: Half damage."
      },
      {
        "name": "Sleep Breath",
        "description": "Constitution Saving Throw: DC 14, each creature in a 30-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure: The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Bronze Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 17,
    "hp": 142,
    "hpDice": "15d10 + 60",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 21,
    "dex": 10,
    "con": 19,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "cr": "8",
    "xp": 3900,
    "initiative": 3,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Insight +4, Perception +7, Stealth +3",
    "resistances": "",
    "immunities": "Lightning",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Repulsion Breath."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 16 (2d10 + 5) Slashing damage."
      },
      {
        "name": "Lightning Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 15, each creature in a 60-foot-long, 5-footwide Line. Failure: 49 (9d10) Lightning damage. Success: Half damage."
      },
      {
        "name": "Repulsion Breath",
        "description": "Strength Saving Throw: DC 15, each creature in a 30-foot Cone. Failure: The target is pushed up to 40 feet straight away from the dragon and has the Prone condition."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Copper Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Chaotic Good",
    "ac": 17,
    "hp": 119,
    "hpDice": "14d10 + 42",
    "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
    "str": 19,
    "dex": 12,
    "con": 17,
    "int": 16,
    "wis": 13,
    "cha": 15,
    "cr": "7",
    "xp": 2900,
    "initiative": 4,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Deception +5, Perception +7, Stealth +4",
    "resistances": "",
    "immunities": "Acid",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Slowing Breath."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 15 (2d10 + 4) Slashing damage."
      },
      {
        "name": "Acid Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 14, each creature in a 40-foot-long, 5-footwide Line. Failure: 40 (9d8) Acid damage. Success: Half damage."
      },
      {
        "name": "Slowing Breath",
        "description": "Constitution Saving Throw: DC 14, each creature in a 30-foot Cone. Failure: The target can’t take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Gold Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 18,
    "hp": 178,
    "hpDice": "17d10 + 85",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 23,
    "dex": 14,
    "con": 21,
    "int": 16,
    "wis": 13,
    "cha": 20,
    "cr": "10",
    "xp": 5900,
    "initiative": 6,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Insight +5, Perception +9, Persuasion +9, Stealth +6",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Weakening Breath."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 17 (2d10 + 6) Slashing damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 17, each creature in a 30-foot Cone. Failure: 55 (10d10) Fire damage. Success: Half damage."
      },
      {
        "name": "Weakening Breath",
        "description": "Strength Saving Throw: DC 17, each creature that isn’t currently affected by this breath in a 30-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Tests and subtracts 3 (1d6) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Green Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Lawful Evil",
    "ac": 18,
    "hp": 136,
    "hpDice": "16d10 + 48",
    "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
    "str": 19,
    "dex": 12,
    "con": 17,
    "int": 16,
    "wis": 13,
    "cha": 15,
    "cr": "8",
    "xp": 3900,
    "initiative": 4,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Deception +5, Perception +7, Stealth +4",
    "resistances": "",
    "immunities": "Poison; Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Amphibious",
        "description": "The dragon can breathe air and water. 291 System Reference Document 5.2"
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Slashing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Poison Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 14, each creature in a 30-foot Cone. Failure: 42 (12d6) Poison damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Red Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 18,
    "hp": 178,
    "hpDice": "17d10 + 85",
    "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
    "str": 23,
    "dex": 10,
    "con": 21,
    "int": 14,
    "wis": 11,
    "cha": 19,
    "cr": "10",
    "xp": 5900,
    "initiative": 4,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +8, Stealth +4",
    "resistances": "",
    "immunities": "Fire",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 13 (2d6 + 6) Slashing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath (Recharge 5–6)",
        "description": "Dexterity Saving Throw: DC 17, each creature in a 30-foot Cone. Failure: 56 (16d6) Fire damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young Silver Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Lawful Good",
    "ac": 18,
    "hp": 168,
    "hpDice": "16d10 + 80",
    "speed": "40 ft., Fly 80 ft.",
    "str": 23,
    "dex": 10,
    "con": 21,
    "int": 14,
    "wis": 11,
    "cha": 19,
    "cr": "9",
    "xp": 5000,
    "initiative": 4,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "History +6, Perception +8, Stealth +4",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks. It can replace one attack with a use of Paralyzing Breath."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +10, reach 10 ft. Hit: 15 (2d8 + 6) Slashing damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 17, each creature in a 30-foot Cone. Failure: 49 (11d8) Cold damage. Success: Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "description": "Constitution Saving Throw: DC 17, each creature in a 30-foot Cone. First Failure: The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure: The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Young White Dragon",
    "size": "Large",
    "type": "Dragon",
    "alignment": "Chaotic Evil",
    "ac": 17,
    "hp": 123,
    "hpDice": "13d10 + 52",
    "speed": "40 ft., Burrow 20 ft., Fly 80 ft., Swim 40 ft.",
    "str": 18,
    "dex": 10,
    "con": 18,
    "int": 6,
    "wis": 11,
    "cha": 12,
    "cr": "0",
    "xp": 0,
    "initiative": 3,
    "senses": "Blindsight 30 ft., Darkvision 120 ft.;",
    "languages": "Common, Draconic",
    "skills": "Perception +6, Stealth +3",
    "resistances": "",
    "immunities": "Cold",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Ice Walk",
        "description": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn’t cost it extra movement."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 9 (2d4 + 4) Slashing damage plus 2 (1d4) Cold damage."
      },
      {
        "name": "Cold Breath (Recharge 5–6)",
        "description": "Constitution Saving Throw: DC 15, each creature in a 30-foot Cone. Failure: 40 (9d8) Cold damage. Success: Half damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  },
  {
    "name": "Zombie",
    "size": "Medium",
    "type": "Undead",
    "alignment": "Neutral Evil",
    "ac": 8,
    "hp": 15,
    "hpDice": "2d8 + 6",
    "speed": "20 ft.",
    "str": 13,
    "dex": 6,
    "con": 16,
    "int": 3,
    "wis": 6,
    "cha": 5,
    "cr": "1/4",
    "xp": 50,
    "initiative": -2,
    "senses": "Darkvision 60 ft.; Passive Perception 8",
    "languages": "Understands Common plus one other language",
    "skills": "",
    "resistances": "",
    "immunities": "Poison; Exhaustion, Poisoned",
    "vulnerabilities": "",
    "traits": [
      {
        "name": "Undead Fortitude",
        "description": "If damage reduces the zombie to 0 Hit Points, it makes a Constitution saving throw (DC 5 plus the damage taken) unless the damage is Radiant or from a Critical Hit. On a successful save, the zombie drops to 1 Hit Point instead. 341 System Reference Document 5.2"
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Bludgeoning damage."
      }
    ],
    "bonusActions": [],
    "reactions": [],
    "legendaryActions": []
  }
];
