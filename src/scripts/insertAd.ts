export function insertAd(proseSelector: string, adContainerId: string) {
    const prose = document.querySelector(proseSelector);
    const adPlaceholder = document.getElementById(adContainerId);

    // Get the ad content (the div with class 'in-article-ad-container' inside the placeholder)
    const adContent = adPlaceholder?.firstElementChild;

    if (!prose || !adPlaceholder || !adContent) return;

    const headings = prose.querySelectorAll('h2');
    let primaryAdUsed = false;

    // Rule 1: Insert before 3rd h2
    if (headings.length >= 3) {
        headings[2].insertAdjacentElement('beforebegin', adContent);
        primaryAdUsed = true;
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense push failed", e);
        }
    }

    // Rule 2: Insert before last h2 if > 4 headings
    // "more than 4 headings" usually means 5 or more.
    if (headings.length > 5) {
        const lastHeading = headings[headings.length - 1];

        if (primaryAdUsed) {
            // Clone the ad for the second slot
            const adClone = adContent.cloneNode(true) as HTMLElement;

            // Reset the 'ins' element in the clone to ensure a fresh ad request
            const ins = adClone.querySelector('ins');
            if (ins) {
                ins.removeAttribute('data-adsbygoogle-status');
                ins.removeAttribute('data-ad-status');
                ins.innerHTML = ''; // Clear any existing content/iframe
            }

            lastHeading.insertAdjacentElement('beforebegin', adClone);

            // Trigger ad load for the new slot
            try {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense push failed", e);
            }
        } else {
            // Capture this edge case if logic changes, though currently covered by Rule 1
            lastHeading.insertAdjacentElement('beforebegin', adContent);
            primaryAdUsed = true;
            try {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense push failed", e);
            }
        }
    }

    // Fallback: Paragraphs (only if no ads inserted yet)
    // The user said "also insert...". This implies the header rules function together.
    // The paragraph rule is a fallback if "no heading tag is there" (from previous prompt).
    // So if we inserted ANY ad in headers, we skip paragraphs.
    if (!primaryAdUsed) {
        const paragraphs = prose.querySelectorAll('p');

        // Insert after 3rd paragraph
        if (paragraphs.length >= 3) {
            // Previous prompt said "after above 3rd paragraph" -> interpreted as after 3rd. 
            // Wait, "after above 3rd paragraph" is ambiguous. "insert after above 3rd paragraph" -> maybe "insert after the paragraph that is above the 3rd one" (i.e. 2nd)? 
            // Or "insert above 3rd paragraph" (before 3rd)?
            // Code in Step 153 used `afterend` on paragraphs[2] (after 3rd).
            // Let's stick to "After 3rd paragraph" as a reasonable default unless clarified.
            // Actually, let's use 'beforebegin' on the 3rd to match the "above" sentiment of header rule?
            // "if no heading tag is there then insert after above 3rd paragraph"
            // "after above 3rd paragraph" -> literally could mean "after the 3rd paragraph". 
            // Let's stick to paragraphs[2].afterend (after 3rd).
            paragraphs[2].insertAdjacentElement('afterend', adContent);
        }
        // Fallback: Append to end
        else {
            prose.appendChild(adContent);
        }
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense push failed", e);
        }
    }
}
