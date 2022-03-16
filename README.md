# jsPsych Dot Difference Plugin
jsPsych implementation of a dot difference paradigm 

 

## Parameters

This plugin accepts the following parameters. 


| Parameter     | Type          | Default Value | Description
| ------------- | ------------- |------------- | ------------- |
| choices       | array | null | Keyboard response options e.g. `['p', 'q'] |
| N_dots        | array | [45,50] | An array of the number of dots for the left and right stimulus respectively |
| background_col | sting | "grey" | Background colour for stimulus
| dot_col         | sting | "white" | Dot colour for stimulus |
| stimulus_duration | integer | null | The time that the stimulus is displayed on screen |
| trial_duration | integer | null | The total trial duration |
| prompt | integer | null | A prompt displayed below the stimulus |


## Data generated

In addition to the default data collected by all plugins, this plugin collects the following data for each trial.

| Name          | Type          | Value
| ------------- | ------------- |------------- |
| rt | numeric | The response time in milliseconds for the subject to make a response. The time is measured from when the stimulus first appears on the screen until the subject's response.|
| correct | boolean | `true` if the subject got the correct answer, `false` otherwise.|
| response | string | Indicates which key the subject pressed.|
| correct_response | string | Indicates which key was the correct response.|
| N_dots | array | Records the number of dots displayed in the left and right stimulus | 


## Example

```javascript

var dot_trial = {
    type: "dot-difference",
    choices: ['p', 'q'],
    N_dots: [45,55],
    background_col: "grey",
    stimulus_duration: 160,
    trial_duration: 2000
};

```
