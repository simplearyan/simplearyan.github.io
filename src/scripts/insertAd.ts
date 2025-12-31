export function insertAd(proseSelector: string, adContainerId: string) {
    console.log("insertAd: Starting", { proseSelector, adContainerId });
    const prose = document.querySelector(proseSelector);
    const adPlaceholder = document.getElementById(adContainerId);

    // Get the ad content (the div with class 'in-article-ad-container' inside the placeholder)
    const adContent = adPlaceholder?.firstElementChild;

    if (!prose || !adPlaceholder || !adContent) {
        console.error("insertAd: Missing elements", { prose: !!prose, placeholder: !!adPlaceholder, content: !!adContent });
        return;
    }

    const headings = prose.querySelectorAll('h2, h3');
    console.log("insertAd: Found headings", headings.length);

    // Priority 1: Before 3rd Heading (index 2)
    // Matches CivicThesis logic (conceptually "Before 2nd section break" -> 3rd header)
    if (headings.length >= 3) {
        console.log("insertAd: Inserting before 3rd heading");
        headings[2].insertAdjacentElement('beforebegin', adContent);
        setTimeout(() => {
            try {
                console.log("insertAd: Pushing to adsbygoogle (P1)");
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense push failed", e);
            }
        }, 100);
        return;
    }

    // Priority 2: Before 1st Heading (index 0)
    // Fallback for shorter articles with at least one header
    if (headings.length >= 1) {
        console.log("insertAd: Inserting before 1st heading");
        headings[0].insertAdjacentElement('beforebegin', adContent);
        // Add a small delay to ensure DOM is updated and script can see the element
        setTimeout(() => {
            try {
                console.log("insertAd: Pushing to adsbygoogle (P2)");
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense push failed", e);
            }
        }, 100);
        return;
    }

    // Priority 3: Paragraph based fallback
    const paragraphs = prose.querySelectorAll('p');
    console.log("insertAd: Fallback to paragraphs", paragraphs.length);

    // Before 3rd paragraph
    if (paragraphs.length >= 3) {
        paragraphs[2].insertAdjacentElement('beforebegin', adContent);
    }
    // After 2nd paragraph
    else if (paragraphs.length >= 2) {
        paragraphs[1].insertAdjacentElement('afterend', adContent);
    }
    // After 1st paragraph
    else if (paragraphs.length >= 1) {
        paragraphs[0].insertAdjacentElement('afterend', adContent);
    }
    // End of content
    else {
        prose.appendChild(adContent);
    }

    setTimeout(() => {
        try {
            console.log("insertAd: Pushing to adsbygoogle (Fallback)");
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense push failed", e);
        }
    }, 100);
}
