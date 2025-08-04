const apiKey = "Your_Api_KEY"; // Replace with your actual key

function sanitizeURL(url) {
  try {
    let parsed = new URL(url);
    return parsed.origin; // Remove trailing slashes, paths, queries
  } catch (e) {
    return null;
  }
}

async function checkReputation() {
  const rawInput = document.getElementById("urlInput").value.trim();
  const url = sanitizeURL(rawInput);
  const resultText = document.getElementById("resultText");
  const resultBox = document.getElementById("resultBox");

  if (!url) {
    resultText.innerText = "❌ Please enter a valid website URL.";
    resultBox.className = "neutral";
    return;
  }

  const requestPayload = {
    client: {
      clientId: "your-client-id",
      clientVersion: "1.0.0",
    },
    threatInfo: {
      threatTypes: [
        "MALWARE",
        "SOCIAL_ENGINEERING",
        "UNWANTED_SOFTWARE",
        "POTENTIALLY_HARMFUL_APPLICATION",
      ],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }],
    },
  };

  try {
    const response = await fetch(
      `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(requestPayload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data && data.matches && data.matches.length > 0) {
      resultText.innerText = `❌ ${url} is Dangerous`;
      resultBox.className = "dangerous";
    } else {
      resultText.innerText = `✅ ${url} is Safe`;
      resultBox.className = "safe";
    }
  } catch (error) {
    console.error("Error checking reputation:", error);
    resultText.innerText = "⚠️ Could not check the website reputation.";
    resultBox.className = "suspicious";
  }
}
