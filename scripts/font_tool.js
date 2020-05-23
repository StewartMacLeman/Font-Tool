"use strict";

// Updating the font sizes -----------------------------------------------------

function fontSizeUpdate(numSize, exampleID, options_btn_class){

let btn = document.querySelector(`#${exampleID}_${numSize}px`);
    btn.addEventListener( "click", fontSize );

function reset_btn(){
  let buttonStyles = document.querySelectorAll(`.${options_btn_class}`);
  for (let i = 0; i < buttonStyles.length; i++){
       buttonStyles[i].style.backgroundColor = "white";
       buttonStyles[i].style.color = "black";
   }
}
function fontSize(){
  reset_btn();
   let example = document.querySelector(`#${exampleID}`);
       example.style.fontSize = `${numSize}px`;
       btn.style.backgroundColor = "black";
       btn.style.color = "white";
 }
}
fontSizeUpdate("35", "exH1", "opt_1size" );
fontSizeUpdate("40", "exH1", "opt_1size" );
fontSizeUpdate("45", "exH1", "opt_1size" );
fontSizeUpdate("50", "exH1", "opt_1size" );
fontSizeUpdate("20", "exH2", "opt_2size" );
fontSizeUpdate("25", "exH2", "opt_2size" );
fontSizeUpdate("30", "exH2", "opt_2size" );
fontSizeUpdate("35", "exH2", "opt_2size" );
fontSizeUpdate("10", "exP", "opt_3size" );
fontSizeUpdate("14", "exP", "opt_3size" );
fontSizeUpdate("17", "exP", "opt_3size" );
fontSizeUpdate("20", "exP", "opt_3size" );

// Updating the font styles -----------------------------------------------------

function fontStyleUpdate(style, exampleID, options_btn_class){

let btn = document.querySelector(`#${exampleID}_${style}`);
    btn.addEventListener( "click", fontStyle );

function reset_btn(){
  let buttonStyles = document.querySelectorAll(`.${options_btn_class}`);
  for (let i = 0; i < buttonStyles.length; i++){
       buttonStyles[i].style.backgroundColor = "white";
       buttonStyles[i].style.color = "black";
   }
}
function fontStyle(){
  reset_btn();
   let example = document.querySelector(`#${exampleID}`);
       example.style.fontStyle = `${style}`;
       btn.style.backgroundColor = "black";
       btn.style.color = "white";
 }
}
fontStyleUpdate("normal", "exH1", "opt_1style" );
fontStyleUpdate("italic", "exH1", "opt_1style" );
fontStyleUpdate("oblique", "exH1", "opt_1style" );
fontStyleUpdate("normal", "exH2", "opt_2style" );
fontStyleUpdate("italic", "exH2", "opt_2style" );
fontStyleUpdate("oblique", "exH2", "opt_2style" );
fontStyleUpdate("normal", "exP", "opt_3style" );
fontStyleUpdate("italic", "exP", "opt_3style" );
fontStyleUpdate("oblique", "exP", "opt_3style" );

// Updating the font weights -----------------------------------------------------

function fontWeightUpdate(weight, exampleID, options_btn_class){

let btn = document.querySelector(`#${exampleID}_${weight}`);
    btn.addEventListener( "click", fontWeight );

function reset_btn(){
  let buttonStyles = document.querySelectorAll(`.${options_btn_class}`);
  for (let i = 0; i < buttonStyles.length; i++){
       buttonStyles[i].style.backgroundColor = "white";
       buttonStyles[i].style.color = "black";
   }
}
function fontWeight(){
  reset_btn();
   let example = document.querySelector(`#${exampleID}`);
       example.style.fontWeight = `${weight}`;
       btn.style.backgroundColor = "black";
       btn.style.color = "white";
 }
}
fontWeightUpdate("300", "exH1", "opt_1weight" );
fontWeightUpdate("500", "exH1", "opt_1weight" );
fontWeightUpdate("700", "exH1", "opt_1weight" );
fontWeightUpdate("900", "exH1", "opt_1weight" );
fontWeightUpdate("300", "exH2", "opt_2weight" );
fontWeightUpdate("500", "exH2", "opt_2weight" );
fontWeightUpdate("700", "exH2", "opt_2weight" );
fontWeightUpdate("900", "exH2", "opt_2weight" );
fontWeightUpdate("300", "exP", "opt_3weight" );
fontWeightUpdate("500", "exP", "opt_3weight" );
fontWeightUpdate("700", "exP", "opt_3weight" );
fontWeightUpdate("900", "exP", "opt_3weight" );

// Updating the font families -----------------------------------------------------

function fontFamilyUpdateH1(fontFamilyClass){
  let example_text = document.querySelector("#exH1");

  let classFont = document.querySelector(`.${fontFamilyClass}`);
  classFont.addEventListener("click", fontChange );

  function fontChange(){
      let styles = window.getComputedStyle(classFont);
      let font = styles.getPropertyValue("font-family");
      example_text.style.fontFamily = font;
      let description = classFont.textContent;
      example_text.textContent = "The font-family is - " + description;
    }
}
// H1 Font Fammily Function Calls -------------------
fontFamilyUpdateH1("arial");
fontFamilyUpdateH1("futura");
fontFamilyUpdateH1("geneva");
fontFamilyUpdateH1("gillSands");
fontFamilyUpdateH1("helvetica");
fontFamilyUpdateH1("impact");
fontFamilyUpdateH1("lucidaGrande");
fontFamilyUpdateH1("optima");
fontFamilyUpdateH1("tahoma");
fontFamilyUpdateH1("trebuchetMS");
fontFamilyUpdateH1("verdana");
fontFamilyUpdateH1("americanTypewriter");
fontFamilyUpdateH1("baskerville");
fontFamilyUpdateH1("bigCaslon");
fontFamilyUpdateH1("didot");
fontFamilyUpdateH1("georgia");
fontFamilyUpdateH1("hoeflerText");
fontFamilyUpdateH1("lucidaBright");
fontFamilyUpdateH1("palatino");
fontFamilyUpdateH1("timesNewRoman");
fontFamilyUpdateH1("andaleMono");
fontFamilyUpdateH1("courier");
fontFamilyUpdateH1("courierNew");
fontFamilyUpdateH1("lucidaSansTypewriter");
fontFamilyUpdateH1("monaco");
fontFamilyUpdateH1("copperplate");
fontFamilyUpdateH1("luminari");
fontFamilyUpdateH1("papyrus");
fontFamilyUpdateH1("bradleyHand");
fontFamilyUpdateH1("comicSansMS");
fontFamilyUpdateH1("brushScriptMT");

function fontFamilyUpdateH2(fontFamilyClass){
  let example_textH2 = document.querySelector("#exH2");

  let classFontH2 = document.querySelector(`.${fontFamilyClass}`);
  classFontH2.addEventListener("click", fontChange );

  function fontChange(){
      let styles = window.getComputedStyle(classFontH2);
      let font = styles.getPropertyValue("font-family");
      example_textH2.style.fontFamily = font;
      let description = classFontH2.textContent;
      example_textH2.textContent = "The font-family is - " + description;
    }
}
// H2 Font Fammily Function Calls -------------------
fontFamilyUpdateH2("arial_2");
fontFamilyUpdateH2("futura_2");
fontFamilyUpdateH2("geneva_2");
fontFamilyUpdateH2("gillSands_2");
fontFamilyUpdateH2("helvetica_2");
fontFamilyUpdateH2("impact_2");
fontFamilyUpdateH2("lucidaGrande_2");
fontFamilyUpdateH2("optima_2");
fontFamilyUpdateH2("tahoma_2");
fontFamilyUpdateH2("trebuchetMS_2");
fontFamilyUpdateH2("verdana_2");
fontFamilyUpdateH2("americanTypewriter_2");
fontFamilyUpdateH2("baskerville_2");
fontFamilyUpdateH2("bigCaslon_2");
fontFamilyUpdateH2("didot_2");
fontFamilyUpdateH2("georgia_2");
fontFamilyUpdateH2("hoeflerText_2");
fontFamilyUpdateH2("lucidaBright_2");
fontFamilyUpdateH2("palatino_2");
fontFamilyUpdateH2("timesNewRoman_2");
fontFamilyUpdateH2("andaleMono_2");
fontFamilyUpdateH2("courier_2");
fontFamilyUpdateH2("courierNew_2");
fontFamilyUpdateH2("lucidaSansTypewriter_2");
fontFamilyUpdateH2("monaco_2");
fontFamilyUpdateH2("copperplate_2");
fontFamilyUpdateH2("luminari_2");
fontFamilyUpdateH2("papyrus_2");
fontFamilyUpdateH2("bradleyHand_2");
fontFamilyUpdateH2("comicSansMS_2");
fontFamilyUpdateH2("brushScriptMT_2");

function fontFamilyUpdateP(fontFamilyClass){
  let example_textP = document.querySelector("#exP");

  let classFontP = document.querySelector(`.${fontFamilyClass}`);
  classFontP.addEventListener("click", fontChange );

  function fontChange(){
      let styles = window.getComputedStyle(classFontP);
      let font = styles.getPropertyValue("font-family");
      example_textP.style.fontFamily = font;
      let description = classFontP.textContent;
      example_textP.textContent = "The font-family is - " + description;
    }
}
// P Font Fammily Function Calls -------------------
fontFamilyUpdateP("arial_3");
fontFamilyUpdateP("futura_3");
fontFamilyUpdateP("geneva_3");
fontFamilyUpdateP("gillSands_3");
fontFamilyUpdateP("helvetica_3");
fontFamilyUpdateP("impact_3");
fontFamilyUpdateP("lucidaGrande_3");
fontFamilyUpdateP("optima_3");
fontFamilyUpdateP("tahoma_3");
fontFamilyUpdateP("trebuchetMS_3");
fontFamilyUpdateP("verdana_3");
fontFamilyUpdateP("americanTypewriter_3");
fontFamilyUpdateP("baskerville_3");
fontFamilyUpdateP("bigCaslon_3");
fontFamilyUpdateP("didot_3");
fontFamilyUpdateP("georgia_3");
fontFamilyUpdateP("hoeflerText_3");
fontFamilyUpdateP("lucidaBright_3");
fontFamilyUpdateP("palatino_3");
fontFamilyUpdateP("timesNewRoman_3");
fontFamilyUpdateP("andaleMono_3");
fontFamilyUpdateP("courier_3");
fontFamilyUpdateP("courierNew_3");
fontFamilyUpdateP("lucidaSansTypewriter_3");
fontFamilyUpdateP("monaco_3");
fontFamilyUpdateP("copperplate_3");
fontFamilyUpdateP("luminari_3");
fontFamilyUpdateP("papyrus_3");
fontFamilyUpdateP("bradleyHand_3");
fontFamilyUpdateP("comicSansMS_3");
fontFamilyUpdateP("brushScriptMT_3");

// Reset to the default settings ----------------------------------------------

function resetToDefault(reset_btn ,exampleID ,options_btn_size ,options_btn_style , options_btn_weight){

  let sizes = document.querySelectorAll(`.${options_btn_size}`);
  let styles = document.querySelectorAll(`.${options_btn_style}`);
  let weights = document.querySelectorAll(`.${options_btn_weight}`);
  let example_text = document.querySelector(`#${exampleID}`);

  document.querySelector(`#${reset_btn}`).addEventListener( "click", update );

  function update(){
    for (let i = 0; i < sizes.length; i++){
      sizes[i].style.backgroundColor = "white";
      sizes[i].style.color = "black";
    }
    for (let i = 0; i < styles.length; i++){
      styles[i].style.backgroundColor = "white";
      styles[i].style.color = "black";
    }
    for (let i = 0; i < weights.length; i++){
      weights[i].style.backgroundColor = "white";
      weights[i].style.color = "black";
    }
    example_text.style.fontSize = "1em";
    example_text.style.fontStyle = "normal";
    example_text.style.fontWeight = "bold";
    example_text.style.fontFamily = "sans-serif";

    if (exampleID == "exH1"){
      example_text.textContent = "I'm a h1 header!";
    } else if (exampleID == "exH2"){
      example_text.textContent = "I'm a h2 header!";
    } else if (exampleID == "exP"){
      example_text.textContent = "I'm a paragraph!";
    }
  }

}
resetToDefault("exH1_reset", "exH1", "opt_1size", "opt_1style", "opt_1weight");
resetToDefault("exH2_reset", "exH2", "opt_2size", "opt_2style", "opt_2weight");
resetToDefault("exP_reset", "exP", "opt_3size", "opt_3style", "opt_3weight");
