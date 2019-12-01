var timeline = {
  "timeline": [
    {
      "type": ["instructions"],
      "pages": ["Welcome! Use the arrow buttons to browse these instructions", "Your task is to decide how masculine and how feminine is the body", "You will respond by clicking a button", "Press the 'Next' button to begin!"],
      "key_forward": ["rightarrow"],
      "key_backward": ["leftarrow"],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Next"],
      "post_trial_gap": [1000]
    },
    {
      "timeline": [
        {
          "type": ["image-slider-response"],
          "stimulus": jsPsych.timelineVariable('my_stimulus'),
          "stimulus_height": [180],
          "stimulus_width": [180],
          "maintain_aspect_ratio": true,
          "labels": ["very masculine", "very feminine"],
          "button_label": ["Continue"],
          "min": [0],
          "max": [100],
          "start": [50],
          "step": [1],
          "require_movement": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000]
        }
      ],
      "timeline_variables": [
        {
          "my_stimulus": ["resource/image/Female_1.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_10.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_11.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_12.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_13.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_14.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_15.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_16.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_17.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_18.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_19.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_2.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_20.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_21.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_3.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_4.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_5.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_6.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_7.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_8.png"]
        },
        {
          "my_stimulus": ["resource/image/Female_9.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_1.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_10.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_11.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_12.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_13.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_14.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_15.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_16.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_17.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_18.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_19.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_2.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_20.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_21.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_3.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_4.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_5.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_6.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_7.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_8.png"]
        },
        {
          "my_stimulus": ["resource/image/Male_9.png"]
        }
      ],
      "randomize_order": [true]
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["All done! Press any key to finish"],
      "choices": jsPsych.ANY_KEY,
      "response_ends_trial": true,
      "post_trial_gap": [0]
    }
  ]
};

jsPsych.init(
{
  "timeline": [timeline],
  "on_finish": function() {
    var data = jsPsych.data.get().csv();
    var file = 'xprmntr_local_name';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: file, filedata: data}));
  }
}
);
