const {
  Renderer,
  Stave,
  StaveNote,
  Voice,
  Formatter,
  addModifier,
  Accidental,
} = Vex.Flow;

// Create Note Library for note captions and staff

const note_library = [
  ["E5", "e/5", "string-1", "fret-0"],
  ["B4", "b/4", "string-2", "fret-0"],
  ["G4", "g/4", "string-3", "fret-0"],
  ["D4", "d/4", "string-4", "fret-0"],
  ["A3", "a/3", "string-5", "fret-0"],
  ["E3", "e/3", "string-6", "fret-0"],
  ["F5", "f/5", "string-1", "fret-1"],
  ["C5", "c/5", "string-2", "fret-1"],
  ["G4&#9839 A4&#9837", "g#/4 ab/4", "string-3", "fret-1"],
  ["D4&#9839 E4&#9837", "d#/4 eb/4", "string-4", "fret-1"],
  ["A3&#9839 B3&#9837", "a#/3 bb/3", "string-5", "fret-1"],
  ["F3", "f/3", "string-6", "fret-1"],
  ["F5&#9839 G5&#9837", "f#/5 gb/5", "string-1", "fret-2"],
  ["C5&#9839 D5&#9837", "c#/5 db/5", "string-2", "fret-2"],
  ["A4", "a/4", "string-3", "fret-2"],
  ["E4", "e/4", "string-4", "fret-2"],
  ["B3", "b/3", "string-5", "fret-2"],
  ["F3&#9839 G3&#9837", "f#/3 gb/3", "string-6", "fret-2"],
  ["G5", "g/5", "string-1", "fret-3"],
  ["D5", "d/5", "string-2", "fret-3"],
  ["A4&#9839 B4&#9837", "a#/4 bb/4", "string-3", "fret-3"],
  ["F4", "f/4", "string-4", "fret-3"],
  ["C4", "c/4", "string-5", "fret-3"],
  ["G3", "g/3", "string-6", "fret-3"],
  ["G5&#9839 A5&#9837", "g#/5 ab/5", "string-1", "fret-4"],
  ["D5&#9839 E5&#9837", "d#/5 eb/5", "string-2", "fret-4"],
  ["B4", "b/4", "string-3", "fret-4"],
  ["F4&#9839 G4&#9837", "f#/4 gb/4", "string-4", "fret-4"],
  ["C4&#9839 D4&#9837", "c#/4 db/4", "string-5", "fret-4"],
  ["G3&#9839 A3&#9837", "g#/3 ab/3", "string-6", "fret-4"],
  ["A5", "a/5", "string-1", "fret-5"],
  ["E5", "e/5", "string-2", "fret-5"],
  ["C5", "c/5", "string-3", "fret-5"],
  ["G4", "g/4", "string-4", "fret-5"],
  ["D4", "d/4", "string-5", "fret-5"],
  ["A3", "a/3", "string-6", "fret-5"],
  ["A5&#9839 B5&#9837", "a#/5 bb/5", "string-1", "fret-6"],
  ["F5", "f/5", "string-2", "fret-6"],
  ["C5&#9839 D5&#9837", "c#/5 db/5", "string-3", "fret-6"],
  ["G4&#9839 A4&#9837", "g#/4 ab/4", "string-4", "fret-6"],
  ["D4&#9839 E4&#9837", "d#/4 eb/4", "string-5", "fret-6"],
  ["A3&#9839 B3&#9837", "a#/3 bb/3", "string-6", "fret-6"],
  ["B5", "b/5", "string-1", "fret-7"],
  ["F5&#9839 G5&#9837", "f#/5 gb/5", "string-2", "fret-7"],
  ["D5", "d/5", "string-3", "fret-7"],
  ["A4", "a/4", "string-4", "fret-7"],
  ["E4", "e/4", "string-5", "fret-7"],
  ["B3", "b/3", "string-6", "fret-7"],
  ["C6", "c/6", "string-1", "fret-8"],
  ["G5", "g/5", "string-2", "fret-8"],
  ["D5&#9839 E5&#9837", "d#/5 eb/5", "string-3", "fret-8"],
  ["A4&#9839 B4&#9837", "a#/4 bb/4", "string-4", "fret-8"],
  ["F4", "f/4", "string-5", "fret-8"],
  ["C4", "c/4", "string-6", "fret-8"],
  ["C6&#9839 D6&#9837", "c#/6 db/6", "string-1", "fret-9"],
  ["G5&#9839 A5&#9837", "g#/5 ab/5", "string-2", "fret-9"],
  ["E5", "e/5", "string-3", "fret-9"],
  ["B4", "b/4", "string-4", "fret-9"],
  ["F4&#9839 G4&#9837", "f#/4 gb/4", "string-5", "fret-9"],
  ["C4&#9839 D4&#9837", "c#/4 db/4", "string-6", "fret-9"],
  ["D6", "d/6", "string-1", "fret-10"],
  ["A5", "a/5", "string-2", "fret-10"],
  ["F5", "f/5", "string-3", "fret-10"],
  ["C5", "c/5", "string-4", "fret-10"],
  ["G4", "g/4", "string-5", "fret-10"],
  ["D4", "d/4", "string-6", "fret-10"],
  ["D6&#9839 E6&#9837", "d#/6 eb/6", "string-1", "fret-11"],
  ["A5&#9839 B5&#9837", "a#/5 bb/5", "string-2", "fret-11"],
  ["F5&#9839 G5&#9837", "f#/5 gb/5", "string-3", "fret-11"],
  ["C5&#9839 D5&#9837", "c#/5 db/5", "string-4", "fret-11"],
  ["G4&#9839 A4&#9837", "g#/4 ab/4", "string-5", "fret-11"],
  ["D4&#9839 E4&#9837", "d#/4 eb/4", "string-6", "fret-11"],
  ["E6", "e/6", "string-1", "fret-12"],
  ["B5", "b/5", "string-2", "fret-12"],
  ["G5", "g/5", "string-3", "fret-12"],
  ["D5", "d/5", "string-4", "fret-12"],
  ["A4", "a/4", "string-5", "fret-12"],
  ["E4", "e/4", "string-6", "fret-12"],
];

const octave_library = [
  [
    ["C", 65.41],
    ["C#Db", 69.3],
    ["D", 73.42],
    ["D#Eb", 77.78],
    ["E", 82.41],
    ["F", 87.31],
    ["F#Gb", 92.5],
    ["G", 98],
    ["G#Ab", 103.83],
    ["A", 110],
    ["A#Bb", 116.54],
    ["B", 123.47],
  ], //2nd Octave Hz
  [
    ["C", 130.81],
    ["C#Db", 138.59],
    ["D", 146.83],
    ["D#Eb", 155.56],
    ["E", 164.81],
    ["F", 174.61],
    ["F#Gb", 185],
    ["G", 196],
    ["G#Ab", 207.65],
    ["A", 220],
    ["A#Bb", 233.08],
    ["B", 246.94],
  ], //3rd Octave Hz
  [
    ["C", 261.63],
    ["C#Db", 277.18],
    ["D", 293.66],
    ["D#Eb", 311.13],
    ["E", 329.63],
    ["F", 349.23],
    ["F#Gb", 369.99],
    ["G", 392],
    ["G#Ab", 415.3],
    ["A", 440],
    ["A#Bb", 466.16],
    ["B", 493.88],
  ], //4th Octave Hz
  [
    ["C", 523.25],
    ["C#Db", 554.37],
    ["D", 587.33],
    ["D#Eb", 622.25],
    ["E", 659.25],
    ["F", 698.46],
    ["F#Gb", 739.99],
    ["G", 783.99],
    ["G#Ab", 830.61],
    ["A", 880],
    ["A#Bb", 932.33],
    ["B", 987.77],
  ], //5th Octave Hz
];

// Guitar Octaves
const octave3 = 0;
const octave4 = 1;
const octave5 = 2;
const octave6 = 3;
// Create an SVG renderer and attach it to the DIV element named "boo".
const div = document.getElementById("output");
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(320, 170);
const context = renderer.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new Stave(10, 40, 300);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

function clearStaff() {
  // Remove all children of the SVG context
  while (context.svg.firstChild) {
    context.svg.removeChild(context.svg.firstChild);
  }

  // Redraw the stave
  stave.setContext(context).draw();
}

function changeNote_Accidental(note, acc) {
  clearStaff();
  // Create the notes
  const notes = [
    new StaveNote({ keys: ["b/4"], duration: "hr" }).setStyle({
      fillStyle: "none",
      strokeStyle: "none",
    }),

    new StaveNote({ keys: [note], duration: "q" }).addModifier(
      new Accidental(acc)
    ),
  ];

  // Create a voice in 4/4 and add above notes
  const voice = new Voice({ num_beats: 3, beat_value: 4 });
  voice.addTickables(notes);

  // Format and justify the notes to 400 pixels.
  new Formatter().joinVoices([voice]).format([voice], 120);

  // Render voice
  voice.draw(context, stave);
}

function change2Notes(note1, note2, color) {
  clearStaff();
  // Create the notes
  const notes = [
    new StaveNote({ keys: ["b/4"], duration: "qr" }).setStyle({
      fillStyle: "none",
      strokeStyle: "none",
    }),

    new StaveNote({ keys: [note1], duration: "q" })
      .addModifier(new Accidental("#"))
      .setStyle({ fillStyle: color, strokeStyle: color }),

    new StaveNote({ keys: [note2], duration: "q" })
      .addModifier(new Accidental("b"))
      .setStyle({ fillStyle: color, strokeStyle: color }),
  ];

  // Create a voice in 4/4 and add above notes
  const voice = new Voice({ num_beats: 3, beat_value: 4 });
  voice.addTickables(notes);

  // Format and justify the notes to 400 pixels.
  new Formatter().joinVoices([voice]).format([voice], 120);

  // Render voice
  voice.draw(context, stave);
}

function changeNote(note, color) {
  clearStaff();
  // Create the notes
  const notes = [
    new StaveNote({ keys: ["b/4"], duration: "hr" }).setStyle({
      fillStyle: "none",
      strokeStyle: "none",
    }),

    new StaveNote({ keys: [note], duration: "q" }).setStyle({
      fillStyle: color,
      strokeStyle: color,
    }),
  ];

  // Create a voice in 4/4 and add above notes
  const voice = new Voice({ num_beats: 3, beat_value: 4 });
  voice.addTickables(notes);

  // Format and justify the notes to 400 pixels.
  new Formatter().joinVoices([voice]).format([voice], 120);

  // Render voice
  voice.draw(context, stave);
}

// MUSIC LOGIC //

const musical_note = document.getElementById("Note");
const iframe = document.getElementById("Iframe"); // Get the fretboard.html file document
let iframeDocument, All_medium_frets, All_frets, All_strings, All_shadowStrings;
// Make sure iframe is loaded completely
iframe.onload = function () {
  iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  All_medium_frets = iframeDocument.getElementsByClassName("medium-fret");
  All_frets = iframeDocument.getElementsByClassName("fret");
  All_strings = iframeDocument.getElementsByClassName("String");
  All_shadowStrings = iframeDocument.getElementsByClassName("Shadow");
};

var text = 0;
var Note = 1;
var sTring = 2;
var Fret = 3;
var wrong = "red";
var right = "green";
var listening = "black";

function getNote() {
  var ran = Math.random();
  ran *= 77;
  ran = Math.floor(ran);

  // use random number to pick through notes
  var ran_note = note_library[ran];
  return ran_note;
}

function clearFret_Board() {
  // Clear the red off the fret board
  for (var i = 0; i < All_medium_frets.length; i++) {
    All_medium_frets[i].style.backgroundColor = "#6f572f";
  }
  for (var i = 0; i < All_frets.length; i++) {
    All_frets[i].style.backgroundColor = "#6f572f";
  }
  for (var i = 0; i < All_strings.length; i++) {
    All_strings[i].style.backgroundColor = "#c5bb97";
  }
  for (var i = 0; i < All_shadowStrings.length; i++) {
    All_shadowStrings[i].style.backgroundColor = "#928967";
  }
}

function highlightFretBoard(fret_column_num, string_num) {
  if (fret_column_num !== 0) {
    const Fret_Col = iframeDocument.getElementsByClassName(
      "fret-" + fret_column_num
    );
    for (var i = 0; i < Fret_Col.length; i++) {
      Fret_Col[i].style.backgroundColor = "#772424";
    }
  }
  //Change String colors
  const String = iframeDocument.getElementsByClassName("string-" + string_num);
  for (var i = 0; i < String.length; i++) {
    String[i].style.backgroundColor = "#006400";
  }
}

function updateScreen(ran_note, color) {
  if (ran_note[text].length > 2) {
    // if two notes
    musical_note.innerHTML =
      ran_note[text].slice(0, 8) + "/" + ran_note[text].slice(9, 17); // update text
    change2Notes(ran_note[Note].slice(0, 4), ran_note[Note].slice(5, 9), color); // update staff
  } else {
    musical_note.innerHTML = ran_note[text]; // update text
    changeNote(ran_note[Note], color); // update staff
  }

  clearFret_Board(); // Clear fret Board before making them red
  if (ran_note[Fret].length > 6) {
    // Check if its in the double digit frets
    highlightFretBoard(ran_note[Fret].slice(-2), ran_note[sTring].slice(-1));
  } else {
    highlightFretBoard(ran_note[Fret].slice(-1), ran_note[sTring].slice(-1));
  }
}

// Speech Detection Logic //

var num_notes;
var audioContext = null;
var analyser = null;
var mediaStreamSource = null;
var times_played = [];
var rafID = null;
var buflen = 2048;
var buf = new Float32Array(buflen);

window.AudioContext = window.AudioContext || window.webkitAudioContext;

window.onload = function () {
  console.log("in Window onload");
  audioContext = new AudioContext();
};

function startPitchDetect() {
  document.getElementById("start").style.display = "none";
  document.getElementById("UI").style.display = "block";
  // Get Desired # of Notes from User
  num_notes = Number(prompt("How many notes do you want to play? "));
  while (num_notes <= 0 || num_notes > 1000 || isNaN(num_notes)) {
    num_notes = Number(prompt("How many notes do you want to play? ")); // Make sure user puts in valid number
  }

  audioContext = new AudioContext(); // grab an audio context

  navigator.mediaDevices
    .getUserMedia(
      // Attempt to get audio input
      {
        audio: {
          mandatory: {
            googEchoCancellation: "false",
            googAutoGainControl: "false",
            googNoiseSuppression: "false",
            googHighpassFilter: "false",
          },
          optional: [],
        },
      }
    )
    .then((stream) => {
      // Create an AudioNode from the stream.
      mediaStreamSource = audioContext.createMediaStreamSource(stream);

      // Connect it to the destination.
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      mediaStreamSource.connect(analyser);
      game_logic();
    })
    .catch((err) => {
      // always check for errors at the end.
      console.error(`${err.name}: ${err.message}`);
      alert("Stream generation failed.");
    });
}

function checkNote(ran_note, current_note) {
  if (current_note !== null) {
    console.log("Music Note: " + ran_note);
    console.log("Current Note: " + current_note);
    var note = 0;
    var accidental = 1;
    var octave = current_note.length - 1;
    ran_note = ran_note[text];

    if (ran_note.length === 2) {
      //No accidental
      if (ran_note.includes(current_note[octave])) {
        //if they share octaves
        if (ran_note.includes(current_note[note])) {
          //if they share notes
          return true;
        }
      }
    } else {
      //Accidental Note
      if (ran_note.includes(current_note[octave])) {
        //if they share octaves
        if (ran_note.includes(current_note[note])) {
          //if they share notes
          if (ran_note.includes(current_note[accidental])) {
            //if they share accidental
            return true;
          }
        }
      }
    }
  }

  //updateScreen(ran_note, wrong);
  return false;
}

let isListening = false;

// Listen To User Until They say the word
function updatePitch(targetWord, callback) {
  if (isListening) {
    console.log("Already listening, skipping...");
    return;
  }

  isListening = true; // Set flag when recognition starts
  // Check browser compatibility
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  // Initialize SpeechRecognition
  const recognition = new window.SpeechRecognition();

  // Set recognition properties
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.addEventListener("result", (e) => {
    const transcript = e.results[0][0].transcript.toLowerCase();
    console.log("Recognized text:", transcript);

    if (transcript.includes(targetWord.toLowerCase())) {
      console.log(`Matched the word "${targetWord}"!`);
      callback(true); // Notify success
    } else {
      console.log(`The word "${targetWord}" was not found.`);
      callback(false); // Notify failure
    }
  });

  recognition.addEventListener("error", (e) => {
    console.error("Speech recognition error:", e.error);
    callback(false); // Handle errors
  });

  recognition.addEventListener("end", () => {
    console.log("Speech recognition ended.");
    isListening = false;
  });

  // Start recognition
  recognition.start();
}

// GAME LOGIC //
let advance = true;
let already_right = false;
var correct_notes = 0;
var ran_note;

function wait_logic() {
  updateScreen(ran_note, listening);
  correct = true;
  already_right = false;
}

function counting_logic() {
  correct_notes += 1;
  if (correct_notes === num_notes) {
    console.log("We're In");
    window.location.href = "../../index.html";
  }
}

function game_logic() {
  if (advance) {
    ran_note = getNote(); // Get the new target note
    advance = false; // Set to false to wait for the user
  } else if (!already_right) {
    updateScreen(ran_note, listening); // Show listening state

    // Start listening for the target word
    updatePitch("next", (isCorrect) => {
      if (isCorrect) {
        already_right = true; // Prevent re-entry
        updateScreen(ran_note, right); // Update screen to show correct
        counting_logic(); // Increment correct notes

        setTimeout(() => {
          correct_notes++;
          wait_logic(); // Reset logic for next note
          advance = true; // Allow the next note
        }, 10); // Delay
      }
    });
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = window.webkitRequestAnimationFrame;
  rafID = window.requestAnimationFrame(game_logic);
}
