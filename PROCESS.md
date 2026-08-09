# Process overview

## What I built

I built a responsive website for ACT Wildlife, a wildlife rescue and rehabilitation organisation. The website is designed around a clear visual identity using native Australian wildlife imagery, green and orange brand colours, and a responsive layout that adapts between desktop and mobile. Beyond reproducing the organisation's core information and navigation, I focused on making the interface feel polished and usable across different screen sizes, including responsive navigation, interactive dropdowns, mobile scrolling behaviour, and a floating emergency hotline interaction.

## The moments that mattered
### Moment 1: Learning to constrain the Agent

1. **What happened**: Early in the development process, the Agent sometimes made changes beyond what I intended. For example, when I asked for small navigation or typography adjustments, it occasionally modified related styles or started running commands before I had finished specifying the desired change. This made it difficult to determine which change had caused a new visual issue.
2. **What you did instead**: I changed how I instructed the Agent. Instead of giving broad instructions such as “fix the header”, I began explicitly defining the scope of each task and asking the Agent to inspect the existing implementation first. I instructed it to explain what was causing the problem, identify the exact files or rules involved, and make only the smallest necessary change. I also separated visual changes into individual steps rather than asking for several unrelated changes at once.
3. **How you knew it was right**: I checked the result directly in the browser at the relevant viewport size and compared the changed element against the surrounding existing design. I also reviewed the Agent's reported file changes to make sure unrelated components had not been modified.
44. **Citation**: [`72a6532`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Januaraine/commit/72a65321bea6a907c58e354d69580acbc10e9746)


### Moment 2: Debugging the navigation beyond the obvious href

1. **What happened**: Early in the development process, the Agent sometimes made changes beyond what I intended. For example, when I asked for small navigation or typography adjustments, it occasionally modified related styles or started running commands before I had finished specifying the desired change. This made it difficult to determine which change had caused a new visual issue.
2. **What you did instead**: I changed how I instructed the Agent. Instead of giving broad instructions such as “fix the header”, I began explicitly defining the scope of each task and asking the Agent to inspect the existing implementation first. I instructed it to explain what was causing the problem, identify the exact files or rules involved, and make only the smallest necessary change. I also separated visual changes into individual steps rather than asking for several unrelated changes at once.
3. **How you knew it was right**: I checked the result directly in the browser at the relevant viewport size and compared the changed element against the surrounding existing design. I also reviewed the Agent's reported file changes to make sure unrelated components had not been modified.
4. **Citation**: [`9649675`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Januaraine/commit/964967587882bef49c53731765289d30b2b78020)