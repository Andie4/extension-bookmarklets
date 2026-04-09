javascript: (function() {
    javascript: ! function() {
        let e = "Perceivable",
            t = "Operable",
            n = "Understandable",
            r = "Robust",
            i = "https://www.w3.org/TR/WCAG22/";
        if (window.wcagData = [{
                url: i + "#non-text-content",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
                title: "WCAG 2.2 Success Criterion 1.1.1 Non-text Content",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#audio-only-and-video-only-prerecorded",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html",
                title: "WCAG 2.2 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded)",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#captions-prerecorded",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html",
                title: "WCAG 2.2 Success Criterion 1.2.2 Captions (Prerecorded)",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#audio-description-or-media-alternative-prerecorded",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html",
                title: "WCAG 2.2 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#captions-live",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html",
                title: "WCAG 2.2 Success Criterion 1.2.4 Captions (Live)",
                level: "AA",
                version: "2.0",
                category: e
            }, {
                url: i + "#audio-description-prerecorded",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html",
                title: "WCAG 2.2 Success Criterion 1.2.5 Audio Description (Prerecorded)",
                level: "AA",
                version: "2.0",
                category: e
            }, {
                url: i + "#sign-language-prerecorded",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html",
                title: "WCAG 2.2 Success Criterion 1.2.6 Sign Language (Prerecorded)",
                level: "AAA",
                version: "2.0",
                category: e
            }, {
                url: i + "#extended-audio-description-prerecorded",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html",
                title: "WCAG 2.2 Success Criterion 1.2.7 Extended Audio Description (Prerecorded)",
                level: "AAA",
                version: "2.0",
                category: e
            }, {
                url: i + "#media-alternative-prerecorded",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html",
                title: "WCAG 2.2 Success Criterion 1.2.8 Media Alternative (Prerecorded)",
                level: "AAA",
                version: "2.0",
                category: e
            }, {
                url: i + "#audio-only-live",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html",
                title: "WCAG 2.2 Success Criterion 1.2.9 Audio-only (Live)",
                level: "AAA",
                version: "2.0",
                category: e
            }, {
                url: i + "#info-and-relationships",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
                title: "WCAG 2.2 Success Criterion 1.3.1 Info and Relationships",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#meaningful-sequence",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html",
                title: "WCAG 2.2 Success Criterion 1.3.2 Meaningful Sequence",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#sensory-characteristics",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html",
                title: "WCAG 2.2 Success Criterion 1.3.3 Sensory Characteristics",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#orientation",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/orientation.html",
                title: "WCAG 2.2 Success Criterion 1.3.4 Orientation",
                level: "AA",
                version: "2.1",
                category: e
            }, {
                url: i + "#identify-input-purpose",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html",
                title: "WCAG 2.2 Success Criterion 1.3.5 Identify Input Purpose",
                level: "AA",
                version: "2.1",
                category: e
            }, {
                url: i + "#identify-purpose",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html",
                title: "WCAG 2.2 Success Criterion 1.3.6 Identify Purpose",
                level: "AAA",
                version: "2.1",
                category: e
            }, {
                url: i + "#use-of-color",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
                title: "WCAG 2.2 Success Criterion 1.4.1 Use of Color",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#audio-control",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html",
                title: "WCAG 2.2 Success Criterion 1.4.2 Audio Control",
                level: "A",
                version: "2.0",
                category: e
            }, {
                url: i + "#contrast-minimum",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
                title: "WCAG 2.2 Success Criterion 1.4.3 Contrast (Minimum)",
                level: "AA",
                version: "2.0",
                category: e
            }, {
                url: i + "#resize-text",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
                title: "WCAG 2.2 Success Criterion 1.4.4 Resize Text",
                level: "AA",
                version: "2.0",
                category: e
            }, {
                url: i + "#images-of-text",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html",
                title: "WCAG 2.2 Success Criterion 1.4.5 Images of Text",
                level: "AA",
                version: "2.0",
                category: e
            }, {
                url: i + "#contrast-enhanced",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html",
                title: "WCAG 2.2 Success Criterion 1.4.6 Contrast (Enhanced)",
                level: "AAA",
                version: "2.1",
                category: e
            }, {
                url: i + "#low-or-no-background-audio",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html",
                title: "WCAG 2.2 Success Criterion 1.4.7 Low or No Background Audio",
                level: "AAA",
                version: "2.0",
                category: e
            }, {
                url: i + "#visual-presentation",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html",
                title: "WCAG 2.2 Success Criterion 1.4.8 Visual Presentation",
                level: "AAA",
                version: "2.0",
                category: e
            }, {
                url: i + "#images-of-text-no-exception",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html",
                title: "WCAG 2.2 Success Criterion 1.4.9 Images of Text (No Exception)",
                level: "AAA",
                version: "2.0",
                category: e
            }, {
                url: i + "#reflow",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
                title: "WCAG 2.2 Success Criterion 1.4.10 Reflow",
                level: "AA",
                version: "2.1",
                category: e
            }, {
                url: i + "#non-text-contrast",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
                title: "WCAG 2.2 Success Criterion 1.4.11 Non-text Contrast",
                level: "AA",
                version: "2.1",
                category: e
            }, {
                url: i + "#text-spacing",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html",
                title: "WCAG 2.2 Success Criterion 1.4.12 Text Spacing",
                level: "AA",
                version: "2.1",
                category: e
            }, {
                url: i + "#content-on-hover-or-focus",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html",
                title: "WCAG 2.2 Success Criterion 1.4.13 Content on Hover or Focus",
                level: "AA",
                version: "2.1",
                category: t
            }, {
                url: i + "#keyboard",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
                title: "WCAG 2.2 Success Criterion 2.1.1 Keyboard",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#no-keyboard-trap",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
                title: "WCAG 2.2 Success Criterion 2.1.2 No Keyboard Trap",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#keyboard-no-exception",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html",
                title: "WCAG 2.2 Success Criterion 2.1.3 Keyboard (No Exception)",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#character-key-shortcuts",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html",
                title: "WCAG 2.2 Success Criterion 2.1.4 Character Key Shortcuts",
                level: "A",
                version: "2.1",
                category: t
            }, {
                url: i + "#timing-adjustable",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html",
                title: "WCAG 2.2 Success Criterion 2.2.1 Timing Adjustable",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#pause-stop-hide",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
                title: "WCAG 2.2 Success Criterion 2.2.2 Pause, Stop, Hide",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#no-timing",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html",
                title: "WCAG 2.2 Success Criterion 2.2.3 No Timing",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#interruptions",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html",
                title: "WCAG 2.2 Success Criterion 2.2.4 Interruptions",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#re-authenticating",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html",
                title: "WCAG 2.2 Success Criterion 2.2.5 Re-authenticating",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#timeouts",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html",
                title: "WCAG 2.2 Success Criterion 2.2.6 Timeouts",
                level: "AAA",
                version: "2.1",
                category: t
            }, {
                url: i + "#three-flashes-or-below-threshold",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html",
                title: "WCAG 2.2 Success Criterion 2.3.1 Three Flashes or Below Threshold",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#three-flashes",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html",
                title: "WCAG 2.2 Success Criterion 2.3.2 Three Flashes",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#animation-from-interactions",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
                title: "WCAG 2.2 Success Criterion 2.3.3 Animation from Interactions",
                level: "AAA",
                version: "2.1",
                category: t
            }, {
                url: i + "#bypass-blocks",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
                title: "WCAG 2.2 Success Criterion 2.4.1 Bypass Blocks",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#page-titled",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html",
                title: "WCAG 2.2 Success Criterion 2.4.2 Page Titled",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#focus-order",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
                title: "WCAG 2.2 Success Criterion 2.4.3 Focus Order",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#link-purpose-in-context",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html",
                title: "WCAG 2.2 Success Criterion 2.4.4 Link Purpose (In Context)",
                level: "A",
                version: "2.0",
                category: t
            }, {
                url: i + "#multiple-ways",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html",
                title: "WCAG 2.2 Success Criterion 2.4.5 Multiple Ways",
                level: "AA",
                version: "2.0",
                category: t
            }, {
                url: i + "#headings-and-labels",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
                title: "WCAG 2.2 Success Criterion 2.4.6 Headings and Labels",
                level: "AA",
                version: "2.0",
                category: t
            }, {
                url: i + "#focus-visible",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
                title: "WCAG 2.2 Success Criterion 2.4.7 Focus Visible",
                level: "AA",
                version: "2.0",
                category: t
            }, {
                url: i + "#location",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/location.html",
                title: "WCAG 2.2 Success Criterion 2.4.8 Location",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#link-purpose-link-only",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html",
                title: "WCAG 2.2 Success Criterion 2.4.9 Link Purpose (Link Only)",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#section-headings",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html",
                title: "WCAG 2.2 Success Criterion 2.4.10 Section Headings",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#focus-not-obscured-minimum",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
                title: "WCAG 2.2 Success Criterion 2.4.11 Focus Not Obscured (Minimum)",
                level: "AA",
                version: "2.0",
                category: t
            }, {
                url: i + "#focus-not-obscured-enhanced",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html",
                title: "WCAG 2.2 Success Criterion 2.4.12 Focus Not Obscured (Enhanced)",
                level: "AA",
                version: "2.0",
                category: t
            }, {
                url: i + "#focus-appearance",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html",
                title: "WCAG 2.2 Success Criterion 2.4.13 Focus Appearance",
                level: "AAA",
                version: "2.0",
                category: t
            }, {
                url: i + "#pointer-gestures",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html",
                title: "WCAG 2.2 Success Criterion 2.5.1 Pointer Gestures",
                level: "A",
                version: "2.2",
                category: t
            }, {
                url: i + "#pointer-cancellation",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html",
                title: "WCAG 2.2 Success Criterion 2.5.2 Pointer Cancellation",
                level: "A",
                version: "2.2",
                category: t
            }, {
                url: i + "#label-in-name",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html",
                title: "WCAG 2.2 Success Criterion 2.5.3 Label in Name",
                level: "A",
                version: "2.2",
                category: t
            }, {
                url: i + "#motion-actuation",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html",
                title: "WCAG 2.2 Success Criterion 2.5.4 Motion Actuation",
                level: "A",
                version: "2.1",
                category: t
            }, {
                url: i + "#target-size",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/target-size.html",
                title: "WCAG 2.2 Success Criterion 2.5.5 Target Size",
                level: "AAA",
                version: "2.1",
                category: t
            }, {
                url: i + "#concurrent-input-mechanisms",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html",
                title: "WCAG 2.2 Success Criterion 2.5.6 Concurrent Input Mechanisms",
                level: "AAA",
                version: "2.1",
                category: t
            }, {
                url: i + "#dragging-movements",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html",
                title: "WCAG 2.2 Success Criterion 2.5.7 Dragging Movements",
                level: "AA",
                version: "2.2",
                category: t
            }, {
                url: i + "#target-size-minimum",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
                title: "WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum)",
                level: "AA",
                version: "2.2",
                category: t
            }, {
                url: i + "#language-of-page",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html",
                title: "WCAG 2.2 Success Criterion 3.1.1 Language of Page",
                level: "A",
                version: "2.1",
                category: n
            }, {
                url: i + "#language-of-parts",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html",
                title: "WCAG 2.2 Success Criterion 3.1.2 Language of Parts",
                level: "AA",
                version: "2.1",
                category: n
            }, {
                url: i + "#unusual-words",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html",
                title: "WCAG 2.2 Success Criterion 3.1.3 Unusual Words",
                level: "AAA",
                version: "2.1",
                category: n
            }, {
                url: i + "#abbreviations",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html",
                title: "WCAG 2.2 Success Criterion 3.1.4 Abbreviations",
                level: "AAA",
                version: "2.2",
                category: n
            }, {
                url: i + "#reading-level",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html",
                title: "WCAG 2.2 Success Criterion 3.1.5 Reading Level",
                level: "AAA",
                version: "2.2",
                category: n
            }, {
                url: i + "#pronunciation",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html",
                title: "WCAG 2.2 Success Criterion 3.1.6 Pronunciation",
                level: "AAA",
                version: "2.0",
                category: n
            }, {
                url: i + "#on-focus",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html",
                title: "WCAG 2.2 Success Criterion 3.2.1 On Focus",
                level: "A",
                version: "2.0",
                category: n
            }, {
                url: i + "#on-input",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/on-input.html",
                title: "WCAG 2.2 Success Criterion 3.2.2 On Input",
                level: "AA",
                version: "2.0",
                category: n
            }, {
                url: i + "#consistent-navigation",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html",
                title: "WCAG 2.2 Success Criterion 3.2.3 Consistent Navigation",
                level: "AA",
                version: "2.0",
                category: n
            }, {
                url: i + "#consistent-identification",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html",
                title: "WCAG 2.2 Success Criterion 3.2.4 Consistent Identification",
                level: "AA",
                version: "2.0",
                category: n
            }, {
                url: i + "#change-on-request",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html",
                title: "WCAG 2.2 Success Criterion 3.2.5 Change on Request",
                level: "AAA",
                version: "2.0",
                category: n
            }, {
                url: i + "#consistent-help",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html",
                title: "WCAG 2.2 Success Criterion 3.2.6 Consistent Help",
                level: "A",
                version: "2.2",
                category: n
            }, {
                url: i + "#error-identification",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html",
                title: "WCAG 2.2 Success Criterion 3.3.1 Error Identification",
                level: "A",
                version: "2.0",
                category: n
            }, {
                url: i + "#labels-or-instructions",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html",
                title: "WCAG 2.2 Success Criterion 3.3.2 Labels or Instructions",
                level: "A",
                version: "2.0",
                category: n
            }, {
                url: i + "#error-suggestion",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html",
                title: "WCAG 2.2 Success Criterion 3.3.3 Error Suggestion",
                level: "AA",
                version: "2.0",
                category: n
            }, {
                url: i + "#error-prevention-legal-financial-data",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html",
                title: "WCAG 2.2 Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data)",
                level: "AA",
                version: "2.0",
                category: n
            }, {
                url: i + "#help",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/help.html",
                title: "WCAG 2.2 Success Criterion 3.3.5 Help",
                level: "AAA",
                version: "2.0",
                category: n
            }, {
                url: i + "#error-prevention-all",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html",
                title: "WCAG 2.2 Success Criterion 3.3.6 Error Prevention (All)",
                level: "AAA",
                version: "2.2",
                category: n
            }, {
                url: i + "#redundant-entry",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html",
                title: "WCAG 2.2 Success Criterion 3.3.7 Redundant Entry",
                level: "A",
                version: "2.0",
                category: n
            }, {
                url: i + "#accessible-authentication",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication.html",
                title: "WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication",
                level: "AA",
                version: "2.0",
                category: n
            }, {
                url: i + "#accessible-authentication-enhanced",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html",
                title: "WCAG 2.2 Success Criterion 3.3.9 Accessible Authentication (Enhanced)",
                level: "AAA",
                version: "2.1",
                category: n
            }, {
                url: i + "#parsing",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/parsing.html",
                title: "WCAG 2.2 Success Criterion 4.1.1 Parsing",
                level: "A",
                version: "2.0",
                category: r
            }, {
                url: i + "#name-role-value",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html",
                title: "WCAG 2.2 Success Criterion 4.1.2 Name, Role, Value",
                level: "A",
                version: "2.0",
                category: r
            }, {
                url: i + "#status-messages",
                understandingUrl: "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html",
                title: "WCAG 2.2 Success Criterion 4.1.3 Status Messages",
                level: "AA",
                version: "2.0",
                category: r
            }], console.clear(), !window.wcagData) {
            console.error("WCAG data not loaded. Make sure data-source.js is included before this script."), alert("WCAG data not available. Please ensure the extension is properly installed.");
            return
        }
        let o = window.wcagData,
            l = document.getElementById("a11y-tools-shadow-host");
        if (l) {
            let a = document.querySelectorAll('[aria-hidden="true"]');
            a.forEach(e => {
                e !== l && e.removeAttribute("aria-hidden")
            });
            let s = document.querySelectorAll('[tabindex="-1"]');
            s.forEach(e => {
                e.removeAttribute("tabindex")
            }), document.body.removeChild(l)
        }
        let d = document.activeElement,
            c = null,
            u = -1,
            g = null,
            A = document.createElement("div");
        A.setAttribute("id", "a11y-tools-shadow-host"), A.style.cssText = `position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999;pointer-events: none;`;
        let p = A.attachShadow({
                mode: "closed"
            }),
            w = "";
        "undefined" != typeof openInSidebar && openInSidebar && (w = `#a11y-tools-data-lookup {width: 100%;height: 100%;max-width: none;max-height: none;top:0;bottom:0;outline:0;border:0;}#data-list {max-height: 70vh;}`);
        let h = document.createElement("style");
        h.textContent = `/* Reset all default styles */*, *::before, *::after {margin: 0;padding: 0;border: 0;font-size: 100%;vertical-align: baseline;box-sizing: border-box;line-height: 1;}/* Basic styling for all elements */* {font-family: Arial, sans-serif;color: inherit;background: transparent;text-decoration: none;list-style: none;}/* Specific component styles */#a11y-tools-modal-backdrop {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);z-index: 9999;pointer-events: all;}#a11y-tools-data-lookup {background: white;background: #dff3f3;color: black;position: fixed;top: 2em;left: 50%;transform: translate(-50%, 0);border: 2px solid #333;padding: 20px;box-shadow: 0 4px 20px rgba(0,0,0,0.5);z-index: 10000;font-family: Arial, sans-serif;max-width: 90vw;width: 60em;max-height: 80vh;overflow: hidden;display: flex;flex-direction: column;pointer-events: all;}#a11y-tools-data-lookup h1 {margin: 0 0 15px 0;color: #333;font-size: 20px;font-weight: bold;line-height: 1.2;}#a11y-tools-data-lookup input[type="text"] {background: white;color: black;width: 100%;padding: 12px;border: 2px solid #007cba;font-size: 16px;margin-bottom: 16px;box-sizing: border-box;border-radius: 5px;}#a11y-tools-data-lookup input[type="text"]:focus {outline: 3px solid #007cba;outline-offset: 3px;}#a11y-tools-data-lookup button {border-radius: 5px;}#a11y-tools-data-lookup button:focus {outline: 3px solid #007cba;outline-offset: 3px;}#a11y-tools-data-lookup input[type="radio"]:focus {outline: 3px solid #007cba;outline-offset: 3px;}.search-hint {font-size: 12px;color: #666;margin-bottom: 10px;line-height: 1.3;}.filters-container {display: flex;gap: 20px;margin-bottom: 15px;flex-wrap: wrap;}.filter-fieldset {border: 1px solid #ccc;padding: 10px;margin: 0;border-radius: 3px;}.filter-legend {font-weight: bold;padding: 0 5px;}.filter-label {display: inline-block;margin-right: 15px;cursor: pointer;line-height: 1.4;}.filter-radio {margin-right: 5px;}#data-list:empty {display:none!important;}#data-list {max-height: 300px;overflow-y: auto;border: 1px solid #ccc;margin: 0 0 15px 0;padding: 0;list-style: none;background: #f9f9f9;}#data-list li {padding: 10px;cursor: pointer;border-bottom: 1px solid #eee;background: white;line-height: 1.4;}#data-list li:hover,#data-list li.hover {background: #007cba;}#data-list li:hover *,#data-list li.hover * {color: white!important;}#selection-made {border: 1px solid #007cba;padding: 10px;margin-bottom: 15px;background: #f0f8ff;display: none;border-radius: 3px;}#selection-made strong {display: block;margin-bottom: 5px;font-weight: bold;}.selection-text {font-family: monospace;font-size: 14px;line-height: 1.3;}#selection-made:focus {outline: 3px solid #007cba;outline-offset: 3px;}.buttons-container {display: none;gap: 10px;flex-wrap: wrap;}.action-button {background: #007cba;color: white;border: none;padding: 10px 15px;cursor: pointer;font-size: 14px;margin: 5px 5px 5px 0;border-radius: 3px;}.action-button:hover {background: #005a8a;}.secondary-button {background: #666;color: white;border: none;padding: 10px 15px;cursor: pointer;font-size: 14px;margin-top: 10px;border-radius: 3px;}.secondary-button:hover {background: #444;}.version {font-weight:bold;}.category {color:white;background:gray;padding:0.2em;font-size:0.8em;border-radius:5px;outline:1px solid white;}.Perceivable {color:navy;}.Operable {color:#295f19;}.Understandable {color:purple;}.Robust {color:darkred;}.category.Perceivable {background:navy;color:white;}.category.Operable {background:#295f19;color:white;}.category.Understandable {background:purple;color:white;}.category.Robust {background:darkred;color:white;}/* Notification panel styles */#notification-panel {position: fixed;bottom: 20px;left: 20px;right: 20px;background: #162650;color: white;padding: 15px 20px;border-radius: 8px;border: 2px solid #03a9f4;box-shadow: 0 4px 12px rgba(0,0,0,0.3);z-index: 10001;width:calc(100%-40px);font-family: Arial, sans-serif;font-size: 14px;line-height: 1.4;opacity: 0;transform: translateX(100%);pointer-events: all;}#notification-panel.show {opacity: 1;transform: translateX(0);}#notification-panel .notification-title {font-weight: bold;margin-bottom: 8px;color: #babae4;}#notification-panel .notification-content {font-family: monospace;background: rgba(255,255,255,0.1);padding: 8px;border-radius: 4px;border: 1px solid rgba(255,255,255,0.2);word-break: break-all;}${w}`;
        let C = [],
            m = Array.from(document.body.children);
        m.forEach(e => {
            e !== A && (C.push({
                element: e,
                originalAriaHidden: e.getAttribute("aria-hidden")
            }), e.setAttribute("aria-hidden", "true"))
        });
        let v = Array.from(document.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]')),
            W = [];
        v.forEach(e => {
            W.push({
                element: e,
                originalTabIndex: e.getAttribute("tabindex")
            }), e.setAttribute("tabindex", "-1")
        });
        let b = document.createElement("div");
        b.setAttribute("id", "a11y-tools-modal-backdrop");
        let y = document.createElement("div");
        y.setAttribute("role", "dialog"), y.setAttribute("id", "a11y-tools-data-lookup"), y.setAttribute("aria-labelledby", "a11y-tools-lookup-dialog-header"), y.setAttribute("aria-modal", "true");
        let f = document.createElement("h1");
        f.textContent = "Look up WCAG Success Criteria", f.setAttribute("id", "a11y-tools-lookup-dialog-header");
        let $ = document.createElement("input");
        $.type = "text", $.placeholder = 'Type to search/filter (e.g., "images", "keyboard", "1.1.1")...', $.setAttribute("role", "combobox"), $.setAttribute("aria-labelledby", "a11y-tools-lookup-dialog-header"), $.setAttribute("aria-controls", "data-list"), $.setAttribute("aria-expanded", "false"), $.setAttribute("aria-autocomplete", "list"), $.setAttribute("aria-describedby", "search-hint filters-hint");
        let _ = document.createElement("div");
        _.textContent = "Filters for WCAG level and version are above this input", _.setAttribute("id", "filters-hint"), _.setAttribute("hidden", "hidden");
        let G = document.createElement("div");
        G.className = "filters-container";
        let x = document.createElement("fieldset");
        x.className = "filter-fieldset";
        let U = document.createElement("legend");
        U.textContent = "WCAG Level:", U.className = "filter-legend", ["All", "A", "AA", "AAA"].forEach((e, t) => {
            let n = document.createElement("label");
            n.className = "filter-label";
            let r = document.createElement("input");
            r.type = "radio", r.name = "level-filter", r.value = e, r.checked = "All" === e, r.className = "filter-radio", r.onchange = () => H($.value);
            let i = document.createTextNode(e);
            n.appendChild(r), n.appendChild(i), x.appendChild(n)
        }), x.appendChild(U), x.insertBefore(U, x.firstChild);
        let S = document.createElement("fieldset");
        S.className = "filter-fieldset";
        let k = document.createElement("legend");
        k.textContent = "WCAG Version:", k.className = "filter-legend", ["All", "2.0", "2.1", "2.2"].forEach((e, t) => {
            let n = document.createElement("label");
            n.className = "filter-label";
            let r = document.createElement("input");
            r.type = "radio", r.name = "version-filter", r.value = e, r.checked = "All" === e, r.className = "filter-radio", r.onchange = () => H($.value);
            let i = document.createTextNode(e);
            n.appendChild(r), n.appendChild(i), S.appendChild(n)
        }), S.appendChild(k), S.insertBefore(k, S.firstChild), G.appendChild(x), G.appendChild(S);
        let I = document.createElement("ul");
        I.setAttribute("role", "listbox"), I.setAttribute("tabindex", "0"), I.setAttribute("id", "data-list"), I.setAttribute("aria-label", "WCAG Success Criteria");
        let E = document.createElement("div");
        E.setAttribute("id", "selection-made"), E.setAttribute("tabindex", "-1");
        let L = document.createElement("strong");
        L.textContent = "Selected:";
        let N = document.createElement("div");
        N.className = "selection-text", E.appendChild(L), E.appendChild(N);
        let T = document.createElement("div");
        T.className = "buttons-container";
        let P = document.createElement("div");
        P.setAttribute("id", "notification-panel"), P.setAttribute("role", "status"), P.setAttribute("aria-live", "polite");
        let z = document.createElement("div");
        z.className = "notification-title";
        let D = document.createElement("div");

        function M(e, t) {
            g && clearTimeout(g), z.textContent = e, D.textContent = t, P.classList.add("show"), g = setTimeout(() => {
                P.classList.remove("show")
            }, 5e3)
        }
        D.className = "notification-content", P.appendChild(z), P.appendChild(D), [{
            text: "Copy as Markdown Link (1)",
            key: "1",
            action: "markdown"
        }, {
            text: "Copy as HTML Link (2)",
            key: "2",
            action: "html"
        }, {
            text: "Copy SC Name Only (3)",
            key: "3",
            action: "name"
        }, {
            text: "Copy SC URL Only (4)",
            key: "4",
            action: "url"
        }, {
            text: "Go to page (5)",
            key: "5",
            action: "goto"
        }, {
            text: "Go to Understanding doc (6)",
            key: "6",
            action: "understanding"
        }].forEach(e => {
            let t = document.createElement("button");
            t.textContent = e.text, t.className = "action-button", t.onclick = () => j(e.action), T.appendChild(t)
        });
        let q = document.createElement("button");
        q.textContent = "Close (Escape)", q.className = "secondary-button";
        let R = document.createElement("button");

        function O() {
            g && clearTimeout(g), C.forEach(({
                element: e,
                originalAriaHidden: t
            }) => {
                null === t ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t)
            }), W.forEach(({
                element: e,
                originalTabIndex: t
            }) => {
                null === t ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", t)
            }), document.body.removeChild(A), d.focus()
        }

        function F(e) {
            let t = y.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])'),
                n = t[0],
                r = t[t.length - 1];
            "Tab" === e.key && (e.shiftKey ? p.activeElement === n && (e.preventDefault(), r.focus()) : p.activeElement === r && (e.preventDefault(), n.focus()))
        }

        function H(e) {
            let t = p.querySelector('input[name="level-filter"]:checked')?.value || "All",
                n = p.querySelector('input[name="version-filter"]:checked')?.value || "All",
                r = o.filter(r => {
                    let i = !0;
                    if (e.length > 0) {
                        let o = e.toLowerCase().trim(),
                            l = r.title.toLowerCase();
                        if (l.includes(o)) i = !0;
                        else {
                            let a = o.split(/\s+/).filter(e => e.length > 0);
                            if (1 === a.length) {
                                let s = a[0];
                                i = l.split(/\s+/).some(e => e.includes(s))
                            } else i = a.every(e => l.split(/\s+/).some(t => t.includes(e)))
                        }
                    }
                    let d = "All" === t || r.level === t,
                        c = "All" === n || r.version === n;
                    return i && d && c
                });
            if (I.innerHTML = "", u = -1, $.setAttribute("aria-expanded", r.length > 0 ? "true" : "false"), 0 === r.length) {
                let i = document.createElement("li");
                i.textContent = "No WCAG SC found that matches this filtering", i.style.cssText = "padding: 10px; color: #666; font-style: italic;", I.appendChild(i);
                return
            }
            r.forEach((e, t) => {
                let n = document.createElement("li");
                n.setAttribute("role", "option"), n.setAttribute("id", `option-${t}`);
                let r = e.category;
                n.innerHTML = '<span style="font-weight:bold">' + e.title.replace("WCAG 2.2 Success Criterion ", "") + "</span> <span>(Level " + e.level + ')</span> <span class="version ' + r + '">' + e.version + '</span> <span class="category ' + r + '">' + e.category + "</span>", n.dataset.index = t, n.dataset.url = e.url, n.dataset.title = e.title, n.onmouseenter = () => {
                    u = t, B()
                }, n.onclick = () => V(e), I.appendChild(n)
            })
        }

        function B() {
            let e = I.querySelectorAll('li[role="option"]');
            e.forEach((e, t) => {
                t === u ? (e.classList.add("hover"), $.setAttribute("aria-activedescendant", e.id), e.scrollIntoView({
                    block: "nearest"
                })) : e.classList.remove("hover")
            })
        }

        function V(e) {
            I.setAttribute("tabindex", "-1"), c = e;
            let t = e.title;
            N.textContent = t, E.style.display = "block", E.focus(), T.style.display = "flex", R.style.display = "block", $.value = t, I.innerHTML = "", $.setAttribute("aria-expanded", "false")
        }

        function j(e) {
            if (!c) return;
            let t = c.title.replace("WCAG 2.2 Success Criterion ", "SC "),
                n;
            switch (e) {
                case "markdown":
                    n = `[${t}](${c.url})`;
                    break;
                case "html":
                    n = `<a href="${c.url}">${t}</a>`;
                    break;
                case "name":
                    n = t;
                    break;
                case "url":
                    n = c.url;
                    break;
                case "goto":
                    window.open(c.url, "_blank");
                    return;
                case "understanding":
                    window.open(c.understandingUrl, "_blank");
                    return
            }
            navigator.clipboard.writeText(n).then(() => {
                M("Copied to clipboard!", n)
            }).catch(() => {
                console.log(n), M("Could not copy to clipboard", "Details pasted to console")
            })
        }
        R.textContent = "Start again", R.className = "secondary-button", q.addEventListener("click", O), R.addEventListener("click", function e() {
            I.setAttribute("tabindex", "0"), E.style.display = "none", T.style.display = "none", R.style.display = "none", $.value = "", c = null, u = -1, H(""), $.focus()
        }), b.addEventListener("click", e => {
            e.target === b && O()
        }), $.oninput = e => {
            c && (c = null, u = -1, E.style.display = "none", T.style.display = "none", R.style.display = "none", I.setAttribute("tabindex", "0")), H(e.target.value)
        }, $.onfocus = e => {
            c && setTimeout(() => {
                $.select()
            }, 0)
        }, $.onkeydown = e => {
            F(e);
            let t = I.querySelectorAll('li[role="option"]');
            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault(), u < t.length - 1 && (u++, B());
                    break;
                case "ArrowUp":
                    e.preventDefault(), u > 0 && (u--, B());
                    break;
                case "Enter":
                    if (e.preventDefault(), u >= 0 && t[u]) {
                        let n = t[u],
                            r = o.find(e => e.url === n.dataset.url);
                        r && V(r)
                    }
                    break;
                case "Escape":
                    e.preventDefault(), O()
            }
        }, y.addEventListener("keydown", e => {
            if (F(e), "Escape" === e.key) {
                e.preventDefault(), O();
                return
            }
            c && e.key >= "1" && e.key <= "6" && p.activeElement !== $ && (e.preventDefault(), j(["markdown", "html", "name", "url", "goto", "understanding"][parseInt(e.key) - 1]))
        }), y.appendChild(f), y.appendChild(G), y.appendChild($), y.appendChild(_), y.appendChild(I), y.appendChild(E), y.appendChild(T), y.appendChild(R), R.style.display = "none", "undefined" == typeof openInSidebar && y.appendChild(q), b.appendChild(y), b.appendChild(P), p.appendChild(h), p.appendChild(b), document.body.appendChild(A), $.focus(), H("")
    }()
})()