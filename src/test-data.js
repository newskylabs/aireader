// =========================================================
// Copyright 2019 Dietrich Bollmann
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ---------------------------------------------------------
// 
// @overview    Example data for first experiments.
// 
// @author      Dietrich Bollmann
// @email       dietrich@formgames.org
// @copyright   Copyright 2019 Dietrich Bollmann
// @license     Apache License 2.0, http://www.apache.org/licenses/LICENSE-2.0"
// @date        2019/12/19
// 
// ---------------------------------------------------------

// =========================================================
// Test Data
// ---------------------------------------------------------

// =========================================================
// Example Sentence:
// ---------------------------------------------------------
// 
// 秘密花园   (The Secret Garden)
// 
// Taken with permission from:
// 
//   - 秘密花园
//     The Secret Garden
//     Mandarin Companion graded readers
//     https://mandarincompanion.com/products/the-secret-garden/
// 
//   - Sample of 秘密花园 (The Secret Garden)
//     https://mandarincompanion.com/wp-content/uploads/samples/Mandarin%20Companion%20-%20The%20Secret%20Garden%20(Sample).pdf
// 
// ---------------------------------------------------------
// 
//   秘密花园。
//   mìmì huāyuán
//   The Secret Garden
// 
// Vocabulary:
// 
//   秘密
//   mìmì
//   secret
// 
//   花园
//   huāyuán
//   garden
// 
// Hanzi:
// 
//   秘
//   mì
//   secret
// 
//   密
//   mì
//   secret
// 
//   花
//   huā
//   flower
// 
//   园
//   yuán
//   garden
// 
//   。
// 
// Hanzi Tone Colors:
// 
//    no tone: black
//   1st tone: red
//   2nd tone: green
//   3rd tone: blue
//   4th tone: purple
// 
// ---------------------------------------------------------

let _data = {
  
  text001: {
    type: "text",
    title: "Title Text 001",
    chapters: [
      {
	type: "chapter",
	title: "Title Chapter 000",
	paragraphs: [
	  {
	    type: "paragraph",
	    sentences: [
	      {
		type: "sentence",
		comment: "秘密花园。/ mìmì huāyuán / The Secret Garden.",
		words: [
		  {
		    type: "word",
		    hanzis: [
		      {
			type: "hanzi",
			shape: "秘",
			pinyin: "mì", 
			tone: 4,
			translation: "secret"
		      },
		      {
			type: "hanzi",
			shape: "密",
			pinyin: "mì", 
			tone: 4,
			translation: "secret"
		      }
		    ],
		    translation: "secret"
		  },
		  {
		    type: "word",
		    hanzis: [
		      {
			type: "hanzi",
			shape: "花",
			pinyin: "huā", 
			tone: 1,
			translation: "flower"
		      },
		      {
			type: "hanzi",
			shape: "园",
			pinyin: "yuán", 
			tone: 2,
			translation: "garden"
		      }
		    ],
		    translation: "garden"
		  },
		  {
		    type: "word",
		    hanzis: [
		      {
			type: "hanzi",
			shape: "。",
			pinyin: "",
			tone: 0,
			translation: ""
		      }
		    ],
		    translation: ""
		  },
		],
		translation: "The Secret Garden."
	      }
	    ]
	  }
	]
      }
    ]
  }
}

// =========================================================
// Functions
// ---------------------------------------------------------

const getData = () => {
  return _data;
}

export default getData;

// =========================================================
// =========================================================

// fin.
