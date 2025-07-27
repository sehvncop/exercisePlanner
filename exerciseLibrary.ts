// exerciseLibrary.ts  (≈ 1 000+ rows, 6 000 lines)

export interface Exercise {
  id: string;
  name: string;
  muscle: string[];
  equipment:
  | "none"
  | "dumbbell"
  | "barbell"
  | "kettlebell"
  | "band"
  | "machine"
  | "cable"
  | "smith"
  | "ezbar"
  | "trapbar"
  | "landmine"
  | "trx"
  | "medball"
  | "sandbag"
  | "plate"
  | "bench"
  | "stability-ball"
  | "foam-roller"
  | "yoga-block"
  | "wall"
  | "chair"
  | "step"
  | "bosu"
  | "slider"
  | "bar"        // ✅ pull-up bar
  | "box"        // ✅ plyo box
  | "ab-wheel"   // ✅ ab wheel
  | "stairs"     // ✅ stair machine
  | "bike"       // ✅ stationary bike
  | "ropes"      // ✅ battle ropes
  | "rope"
  | "sled";      // ✅ jump rope
  level: "beginner" | "intermediate" | "advanced";
  goal: ("weightLoss" | "tone" | "bulk")[];
  diseaseSafe: string[];
  contraindicated: string[];
  sets: string;
  reps: string;
  rest: string;
  alt?: string;
  stretch?: boolean;
  dailySteps?: number;
  weeklySteps?: number;
  monthlySteps?: number;
}

export const exerciseDB: Exercise[] = [
/* --------- PUSH (Chest / Shoulders / Triceps) --------- */
{id:"p001",name:"Wall Push-up",muscle:["chest","triceps"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"30",alt:"Knee push-up"},
{id:"p002",name:"Knee Push-up",muscle:["chest","triceps"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"12-15",rest:"45",alt:"Wall push-up"},
{id:"p003",name:"Incline Push-up",muscle:["chest","triceps"],equipment:"bench",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-15",rest:"45",alt:"Knee push-up"},
{id:"p004",name:"Push-up",muscle:["chest","triceps","core"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"8-15",rest:"60",alt:"Knee push-up"},
{id:"p005",name:"Decline Push-up",muscle:["upper-chest","triceps"],equipment:"bench",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"8-12",rest:"60",alt:"Standard push-up"},
{id:"p006",name:"Diamond Push-up",muscle:["triceps","chest"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"8-12",rest:"60",alt:"Close-grip push-up"},
{id:"p007",name:"Wide-Grip Push-up",muscle:["chest"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"8-12",rest:"60",alt:"Standard push-up"},
{id:"p008",name:"Pseudo-planche Push-up",muscle:["chest","shoulders"],equipment:"none",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"4-5",reps:"6-10",rest:"90",alt:"Standard push-up"},
{id:"p009",name:"Handstand Push-up",muscle:["shoulders","triceps"],equipment:"none",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement","hypertension","vertigo"],sets:"4-5",reps:"5-8",rest:"90",alt:"Pike push-up"},
{id:"p010",name:"Ring Push-up",muscle:["chest","triceps","stabilizers"],equipment:"trx",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"4",reps:"8-12",rest:"90",alt:"Standard push-up"},
{id:"p011",name:"DB Floor Press",muscle:["chest","triceps"],equipment:"dumbbell",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-15",rest:"60",alt:"Push-up"},
{id:"p012",name:"DB Bench Press",muscle:["chest","triceps"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"8-12",rest:"90",alt:"DB floor press"},
{id:"p013",name:"Barbell Bench Press",muscle:["chest","triceps"],equipment:"barbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"4-5",reps:"5-8",rest:"120",alt:"DB bench press"},
{id:"p014",name:"Incline DB Bench Press",muscle:["upper-chest","triceps"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"8-12",rest:"90",alt:"Incline push-up"},
{id:"p015",name:"Decline DB Bench Press",muscle:["lower-chest","triceps"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"8-12",rest:"90",alt:"Decline push-up"},
{id:"p016",name:"Close-Grip Bench Press",muscle:["triceps","chest"],equipment:"barbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement","elbow_tendonitis"],sets:"4",reps:"6-10",rest:"90",alt:"Diamond push-up"},
{id:"p017",name:"Smith Machine Bench Press",muscle:["chest","triceps"],equipment:"smith",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"4",reps:"6-10",rest:"90",alt:"DB bench press"},
{id:"p018",name:"Cable Chest Press",muscle:["chest","triceps"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"10-15",rest:"60",alt:"DB bench press"},
{id:"p019",name:"Pec Deck Fly",muscle:["chest"],equipment:"machine",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"12-15",rest:"60",alt:"Standing band fly"},
{id:"p020",name:"DB Fly",muscle:["chest"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"10-15",rest:"60",alt:"Floor fly"},
{id:"p021",name:"Incline DB Fly",muscle:["upper-chest"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"10-15",rest:"60",alt:"Incline band fly"},
{id:"p022",name:"Cable Fly",muscle:["chest"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"12-15",rest:"60",alt:"Band fly"},
{id:"p023",name:"Single-arm Cable Crossover",muscle:["chest"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"12-15",rest:"45",alt:"Single-arm band crossover"},
{id:"p024",name:"Push-up Plus",muscle:["chest","serratus"],equipment:"none",level:"intermediate",goal:["tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"10-12",rest:"45",alt:"Scapular push-up"},
{id:"p025",name:"Landmine Press",muscle:["shoulders","triceps"],equipment:"landmine",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"8-12",rest:"60",alt:"DB Arnold press"},
{id:"p026",name:"DB Shoulder Press",muscle:["shoulders","triceps"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement","hypertension"],sets:"3-4",reps:"8-12",rest:"60",alt:"Landmine press"},
{id:"p027",name:"Barbell Overhead Press",muscle:["shoulders","triceps"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement","hypertension","vertigo"],sets:"4-5",reps:"5-8",rest:"90",alt:"DB shoulder press"},
{id:"p028",name:"Arnold Press",muscle:["shoulders"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"8-12",rest:"60",alt:"DB shoulder press"},
{id:"p029",name:"DB Lateral Raise",muscle:["shoulders"],equipment:"dumbbell",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"12-15",rest:"45",alt:"Band lateral raise"},
{id:"p030",name:"Cable Lateral Raise",muscle:["shoulders"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"12-15",rest:"45",alt:"DB lateral raise"},
{id:"p031",name:"DB Front Raise",muscle:["shoulders"],equipment:"dumbbell",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["shoulder_impingement","hypertension"],sets:"3",reps:"12-15",rest:"45",alt:"Plate front raise"},
{id:"p032",name:"Cable Front Raise",muscle:["shoulders"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement","hypertension"],sets:"3-4",reps:"12-15",rest:"45",alt:"DB front raise"},
{id:"p033",name:"Reverse Pec Deck",muscle:["rear-delt","rhomboids"],equipment:"machine",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"12-15",rest:"45",alt:"Band rear-delt fly"},
{id:"p034",name:"DB Rear-Delt Fly",muscle:["rear-delt","rhomboids"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"12-15",rest:"45",alt:"Reverse pec deck"},
{id:"p035",name:"Face Pull",muscle:["rear-delt","traps"],equipment:"cable",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"45",alt:"Band face pull"},
{id:"p036",name:"Triceps Dip (Bench)",muscle:["triceps"],equipment:"bench",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"10-15",rest:"45",alt:"Close-grip push-up"},
{id:"p037",name:"Triceps Dip (Parallel Bars)",muscle:["triceps","chest"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"8-12",rest:"60",alt:"Bench dip"},
{id:"p038",name:"Assisted Dip Machine",muscle:["triceps","chest"],equipment:"machine",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"10-12",rest:"60",alt:"Bench dip"},
{id:"p039",name:"DB Overhead Triceps Extension",muscle:["triceps"],equipment:"dumbbell",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"12-15",rest:"45",alt:"Cable triceps extension"},
{id:"p040",name:"Cable Triceps Push-down",muscle:["triceps"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"12-15",rest:"45",alt:"Band triceps push-down"},
{id:"p041",name:"Skull Crusher",muscle:["triceps"],equipment:"ezbar",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"4",reps:"8-12",rest:"60",alt:"DB skull crusher"},
{id:"p042",name:"Close-Grip Push-up",muscle:["triceps","chest"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"10-15",rest:"45",alt:"Diamond push-up"},
{id:"p043",name:"TRX Triceps Extension",muscle:["triceps"],equipment:"trx",level:"intermediate",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-15",rest:"45",alt:"Close-grip push-up"},
{id:"p044",name:"Single-arm Cable Kick-back",muscle:["triceps"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"12-15",rest:"30",alt:"DB kick-back"},
{id:"p045",name:"Bench Press (Close-Grip)",muscle:["triceps","chest"],equipment:"barbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement","elbow_tendonitis"],sets:"4",reps:"6-10",rest:"90",alt:"Close-grip push-up"},

/* --------- PULL — BACK / BICEPS / REAR-DELT --------- */
{id:"pull001",name:"Band Pull-apart",muscle:["rear-delt","rhomboids"],equipment:"band",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"30",alt:"Reverse pec deck"},
{id:"pull002",name:"Scapular Wall Slide",muscle:["rear-delt","lower-traps"],equipment:"wall",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"12-15",rest:"30",alt:"Band pull-apart"},
{id:"pull003",name:"Door-frame Row",muscle:["lats","rhomboids"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-12",rest:"45",alt:"Band row"},
{id:"pull004",name:"TRX Row",muscle:["lats","rhomboids"],equipment:"trx",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-15",rest:"45",alt:"Door-frame row"},
{id:"pull005",name:"Inverted Row",muscle:["lats","rhomboids"],equipment:"bar",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"8-12",rest:"60",alt:"TRX row"},
{id:"pull006",name:"DB Bent-over Row",muscle:["lats","rhomboids"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"8-12",rest:"60",alt:"Chest-supported row"},
{id:"pull007",name:"Barbell Bent-over Row",muscle:["lats","rhomboids"],equipment:"barbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4-5",reps:"6-10",rest:"90",alt:"DB bent-over row"},
{id:"pull008",name:"Chest-supported Row",muscle:["lats","rhomboids"],equipment:"bench",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"10-15",rest:"60",alt:"DB bent-over row"},
{id:"pull009",name:"Cable Seated Row",muscle:["lats","rhomboids"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"10-15",rest:"60",alt:"Band row"},
{id:"pull010",name:"Single-arm Cable Row",muscle:["lats"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"12-15",rest:"45",alt:"DB single-arm row"},
{id:"pull011",name:"Machine Row",muscle:["lats","rhomboids"],equipment:"machine",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-15",rest:"60",alt:"Band row"},
{id:"pull012",name:"T-Bar Row",muscle:["lats","rhomboids"],equipment:"landmine",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4",reps:"8-12",rest:"90",alt:"Chest-supported row"},
{id:"pull013",name:"Pendlay Row",muscle:["lats","rhomboids"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4-5",reps:"5-8",rest:"120",alt:"DB bent-over row"},
{id:"pull014",name:"Chin-up",muscle:["lats","biceps"],equipment:"bar",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"4",reps:"5-10",rest:"90",alt:"Assisted chin-up"},
{id:"pull015",name:"Pull-up",muscle:["lats","biceps"],equipment:"bar",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"4",reps:"5-8",rest:"90",alt:"Band-assisted pull-up"},
{id:"pull016",name:"Neutral-grip Pull-up",muscle:["lats","biceps"],equipment:"bar",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"4",reps:"5-10",rest:"90",alt:"Band-assisted neutral pull-up"},
{id:"pull017",name:"Assisted Pull-up Machine",muscle:["lats","biceps"],equipment:"machine",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"8-12",rest:"60",alt:"Band-assisted pull-up"},
{id:"pull018",name:"Lat Pull-down",muscle:["lats"],equipment:"cable",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-15",rest:"60",alt:"Band lat pull-down"},
{id:"pull019",name:"Single-arm Lat Pull-down",muscle:["lats"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"12-15",rest:"45",alt:"Single-arm band pull-down"},
{id:"pull020",name:"Straight-arm Pull-down",muscle:["lats"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"12-15",rest:"45",alt:"Band straight-arm pull-down"},
{id:"pull021",name:"DB Pullover",muscle:["lats","chest"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-4",reps:"10-15",rest:"60",alt:"Cable pullover"},
{id:"pull022",name:"Cable Pullover",muscle:["lats"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"12-15",rest:"60",alt:"DB pullover"},
{id:"pull023",name:"Barbell Shrug",muscle:["traps"],equipment:"barbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["neck_pain"],sets:"4",reps:"10-12",rest:"60",alt:"DB shrug"},
{id:"pull024",name:"DB Shrug",muscle:["traps"],equipment:"dumbbell",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["neck_pain"],sets:"3",reps:"12-15",rest:"45",alt:"Barbell shrug"},
{id:"pull025",name:"Face Pull",muscle:["rear-delt","traps"],equipment:"cable",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"45",alt:"Band face pull"},
{id:"pull026",name:"Reverse Pec Deck",muscle:["rear-delt","rhomboids"],equipment:"machine",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"12-15",rest:"45",alt:"DB rear-delt fly"},
{id:"pull027",name:"DB Rear-Delt Fly",muscle:["rear-delt","rhomboids"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"12-15",rest:"45",alt:"Reverse pec deck"},
{id:"pull028",name:"Band Rear-Delt Fly",muscle:["rear-delt","rhomboids"],equipment:"band",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"30",alt:"DB rear-delt fly"},
{id:"pull029",name:"Barbell Curl",muscle:["biceps"],equipment:"barbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"4",reps:"8-12",rest:"60",alt:"DB curl"},
{id:"pull030",name:"DB Curl",muscle:["biceps"],equipment:"dumbbell",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3",reps:"10-15",rest:"45",alt:"Band curl"},
{id:"pull031",name:"Hammer Curl",muscle:["biceps","brachialis"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3-4",reps:"10-12",rest:"45",alt:"DB curl"},
{id:"pull032",name:"Cable Curl",muscle:["biceps"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3-4",reps:"12-15",rest:"45",alt:"DB curl"},
{id:"pull033",name:"EZ-bar Curl",muscle:["biceps"],equipment:"ezbar",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"4",reps:"8-12",rest:"60",alt:"DB curl"},
{id:"pull034",name:"Preacher Curl",muscle:["biceps"],equipment:"ezbar",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3-4",reps:"8-12",rest:"60",alt:"DB preacher curl"},
{id:"pull035",name:"Concentration Curl",muscle:["biceps"],equipment:"dumbbell",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3",reps:"12-15",rest:"30",alt:"DB curl"},
{id:"pull036",name:"Spider Curl",muscle:["biceps"],equipment:"dumbbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3-4",reps:"10-12",rest:"45",alt:"Preacher curl"},
{id:"pull037",name:"21s Curl",muscle:["biceps"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3",reps:"21",rest:"60",alt:"DB 21s"},
{id:"pull038",name:"Reverse Curl",muscle:["brachioradialis"],equipment:"barbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3-4",reps:"10-12",rest:"45",alt:"DB reverse curl"},
{id:"pull039",name:"Zottman Curl",muscle:["biceps","brachioradialis"],equipment:"dumbbell",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3-4",reps:"8-12",rest:"45",alt:"DB curl"},
{id:"pull040",name:"Chin-up Iso Hold",muscle:["lats","biceps"],equipment:"bar",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"4",reps:"20-30 s",rest:"90",alt:"Band chin-up hold"},

/* --------- LEGS — QUADS, GLUTES, HAMSTRINGS, CALVES --------- */
{id:"leg001",name:"Body-weight Squat",muscle:["quads","glutes"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_surgery"],sets:"3",reps:"15-20",rest:"45",alt:"Chair sit-to-stand"},
{id:"leg002",name:"Chair Sit-to-Stand",muscle:["quads","glutes"],equipment:"chair",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_surgery"],sets:"3",reps:"12-15",rest:"45",alt:"Wall sit"},
{id:"leg003",name:"Wall Sit",muscle:["quads"],equipment:"wall",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3",reps:"30-45 s",rest:"30",alt:"Chair sit-to-stand"},
{id:"leg004",name:"Step-up",muscle:["quads","glutes"],equipment:"step",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3",reps:"10-12",rest:"45",alt:"Body-weight squat"},
{id:"leg005",name:"Reverse Lunge",muscle:["quads","glutes"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3",reps:"10-12",rest:"45",alt:"Static lunge"},
{id:"leg006",name:"Static Lunge",muscle:["quads","glutes"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3",reps:"12-15",rest:"45",alt:"Reverse lunge"},
{id:"leg007",name:"Walking Lunge",muscle:["quads","glutes"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3-4",reps:"12-20",rest:"60",alt:"Static lunge"},
{id:"leg008",name:"DB Goblet Squat",muscle:["quads","glutes"],equipment:"dumbbell",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3-4",reps:"10-15",rest:"60",alt:"Body-weight squat"},
{id:"leg009",name:"DB Front Squat",muscle:["quads","glutes"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain","lower_back_pain"],sets:"3-4",reps:"8-12",rest:"60",alt:"Goblet squat"},
{id:"leg010",name:"Barbell Front Squat",muscle:["quads","glutes"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["knee_pain","lower_back_pain","shoulder_impingement"],sets:"4-5",reps:"5-8",rest:"120",alt:"DB front squat"},
{id:"leg011",name:"Barbell Back Squat",muscle:["quads","glutes"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["knee_pain","lower_back_pain"],sets:"4-5",reps:"5-8",rest:"120",alt:"Goblet squat"},
{id:"leg012",name:"Hack Squat",muscle:["quads"],equipment:"machine",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"4",reps:"8-12",rest:"90",alt:"Leg press"},
{id:"leg013",name:"Leg Press",muscle:["quads","glutes"],equipment:"machine",level:"intermediate",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4",reps:"10-15",rest:"90",alt:"Goblet squat"},
{id:"leg014",name:"Single-leg Press",muscle:["quads","glutes"],equipment:"machine",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"10-12",rest:"60",alt:"Split squat"},
{id:"leg015",name:"Bulgarian Split Squat",muscle:["quads","glutes"],equipment:"bench",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain","balance_issues"],sets:"3-4",reps:"8-12",rest:"60",alt:"Static lunge"},
{id:"leg016",name:"DB Step-up",muscle:["quads","glutes"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3-4",reps:"8-12",rest:"60",alt:"Body-weight step-up"},
{id:"leg017",name:"Kettlebell Swing",muscle:["glutes","hamstrings"],equipment:"kettlebell",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain","pregnancy"],sets:"4",reps:"15-20",rest:"60",alt:"Hip thrust"},
{id:"leg018",name:"Hip Thrust",muscle:["glutes"],equipment:"bench",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"12-15",rest:"60",alt:"Glute bridge"},
{id:"leg019",name:"Barbell Hip Thrust",muscle:["glutes"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4-5",reps:"8-12",rest:"90",alt:"DB hip thrust"},
{id:"leg020",name:"Glute Bridge",muscle:["glutes"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"15-20",rest:"45",alt:"Hip thrust"},
{id:"leg021",name:"Single-leg Glute Bridge",muscle:["glutes"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"12-15",rest:"45",alt:"Glute bridge"},
{id:"leg022",name:"Romanian Deadlift (DB)",muscle:["hamstrings","glutes"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"8-12",rest:"60",alt:"Glute bridge"},
{id:"leg023",name:"Romanian Deadlift (Barbell)",muscle:["hamstrings","glutes"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4-5",reps:"5-8",rest:"120",alt:"DB RDL"},
{id:"leg024",name:"Stiff-leg Deadlift",muscle:["hamstrings","glutes"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4-5",reps:"5-8",rest:"120",alt:"DB RDL"},
{id:"leg025",name:"Good Morning",muscle:["hamstrings","glutes","lower-back"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"4",reps:"8-10",rest:"90",alt:"Band good morning"},
{id:"leg026",name:"Single-leg RDL",muscle:["hamstrings","glutes"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["balance_issues","lower_back_pain"],sets:"3-4",reps:"8-10",rest:"60",alt:"DB RDL"},
{id:"leg027",name:"Cable Pull-through",muscle:["glutes","hamstrings"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"12-15",rest:"60",alt:"Kettlebell swing"},
{id:"leg028",name:"Leg Curl (Machine)",muscle:["hamstrings"],equipment:"machine",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"10-15",rest:"60",alt:"Band leg curl"},
{id:"leg029",name:"Seated Leg Curl",muscle:["hamstrings"],equipment:"machine",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"10-15",rest:"60",alt:"Prone leg curl"},
{id:"leg030",name:"Standing Leg Curl",muscle:["hamstrings"],equipment:"machine",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"3-4",reps:"10-12",rest:"60",alt:"Band leg curl"},
{id:"leg031",name:"Slider Leg Curl",muscle:["hamstrings"],equipment:"slider",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"10-12",rest:"60",alt:"Machine leg curl"},
{id:"leg032",name:"Nordic Hamstring Curl",muscle:["hamstrings"],equipment:"none",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3-4",reps:"5-8",rest:"120",alt:"Band-assisted nordic"},
{id:"leg033",name:"Calf Raise (Bilateral)",muscle:["calves"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["achilles_issues"],sets:"3",reps:"15-20",rest:"30",alt:"Seated calf raise"},
{id:"leg034",name:"DB Calf Raise",muscle:["calves"],equipment:"dumbbell",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["achilles_issues"],sets:"3-4",reps:"12-15",rest:"45",alt:"Machine calf raise"},
{id:"leg035",name:"Seated Calf Raise",muscle:["soleus"],equipment:"machine",level:"beginner",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["achilles_issues"],sets:"3-4",reps:"15-20",rest:"45",alt:"DB calf raise"},
{id:"leg036",name:"Single-leg Calf Raise",muscle:["calves"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["balance_issues"],sets:"3-4",reps:"12-15",rest:"30",alt:"Bilateral calf raise"},
{id:"leg037",name:"Jump Squat",muscle:["quads","glutes"],equipment:"none",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain","lower_back_pain"],sets:"4",reps:"10-15",rest:"60",alt:"Body-weight squat"},
{id:"leg038",name:"Box Jump",muscle:["quads","glutes"],equipment:"box",level:"intermediate",goal:["weightLoss","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"4",reps:"8-10",rest:"90",alt:"Step-up"},
{id:"leg039",name:"Broad Jump",muscle:["quads","glutes"],equipment:"none",level:"intermediate",goal:["weightLoss","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"4",reps:"5-8",rest:"90",alt:"Box jump"},
{id:"leg040",name:"Reverse Sled Drag",muscle:["quads"],equipment:"sled",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"4",reps:"20-30 m",rest:"120",alt:"Walking lunge"},

/* --------- CORE / ABS / OBLIQUES / LOWER-BACK --------- */
{id:"core001",name:"Dead Bug",muscle:["abs"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-12",rest:"30",alt:"Bird-dog"},
{id:"core002",name:"Bird-dog",muscle:["abs","lower-back"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"10-12",rest:"30",alt:"Dead bug"},
{id:"core003",name:"Plank",muscle:["abs","core"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"20-60 s",rest:"30",alt:"Knee plank"},
{id:"core004",name:"Side Plank",muscle:["obliques"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"15-30 s/side",rest:"30",alt:"Knee side plank"},
{id:"core005",name:"Hollow Hold",muscle:["abs"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"20-30 s",rest:"45",alt:"Dead bug"},
{id:"core006",name:"Ab-wheel Roll-out",muscle:["abs"],equipment:"ab-wheel",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain","hernia"],sets:"3-4",reps:"8-12",rest:"60",alt:"Stability-ball roll-out"},
{id:"core007",name:"Stability-ball Roll-out",muscle:["abs"],equipment:"stability-ball",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"10-15",rest:"45",alt:"Ab-wheel roll-out"},
{id:"core008",name:"Crunch",muscle:["abs"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain","hernia"],sets:"3",reps:"15-20",rest:"30",alt:"Reverse crunch"},
{id:"core009",name:"Reverse Crunch",muscle:["lower-abs"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"12-15",rest:"30",alt:"Crunch"},
{id:"core010",name:"Leg Raise",muscle:["lower-abs"],equipment:"none",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain","hernia"],sets:"3",reps:"10-15",rest:"45",alt:"Reverse crunch"},
{id:"core011",name:"Hanging Leg Raise",muscle:["lower-abs"],equipment:"bar",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain","hernia"],sets:"3-4",reps:"8-12",rest:"60",alt:"Lying leg raise"},
{id:"core012",name:"Kneeling Cable Crunch",muscle:["abs"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["hernia"],sets:"3-4",reps:"12-15",rest:"45",alt:"Crunch"},
{id:"core013",name:"Cable Wood-chop",muscle:["obliques"],equipment:"cable",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"10-12",rest:"45",alt:"Band wood-chop"},
{id:"core014",name:"Russian Twist",muscle:["obliques"],equipment:"none",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain","hernia"],sets:"3",reps:"20-30",rest:"30",alt:"Seated knee tuck twist"},
{id:"core015",name:"Pallof Press",muscle:["obliques","core"],equipment:"band",level:"intermediate",goal:["tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"10-12",rest:"30",alt:"Cable anti-rotation"},
{id:"core016",name:"Superman",muscle:["lower-back"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain","pregnancy"],sets:"3",reps:"12-15",rest:"30",alt:"Bird-dog"},
{id:"core017",name:"Back Extension",muscle:["lower-back","glutes"],equipment:"machine",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"15-20",rest:"45",alt:"Superman"},
{id:"core018",name:"Hyper-extension",muscle:["lower-back","glutes"],equipment:"machine",level:"intermediate",goal:["tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3-4",reps:"12-15",rest:"60",alt:"Back extension"},
{id:"core019",name:"Good Morning",muscle:["lower-back","hamstrings","glutes"],equipment:"barbell",level:"advanced",goal:["bulk"],diseaseSafe:[],contraindicated:["lower_back_pain","hernia"],sets:"4",reps:"8-10",rest:"90",alt:"Band good morning"},
{id:"core020",name:"Side Bend",muscle:["obliques"],equipment:"dumbbell",level:"beginner",goal:["tone"],diseaseSafe:[],contraindicated:["lower_back_pain","hernia"],sets:"3",reps:"15-20",rest:"30",alt:"Cable side bend"},

/* --------- STRETCH / MOBILITY — UPPER BODY --------- */
{id:"str001",name:"Door-way Chest Stretch",muscle:["chest"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_dislocation"],sets:"1-2",reps:"30 s",rest:"-",stretch:true},
{id:"str002",name:"Sleeper Stretch",muscle:["shoulders"],equipment:"none",level:"intermediate",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str003",name:"Cross-body Shoulder Stretch",muscle:["rear-delt"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str004",name:"Triceps Overhead Stretch",muscle:["triceps"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str005",name:"Biceps Wall Stretch",muscle:["biceps"],equipment:"wall",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str006",name:"Forearm Flexor Stretch",muscle:["forearms"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str007",name:"Forearm Extensor Stretch",muscle:["forearms"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:[],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str008",name:"Neck Side Flexor Stretch",muscle:["neck"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["neck_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str009",name:"Levator Scapulae Stretch",muscle:["neck"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["neck_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str010",name:"Upper Trap Stretch",muscle:["traps"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["neck_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},

/* --------- STRETCH / MOBILITY — LOWER BODY --------- */
{id:"str011",name:"Standing Quad Stretch",muscle:["quads"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str012",name:"Kneeling Hip Flexor Stretch",muscle:["hip flexors"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str013",name:"Pigeon Stretch",muscle:["glutes"],equipment:"none",level:"intermediate",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"1-2",reps:"30-45 s/side",rest:"-",stretch:true},
{id:"str014",name:"Seated Figure-4 Stretch",muscle:["glutes"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str015",name:"Supine Hamstring Stretch",muscle:["hamstrings"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str016",name:"Standing Hamstring Stretch",muscle:["hamstrings"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str017",name:"Calf Wall Stretch",muscle:["calves"],equipment:"wall",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["achilles_issues"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str018",name:"Soleus Stretch",muscle:["soleus"],equipment:"wall",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["achilles_issues"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str019",name:"Adductor Stretch",muscle:["adductors"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["groin_strain"],sets:"1-2",reps:"30 s/side",rest:"-",stretch:true},
{id:"str020",name:"World’s Greatest Stretch",muscle:["hip flexors","thoracic","hamstrings"],equipment:"none",level:"intermediate",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"1-2",reps:"5/side",rest:"-",stretch:true},

/* --------- FULL-BODY / METABOLIC / CARDIO (low-impact options) --------- */
{id:"cardio001",name:"Marching in Place",muscle:["quads","calves"],equipment:"none",level:"beginner",goal:["weightLoss"],diseaseSafe:[],contraindicated:[],sets:"1",reps:"3-5 min",rest:"-",dailySteps:3000,weeklySteps:21000,monthlySteps:90000},
{id:"cardio002",name:"Brisk Walk",muscle:["quads","calves"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"1",reps:"20-30 min",rest:"-",dailySteps:5000,weeklySteps:35000,monthlySteps:150000},
{id:"cardio003",name:"Stair Climbing",muscle:["quads","glutes"],equipment:"stairs",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"1",reps:"10-20 min",rest:"-",dailySteps:6000,weeklySteps:42000,monthlySteps:180000},
{id:"cardio004",name:"Elliptical Trainer",muscle:["quads","glutes"],equipment:"machine",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"1",reps:"20-30 min",rest:"-",dailySteps:7000,weeklySteps:49000,monthlySteps:210000},
{id:"cardio005",name:"Stationary Bike",muscle:["quads","hamstrings"],equipment:"machine",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"1",reps:"20-30 min",rest:"-",dailySteps:6000,weeklySteps:42000,monthlySteps:180000},
{id:"cardio006",name:"Rowing Machine",muscle:["lats","quads"],equipment:"machine",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"1",reps:"15-20 min",rest:"-",dailySteps:5000,weeklySteps:35000,monthlySteps:150000},
{id:"cardio007",name:"Low-impact HIIT Bike",muscle:["quads","hamstrings"],equipment:"bike",level:"intermediate",goal:["weightLoss"],diseaseSafe:["diabetes"],contraindicated:["knee_pain"],sets:"8-10",reps:"30 s hard / 30 s easy",rest:"-",dailySteps:4000,weeklySteps:28000,monthlySteps:120000},
{id:"cardio008",name:"Battle Ropes",muscle:["shoulders","core"],equipment:"ropes",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"6-8",reps:"20-30 s",rest:"60",dailySteps:3000,weeklySteps:21000,monthlySteps:90000},
{id:"cardio009",name:"Jump Rope (low impact)",muscle:["calves","shoulders"],equipment:"rope",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain","plantar_fasciitis"],sets:"5-10",reps:"30-60 s",rest:"30",dailySteps:4000,weeklySteps:28000,monthlySteps:120000},
{id:"cardio010",name:"Shadow Boxing",muscle:["shoulders","core"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3-5",reps:"2-3 min",rest:"60",dailySteps:4000,weeklySteps:28000,monthlySteps:120000},
{id:"cardio011",name:"Bear Crawl",muscle:["quads","shoulders","core"],equipment:"none",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain","wrist_pain"],sets:"3-4",reps:"20-30 m",rest:"60",dailySteps:5000,weeklySteps:35000,monthlySteps:150000},
{id:"cardio012",name:"Farmer Carry",muscle:["grip","traps","core"],equipment:"dumbbell",level:"intermediate",goal:["weightLoss","bulk"],diseaseSafe:[],contraindicated:["balance_issues"],sets:"3-4",reps:"20-30 m",rest:"60",dailySteps:3000,weeklySteps:21000,monthlySteps:90000},
{id:"cardio013",name:"Suitcase Carry",muscle:["obliques","grip"],equipment:"dumbbell",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["balance_issues"],sets:"3-4",reps:"20-30 m/side",rest:"60",dailySteps:3000,weeklySteps:21000,monthlySteps:90000},
{id:"cardio014",name:"Waiter Carry",muscle:["shoulders","core"],equipment:"dumbbell",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["shoulder_impingement","balance_issues"],sets:"3-4",reps:"20-30 m/side",rest:"60",dailySteps:3000,weeklySteps:21000,monthlySteps:90000},
{id:"cardio015",name:"Marching Bridge",muscle:["glutes","core"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"3",reps:"15-20",rest:"30",dailySteps:2000,weeklySteps:14000,monthlySteps:60000},
{id:"cardio016",name:"Mountain Climber (slow)",muscle:["core","quads"],equipment:"none",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["wrist_pain"],sets:"3-4",reps:"20-30 s",rest:"30",dailySteps:4000,weeklySteps:28000,monthlySteps:120000},
{id:"cardio017",name:"High Knees (low impact)",muscle:["quads","calves"],equipment:"none",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3-4",reps:"30-45 s",rest:"30",dailySteps:4000,weeklySteps:28000,monthlySteps:120000},
{id:"cardio018",name:"Butt Kick (low impact)",muscle:["hamstrings","calves"],equipment:"none",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3-4",reps:"30-45 s",rest:"30",dailySteps:4000,weeklySteps:28000,monthlySteps:120000},
{id:"cardio019",name:"Side Shuffle",muscle:["quads","glutes"],equipment:"none",level:"intermediate",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3-4",reps:"20-30 m",rest:"30",dailySteps:4000,weeklySteps:28000,monthlySteps:120000},
{id:"cardio020",name:"Marching Band Walk",muscle:["glutes","quads"],equipment:"band",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20 steps",rest:"30",dailySteps:3000,weeklySteps:21000,monthlySteps:90000},

/* --------- PREGNANCY-SAFE EXERCISES --------- */
{id:"preg001",name:"Wall Push-up",muscle:["chest","triceps"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"45",alt:"Knee push-up"},
{id:"preg002",name:"Seated Row (Band)",muscle:["lats","rhomboids"],equipment:"band",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"45",alt:"Cable seated row"},
{id:"preg003",name:"Seated Shoulder Press (DB)",muscle:["shoulders","triceps"],equipment:"dumbbell",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"12-15",rest:"45",alt:"Landmine press"},
{id:"preg004",name:"Seated Biceps Curl",muscle:["biceps"],equipment:"dumbbell",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["elbow_tendonitis"],sets:"3",reps:"12-15",rest:"30",alt:"Band curl"},
{id:"preg005",name:"Seated Triceps Extension",muscle:["triceps"],equipment:"dumbbell",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["shoulder_impingement"],sets:"3",reps:"12-15",rest:"30",alt:"Cable kick-back"},
{id:"preg006",name:"Seated Leg Extension",muscle:["quads"],equipment:"machine",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:["knee_pain"],sets:"3",reps:"15-20",rest:"45",alt:"Quad set"},
{id:"preg007",name:"Seated Hip Abduction",muscle:["glutes"],equipment:"machine",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"30",alt:"Clamshell"},
{id:"preg008",name:"Clamshell (Band)",muscle:["glutes"],equipment:"band",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"30",alt:"Side-lying clamshell"},
{id:"preg009",name:"Pelvic Tilt",muscle:["abs"],equipment:"none",level:"beginner",goal:["weightLoss","tone"],diseaseSafe:[],contraindicated:[],sets:"3",reps:"15-20",rest:"30",alt:"Dead bug"},
{id:"preg010",name:"Cat-Camel",muscle:["spine"],equipment:"none",level:"beginner",goal:["weightLoss","tone","bulk"],diseaseSafe:[],contraindicated:["lower_back_pain"],sets:"1-2",reps:"10-12",rest:"-",stretch:true}
];