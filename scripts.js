document.addEventListener("DOMContentLoaded", function () {
  const streamLinks = document.querySelectorAll(".btn-iframe-stream");

  streamLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const embedUrl = this.getAttribute("data-embed-url");
      loadIframe(embedUrl);
    });
  });

  function loadIframe(url) {
    const iframeContainer = document.getElementById("stream-container");
    iframeContainer.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
  }
});
