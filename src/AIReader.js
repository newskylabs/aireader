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
// ---------------------------------------------------------

import React, { Component } from 'react';
import './AIReader.css';
// Uncomment the following line for debugging the CSS code
//| import './AIReader.debug.css';
import getData from './test-data';

// =========================================================
// AIReader
// ---------------------------------------------------------

class AIReader extends Component {
  render() {
    const data = getData()
    return (
      <div className="air-reader">
        <div className="air-margin">
	  <AIReaderHeader />
	  <AIReaderBody data={data} />
        </div>
      </div>
    )
  }
}

export default AIReader;

// =========================================================
// AIReaderHeader
// ---------------------------------------------------------

class AIReaderHeader extends Component {
  render() {
    return (
      <div className="air-header">
        <h1>Hanzi Reader</h1>
      </div>
    )
  }
}

// =========================================================
// AIReaderBody
// ---------------------------------------------------------

class AIReaderBody extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="air-body">
 	<div className="air-page">
          <TranslationContainer />
          <WordContainer />
          <AIContainer />
          <TextContainer texts={data} />
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

class TranslationContainer extends Component {
  render() {
    return (
      <div className="air-container">
        <div className="air-container-content air-padding-bottom1">
	   <div className="air-container-title">Translation</div>
	   <div id="translation-annotation" className="air-translation-container air-container-text">&nbsp;</div>
        </div>
      </div>
    )
  }
}

// =========================================================
// WordContainer
// ---------------------------------------------------------

class WordContainer extends Component {
  render() {
    return (
      <div className="air-container">
        <div className="air-container-content air-padding-bottom1">
	   <div className="air-container-title">Word</div>
	   <div id="word-annotation" className="air-word-annotation-container air-container-text">&nbsp;</div>
        </div>
      </div>
    )
  }
}

// =========================================================
// AIContainer
// ---------------------------------------------------------

class AIContainer extends Component {
  render() {
    return (
      <div className="air-container">
        <div className="air-container-content air-padding-bottom1">
	   <div className="air-container-title">Hanzi</div>
	   <div id="hanzi-annotation" className="air-hanzi-annotation-container air-container-text">&nbsp;</div>
        </div>
      </div>
    )
  }
}

// =========================================================
// TextContainer
// ---------------------------------------------------------

class TextContainer extends Component {
  render() {
    const {texts} = this.props
    return (
      <div className="air-container">
        <div className="air-container-text air-padding-bottom01">
	  {Object.entries(texts).map( 
	    ([key, text]) => 
              <Text key={key} text={text} />
          )}
        </div>
      </div>
    )
  }
}

// =========================================================
// ButtonContainer
// ---------------------------------------------------------

class ButtonContainer extends Component {
  render() {
    return (
      <div className="air-container">
        <div className="air-container-content air-padding-bottom04">
          <Button id="debug-button"            text="DEBUG" />
          <Button id="pinyin-button"           text="Pinyin" />
          <Button id="translation-button"      text="Translation" />
          <Button id="tone-annotations-button" text="Tone annotations" />
          <Button id="tone-colours-button"     text="Tone colours" />
          <Button id="hanzi-info-button"       text="Hanzi info" />
          <div className="air-clear-both"></div>
        </div>
      </div>
    )
  }
}

// =========================================================
// Button
// ---------------------------------------------------------

class Button extends Component {
  render() {
    const {id, text} = this.props
    return (
      <div id={id} className="air-button">{text}</div>
    )
  }
}

// =========================================================
// EndContainer
// ---------------------------------------------------------

class EndContainer extends Component {
  render() {
    return (
      <div className="air-container-end" />
    )
  }
}

// =========================================================
// Text
// ---------------------------------------------------------

class Text extends Component {
  render() {
    const {text} = this.props
    return (
      <div className="air-text">
        {text.chapters.map(
          (chapter, i) => 
            <Chapter key={i} chapter={chapter}/>
        )}
      </div>
    )
  }
}

// =========================================================
// Chapter
// ---------------------------------------------------------

class Chapter extends Component {
  render() {
    const {chapter} = this.props
    return (
      <div className="air-chapter">
        {chapter.paragraphs.map(
          (paragraph, i) => 
            <Paragraph key={i} paragraph={paragraph} />
        )}
        <div className="air-clear-both" />
      </div>
    )
  }
}

// =========================================================
// Paragraph
// ---------------------------------------------------------

class Paragraph extends Component {
  render() {
    const {paragraph} = this.props
    return (
      <div className="air-paragraph">
        {paragraph.sentences.map(
          (sentence, i) => 
            <Sentence key={i} sentence={sentence} />
        )}
        <div className="air-clear-both" />
      </div>
    )
  }
}

// =========================================================
// Sentence
// ---------------------------------------------------------

class Sentence extends Component {
  render() {
    const {sentence} = this.props
    return (
      <div className="air-sentence">
        {sentence.words.map(
          (word, i) => 
            <Word key={i} word={word}/>
        )}
        <SentenceTranslation translation="The Secret Garden" />
      </div>
    )
  }
}

// =========================================================
// Word
// ---------------------------------------------------------

const Word = ({word}) => {
  return (
    <div className="air-word">
      {word.hanzis.map(
        (hanzi, i) => 
          <Hanzi 
	    key={i}
	    hanzi={hanzi} />
      )}    
      <WordTranslation translation="secret" />
    </div>
  )
}

// =========================================================
// Hanzi
// ---------------------------------------------------------

const Hanzi = ({hanzi}) => {
  const {shape, pinyin, tone, translation} = hanzi
  return (
    <div className="air-hanzi">
      <Pinyin tone={tone} pinyin={pinyin} />
      <Shape tone={tone} shape={shape} />
      <Annotation tone={tone} />
      <Translation translation={translation} />
    </div>
  )
}

// =========================================================
// Pinyin
// ---------------------------------------------------------

class Pinyin extends Component {

  renderPinyin(pinyin) {

    if (!pinyin || pinyin.trim() === "") {
      // JSX has problems to render "&nbsp;"
      // Using \u00A0 - the unicode code for "&nbsp;"
      return "\u00A0" 
    } else {
      return pinyin
    }
  }

  render() {
    const {tone, pinyin} = this.props
    let pinyin2 = this.renderPinyin(pinyin)
    return (
      <div className={"air-hanzi-pinyin air-tone" + tone}>{pinyin2}</div>
    )
  }
}

// =========================================================
// Shape
// ---------------------------------------------------------

class Shape extends Component {
  render() {
    const {tone, shape} = this.props
    return (
      <div className={"air-hanzi-hanzi air-tone" + tone}>{shape}</div>
    )
  }
}

// =========================================================
// Annotation
// ---------------------------------------------------------

class Annotation extends Component {
  render() {
    const {tone} = this.props
    return (
      <div className={"air-hanzi-annotation air-tone" + tone}></div>
    )
  }
}

// =========================================================
// Translation
// ---------------------------------------------------------

class Translation extends Component {
  render() {
    const {translation} = this.props
    return (
      <div className="air-hanzi-translation air-hidden">{translation}</div>
    )
  }
}

// =========================================================
// WordTranslation
// ---------------------------------------------------------

class WordTranslation extends Component {
  render() {
    const {translation} = this.props
    return (
      <div className="air-word-translation air-hidden">{translation}</div>
    )
  }
}

// =========================================================
// SentenceTranslation
// ---------------------------------------------------------

class SentenceTranslation extends Component {
  render() {
    const {translation} = this.props
    return (
      <div className="air-sentence-translation air-hidden">{translation}</div>
    )
  }
}

// =========================================================
// =========================================================

// fin.
