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
// @overview    Main JavaScript file for the AIReader.
// 
// @author      Dietrich Bollmann
// @email       dietrich@formgames.org
// @copyright   Copyright 2019 Dietrich Bollmann
// @license     Apache License 2.0, http://www.apache.org/licenses/LICENSE-2.0
// @date        2019/12/18
// 
// =========================================================
// Example Sentence:
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

import React from 'react';
import './AIReader.css';
// Uncomment the following line for debugging the CSS code
//| import './AIReader.debug.css';

// =========================================================
// AIReader
// ---------------------------------------------------------

class AIReader extends React.Component {
  render() {
    return (
      <div class="air-reader">
        <div class="air-margin">
	  <AIReaderHeader />
	  <AIReaderBody />
        </div>
      </div>
    )
  }
}

export default AIReader;

// =========================================================
// AIReaderHeader
// ---------------------------------------------------------

class AIReaderHeader extends React.Component {
  render() {
    return (
      <div class="air-header">
        <h1>Hanzi Reader</h1>
      </div>
    )
  }
}

// =========================================================
// AIReaderBody
// ---------------------------------------------------------

class AIReaderBody extends React.Component {
  render() {
      return (
        <div class="air-body">
 	  <div class="air-page">
            <TranslationContainer />
            <WordContainer />
            <AIContainer />
            <TextContainer />
            <ButtonContainer />
            <EndContainer />
          </div>
        </div>
    )
  }
}

// =========================================================
// TranslationContainer
// ---------------------------------------------------------

class TranslationContainer extends React.Component {
  render() {
    return (
      <div className="air-container">
        <div className="air-container-content air-padding-bottom1">
	   <div class="air-container-title">Translation</div>
	   <div id="translation-annotation" class="air-translation-container air-container-text">&nbsp;</div>
        </div>
      </div>
    )
  }
}

// =========================================================
// WordContainer
// ---------------------------------------------------------

class WordContainer extends React.Component {
  render() {
    return (
      <div className="air-container">
        <div className="air-container-content air-padding-bottom1">
	   <div class="air-container-title">Word</div>
	   <div id="word-annotation" class="air-word-annotation-container air-container-text">&nbsp;</div>
        </div>
      </div>
    )
  }
}

// =========================================================
// AIContainer
// ---------------------------------------------------------

class AIContainer extends React.Component {
  render() {
    return (
      <div className="air-container">
        <div className="air-container-content air-padding-bottom1">
	   <div class="air-container-title">Hanzi</div>
	   <div id="hanzi-annotation" class="air-hanzi-annotation-container air-container-text">&nbsp;</div>
        </div>
      </div>
    )
  }
}

// =========================================================
// TextContainer
// ---------------------------------------------------------

class TextContainer extends React.Component {
  render() {
    return (
      <div className="air-container">
        <div class="air-container-text air-padding-bottom01">
          <Text />
        </div>
      </div>
    )
  }
}

// =========================================================
// ButtonContainer
// ---------------------------------------------------------

class ButtonContainer extends React.Component {
  render() {
    return (
      <div className="air-container">
        <div class="air-container-content air-padding-bottom04">
          <Button id="debug-button"            text="DEBUG" />
          <Button id="pinyin-button"           text="Pinyin" />
          <Button id="translation-button"      text="Translation" />
          <Button id="tone-annotations-button" text="Tone annotations" />
          <Button id="tone-colours-button"     text="Tone colours" />
          <Button id="hanzi-info-button"       text="Hanzi info" />
          <div class="air-clear-both"></div>
        </div>
      </div>
    )
  }
}

// =========================================================
// Button
// ---------------------------------------------------------

class Button extends React.Component {
  render() {
    return (
      <div id={this.props.id} class="air-button">{this.props.text}</div>
    )
  }
}

// =========================================================
// EndContainer
// ---------------------------------------------------------

class EndContainer extends React.Component {
  render() {
    return (
      <div className="air-container-end" />
    )
  }
}

// =========================================================
// Text
// ---------------------------------------------------------

class Text extends React.Component {
  render() {
    //console.log(this.props.text.chapters[0].paragraphs[0].sentences[0].words[0].hanzis[0].hanzi)
    return (
      <div className="air-text">
        <Paragraph />
        <Paragraph />
      </div>
    )
  }
}

// =========================================================
// Paragraph
// ---------------------------------------------------------

class Paragraph extends React.Component {
  render() {
    //console.log(this.props.text.chapters[0].paragraphs[0].sentences[0].words[0].hanzis[0].hanzi)
    return (
      <div className="air-text">
        <Sentence />
        <Sentence />
        <div className="air-clear-both" />
      </div>
    )
  }
}

// =========================================================
// Sentence
// ---------------------------------------------------------

class Sentence extends React.Component {
  render() {
    return (
      <div className="air-sentence">
        <Word1 />
        <Word2 />
        <Word3 />
        <SentenceTranslation translation="The Secret Garden" />
      </div>
    )
  }
}

// =========================================================
// Hanzi
// ---------------------------------------------------------

class Hanzi1 extends React.Component {
  render() {
    return (
      <Hanzi hanzi="秘" pinyin="mì" tone="4" translation="secret" color="purple"/>
    )
  }
}

class Hanzi2 extends React.Component {
  render() {
    return (
      <Hanzi hanzi="密" pinyin="mì" tone="4" translation="secret" color="purple"/>
    )
  }
}

class Hanzi3 extends React.Component {
  render() {
    return (
      <Hanzi hanzi="花" pinyin="huā" tone="1" translation="flower" color="red"/>
    )
  }
}

class Hanzi4 extends React.Component {
  render() {
    return (
      <Hanzi hanzi="园" pinyin="yuán" tone="2" translation="garden" color="green"/>
    )
  }
}

class Hanzi5 extends React.Component {
  render() {
    return (
      <Hanzi hanzi="。" pinyin="&nbsp;" tone="0" translation="" color="black"/>
    )
  }
}

// =========================================================
// Word
// ---------------------------------------------------------

class Word1 extends React.Component {
  render() {
    return (
      <div className="air-word">
        <Hanzi1 />
        <Hanzi2 />
        <WordTranslation translation="secret" />
      </div>
    )
  }
}

class Word2 extends React.Component {
  render() {
    return (
      <div className="air-word">
        <Hanzi3 />
        <Hanzi4 />
        <WordTranslation translation="garden" />
      </div>
    )
  }
}

class Word3 extends React.Component {
  render() {
    return (
      <div className="air-word">
        <Hanzi5 />
        <WordTranslation translation="" />
      </div>
    )
  }
}

// =========================================================
// Hanzi
// ---------------------------------------------------------

class Hanzi extends React.Component {
  render() {
    //| console.log(this.props)
    return (
      <div class="air-hanzi">
        <Pinyin tone={this.props.tone} pinyin={this.props.pinyin} />
        <Shape tone={this.props.tone} hanzi={this.props.hanzi} />
        <Annotation tone={this.props.tone} annotation={this.props.annotation} />
        <Translation hidden={this.props.hidden} translation={this.props.beautiful} />
      </div>
    )
  }
}

// =========================================================
// Pinyin
// ---------------------------------------------------------

class Pinyin extends React.Component {
  render() {
    return (
      <div class={"air-hanzi-pinyin air-tone" + this.props.tone}>{this.props.pinyin}</div>
    )
  }
}

// =========================================================
// Shape
// ---------------------------------------------------------

class Shape extends React.Component {
  render() {
    return (
      <div class={"air-hanzi-hanzi air-tone" + this.props.tone}>{this.props.hanzi}</div>
    )
  }
}

// =========================================================
// Annotation
// ---------------------------------------------------------

class Annotation extends React.Component {
  render() {
    return (
      <div class={"air-hanzi-annotation air-tone" + this.props.tone}>{this.props.annotation}</div>
    )
  }
}

// =========================================================
// Translation
// ---------------------------------------------------------

class Translation extends React.Component {
  render() {
    return (
      <div class={"air-hanzi-translation " + this.props.hidden}>{this.props.translation}</div>
    )
  }
}

// =========================================================
// WordTranslation
// ---------------------------------------------------------

class WordTranslation extends React.Component {
  render() {
    return (
      <div className="air-word-translation air-hidden">{this.props.translation}</div>
    )
  }
}

// =========================================================
// SentenceTranslation
// ---------------------------------------------------------

class SentenceTranslation extends React.Component {
  render() {
    return (
      <div className="air-sentence-translation air-hidden">{this.props.translation}</div>
    )
  }
}

// =========================================================
// =========================================================

// fin.
