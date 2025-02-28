document.getElementById("share-button").addEventListener("click", function() {
    var options = document.getElementById("share-options");
    options.style.display = options.style.display === "block" ? "none" : "block";
});

function copyLink() {
    const link = window.location.href; // Current page URL
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard!");
    }, () => {
        alert("Failed to copy link.");
    });
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareToInstagram() {
    alert("Instagram sharing is not supported via direct links. Please share manually.");
}

function shareToLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}