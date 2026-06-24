const zwsp = "\u200B";
const btn = document.getElementById("copyBtn");
const status = document.getElementById("status");

btn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(zwsp);
    status.textContent = "Copied.";
  } catch {
    status.textContent = "Copy failed.";
  }
});
