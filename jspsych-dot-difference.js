/**
 * jspsych plugin for a dot difference task
 * Kit Double (kit.double@sydney.edu.au)
 *
 * documentation: docs.jspsych.org
 **/


jsPsych.plugins['dot-difference'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'dot-difference',
    description: '',
    parameters: {
      choices: {
        type: jsPsych.plugins.parameterType.KEY,
        pretty_name: 'Choices',
        default: null,
        array: true,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      N_dots: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Ratio of dots',
        default: [45,50],
        description: 'The number of dots for the left and right stimulus'
      },
      background_col: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Background Colour',
        default: "grey",
        description: 'Background colour of display'
      },
      dot_col: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Colour of dots',
        default: "white",
        description: 'Colour of the displayed dots'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Prompt for participants",
        default: null,
        description: 'Prompt displayed below the stimulus'
      }
    }
  }




  plugin.trial = function(display_element, trial) {

    // Set baclground colour
  	var body = document.getElementsByClassName("jspsych-display-element")[0];
    var originalBackgroundColor = body.style.backgroundColor;
    body.style.backgroundColor = trial.background_col;

      x = jsPsych.randomization.repeat([trial.N_dots[0],trial.N_dots[1]], 1)




    random_dots = function(n){

      whites = jsPsych.randomization.repeat([trial.dot_col], n[0])
      transparents = jsPsych.randomization.repeat(["transparent"], n[1])
      stim1_cols = transparents.concat(whites);
      stim1_cols = jsPsych.randomization.repeat(stim1_cols, 1)



      whites = jsPsych.randomization.repeat([trial.dot_col], n[1])
      transparents = jsPsych.randomization.repeat(["transparent"], n[0])
      stim2_cols = transparents.concat(whites);
      stim2_cols = jsPsych.randomization.repeat(stim2_cols, 1)

      if(n[0] > n[1]){correct_response = 'left'}
      if(n[1] > n[0]){correct_response = 'right'}


    }

  stim1_cols = [];
  stim2_cols = [];
  correct_response = null;

  random_dots(x);




  html = "<div id = 'box1'><div id = 'box2'><div style='font-size:60pt'><font style='color:" + stim1_cols[0] +";'>.</font><font style='color:" + stim1_cols[1] +";'>.</font><font style='color:" + stim1_cols[2] +";'>.</font><font style='color:" + stim1_cols[3] +";'>.</font><font style='color:" + stim1_cols[4] +";'>.</font><font style='color:" + stim1_cols[5] +";'>.</font><font style='color:" + stim1_cols[6] +";'>.</font><font style='color:" + stim1_cols[7] +";'>.</font><font style='color:" + stim1_cols[8] +";'>.</font><font style='color:" + stim1_cols[9] +";'>.</font><br><font style='color:" + stim1_cols[10] +";'>.</font><font style='color:" + stim1_cols[11] +";'>.</font><font style='color:" + stim1_cols[12] +";'>.</font><font style='color:" + stim1_cols[13] +";'>.</font><font style='color:" + stim1_cols[14] +";'>.</font><font style='color:" + stim1_cols[15] +";'>.</font><font style='color:" + stim1_cols[16] +";'>.</font><font style='color:" + stim1_cols[17] +";'>.</font><font style='color:" + stim1_cols[18] +";'>.</font><font style='color:" + stim1_cols[19] +";'>.</font><br><font style='color:" + stim1_cols[20] +";'>.</font><font style='color:" + stim1_cols[21] +";'>.</font><font style='color:" + stim1_cols[22] +";'>.</font><font style='color:" + stim1_cols[23] +";'>.</font><font style='color:" + stim1_cols[24] +";'>.</font><font style='color:" + stim1_cols[25] +";'>.</font><font style='color:" + stim1_cols[26] +";'>.</font><font style='color:" + stim1_cols[27] +";'>.</font><font style='color:" + stim1_cols[28] +";'>.</font><font style='color:" + stim1_cols[29] +";'>.</font><br><font style='color:" + stim1_cols[30] +";'>.</font><font style='color:" + stim1_cols[31] +";'>.</font><font style='color:" + stim1_cols[32] +";'>.</font><font style='color:" + stim1_cols[33] +";'>.</font><font style='color:" + stim1_cols[34] +";'>.</font><font style='color:" + stim1_cols[35] +";'>.</font><font style='color:" + stim1_cols[36] +";'>.</font><font style='color:" + stim1_cols[37] +";'>.</font><font style='color:" + stim1_cols[38] +";'>.</font><font style='color:" + stim1_cols[39] +";'>.</font><br><font style='color:" + stim1_cols[40] +";'>.</font><font style='color:" + stim1_cols[41] +";'>.</font><font style='color:" + stim1_cols[42] +";'>.</font><font style='color:" + stim1_cols[43] +";'>.</font><font style='color:" + stim1_cols[44] +";'>.</font><font style='color:" + stim1_cols[45] +";'>.</font><font style='color:" + stim1_cols[46] +";'>.</font><font style='color:" + stim1_cols[47] +";'>.</font><font style='color:" + stim1_cols[48] +";'>.</font><font style='color:" + stim1_cols[49] +";'>.</font><br><font style='color:" + stim1_cols[50] +";'>.</font><font style='color:" + stim1_cols[51] +";'>.</font><font style='color:" + stim1_cols[52] +";'>.</font><font style='color:" + stim1_cols[53] +";'>.</font><font style='color:" + stim1_cols[54] +";'>.</font><font style='color:" + stim1_cols[55] +";'>.</font><font style='color:" + stim1_cols[56] +";'>.</font><font style='color:" + stim1_cols[57] +";'>.</font><font style='color:" + stim1_cols[58] +";'>.</font><font style='color:" + stim1_cols[59] +";'>.</font><br><font style='color:" + stim1_cols[60] +";'>.</font><font style='color:" + stim1_cols[61] +";'>.</font><font style='color:" + stim1_cols[62] +";'>.</font><font style='color:" + stim1_cols[63] +";'>.</font><font style='color:" + stim1_cols[64] +";'>.</font><font style='color:" + stim1_cols[65] +";'>.</font><font style='color:" + stim1_cols[66] +";'>.</font><font style='color:" + stim1_cols[67] +";'>.</font><font style='color:" + stim1_cols[68] +";'>.</font><font style='color:" + stim1_cols[69] +";'>.</font><br><font style='color:" + stim1_cols[70] +";'>.</font><font style='color:" + stim1_cols[71] +";'>.</font><font style='color:" + stim1_cols[72] +";'>.</font><font style='color:" + stim1_cols[73] +";'>.</font><font style='color:" + stim1_cols[74] +";'>.</font><font style='color:" + stim1_cols[75] +";'>.</font><font style='color:" + stim1_cols[76] +";'>.</font><font style='color:" + stim1_cols[77] +";'>.</font><font style='color:" + stim1_cols[78] +";'>.</font><font style='color:" + stim1_cols[79] +";'>.</font><br><font style='color:" + stim1_cols[80] +";'>.</font><font style='color:" + stim1_cols[81] +";'>.</font><font style='color:" + stim1_cols[82] +";'>.</font><font style='color:" + stim1_cols[83] +";'>.</font><font style='color:" + stim1_cols[84] +";'>.</font><font style='color:" + stim1_cols[85] +";'>.</font><font style='color:" + stim1_cols[86] +";'>.</font><font style='color:" + stim1_cols[87] +";'>.</font><font style='color:" + stim1_cols[88] +";'>.</font><font style='color:" + stim1_cols[89] +";'>.</font><br><font style='color:" + stim1_cols[90] +";'>.</font><font style='color:" + stim1_cols[91] +";'>.</font><font style='color:" + stim1_cols[92] +";'>.</font><font style='color:" + stim1_cols[93] +";'>.</font><font style='color:" + stim1_cols[94] +";'>.</font><font style='color:" + stim1_cols[95] +";'>.</font><font style='color:" + stim1_cols[96] +";'>.</font><font style='color:" + stim1_cols[97] +";'>.</font><font style='color:" + stim1_cols[98] +";'>.</font><font style='color:" + stim1_cols[99] +";'>.</font><br></div></div>"


    html += "<div id = 'box3'><div style='font-size:60pt'><font style='color:" + stim2_cols[0] +";'>.</font><font style='color:" + stim2_cols[1] +";'>.</font><font style='color:" + stim2_cols[2] +";'>.</font><font style='color:" + stim2_cols[3] +";'>.</font><font style='color:" + stim2_cols[4] +";'>.</font><font style='color:" + stim2_cols[5] +";'>.</font><font style='color:" + stim2_cols[6] +";'>.</font><font style='color:" + stim2_cols[7] +";'>.</font><font style='color:" + stim2_cols[8] +";'>.</font><font style='color:" + stim2_cols[9] +";'>.</font><br><font style='color:" + stim2_cols[10] +";'>.</font><font style='color:" + stim2_cols[11] +";'>.</font><font style='color:" + stim2_cols[12] +";'>.</font><font style='color:" + stim2_cols[13] +";'>.</font><font style='color:" + stim2_cols[14] +";'>.</font><font style='color:" + stim2_cols[15] +";'>.</font><font style='color:" + stim2_cols[16] +";'>.</font><font style='color:" + stim2_cols[17] +";'>.</font><font style='color:" + stim2_cols[18] +";'>.</font><font style='color:" + stim2_cols[19] +";'>.</font><br><font style='color:" + stim2_cols[20] +";'>.</font><font style='color:" + stim2_cols[21] +";'>.</font><font style='color:" + stim2_cols[22] +";'>.</font><font style='color:" + stim2_cols[23] +";'>.</font><font style='color:" + stim2_cols[24] +";'>.</font><font style='color:" + stim2_cols[25] +";'>.</font><font style='color:" + stim2_cols[26] +";'>.</font><font style='color:" + stim2_cols[27] +";'>.</font><font style='color:" + stim2_cols[28] +";'>.</font><font style='color:" + stim2_cols[29] +";'>.</font><br><font style='color:" + stim2_cols[30] +";'>.</font><font style='color:" + stim2_cols[31] +";'>.</font><font style='color:" + stim2_cols[32] +";'>.</font><font style='color:" + stim2_cols[33] +";'>.</font><font style='color:" + stim2_cols[34] +";'>.</font><font style='color:" + stim2_cols[35] +";'>.</font><font style='color:" + stim2_cols[36] +";'>.</font><font style='color:" + stim2_cols[37] +";'>.</font><font style='color:" + stim2_cols[38] +";'>.</font><font style='color:" + stim2_cols[39] +";'>.</font><br><font style='color:" + stim2_cols[40] +";'>.</font><font style='color:" + stim2_cols[41] +";'>.</font><font style='color:" + stim2_cols[42] +";'>.</font><font style='color:" + stim2_cols[43] +";'>.</font><font style='color:" + stim2_cols[44] +";'>.</font><font style='color:" + stim2_cols[45] +";'>.</font><font style='color:" + stim2_cols[46] +";'>.</font><font style='color:" + stim2_cols[47] +";'>.</font><font style='color:" + stim2_cols[48] +";'>.</font><font style='color:" + stim2_cols[49] +";'>.</font><br><font style='color:" + stim2_cols[50] +";'>.</font><font style='color:" + stim2_cols[51] +";'>.</font><font style='color:" + stim2_cols[52] +";'>.</font><font style='color:" + stim2_cols[53] +";'>.</font><font style='color:" + stim2_cols[54] +";'>.</font><font style='color:" + stim2_cols[55] +";'>.</font><font style='color:" + stim2_cols[56] +";'>.</font><font style='color:" + stim2_cols[57] +";'>.</font><font style='color:" + stim2_cols[58] +";'>.</font><font style='color:" + stim2_cols[59] +";'>.</font><br><font style='color:" + stim2_cols[60] +";'>.</font><font style='color:" + stim2_cols[61] +";'>.</font><font style='color:" + stim2_cols[62] +";'>.</font><font style='color:" + stim2_cols[63] +";'>.</font><font style='color:" + stim2_cols[64] +";'>.</font><font style='color:" + stim2_cols[65] +";'>.</font><font style='color:" + stim2_cols[66] +";'>.</font><font style='color:" + stim2_cols[67] +";'>.</font><font style='color:" + stim2_cols[68] +";'>.</font><font style='color:" + stim2_cols[69] +";'>.</font><br><font style='color:" + stim2_cols[70] +";'>.</font><font style='color:" + stim2_cols[71] +";'>.</font><font style='color:" + stim2_cols[72] +";'>.</font><font style='color:" + stim2_cols[73] +";'>.</font><font style='color:" + stim2_cols[74] +";'>.</font><font style='color:" + stim2_cols[75] +";'>.</font><font style='color:" + stim2_cols[76] +";'>.</font><font style='color:" + stim2_cols[77] +";'>.</font><font style='color:" + stim2_cols[78] +";'>.</font><font style='color:" + stim2_cols[79] +";'>.</font><br><font style='color:" + stim2_cols[80] +";'>.</font><font style='color:" + stim2_cols[81] +";'>.</font><font style='color:" + stim2_cols[82] +";'>.</font><font style='color:" + stim2_cols[83] +";'>.</font><font style='color:" + stim2_cols[84] +";'>.</font><font style='color:" + stim2_cols[85] +";'>.</font><font style='color:" + stim2_cols[86] +";'>.</font><font style='color:" + stim2_cols[87] +";'>.</font><font style='color:" + stim2_cols[88] +";'>.</font><font style='color:" + stim2_cols[89] +";'>.</font><br><font style='color:" + stim2_cols[90] +";'>.</font><font style='color:" + stim2_cols[91] +";'>.</font><font style='color:" + stim2_cols[92] +";'>.</font><font style='color:" + stim2_cols[93] +";'>.</font><font style='color:" + stim2_cols[94] +";'>.</font><font style='color:" + stim2_cols[95] +";'>.</font><font style='color:" + stim2_cols[96] +";'>.</font><font style='color:" + stim2_cols[97] +";'>.</font><font style='color:" + stim2_cols[98] +";'>.</font><font style='color:" + stim2_cols[99] +";'>.</font><br></div></div>"

    html += "<div id = 'fixation'><p style='position: absolute;left: 48%;width: 4%;font-size:80pt'>+</p></div>"
    html += "</div>"



    display_element.innerHTML = html



    // hide image after time if the timing parameter is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#box2').style.visibility = 'hidden';
        display_element.querySelector('#box3').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // if prompt is set, show prompt
    if (trial.prompt !== null) {
      display_element.innerHTML += trial.prompt;
    }

    var trial_data = {};

    // create response function
    var after_response = function(info) {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // Scoring
       correct = false;
      if(correct_response == 'left' & info.key == trial.choices[0]){correct = true}
      if(correct_response == 'right' & info.key == trial.choices[1]){correct = true}


      // save data
      trial_data = {
        rt: info.rt,
        correct: correct,
        N_dots: trial.N_dots,
        response: info.key,
        correct_response: correct_response
      };

      display_element.innerHTML = '';

      var timeout = info.rt == null;
      endTrial()

    }

    jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.choices,
      rt_method: 'performance',
      persist: false,
      allow_held_key: false
    });

    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        after_response({
          key: null,
          rt: null
        });
      }, trial.trial_duration);
    }



    function endTrial() {
      body.style.backgroundColor = originalBackgroundColor;
      display_element.innerHTML = '';
      jsPsych.finishTrial(trial_data);
    }

  };

  return plugin;
})();
