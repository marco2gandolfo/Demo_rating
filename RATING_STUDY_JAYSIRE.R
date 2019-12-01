library(jaysire)

resource_folder <- file.path(paste0(getwd(),"/images"))
image_files <- list.files(resource_folder)
exppath <- file.path(getwd())

# ----------- instructions -----------
instructions <- trial_instructions(
  pages = c(
    "Welcome! Use the arrow buttons to browse these instructions",
    "Your task is to decide how masculine and how feminine is the body",
    "You will respond by clicking a button",
    "Press the 'Next' button to begin!"
  ),
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# ----------- template -----------
trial_template <- trial_image_slider_response(
  stimulus = insert_variable(name = "my_stimulus"),
  stimulus_height = 180,
  stimulus_width = 180,
  labels = c("very masculine", "very feminine"),
  post_trial_gap = 1000
)




# ----------- template -----------
trials <- build_timeline(trial_template) %>%
  tl_add_variables(my_stimulus = insert_resource(image_files)) %>%
  tl_add_parameters(randomize_order = TRUE)


# ----------- final trial -----------
finish <- trial_html_keyboard_response(
  stimulus = "All done! Press any key to finish",
  choices = respond_any_key()
)



# ----------- build the experiment -----------
build_experiment(
  timeline = build_timeline(instructions, trials, finish),
  path = exppath,
  resources = build_resources(resource_folder, image = ".png"),
  on_finish = fn_save_locally()
)


run_locally(exppath)



