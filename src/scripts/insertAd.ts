export function insertAd(proseSelector: string, adContainerId: string) {
    const prose = document.querySelector(proseSelector);
    const adPlaceholder = document.getElementById(adContainerId);

    // Get the ad content (the div with class 'in-article-ad-container' inside the placeholder)
    const adContent = adPlaceholder?.firstElementChild;

    if (!prose || !adPlaceholder || !adContent) return;

    const headings = prose.querySelectorAll('h2');

    // Rule 1: Insert after 3rd h2
    if (headings.length >= 3) {
        headings[2].insertAdjacentElement('beforebegin', adContent);
        return;
    }

    // Rule 2 & 3: Fallback to paragraphs
    const paragraphs = prose.querySelectorAll('p');

    // Insert after 3rd paragraph
    if (paragraphs.length >= 3) {
        paragraphs[2].insertAdjacentElement('afterend', adContent);
    }
    // Fallback: Append to end if article is very short
    else {
        prose.appendChild(adContent);
    }
}
