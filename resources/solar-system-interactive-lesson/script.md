# Script — v01

Date: 2026-10-17. Language: English throughout. Status: Draft; owner approval pending.

Target: approximately 14:00. Timecodes are planning estimates, not recorded timing. Read naturally around 130–145 wpm; allow purposeful action/reading holds. Revise timing against the actual voice take; never stretch silence to fill runtime. Bracketed production cues are not spoken.

## S01 · 00:00–00:45 · Show the destination

What if your next lesson started with a question, instead of a wall of text? Here is a solar-system overview. We can look at the whole picture, choose Earth, explore a detail, and return without losing our place. That is the presentation we are going to build in TrySlides. We will start with a blank slide, create a clear visual structure, and turn that structure into a small interactive learning experience. This is a handmade example, not an automatic lesson generator. By the end, you will know how to adapt the same approach to a topic you teach.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S02 · 00:45–01:50 · Decide what the learner should do

Before opening the editor, decide what the learner should understand. Our goal is deliberately small: recognize the overview, locate Earth, and explore a focused explanation. We are not trying to teach the entire solar system in one screen. We are designing a starting point for a conversation. The learning question is: where is Earth in our solar system? Our presentation needs three moments: an overview, an Earth detail, and a clear route back. Think of those moments as a path, not a collection of effects. We will use a simplified diagram, so the screen must also say that sizes and distances are not to scale. That qualification matters: a clean illustration should never accidentally teach the wrong proportions. Keep the objective visible in your notes while you build. Every extra label should help answer that question.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S03 · 01:50–03:00 · Create a clean starting point

Open TrySlides on a desktop computer and sign in with Google if you are not already signed in. Create a new blank presentation and give it a name you can recognize later: Our solar system. We are starting from scratch because seeing the structure take shape is useful for this lesson. Templates can be helpful too, but we do not need one for this example. Here is the slide canvas, where the content lives. The navigation on the left keeps track of slides, and the properties panel lets us adjust the selected element. Those are the areas we need first. Add the heading Our solar system, then place a shorter question underneath: Where is Earth? Keep both within the slide boundaries. Choose the Dark presentation theme to give this lesson a dark backdrop. This changes the slide’s visual theme, not just the editor appearance. We will check the composition in presentation mode later, rather than trusting only the editing view.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S04 · 03:00–04:35 · Build a readable overview

Now let us build the overview with images and editable labels. Import the transparent Sun image first, then import a separate transparent PNG for each planet. We will arrange the eight planets in order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. To keep the labels readable, the diagram can wrap onto a second row. Add small order numbers so the reading direction remains clear. This is a teaching diagram, not an orbital simulation. The planet images do not represent the real relative sizes, and the gaps do not represent real distances. Put that note on the slide, where the audience can actually see it. Give Earth a clear label and enough visual separation from the surrounding planets, but do not depend on color alone. A learner should still be able to identify it from the wording and its position. I am showing the first planet import and label in full; the repeated setup is shortened in the edit. When all the labels are in place, stop moving the cursor and look at the whole composition. Is the reading order obvious? Is there enough space around Earth for it to become our entry point?

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S05 · 04:35–05:55 · Create hierarchy, not clutter

A diagram becomes useful when the viewer knows where to look. Let us read the hierarchy in this overview. The heading names the topic. The shorter question gives the learner a task. The planet labels identify the images, while their order helps us locate Earth. Each piece of text has a different job. Notice the space between the objects and their labels: the words should remain connected to the right planet without competing with the image. We are reviewing the finished arrangement, not comparing two different versions. The dark background supports the chosen tone, but the content still needs to be readable. Check the title, question, and labels at a normal viewing size. If anything is hard to read, adjust it before continuing. The goal is not to add more decoration. It is to make the next action clear.

[Use the real R03 result after visual review. No fabricated before/after. D011 supersedes the refinement demonstration; scene and cutdown timing remain provisional until narration is recorded.]

## S06 · 05:55–07:45 · Use a Step to focus on the same object

This is where Steps become useful. Base is the starting visual state of our slide. A Step is another state of that same slide. It lets us change the arrangement without pretending that we have moved to an unrelated page. Add a Step from the Steps controls. A new Step starts from the preceding visual state, so we can work with the Earth object already in our diagram. We imported the high-resolution Earth image from the start, so we can keep using that same element. Select that existing Earth, make it larger, and move it into the main focus area. Reposition the surrounding content so there is space for a short explanation. Do not reimport Earth as a new image just because it looks the same. Keeping the same object is what gives this movement continuity during playback. If an object is missing from a later state, the documented forward copy-and-paste workflow can preserve its identity within the same slide; ordinary duplication creates an independent object. For this example, we keep the inherited object instead. Now switch back to Base. The overview should still look like an overview. Switch to the detail Step again. Earth should be larger there. That is the distinction we want to see: one slide, different visual states, each serving a different part of the explanation.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S07 · 07:45–08:50 · Write only the detail needed now

In the detail state, add a heading: Earth. Under it, write one useful fact: Earth is the third planet from the Sun. Then add a short teaching prompt: Find Earth in the overview. The fact supports the learning goal, and the prompt gives the learner something to do with it. We do not need to fill the empty space with more facts just because there is room. Keep the enlarged Earth and the words close enough to feel connected, but leave breathing room around both. Add a clearly labeled Back element. At this point it is only visible content; we still need to configure what happens when someone clicks it. That difference is important. A button-shaped object does not become navigation simply because it looks clickable. In the next step, we will connect the visible elements to actual destinations.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S08 · 08:50–10:25 · Make the route explicit

Return to Base and select Earth in the overview. In Properties, use the plus button beside Interactions. Choose Click as the event, then choose navigation to the Earth detail Step as the destination, and save the interaction. The interaction chooses where we go. The Step defines what we see when we arrive. Those are two different jobs. Now select the Earth detail state and choose the Back element. Add a Click interaction that returns to Base, and save it. Configure this return path in the detail state itself. Interactions belong to their state; adding one somewhere else does not automatically make it available everywhere. This small detail is easy to miss when the slide looks finished. We are using a click path rather than making hover the only way to explore. The next check happens in presentation playback, not by clicking objects while editing them. If a destination is missing or the form was closed before saving, stop and fix it. Do not work around a broken route by making a cut in the video look like a successful click.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S09 · 10:25–11:35 · Test the complete learner journey

Use Present to test the route as your audience will experience it. First, pause on the overview. Can you read the heading and planet labels without leaning toward the screen? Click Earth and let the focused state finish moving. Read the explanation, then use Back. Repeat the journey once more. We are checking more than whether a click works. We are checking whether the viewer understands where they are and how to return. Look for content clipped by the presentation frame, labels covered by larger objects, or a return control that disappears into the background. If something fails, go back to the correct state in the editor, fix the actual destination or layout, and test again. Keep one uninterrupted recording of the successful round trip. That recording is our evidence that this path works; an editorial transition is not a substitute for it.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S10 · 11:35–12:40 · Choose the right output

The delivery format changes what the audience can do. Open the presentation menu and look under Downloads. Editable gives you a tryslides file: a portable copy you can keep as a backup or send to someone else. They can import it into TrySlides and edit their own copy. That is a file hand-off, not live collaboration. Offline is the HTML option for browser playback with Steps and interactions. PDF gives you static pages for the slide and its Steps, without the interactive navigation or animation. Plain text gives you the written content without the images or visual layout. Choose the format for what your learner needs. Before sending a file, open and check it: test the route in HTML, inspect the PDF pages, or verify the editable copy imports correctly. None of these options is a video export. The tutorial you are watching is edited separately.

[Revised per D013. Show real R09 menu plus clearly editorial format comparison. Do not imply this shot shows successful downloads, HTML playback or PDF/import validation. Those checks remain off-camera QA. Timing is provisional until revised narration is recorded.]

## S11 · 12:40–13:30 · Turn the example into a reusable method

Let us separate the method from the solar-system artwork. We started with one question. We built an overview that made the question visible. We used a focused state for the explanation, added a clear route back, and tested the full journey. You can apply that structure to a labeled diagram, a map of ideas, or the parts of a process. The content changes; the need for clear orientation does not. A useful next exercise is to build a second detail state for a different planet, with its own verified fact and its own return interaction. We have not built that extension in this lesson, so it is a practice task rather than a hidden feature of our finished example. Start small, keep the labels readable, and let each state earn its place in the explanation.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]

## S12 · 13:30–14:00 · Close with a useful next action

You now have a complete path: a clear overview, a focused explanation, and a way back. That is the foundation of this small interactive lesson in TrySlides. For your own version, choose one topic and one question. Build the simplest overview that supports it, add one useful detail, and test the route before you add anything else. Save this walkthrough for your next lesson, and subscribe for the next TrySlides tutorial.

[Hold on the resulting visual long enough to read; follow the corresponding timeline action. Do not read this cue aloud.]
