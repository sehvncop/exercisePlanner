'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.indianExerciseDB = void 0;

exports.indianExerciseDB = [
  /* ------------------------------------------------------- */
  /* 1. CHEST – Barbell, DB, Smith, Pec-Deck, Cables         */
  /* ------------------------------------------------------- */
  {id:'in_c01', name:'Barbell Flat Bench Press – फ्लैट बेंच प्रेस', muscle:['chest','triceps'], equipment:'barbell', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3-4', reps:'8-12', rest:'90'},
  {id:'in_c02', name:'Barbell Incline Bench Press – इंक्लाइन प्रेस', muscle:['upper-chest','triceps'], equipment:'barbell', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3-4', reps:'8-12', rest:'90'},
  {id:'in_c03', name:'Barbell Decline Bench Press – डेक्लाइन प्रेस', muscle:['lower-chest','triceps'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3-4', reps:'8-10', rest:'90'},
  {id:'in_c04', name:'Smith Flat Bench – स्मिथ फ्लैट', muscle:['chest','triceps'], equipment:'smith', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'10-12', rest:'75'},
  {id:'in_c05', name:'Smith Incline Bench – स्मिथ इंक्लाइन', muscle:['upper-chest'], equipment:'smith', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'10-12', rest:'75'},
  {id:'in_c06', name:'Dumbbell Flat Press – डीबी फ्लैट', muscle:['chest','triceps'], equipment:'dumbbell', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'10-15', rest:'75'},
  {id:'in_c07', name:'Dumbbell Incline Press – डीबी इंक्लाइन', muscle:['upper-chest'], equipment:'dumbbell', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'10-15', rest:'75'},
  {id:'in_c08', name:'Dumbbell Decline Press – डीबी डेक्लाइन', muscle:['lower-chest'], equipment:'dumbbell', level:'intermediate', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'10-12', rest:'75'},
  {id:'in_c09', name:'Dumbbell Fly Flat – डीबी फ्लैट फ्लाई', muscle:['chest'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_c10', name:'Dumbbell Fly Incline – इंक्लाइन फ्लाई', muscle:['upper-chest'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_c11', name:'Pec Deck Fly – पेक डेक', muscle:['chest'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_c12', name:'Single-arm Cable Cross – केबल क्रॉस', muscle:['chest'], equipment:'cable', level:'intermediate', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_c13', name:'Cable Flat Press – केबल प्रेस', muscle:['chest','triceps'], equipment:'cable', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'60'},

  /* ------------------------------------------------------- */
  /* 2. SHOULDERS – DB, Barbell, Smith, Cable                */
  /* ------------------------------------------------------- */
  {id:'in_s01', name:'Barbell Overhead Press – मिलिटरी प्रेस', muscle:['shoulders','triceps'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement','hypertension'], sets:'4', reps:'6-10', rest:'90'},
  {id:'in_s02', name:'Smith Overhead Press – स्मिथ ओवरहेड', muscle:['shoulders'], equipment:'smith', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'8-12', rest:'75'},
  {id:'in_s03', name:'Dumbbell Shoulder Press – डीबी प्रेस', muscle:['shoulders','triceps'], equipment:'dumbbell', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'8-12', rest:'75'},
  {id:'in_s04', name:'Arnold Press – अर्नोल्ड प्रेस', muscle:['shoulders'], equipment:'dumbbell', level:'intermediate', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'8-12', rest:'75'},
  {id:'in_s05', name:'DB Front Raise – फ्रंट रेज़', muscle:['front-delt'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_s06', name:'DB Lateral Raise – लेटरल रेज़', muscle:['side-delt'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_s07', name:'Cable Lateral Raise – केबल लेटरल', muscle:['side-delt'], equipment:'cable', level:'intermediate', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_s08', name:'Reverse Pec Deck – रिवर्स पेक', muscle:['rear-delt','rhomboids'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_s09', name:'Face Pull – फेस पुल', muscle:['rear-delt','traps'], equipment:'cable', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'15-20', rest:'45'},

  /* ------------------------------------------------------- */
  /* 3. TRICEPS – DB, Barbell, Cable, Smith                  */
  /* ------------------------------------------------------- */
  {id:'in_t01', name:'Close-Grip Bench Press – क्लोज ग्रिप', muscle:['triceps','chest'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement','elbow_tendonitis'], sets:'4', reps:'6-10', rest:'90'},
  {id:'in_t02', name:'Smith Close-Grip Bench – स्मिथ क्लोज', muscle:['triceps'], equipment:'smith', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'8-12', rest:'75'},
  {id:'in_t03', name:'Triceps Push-down – पुश डाउन', muscle:['triceps'], equipment:'cable', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_t04', name:'Overhead DB Extension – ओवरहेड एक्सटेंशन', muscle:['triceps'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_t05', name:'Cable Overhead Extension – केबल ओवरहेड', muscle:['triceps'], equipment:'cable', level:'intermediate', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_t06', name:'Single-arm Cable Kick-back – किकबैक', muscle:['triceps'], equipment:'cable', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'30'},
  {id:'in_t07', name:'Bench Dip – बेंच डिप', muscle:['triceps'], equipment:'bench', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'10-15', rest:'45'},

  /* ------------------------------------------------------- */
  /* 4. BACK – Lats, Traps, Rhomboids                        */
  /* ------------------------------------------------------- */
  {id:'in_b01', name:'Pull-up – चिन-अप', muscle:['lats','biceps'], equipment:'bar', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'4', reps:'5-10', rest:'90'},
  {id:'in_b02', name:'Lat Pull-down – लैट पुल', muscle:['lats'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_b03', name:'Single-arm Lat Pull – सिंगल लैट', muscle:['lats'], equipment:'machine', level:'intermediate', goal:['tone','bulk'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_b04', name:'Seated Cable Row – सीटेड रो', muscle:['lats','rhomboids'], equipment:'cable', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_b05', name:'Single-arm DB Row – डीबी रो', muscle:['lats'], equipment:'dumbbell', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'3', reps:'10-12', rest:'60'},
  {id:'in_b06', name:'Barbell Bent-over Row – बार्बेल रो', muscle:['lats','rhomboids'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'4', reps:'6-10', rest:'90'},
  {id:'in_b07', name:'Smith Bent-over Row – स्मिथ रो', muscle:['lats'], equipment:'smith', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'3', reps:'10-12', rest:'75'},
  {id:'in_b08', name:'Machine Row – मशीन रो', muscle:['lats','rhomboids'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_b09', name:'Straight-arm Pull-down – स्ट्रेट आर्म', muscle:['lats'], equipment:'cable', level:'intermediate', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_b10', name:'Face Pull – फेस पुल', muscle:['rear-delt','traps'], equipment:'cable', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'15-20', rest:'45'},
  {id:'in_b11', name:'Reverse Pec Deck – रिवर्स पेक', muscle:['rear-delt','rhomboids'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_b12', name:'DB Shrug – श्रग', muscle:['traps'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['neck_pain'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_b13', name:'Barbell Shrug – बार्बेल श्रग', muscle:['traps'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['neck_pain'], sets:'4', reps:'10-12', rest:'60'},

  /* ------------------------------------------------------- */
  /* 5. BICEPS – DB, Barbell, Cable                          */
  /* ------------------------------------------------------- */
  {id:'in_bi01', name:'Barbell Curl – बार्बेल कर्ल', muscle:['biceps'], equipment:'barbell', level:'beginner', goal:['bulk'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'3', reps:'8-12', rest:'60'},
  {id:'in_bi02', name:'EZ-bar Curl – ईज़ी बार कर्ल', muscle:['biceps'], equipment:'ezbar', level:'beginner', goal:['bulk'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'3', reps:'8-12', rest:'60'},
  {id:'in_bi03', name:'DB Curl – डीबी कर्ल', muscle:['biceps'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'3', reps:'10-15', rest:'45'},
  {id:'in_bi04', name:'Hammer Curl – हैमर कर्ल', muscle:['biceps','brachialis'], equipment:'dumbbell', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'3', reps:'10-12', rest:'45'},
  {id:'in_bi05', name:'Cable Curl – केबल कर्ल', muscle:['biceps'], equipment:'cable', level:'intermediate', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'3', reps:'12-15', rest:'45'},
  {id:'in_bi06', name:'Preacher Curl – प्रीचर कर्ल', muscle:['biceps'], equipment:'ezbar', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'3', reps:'8-12', rest:'60'},
  {id:'in_bi07', name:'Concentration Curl – कन्सेंट्रेशन', muscle:['biceps'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['elbow_tendonitis'], sets:'3', reps:'12-15', rest:'30'},

  /* ------------------------------------------------------- */
  /* 6. LEGS – Quads, Hams, Glutes, Calves                   */
  /* ------------------------------------------------------- */
  {id:'in_l01', name:'Barbell Back Squat – बैक स्क्वाट', muscle:['quads','glutes'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['knee_pain','lower_back_pain'], sets:'4', reps:'6-10', rest:'120'},
  {id:'in_l02', name:'Barbell Front Squat – फ्रंट स्क्वाट', muscle:['quads','glutes'], equipment:'barbell', level:'advanced', goal:['bulk'], diseaseSafe:[], contraindicated:['knee_pain','shoulder_impingement'], sets:'4', reps:'5-8', rest:'120'},
  {id:'in_l03', name:'Smith Squat – स्मिथ स्क्वाट', muscle:['quads','glutes'], equipment:'smith', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['knee_pain'], sets:'3', reps:'10-12', rest:'75'},
  {id:'in_l04', name:'Leg Press – लेग प्रेस', muscle:['quads','glutes'], equipment:'machine', level:'beginner', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'3', reps:'12-15', rest:'90'},
  {id:'in_l05', name:'Single-leg Press – सिंगल लेग', muscle:['quads','glutes'], equipment:'machine', level:'intermediate', goal:['tone'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'3', reps:'10-12', rest:'60'},
  {id:'in_l06', name:'Leg Extension – लेग एक्सटेंशन', muscle:['quads'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['knee_pain'], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_l07', name:'Leg Curl – लेग कर्ल', muscle:['hamstrings'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:[], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_l08', name:'Romanian Deadlift (DB) – डीबी आरडीएल', muscle:['hamstrings','glutes'], equipment:'dumbbell', level:'intermediate', goal:['tone','bulk'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'3', reps:'8-12', rest:'75'},
  {id:'in_l09', name:'Stiff-leg Deadlift – स्टिफ लेग', muscle:['hamstrings','glutes'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'4', reps:'8-10', rest:'90'},
  {id:'in_l10', name:'Walking DB Lunge – लंगेस', muscle:['quads','glutes'], equipment:'dumbbell', level:'intermediate', goal:['tone'], diseaseSafe:[], contraindicated:['knee_pain'], sets:'3', reps:'12-15', rest:'60'},
  {id:'in_l11', name:'Step-up (DB) – स्टेप अप', muscle:['quads','glutes'], equipment:'dumbbell', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['knee_pain'], sets:'3', reps:'10-12', rest:'60'},
  {id:'in_l12', name:'Hip Thrust (Barbell) – हिप थ्रस्ट', muscle:['glutes'], equipment:'barbell', level:'intermediate', goal:['bulk'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'4', reps:'8-12', rest:'90'},
  {id:'in_l13', name:'Glute Bridge – ग्लूट ब्रिज', muscle:['glutes'], equipment:'plate', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'3', reps:'15-20', rest:'45'},
  {id:'in_l14', name:'Seated Calf Raise – सीटेड काफ', muscle:['calves'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['achilles_issues'], sets:'3', reps:'15-20', rest:'45'},
  {id:'in_l15', name:'Standing Calf Raise – स्टैंडिंग काफ', muscle:['calves'], equipment:'machine', level:'beginner', goal:['tone'], diseaseSafe:[], contraindicated:['achilles_issues'], sets:'3', reps:'15-20', rest:'45'},

  /* ------------------------------------------------------- */
  /* 7. CORE & YOGA (only as finisher / mobility)            */
  /* ------------------------------------------------------- */
  {id:'in_y01', name:'Plank – प्लैंक', muscle:['core'], equipment:'none', level:'beginner', goal:['weightLoss','tone'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'3', reps:'30-60 s', rest:'30'},
  {id:'in_y02', name:'Side Plank – साइड प्लैंक', muscle:['obliques'], equipment:'none', level:'beginner', goal:['weightLoss','tone'], diseaseSafe:[], contraindicated:['shoulder_impingement'], sets:'3', reps:'20-30 s/side', rest:'30'},
  {id:'in_y03', name:'Bhujangasana – भुजंगासन', muscle:['lower-back'], equipment:'none', level:'beginner', goal:['weightLoss','tone'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'2', reps:'30-45 s', rest:'-', stretch:true},
  {id:'in_y04', name:'Setu Bandhasana – सेतु बंध', muscle:['glutes','core'], equipment:'none', level:'beginner', goal:['weightLoss','tone'], diseaseSafe:[], contraindicated:['lower_back_pain'], sets:'2', reps:'30-45 s', rest:'-', stretch:true},
  {id:'in_y05', name:'Ardha Matsyendrasana – स्पाइन ट्विस्ट', muscle:['obliques'], equipment:'none', level:'beginner', goal:['weightLoss','tone'], diseaseSafe:[], contraindicated:['hernia'], sets:'2', reps:'30 s/side', rest:'-', stretch:true},
  {id:'in_y06', name:'Savasana – शवासन', muscle:['mind'], equipment:'none', level:'beginner', goal:['weightLoss'], diseaseSafe:[], contraindicated:[], sets:'1', reps:'3-5 min', rest:'-', stretch:true}
];

// bottom of indianexercise.js (after the array)
function generatePlan(user) {
  // you can copy the same logic from exerciseLibrary.js
  const safe = exports.indianExerciseDB.filter(
    (ex) =>
      !ex.contraindicated.some((d) =>
        (user.diseases || []).includes(d)
      ) &&
      ex.goal.includes(user.goal) &&
      (ex.level === "beginner" || user.strength !== "light")
  );

  const split =
    user.goal === "bulk"
      ? ["push", "pull", "legs"]
      : user.goal === "tone"
      ? ["upper", "lower"]
      : ["fullbody"];
  const daysPerWeek = user.goal === "bulk" ? 6 : user.goal === "tone" ? 5 : 4;

  // calcProgression same as before
  const base = user.strength === "light" ? 1 : user.strength === "medium" ? 1.15 : 1.3;
  const ageMult = Math.max(0.7, 1 - (Math.max(0, user.age - 30) * 0.01));
  const genderMult = user.gender === "male" ? 1.1 : 1;
  const weeklyInc =
    user.goal === "bulk"
      ? 2.5 * base * ageMult * genderMult
      : user.goal === "tone"
      ? 1.25 * base * ageMult * genderMult
      : 0;

  const plan = Array.from({ length: 26 }, (_, w) => {
    const week = w + 1;
    const days = Array.from({ length: daysPerWeek }, (_, d) => {
      const daySplit = split[d % split.length];
      const pool = safe.filter((ex) =>
        ex.muscle.some((m) =>
          daySplit === "push"
            ? ["chest", "shoulders", "triceps"].includes(m)
            : daySplit === "pull"
            ? ["lats", "rhomboids", "biceps"].includes(m)
            : daySplit === "legs"
            ? ["quads", "hamstrings", "glutes", "calves"].includes(m)
            : true
        )
      );

      const exercises = pool
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
        .map((ex) => ({
          ...ex,
          reps: ex.reps.replace(/\d+/, (m) =>
            Math.round(parseInt(m) * (user.goal === "weightLoss" ? 1.2 : 1))
          ),
          load: user.goal !== "weightLoss" ? `${(1 + weeklyInc * 0.01 * w).toFixed(2)}×` : "RPE 7",
        }));

      const stretches = safe.filter((e) => e.stretch).slice(0, 2);

      return { day: d + 1, split: daySplit, exercises: [...exercises, ...stretches] };
    });

    const stepsTarget =
      user.goal === "weightLoss"
        ? 8000 + week * 300
        : user.goal === "tone"
        ? 7000 + week * 200
        : 6000 + week * 100;

    return { week, days, stepsTarget };
  });

  return plan;
}

// export it
module.exports = { generatePlan };